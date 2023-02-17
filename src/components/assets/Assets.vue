<template>
  <div class="wrapper--assets">
    <hero-connect-wallet />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeroConnectWallet from 'src/components/assets/HeroConnectWallet.vue';

export default defineComponent({
  components: { HeroConnectWallet },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/assets/styles/assets.scss';
</style>
