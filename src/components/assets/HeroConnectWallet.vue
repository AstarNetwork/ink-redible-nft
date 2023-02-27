<template>
  <div class="container--hero-connect-wallet">
    <div class="container--hero-img">
      <img src="../../assets/img/hero-image.svg" alt="hero" class="img--hero" />
    </div>
    <div class="container--hero-button">
      <div class="box--texts">
        <span class="text--hero text--italic">
          {{ $t('assets.hero.rmkable') }}
        </span>
        <span class="text--hero text--astar-gradient">
          {{ $t('assets.hero.experience') }}
        </span>
        <span class="text--hero text--astar-gradient">
          {{ $t('assets.hero.inAstarWasm') }}
        </span>
      </div>
      <div class="box--connect">
        <astar-button :height="buttonHeight" :width="buttonWidth" @click="handleConnectWallet">
          <span class="text--button"> {{ $t('wallet.connectWallet') }}</span>
        </astar-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { WalletModalOption } from 'src/config/wallets';
import { useBreakpoints } from 'src/hooks';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  setup() {
    const { width, screenSize } = useBreakpoints();
    const buttonWidth = computed<number>(() => (width.value > screenSize.lg ? 358 : 320));
    const buttonHeight = computed<number>(() => (width.value > screenSize.lg ? 80 : 50));

    const handleConnectWallet = (): void => {
      window.dispatchEvent(new CustomEvent(WalletModalOption.SelectWallet));
    };
    return { buttonWidth, buttonHeight, handleConnectWallet };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/assets/styles/hero-connect-wallet.scss';
</style>
