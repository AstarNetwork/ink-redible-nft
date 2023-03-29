import { ApiPromise } from '@polkadot/api';
import { Abi, ContractPromise } from '@polkadot/api-contract';
import type { SubmittableExtrinsic } from '@polkadot/api/types';
import type { WeightV2 } from '@polkadot/types/interfaces';
import { ISubmittableResult } from '@polkadot/types/types';
import { ChildDetail, ExtendedAsset, IBasePart, Id } from 'src/modules/nft';
import { rmrkAbi } from 'src/modules/nft/abi/rmrk';
import { getContract, getGasLimit } from 'src/modules/nft/common-api';
import { sanitizeIpfsUrl } from 'src/modules/nft/ipfs';
import { IdBuilder } from 'src/modules/nft/rmrk-contract';
import Contract from 'src/modules/nft/rmrk-contract/types/contracts/rmrk_contract';
import axios from 'axios';

interface EquippableData {
  equippableGroupId: string;
  assetUri: string;
  partIds: string[];
}

interface EquipSlot {
  parentContractAddress: string;
  tokenId: Id;
  assetId: string;
  slot: number;
  childContractAddress: string;
  childTokenId: Id;
  childAssetId: string;
  api: ApiPromise;
  senderAddress: string;
}

interface UnequipSlot {
  contractAddress: string;
  tokenId: number;
  slotId: string;
  api: ApiPromise;
  senderAddress: string;
}

