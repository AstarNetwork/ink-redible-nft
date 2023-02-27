import { ApiPromise } from '@polkadot/api';
import { IdBuilder } from 'src/modules/nft/rmrk-contract';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import { sanitizeIpfsUrl } from 'src/modules/nft/ipfs';
import { getContract, getGasLimit } from 'src/modules/nft/common-api';
import { Abi, ContractPromise } from '@polkadot/api-contract';
import { rmrkAbi } from 'src/modules/nft/abi/rmrk';
import type { WeightV2 } from '@polkadot/types/interfaces';
import type { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';
import { ExtendedAsset, IBasePart, Id } from 'src/modules/nft';

const PROOF_SIZE = 531_072;
const REF_TIME = 9_480_453_976;

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
  // TODO provide contract address as param.
  // await cryptoWaitReady();
  const contract = await getContract({ api, address: mainContractAddress });
  const partsContract = await getContract({ api, address: partsContractAddress });
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
    const assetIds = JSON.parse(output?.toString() ?? '').ok as number[];
    for (let assetId of assetIds) {
      const { result, output } = await contract.query['equippable::getAssetAndEquippableData'](
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
          partIds.map(async (id) => {
            const { output } = await partsContract.query['base::getPart'](
              address,
              {
                gasLimit: getGasLimit(contract.api),
                storageDepositLimit: null,
              },
              id
            );

            const part = <IBasePart>JSON.parse(output?.toString() ?? '');
            return { id, ...part, metadataUri: hex2ascii(part.partUri ?? '') };
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
          // determine base Uri
          // get collection id
          const { output: collectionId } = await partsContract.query['psp34::collectionId'](
            address,
            {
              gasLimit: getGasLimit(contract.api),
              storageDepositLimit: null,
            }
          );

          // get baseUri (passed as constructor argument during the contract initialization.)
          const { output: baseUri } = await partsContract.query['psp34Metadata::getAttribute'](
            address,
            {
              gasLimit: getGasLimit(contract.api),
              storageDepositLimit: null,
            },
            collectionId?.toHuman(),
            'baseUri'
          );

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
              const partTokenId = equipmentJson.childNft[1].u64;
              const metadataJsonUri = `${sanitizeIpfsUrl(
                baseUri?.toHuman()?.toString()
              )}/${partTokenId}.json`;

              const { output: assetUri } = await partsContract.query['multiAsset::getAssetUri'](
                address,
                {
                  gasLimit: getGasLimit(contract.api),
                  storageDepositLimit: null,
                },
                equipmentJson.childAssetId
              );

              // fetch json through IPFS gateway
              // const metadataJson = await axios.get(metadataJsonUri);
              // ePart.metadataUri = sanitizeIpfsUrl(metadataJson.data.image);
              ePart.metadataUri = sanitizeIpfsUrl(assetUri?.toHuman()?.toString());
            }
          }
        }

        // Now we have all IPFS urls and we are ready to render parts.
        // console.log(sortedParts);
        return sortedParts;
      }
    }
  } else {
    console.error('Can not fetch token assets.');
  }

  return [];
};

export const unequipSlot = async ({
  contractAddress,
  tokenId,
  slotId,
  api,
  senderAddress,
}: UnequipSlot): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>> => {
  const { initialGasLimit, contract } = getRmrkContract({ api, address: contractAddress });
  const { gasRequired } = await contract.query['equippable::unequip'](
    senderAddress,
    { gasLimit: initialGasLimit },
    { u64: tokenId },
    slotId
  );

  const gasLimit = api.registry.createType('WeightV2', gasRequired) as WeightV2;
  const transaction = contract.tx['equippable::unequip']({ gasLimit }, { u64: tokenId }, slotId);
  return transaction;
};

// Todo
export const getEquippableChildren = async (
  contractAddress: string,
  tokenId: number,
  api: ApiPromise
): Promise<Map<Id, (ExtendedAsset | null)[]> | null> => {
  await cryptoWaitReady();
  // const contract = await getTypedContract(contractAddress, signer);
  const abi = new Abi(rmrkAbi, api.registry.getChainProperties());
  const contract = new ContractPromise(api, abi, contractAddress);
  if (!contract || contract === null) new Error('There is no contract found');

  const result = new Map<Id, (ExtendedAsset | null)[]>();

  // const children = await contract.query.getAcceptedChildren(IdBuilder.U64(tokenId));

  // if (children.value) {
  //   for (let child of children.value) {
  //     const partsContract = await getTypedContract(child[0].toString(), signer);
  //     const childTokenId = IdBuilder.U64(child[1].u64 ?? 0);
  //     const assetIds = await partsContract.query.getAcceptedTokenAssets(childTokenId);

  //     if (assetIds.value.ok) {
  //       const assetsToAdd: ExtendedAsset[] = [];
  //       for (let id of assetIds.value.unwrap()) {
  //         const asset = await partsContract.query['multiAsset::getAsset'](id);
  //         if (asset.value) {
  //           assetsToAdd.push({
  //             ...asset.value,
  //             id,
  //             gatewayUrl: sanitizeIpfsUrl(hex2ascii(asset.value.assetUri.toString())),
  //           } as ExtendedAsset);
  //         }
  //       }

  //       result.set(child[1], assetsToAdd);
  //     }
  //   }
  // }

  // return result;
  return null;
};

const getRmrkContract = ({ api, address }: { api: ApiPromise; address: string }) => {
  const abi = new Abi(rmrkAbi, api.registry.getChainProperties());
  const contract = new ContractPromise(api, abi, address);
  if (!contract || contract === null) new Error('There is no contract found');

  const initialGasLimit = contract.registry.createType('WeightV2', {
    proofSize: PROOF_SIZE,
    refTime: REF_TIME,
  });
  return { contract, initialGasLimit };
};

export const equipSlot = async ({
  parentContractAddress,
  tokenId,
  assetId,
  slot,
  childContractAddress,
  childTokenId,
  childAssetId,
  api,
  senderAddress,
}: EquipSlot): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>> => {
  // const contract = await getTypedContract(parentContractAddress, signer);

  const { initialGasLimit, contract } = getRmrkContract({ api, address: parentContractAddress });
  const { gasRequired } = await contract.query['equippable::equip'](
    senderAddress,
    { gasLimit: initialGasLimit },
    IdBuilder.U64(tokenId.u64 ?? 0),
    assetId,
    slot,
    [childContractAddress, IdBuilder.U64(childTokenId.u64 ?? 0)],
    childAssetId
  );

  const gasLimit = api.registry.createType('WeightV2', gasRequired) as WeightV2;

  const transaction = contract.tx['equippable::equip'](
    { gasLimit },
    IdBuilder.U64(tokenId.u64 ?? 0),
    assetId,
    slot,
    [childContractAddress, IdBuilder.U64(childTokenId.u64 ?? 0)],
    childAssetId
  );
  return transaction;
};
