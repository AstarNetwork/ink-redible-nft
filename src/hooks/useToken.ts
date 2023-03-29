import { computed, watch, ref } from 'vue';
import { useStore } from 'src/store';
import { useAccount } from './index';
import { OwnedToken } from 'src/store/assets/state';
import { ContractInventory, IRmrkNftRepository } from 'src/v2/repositories';
import { container } from 'src/v2/common';
import { Symbols } from 'src/v2/symbols';
import { AddressIdPair } from 'src/v2/models';

// TODO remove useNft and useNft2
export const useToken = (contractAddress: string, tokenId: string) => {
  const account = useAccount();
  const store = useStore();
  const token = computed<OwnedToken | undefined>(() =>
    store.getters['assets/getToken'](contractAddress, tokenId)
  );
  const isLoading = ref<boolean>(false);

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
        const children = await getAcceptedChildren();
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

      if (childInventory.length > 0) {
        store.commit('assets/appendInventory', childInventory);
      }
      isLoading.value = false;
    }
  };

  const getAcceptedChildren = async (): Promise<AddressIdPair[]> => {
    const rmrkRepo = container.get<IRmrkNftRepository>(Symbols.RmrkNftRepository);
    const children = await rmrkRepo.getAcceptedChildren(
      contractAddress,
      account.currentAccount.value,
      parseInt(tokenId)
    );

    return children;
  };

  const equip = async (childTokenId: string): Promise<void> => {};

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
    fetchToken,
    fetchChildren,
    getAcceptedChildren,
  };
};