export const hex2ascii = (hex: string): string => {
  if (!hex) {
    return '';
  }

  let result = '';
  hex = hex.replace('0x', '');
  for (let i = 0; i < hex.length; i += 2) {
    result += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return result;
};

export const readNft = async (
  mainContractAddress: string,
  partsContractAddress: string,
  id: number,
  address: string,
  api: ApiPromise
): Promise<IBasePart[]> => {
  try {
    const contract = await getContract({ api, address: mainContractAddress });
    const tokenId = { u64: id };

    // 1. Get assets
    const { result, output } = await contract.query['multiAsset::getAcceptedTokenAssets'](
      address,
      {
        gasLimit: getGasLimit(contract.api),
        storageDepositLimit: null,
      },
      tokenId
    );

    if (result.isOk) {
      // TODO there should be a better way. Maybe TypeChain
      const assetIds = JSON.parse(output?.toString() ?? '').ok.ok as number[];
      if (!assetIds) {
        console.info(`AssetIds for tokenId ${id} is undefined`);
        return [];
      }
      for (let assetId of assetIds) {
        const { output } = await contract.query['equippable::getAssetAndEquippableData'](
          address,
          {
            gasLimit: getGasLimit(contract.api),
            storageDepositLimit: null,
          },
          tokenId,
          assetId
        );

        const { partIds } = <EquippableData>JSON.parse(output?.toString() ?? '').ok;
        const isComposable = partIds && partIds.length > 0;

        if (isComposable) {
          // Parts contract address should come from the above call (getAssetAndEquippableData).
          // Raised an issue https://github.com/rmrk-team/rmrk-ink/issues/46
          const partsContract = await getContract({ api, address: partsContractAddress });

          const parts = await Promise.all(
            partIds.map(async (it) => {
              const { output } = await partsContract.query['base::getPart'](
                address,
                {
                  gasLimit: getGasLimit(contract.api),
                  storageDepositLimit: null,
                },
                it
              );

              const part = <IBasePart>JSON.parse(output?.toString() ?? '');
              const metadataUri = hex2ascii(part.partUri ?? '');
              const partData = {
                id: it,
                ...part,
                metadataUri,
                childId: undefined,
                childTokenAddress: undefined,
              };

              if (part.partType === 'Fixed' || metadataUri !== '') {
                return partData;
              } else {
                const resultEquipment = await contract.query['equippable::getEquipment'](
                  address,
                  {
                    gasLimit: getGasLimit(contract.api),
                    storageDepositLimit: null,
                  },
                  { u64: String(id) },
                  it
                );
                const equipment = resultEquipment.output?.toJSON();
                if (!equipment) {
                  return partData;
                } else {
                  // @ts-ignore
                  const childNft = equipment.childNft;
                  return {
                    ...partData,
                    childId: Number(childNft[1].u64),
                    childTokenAddress: childNft[0],
                  };
                }
              }
            })
          );

          const sortedParts = parts
            .map((x) => {
              x.metadataUri = x.metadataUri ? sanitizeIpfsUrl(x.metadataUri) : '';
              return x;
            })
            .sort((x, y) => (x?.z ?? 0) - (y?.z ?? 0));
          const equippableParts = sortedParts.filter((x) => x.partType === 'Slot');

          // get equipment
          if (equippableParts.length > 0) {
            for (let ePart of equippableParts) {
              const { output: equipment } = await contract.query['equippable::getEquipment'](
                address,
                {
                  gasLimit: getGasLimit(contract.api),
                  storageDepositLimit: null,
                },
                tokenId,
                ePart.id
              );

              if (equipment?.isEmpty) {
                continue;
              }

              const equipmentJson = JSON.parse(equipment?.toString() ?? '');
              // TODO use TypeChain or similar
              if (equipmentJson && equipmentJson.childNft) {
                const { output: assetUri } = await partsContract.query['multiAsset::getAssetUri'](
                  address,
                  {
                    gasLimit: getGasLimit(contract.api),
                    storageDepositLimit: null,
                  },
                  equipmentJson.childAssetId
                );
                ePart.metadataUri = sanitizeIpfsUrl(assetUri?.toHuman()?.toString());
              }
            }
          }

          // Now we have all IPFS urls and we are ready to render parts.
          return sortedParts;
        }
      }
    } else {
      console.error('Can not fetch token assets.');
    }

    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

// export const unequipSlot = async ({
//   contractAddress,
//   tokenId,
//   slotId,
//   api,
//   senderAddress,
// }: UnequipSlot): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>> => {
//   const { initialGasLimit, contract } = getRmrkContract({ api, address: contractAddress });

//   const { gasRequired } = await contract.query['equippable::unequip'](
//     senderAddress,
//     { gasLimit: initialGasLimit },
//     { u64: tokenId },
//     slotId
//   );

//   const transaction = contract.tx['equippable::unequip'](
//     {
//       gasLimit: getGas(contract, gasRequired),
//     },
//     { u64: tokenId },
//     slotId
//   );

//   return transaction;
// };

export const getEquippableChildren = async (
  contractAddress: string,
  tokenId: number,
  api: ApiPromise,
  senderAddress: string
): Promise<Map<Id, (ExtendedAsset | null)[]> | null> => {
  try {
    const contract = new Contract(contractAddress, senderAddress, api);
    const children = await contract.query.getAcceptedChildren(IdBuilder.U64(tokenId));
    const result = new Map<Id, (ExtendedAsset | null)[]>();

    if (children.value) {
      for (let child of children.value.unwrap()) {
        const partsAddress = child[0].toString();
        const partsContract = new Contract(partsAddress, senderAddress, api);
        const childTokenId = IdBuilder.U64(child[1].u64 ?? 0);
        const assetIds = await partsContract.query.getAcceptedTokenAssets(childTokenId);

        if (assetIds.value.ok) {
          const assetsToAdd: ExtendedAsset[] = [];
          for (let id of assetIds.value.unwrap().unwrap()) {
            const asset = await partsContract.query['multiAsset::getAsset'](id);
            if (asset.value) {
              assetsToAdd.push({
                ...asset.value,
                id,
                gatewayUrl: sanitizeIpfsUrl(
                  hex2ascii(asset?.value?.unwrap()?.assetUri?.toString() ?? '')
                ),
                partsAddress,
              } as ExtendedAsset);
            }
          }

          //@ts-ignore
          result.set(child[1], assetsToAdd);
        }
      }
    }
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getRmrkContract = ({ api, address }: { api: ApiPromise; address: string }) => {
  const abi = new Abi(rmrkAbi, api.registry.getChainProperties());
  const contract = new ContractPromise(api, abi, address);
  if (!contract || contract === null) new Error('There is no contract found');

  const initialGasLimit = contract.registry.createType(
    'WeightV2',
    api.consts.system.blockWeights['maxBlock']
  );
  return { contract, initialGasLimit };
};

const getGas = (contract: ContractPromise, gasRequired: WeightV2): WeightV2 => {
  return contract.registry.createType('WeightV2', {
    proofSize: gasRequired.proofSize.toBn().muln(2),
    refTime: gasRequired.refTime.toBn().muln(2),
  });
};

// export const equipSlot = async ({
//   parentContractAddress,
//   tokenId,
//   assetId,
//   slot,
//   childContractAddress,
//   childTokenId,
//   childAssetId,
//   api,
//   senderAddress,
// }: EquipSlot): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>> => {
//   const { initialGasLimit, contract } = getRmrkContract({ api, address: parentContractAddress });
//   const { gasRequired } = await contract.query['equippable::equip'](
//     senderAddress,
//     { gasLimit: initialGasLimit },
//     IdBuilder.U64(tokenId.u64 ?? 0),
//     assetId,
//     slot,
//     [childContractAddress, IdBuilder.U64(childTokenId.u64 ?? 0)],
//     childAssetId
//   );

//   const transaction = contract.tx['equippable::equip'](
//     {
//       gasLimit: getGas(contract, gasRequired),
//     },
//     IdBuilder.U64(tokenId.u64 ?? 0),
//     assetId,
//     slot,
//     [childContractAddress, IdBuilder.U64(childTokenId.u64 ?? 0)],
//     childAssetId
//   );
//   return transaction;
// };

export const fetchChildDetails = async ({
  api,
  baseContractAddress,
  partsAddress,
  walletAddress,
  partTokenId,
}: {
  api: ApiPromise;
  baseContractAddress: string;
  partsAddress: string;
  walletAddress: string;
  partTokenId: string;
}): Promise<ChildDetail> => {
  try {
    const [contract, partsContract] = await Promise.all([
      getContract({ api, address: baseContractAddress }),
      getContract({ api, address: partsAddress }),
    ]);

    const { output: collectionId } = await partsContract.query['psp34::collectionId'](
      walletAddress,
      {
        gasLimit: getGasLimit(contract.api),
        storageDepositLimit: null,
      }
    );

    const { output: baseUri } = await partsContract.query['psp34Metadata::getAttribute'](
      walletAddress,
      {
        gasLimit: getGasLimit(contract.api),
        storageDepositLimit: null,
      },
      JSON.parse(collectionId?.toString() ?? '').ok,
      'baseUri'
    );

    const metadataJsonUri = `${sanitizeIpfsUrl(
      hex2ascii(JSON.parse(baseUri?.toString() ?? '').ok)
    )}/${partTokenId}.json`;
    const metadataJson = await axios.get(metadataJsonUri);
    const { description, image, name } = metadataJson.data;
    return {
      description,
      image: sanitizeIpfsUrl(image),
      name,
    };
  } catch (error) {
    console.error(error);
    return {
      description: '',
      image: '',
      name: '',
    };
  }
};
