import { wait } from '@astar-network/astar-sdk-core';
import { LOCAL_STORAGE } from 'src/config/localStorage';
import { useStore } from 'src/store';
import { computed, ref, watch } from 'vue';
import { SubstrateAccount } from 'src/store/general/state';

export const useAccount = () => {
  const store = useStore();

  const substrateAccounts = computed(() => store.getters['general/substrateAccounts']);
  const currentAddress = computed(() => store.getters['general/selectedAddress']);
  const { SELECTED_ADDRESS } = LOCAL_STORAGE;

  const disconnectAccount = async (): Promise<Boolean> => {
    // Memo: Gives time for syncing
    const delay = 100;
    return await new Promise(async (resolve) => {
      await wait(delay);
      store.commit('general/setCurrentAddress', null);
      resolve(true);
    });
  };

  const currentAccount = ref<string>('');
  const currentAccountName = ref<string>('');

  watch(
    [currentAddress, substrateAccounts],
    () => {
      if (!substrateAccounts.value || currentAddress.value === null) return;
      const account = substrateAccounts.value.find(
        (it: SubstrateAccount) => it.address === currentAddress.value
      );
      if (!account) return;

      currentAccount.value = account.address;
      currentAccountName.value = account.name;
      localStorage.setItem(SELECTED_ADDRESS, String(currentAddress.value));
      return;
    },
    { immediate: true }
  );

  return {
    substrateAccounts,
    currentAccount,
    currentAccountName,
    disconnectAccount,
  };
};
