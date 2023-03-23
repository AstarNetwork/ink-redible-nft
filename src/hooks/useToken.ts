import { computed, watch, ref } from 'vue';
import { useStore } from 'src/store';
import { useAccount } from './index';
import { OwnedToken } from 'src/store/assets/state';

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
  };
};