import { providerEndpoints } from 'src/config/chainEndpoints';
import { container } from 'src/v2/common';
import { $api } from 'src/boot/api';
import { ref, watchEffect } from 'vue';
import { IBasePart, readNft, getEquippableChildren, ExtendedAsset, Id } from 'src/modules/nft';

import { useAccount } from 'src/hooks/useAccount';
import { IRmrkNftService } from 'src/v2/services';
import { Symbols } from 'src/v2/symbols';
import Contract from 'src/modules/nft/rmrk-contract/types/contracts/rmrk_contract';
import { IdBuilder } from 'src/modules/nft/rmrk-contract';
import { hex2ascii } from 'src/modules/nft/read-token';
import { Asset } from 'src/modules/nft/rmrk-contract/types/types-returns/rmrk_contract';
import { sanitizeIpfsUrl } from 'src/modules/nft/ipfs';
import { useNetworkInfo } from 'src/hooks/useNetworkInfo';

export interface AssetPreview {
  id: number;
  url: string;
}

export interface AssetExtended extends Asset {
  proxiedAssetUri: string;
}

export const useNft = (tokenId: number) => {
  const { currentAccount } = useAccount();
  const parts = ref<IBasePart[]>([]);
  const isLoading = ref<boolean>(true);
  const { currentNetworkIdx } = useNetworkInfo();

  const baseContractAddress =
    String(providerEndpoints[Number(currentNetworkIdx.value)].baseContractAddress![0]) || '';

  const partsAddress = String(providerEndpoints[Number(currentNetworkIdx.value)].partsAddress);

  const rmrkNftService = container.get<IRmrkNftService>(Symbols.RmrkNftService) || '';

  const fetchNftParts = async (): Promise<void> => {
    parts.value = await readNft(
      baseContractAddress,
      partsAddress,
      tokenId,
      currentAccount.value,
      $api!
    );
    isLoading.value = false;
  };

  const getToken = async (contractAddress: string, tokenId: string): Promise<AssetExtended[]> => {
    let result: AssetExtended[] = [];
    if ($api) {
      const id = IdBuilder.U64(tokenId);
      const contract = new Contract(contractAddress, currentAccount.value, $api);
      const assets = await contract.query.getAcceptedTokenAssets(id);
      if (assets.value.err) {
        throw assets.value.err;
      }

      result = await Promise.all(
        assets.value.unwrap().map(async (x) => {
          const data = await contract.query.getAssetAndEquippableData(id, x);
          const tmp = data.value.unwrap();
          return {
            ...tmp,
            proxiedAssetUri: sanitizeIpfsUrl(hex2ascii(tmp.assetUri.toString() ?? '')),
          };
        })
      );
    } else {
      throw '$api is not defined';
    }

    return result;
  };

  const unequip = async (slot?: string | number): Promise<void> => {
    console.log('unequipping', slot);
    if (slot) {
      await rmrkNftService.unequip({
        contractAddress: baseContractAddress,
        tokenId,
        slotId: slot.toString(),
        senderAddress: currentAccount.value,
      });
      await fetchNftParts();
    } else {
      console.log('unable to unequip');
    }
  };

  const equip = async (
    slot: string | number,
    childTokenId: Id,
    assets: (ExtendedAsset | null)[] | undefined
  ): Promise<void> => {
    // TODO see how to handle this
    const parentAssetToEquip = '2';
    if (slot) {
      // TODO determine asset to equip
      // Assumption. Asset 0 is preview, asset 1 goes to lowest slot number, asset 2 to next one and so on....
      const slots = parts.value.filter((x) => x.partType === 'Slot').map((x) => x.id);
      const assetIndex = slots.indexOf(slot) + 1;
      const assetId = assets ? assets[assetIndex]?.id.toString() : '1';

      await rmrkNftService.equip({
        parentContractAddress: baseContractAddress,
        tokenId: { u64: tokenId },
        assetId: parentAssetToEquip,
        slot: Number(slot.toString()),
        childContractAddress: partsAddress,
        childTokenId: childTokenId,
        childAssetId: assetId ?? '1',
        senderAddress: currentAccount.value,
      });
      await fetchNftParts();
    }
  };

  const getChildrenToEquipPreview = async (
    tokenId: number
  ): Promise<Map<Id, (ExtendedAsset | null)[]> | null> => {
    const children = await getEquippableChildren(
      baseContractAddress,
      tokenId,
      $api!,
      currentAccount.value
    );

    return children;
  };

  watchEffect(() => {
    fetchNftParts();
  });

  watchEffect(async () => {
    await getChildrenToEquipPreview(tokenId);
  });

  return {
    isLoading,
    parts,
    equip,
    unequip,
    getChildrenToEquipPreview,
    getToken,
    baseContractAddress,
    partsAddress,
  };
};
