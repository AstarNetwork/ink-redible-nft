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
import { useAccount } from 'src/hooks';
import { LOCAL_STORAGE } from 'src/config/localStorage';
import AssetList from 'src/components/assets/AssetList.vue';
import { useRoute } from 'vue-router';
import { useStore } from 'src/store';
import { ParentInventory } from 'src/modules/nft';

export default defineComponent({
  components: { HeroConnectWallet, AssetList },
  setup() {
    const selectedAddress = String(localStorage.getItem(LOCAL_STORAGE.SELECTED_ADDRESS));
    const store = useStore();
    const { currentAccount } = useAccount();
    const isRequiredConnectWallet = computed<boolean>(
      () => selectedAddress === 'null' && currentAccount.value === ''
    );
    const parentInventories = computed<ParentInventory[]>(
      () => store.getters['assets/getParentInventories']
    );

    watch(
      [currentAccount],
      async () => {
        if (!currentAccount.value) return;
        const sampleWalletAddress = 'XLoLJBQoMPHMLXYhdFobSpH5GujRoUH8d1sUtaEtoBG7zaS';

        await store.dispatch('assets/getParentInventories', {
          // address: currentAccount.value,
          address: sampleWalletAddress,
        });
      },
      { immediate: false }
    );

    // watch(
    //   [parentInventories],
    //   () => {
    //     console.log('parentInventories', parentInventories.value);
    //   },
    //   { immediate: true }
    // );

    const route = useRoute();
    const id = computed<string>(() => route.query.id as string);

    return { isRequiredConnectWallet, id };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/assets/styles/assets.scss';
</style>
