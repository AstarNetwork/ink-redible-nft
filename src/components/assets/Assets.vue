<template>
  <div class="wrapper--assets">
    <div v-if="isRequiredConnectWallet" class="wrapper--hero">
      <hero-connect-wallet />
    </div>
    <div v-else>
      <div class="wrapper--inventory">
        <asset-list />
        <div style="clear: both"></div>
        <mintable-collections class="collections" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import HeroConnectWallet from 'src/components/assets/HeroConnectWallet.vue';
import { useAccount } from 'src/hooks';
import { LOCAL_STORAGE } from 'src/config/localStorage';
import AssetList from 'src/components/assets/AssetList.vue';
import MintableCollections from './MintableCollections.vue';

export default defineComponent({
  components: { HeroConnectWallet, AssetList, MintableCollections },
  setup() {
    const selectedAddress = String(localStorage.getItem(LOCAL_STORAGE.SELECTED_ADDRESS));
    const { currentAccount } = useAccount();
    const isRequiredConnectWallet = computed<boolean>(
      () => selectedAddress === 'null' && currentAccount.value === ''
    );

    const route = useRoute();
    const id = computed<string>(() => route.query.id as string);

    return { isRequiredConnectWallet, id };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/assets/styles/assets.scss';
.collections {
  margin-top: 96px;
}
</style>
