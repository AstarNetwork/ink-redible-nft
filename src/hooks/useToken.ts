import { computed, watch, ref } from 'vue';
import { useStore } from 'src/store';
import { useAccount } from './index';
import { OwnedToken } from 'src/store/assets/state';
import { ContractInventory, IRmrkNftRepository } from 'src/v2/repositories';
import { container } from 'src/v2/common';
import { Symbols } from 'src/v2/symbols';
import { ChildInfo } from 'src/v2/models';
import { IRmrkNftService } from 'src/v2/services';
import { PartType } from 'src/modules/nft/types/types-returns/catalog_contract';
import { Part as LocalPart } from 'src/v2/models';

export const useToken = (contractAddress: string, tokenId: string) => {
  const account = useAccount();
  const store = useStore();
  const token = computed<OwnedToken | undefined>(() =>
    store.getters['assets/getToken'](contractAddress, tokenId)
  );
  const inventory = computed<ContractInventory[]>(() => store.getters['assets/getInventory']);
  const hasUnequippedSlots = computed<boolean>(() => {
    // Not supporting multi asset tokens for now
    const unequippedSlots = token.value?.assets[0].parts.filter(
      (x) => x.partType === PartType.slot && !x.children
    );
    return (unequippedSlots && unequippedSlots.length > 0) ?? false;
  });
  const isLoading = ref<boolean>(false);
  const emptySlots = computed<LocalPart[]>(
    () =>
      token?.value?.assets[0].parts.filter(
        (x) => x.partType === PartType.slot && x.partUri === ''
      ) ?? []
  );

  const fetchToken = async (forceFetch = false): Promise<void> => {
    isLoading.value = true;
    if (!token.value || forceFetch) {
      await store.dispatch('assets/getToken', {
        contractAddress,
        userAddress: account.currentAccount.value,
        tokenId: tokenId,
      });
    }
    isLoading.value = false;
  };

  // As discussed, child tokens will also be displayed on assets page
  const fetchChildren = async (): Promise<void> => {
    if (token.value && token.value.assets && token.value.assets.length > 0) {
      isLoading.value = true;
      const childInventory: ContractInventory[] = [];
      try {
        const children = await getChildren();
        children.forEach((child) => {
          childInventory.push({
            contractAddress: child.contractAddress,
            tokenId: parseInt(child.tokenId),
            parent: { contractAddress: contractAddress, tokenId: parseInt(tokenId) },
          });
        });
      } catch (error) {
        console.error(
          `Unable to fetch accepted children for contract ${contractAddress}, token ${tokenId}`,
          error
        );
      }

      // Update inventory since childInventory items holds a parent information. Items loaded from indexer doesn't have this information.
      childInventory.forEach((child) => {
        store.commit('assets/updateInventory', child);
      });

      isLoading.value = false;
    }
  };

  const getChildren = async (): Promise<ChildInfo[]> => {
    const rmrkRepo = container.get<IRmrkNftRepository>(Symbols.RmrkNftRepository);
    const children = await rmrkRepo.getChildren(
      contractAddress,
      account.currentAccount.value,
      parseInt(tokenId)
    );

    return children;
  };

  const equip = async (
    slot: string | number,
    childTokenId: string,
    baseAddress: string,
    equippableAddress: string
  ): Promise<void> => {
    // TODO determine asset to equip. We are fine for some time since we are not using multi asset tokens.
    const parentAssetToEquip = '1';
    const childAssetToEquip = '1';
    if (slot) {
      const rmrkNftService = container.get<IRmrkNftService>(Symbols.RmrkNftService);

      await rmrkNftService.equip({
        parentContractAddress: baseAddress,
        tokenId: { u64: tokenId },
        assetId: parentAssetToEquip,
        slot: Number(slot.toString()),
        childContractAddress: equippableAddress,
        childTokenId: { u64: childTokenId },
        childAssetId: childAssetToEquip,
        senderAddress: account.currentAccount.value,
      });
    }
  };

  const unequip = async (contractAddress: string, slot?: string | number): Promise<void> => {
    console.log('unequipping', slot);
    if (slot && token.value) {
      const rmrkNftService = container.get<IRmrkNftService>(Symbols.RmrkNftService);
      await rmrkNftService.unequip({
        contractAddress,
        tokenId: parseInt(token.value.id),
        slotId: slot.toString(),
        senderAddress: account.currentAccount.value,
      });
    } else {
      console.log('Unable to unequip, slot or token not defined');
    }
  };

  const acceptChild = async (
    parentContractAddress: string,
    parentTokenId: number,
    childContractAddress: string,
    childTokenId: number
  ): Promise<void> => {
    const rmrkNftService = container.get<IRmrkNftService>(Symbols.RmrkNftService);
    await rmrkNftService.acceptChild(
      parentContractAddress,
      parentTokenId,
      childContractAddress,
      childTokenId,
      account.currentAccount.value
    );
  };

  const addChild = async (
    parentContractAddress: string,
    parentTokenId: number,
    childContractAddress: string,
    childTokenId: number
  ): Promise<void> => {
    const rmrkNftService = container.get<IRmrkNftService>(Symbols.RmrkNftService);
    await rmrkNftService.addChild(
      parentContractAddress,
      parentTokenId,
      childContractAddress,
      childTokenId,
      account.currentAccount.value
    );
  };

  watch(
    [account.currentAccount],
    () => {
      if (account.currentAccount) {
        fetchToken();
      }
    },
    { immediate: true }
  );

  return {
    token,
    isLoading,
    hasUnequippedSlots,
    emptySlots,
    fetchToken,
    fetchChildren,
    getChildren,
    equip,
    unequip,
    acceptChild,
    addChild,
  };
};
