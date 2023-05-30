<template>
  <div class="wrapper--mint-button">
    <div class="mint--info-item">
      <div>{{ $t('mint.mint') }}</div>
      <div>Free</div>
    </div>
    <div class="mint--info-item">
      <div>{{ $t('mint.storageDeposit') }}</div>
      <div>{{ priceInfo?.storageFeeFormatted }}</div>
    </div>
    <div class="mint--info-item">
      <div>{{ $t('mint.gasFee') }}</div>
      <div>{{ priceInfo?.gasFormatted }}</div>
    </div>
    <div class="storage--deposit">{{ $t('mint.storageDepositInfo') }}</div>
    <astar-button :width="291" :height="49" :disabled="!canMint">
      <div class="row--button">
        <span> {{ $t('mint.mint') }} </span>
      </div>
    </astar-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { DryRunResult } from 'src/v2/services';

export default defineComponent({
  props: {
    canMint: {
      type: Boolean,
      required: true,
    },
    priceInfo: {
      type: Object as PropType<DryRunResult | undefined>,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
});
</script>
<style scoped lang="scss">
@use 'src/components/mint/styles/mint.scss';
</style>
