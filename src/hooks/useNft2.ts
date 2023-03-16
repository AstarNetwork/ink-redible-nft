import { ref, computed } from 'vue';
import Contract from 'src/modules/nft/rmrk-contract/types/contracts/rmrk_contract';
import { useAccount } from 'src/hooks/useAccount';
import { $api } from 'src/boot/api';
import { PartType } from 'src/modules/nft/rmrk-contract/types/types-returns/rmrk_contract';
import { IdBuilder } from 'src/modules/nft/rmrk-contract/types/types-arguments/rmrk_contract';
import { sanitizeIpfsUrl } from 'src/modules/nft/ipfs';
import { hex2ascii } from 'src/modules/nft/read-token';
import { useNetworkInfo } from 'src/hooks/useNetworkInfo';
import { providerEndpoints } from 'src/config/chainEndpoints';
import { Metadata } from 'src/modules/nft';
import axios from 'axios';

export interface Asset {
  equippableGroupId: number;
  assetUri: string;
  parts: Part[];
  id: number;
}

export interface Part {
  id: number;
  partType: PartType;
  z: number;
  partUri: string;
  isEquippableByAll: boolean;
  children: Asset[];
}

export const useNft2 = () => {
  const tokenAssets = ref<Asset[]>([]);
  const availableContracts = computed(
    () => providerEndpoints[Number(currentNetworkIdx.value)].baseContractAddress
  );
  const { currentAccount } = useAccount();
  const { currentNetworkIdx } = useNetworkInfo();

  const getToken = async (contractAddress: string, tokenId: number): Promise<Asset[]> => {
    const assets = await fetchNft(contractAddress, tokenId);
    tokenAssets.value = assets;
    console.log(assets);
    return assets;
  };

  const fetchNft = async (contractAddress: string, tokenId: number): Promise<Asset[]> => {
    const result: Asset[] = [];

    if ($api) {
      const contract = new Contract(contractAddress, currentAccount.value, $api);
      const id = { u64: tokenId };
      const acceptedTokenAssets = (await contract.query.getAcceptedTokenAssets(id)).value.unwrap();
      const assetIds = acceptedTokenAssets.unwrap();

      for (const assetId of assetIds) {
        const asset = await contract.query['multiAsset::getAsset'](assetId);
        const assetValue = asset.value.unwrap();
        if (assetValue) {
          const uiAsset = {
            equippableGroupId: assetValue?.equippableGroupId,
            assetUri: sanitizeIpfsUrl(hex2ascii(assetValue?.assetUri?.toString() ?? '')),
            parts: [],
            id: assetId,
          } as Asset;

          const partsToAdd: Part[] = [];
          for (const partId of assetValue.partIds) {
            const part = await contract.query['base::getPart'](partId);
            const partValue = part.value.unwrap();
            if (partValue) {
              const partToAdd = {
                id: partId,
                partType: partValue.partType,
                z: partValue.z,
                isEquippableByAll: partValue.isEquippableByAll,
                partUri: sanitizeIpfsUrl(hex2ascii(partValue.partUri.toString() ?? '')),
              } as Part;

              // Equipment
              if (partToAdd.partType === PartType.slot) {
                const equipment = await contract.query.getEquipment(id, partToAdd.id);
                const equipmentValue = equipment.value.ok ? equipment.value.unwrap() : null;
                if (equipmentValue?.childNft[0] && equipmentValue?.childNft[1]?.u64) {
                  partToAdd.children = await fetchNft(
                    equipmentValue?.childNft[0].toString(),
                    equipmentValue.childNft[1].u64
                  );
                }
              }

              partsToAdd.push(partToAdd);
            }
          }

          const filteredAndSortedParts = partsToAdd
            //.filter((x) => x.partType === "Fixed")
            .sort((x, y) => (x?.z ?? 0) - (y?.z ?? 0));
          uiAsset.parts.push(...filteredAndSortedParts);

          result.push(uiAsset);
        }
      }
    }

    return result;
  };

  const getCollectionMetadata = async (contractAddress: string): Promise<Metadata | undefined> => {
    return getMetadata(contractAddress, 'collection_metadata');
  };

  const getTokenMetadata = async (
    contractAddress: string,
    tokenId: number
  ): Promise<Metadata | undefined> => {
    return getMetadata(contractAddress, 'baseUri', tokenId);
  };

  const getMetadata = async (
    contractAddress: string,
    metadataKey: string,
    tokenId?: number
  ): Promise<Metadata | undefined> => {
    if ($api) {
      const contract = new Contract(contractAddress, currentAccount.value, $api);
      const collectionId = await (await contract.query.collectionId()).value.unwrap();
      const id = IdBuilder.Bytes(collectionId.bytes ?? ['']);
      const collectionMetadataUri = await contract.query.getAttribute(id, metadataKey);

      if (collectionMetadataUri && collectionMetadataUri.value.ok) {
        const metadataUri = hex2ascii(collectionMetadataUri.value.unwrap()?.toString() ?? '');
        const response = await axios.get<Metadata>(
          sanitizeIpfsUrl(metadataUri + (tokenId ? `/${tokenId}.json` : ''))
        );
        console.log(response.data);

        return response.data;
      }
    }

    return undefined;
  };

  return {
    getToken,
    getCollectionMetadata,
    getTokenMetadata,
    availableContracts,
    tokenAssets,
  };
};
