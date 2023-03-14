<template>
  <button type="button" class="btn--account" :class="screenSize.sm > width && 'm-btn--account'">
    <astar-icon-base
      v-if="!currentAccount"
      class="iconbase"
      stroke="currentColor"
      icon-name="wallet"
    >
      <astar-icon-wallet />
    </astar-icon-base>
    <img class="icon" width="16" :src="iconWallet" />
    <template v-if="width >= screenSize.sm">
      <span class="text--md">
        {{ shortenAddress }}
      </span>
    </template>
  </button>
</template>

<script lang="ts">
import { useAccount, useBreakpoints, useWalletIcon } from 'src/hooks';
import { getShortenAddress } from '@astar-network/astar-sdk-core';
import { computed, defineComponent, toRefs } from 'vue';

export default defineComponent({
  props: {
    account: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { currentAccount } = useAccount();
    const { width, screenSize } = useBreakpoints();
    const { iconWallet } = useWalletIcon();
    const shortenAddress = computed(() => {
      return getShortenAddress(props.account);
    });

    return {
      width,
      screenSize,
      shortenAddress,
      iconWallet,
      currentAccount,
      ...toRefs(props),
    };
  },
});
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';
@import 'src/css/utils.scss';

.btn--account {
  display: flex;
  height: 32px;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px 8px 12px;
  border-radius: 16px;
  margin-left: 16px;
  background: #141c34;
  color: #fff;
  border: 1px solid $gray-6;
  transition: all 0.3s ease 0s;
}

.btn--account:hover {
  background: $astar-blue;
  transition: all 0.3s ease 0s;
}

.iconbase {
  color: $gray-3 !important;
  width: rem(22);
  height: rem(22);
  color: $gray-4 !important;
}

.m-btn--account {
  box-shadow: none;
  padding: 8px;
  background: $gray-6;
  color: $gray-3;
}

.icon {
  margin: 0 6px;
  margin-bottom: -2px;
}
</style>
