<template>
  <div class="wrapper--assets">
    <div v-if="isRequiredConnectWallet" class="wrapper--hero">
      <hero-connect-wallet />
    </div>
    <div v-else>
      <div class="wrapper--inventory">
        <inventory />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import HeroConnectWallet from 'src/components/assets/HeroConnectWallet.vue';
import { useAccount } from 'src/hooks';
import { LOCAL_STORAGE } from 'src/config/localStorage';
import Inventory from 'src/components/assets/Inventory.vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: { HeroConnectWallet, Inventory },
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
</style>
