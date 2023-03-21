<template>
  <div class="wrapper--assets">
    <div v-if="isRequiredConnectWallet" class="wrapper--hero">
      <hero-connect-wallet />
    </div>
    <div v-else>
      <div class="wrapper--inventory">
        <asset-list />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, watch } from 'vue';
import HeroConnectWallet from 'src/components/assets/HeroConnectWallet.vue';
import { useAccount, useNetworkInfo } from 'src/hooks';
import { LOCAL_STORAGE } from 'src/config/localStorage';
import AssetList from 'src/components/assets/AssetList.vue';
import { useRoute } from 'vue-router';
// import { useStore } from 'src/store';
// import { ContractInventory } from 'src/v2/repositories';

export default defineComponent({
  components: { HeroConnectWallet, AssetList },
  setup() {
    const selectedAddress = String(localStorage.getItem(LOCAL_STORAGE.SELECTED_ADDRESS));
    // const store = useStore();
    const { currentAccount } = useAccount();
    const isRequiredConnectWallet = computed<boolean>(
      () => selectedAddress === 'null' && currentAccount.value === ''
    );
    // const { currentNetworkIdx } = useNetworkInfo();
    // const inventory = computed<ContractInventory[]>(() => store.getters['assets/getInventory']);

    // watch(
    //   [currentAccount, currentNetworkIdx],
    //   async () => {
    //     if (!currentAccount.value) return;
    //     await store.dispatch('assets/getParentInventories', {
    //       address: currentAccount.value,
    //     });
    //     await store.dispatch('assets/getInventory', {
    //       address: currentAccount.value,
    //     });
    //   },
    //   { immediate: true }
    // );

    // watch([inventory], async () => {
    //   // Fetch collections metadata
    //   if (inventory.value.length > 0) {
    //     const uniqueAddresses = [...new Set(inventory.value.map((x) => x.contractAddress))];
    //     await Promise.all(
    //       uniqueAddresses.map((x) => {
    //         store.dispatch('assets/getContract', {
    //           contractAddress: x,
    //           userAddress: currentAccount.value,
    //         });
    //       })
    //     );
    //   }
    // });

    const route = useRoute();
    const id = computed<string>(() => route.query.id as string);

    return { isRequiredConnectWallet, id };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/assets/styles/assets.scss';
</style>
