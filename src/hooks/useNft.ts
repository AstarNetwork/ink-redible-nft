import { $api } from 'src/boot/api';
import { ref, watchEffect } from 'vue';
import {
  IBasePart,
  readNft,
  getEquippableChildren,
  ExtendedAsset,
  equipSlot,
  unequipSlot,
} from 'src/modules/nft';

import { useAccount } from 'src/hooks/useAccount';

export interface AssetPreview {
  id: number;
  url: string;
}

// Todo: fetch from url or global state
export const chunkyAddress = 'aEa8Jx4noRvq1gs79yd5THenLuBiqbNFnvWXkNRPj7ADdqp';
export const partsAddress = 'XxLjz535ZFcWDb2kn3gBYvNAyiTZvaBrJBmkP5hUnRPSAcE';

export const useNft = (tokenId: number) => {
  const { currentAccount } = useAccount();
  const parts = ref<IBasePart[]>([]);

  // Todo: fetch from url or global state
  const chunkyAddress = 'aEa8Jx4noRvq1gs79yd5THenLuBiqbNFnvWXkNRPj7ADdqp';
  const partsAddress = 'XxLjz535ZFcWDb2kn3gBYvNAyiTZvaBrJBmkP5hUnRPSAcE';

  const fetchNftParts = async (): Promise<void> => {
    parts.value = await readNft(chunkyAddress, partsAddress, tokenId, currentAccount.value, $api!);
  };

  // const unequip = async (slot?: string | number): Promise<void> => {
  //   console.log('unequipping', slot);
  //   if (slot && (await unequipSlot(chunkyAddress, tokenId, slot.toString()))) {
  //     await fetchNftParts();
  //   } else {
  //     console.log('unable to unequip');
  //   }
  // };

  // const equip = async (
  //   slot: string | number,
  //   childTokenId: Id,
  //   assets: (ExtendedAsset | null)[] | undefined
  // ): Promise<void> => {
  //   // TODO see how to handle this
  //   const parentAssetToEquip = '2';
  //   if (slot) {
  //     // TODO determine asset to equip
  //     // Assumption. Asset 0 is preview, asset 1 goes to lowest slot number, asset 2 to next one and so on....
  //     const slots = parts.value.filter((x) => x.partType === 'Slot').map((x) => x.id);
  //     const assetIndex = slots.indexOf(slot) + 1;
  //     const assetId = assets ? assets[assetIndex]?.id.toString() : '1';
  //     await equipSlot(
  //       chunkyAddress,
  //       { u64: tokenId },
  //       parentAssetToEquip,
  //       parseInt(slot.toString()),
  //       partsAddress,
  //       childTokenId,
  //       assetId ?? '1'
  //     );
  //     await fetchNftParts();
  //   }
  // };

  //Todo
  // const getChildrenToEquipPreview = async (
  //   slotId: number
  // ): Promise<Map<Id, (ExtendedAsset | null)[]>> => {
  //   const children = await getEquippableChildren(chunkyAddress, tokenId);
  //   // console.log(children);

  //   return children;
  // };

  watchEffect(() => {
    fetchNftParts();
  });

  return {
    parts,
    // equip,
    // unequip,
    // getChildrenToEquipPreview,
  };
};
