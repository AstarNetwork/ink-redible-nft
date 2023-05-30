<template>
  <div class="wrapper--mint">
    <div>Minting from {{ contractAddress }}</div>
    <astar-button :width="130" :height="48" :disabled="!canMint">
      <div class="row--button">
        <span> {{ $t('mint.mint') }} </span>
      </div>
    </astar-button>
    <!-- <div v-if="canMint">Gas: {{ dryRunOutcome?.gasRequired.toHuman() }}</div> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { isValidAddressPolkadotAddress } from '@astar-network/astar-sdk-core';
import { container } from 'src/v2/common';
import { IRmrkNftService } from 'src/v2/services';
import { Symbols } from 'src/v2/symbols';
import { DryRunResult } from 'src/v2/services';
import { useAccount } from 'src/hooks';

export default defineComponent({
  setup() {
    const contractAddress = ref<string>('');
    const dryRunOutcome = ref<DryRunResult | null>(null);
    const rmrkService = container.get<IRmrkNftService>(Symbols.RmrkNftService);
    const route = useRoute();
    const router = useRouter();
    const account = useAccount();
    contractAddress.value = String(route.params.contractAddress);

    const canMint = computed(() => dryRunOutcome.value !== null);

    watch(
      [contractAddress, account.currentAccount],
      async () => {
        if (!isValidAddressPolkadotAddress(contractAddress.value)) {
          router.push({ name: '404' });
        } else {
          if (account.currentAccount.value) {
            dryRunOutcome.value = await rmrkService.mintDryRun(
              contractAddress.value,
              account.currentAccount.value,
              BigInt('1000000000000000000')
            );
            console.log(dryRunOutcome);
          }
        }
      },
      { immediate: true }
    );

    return { contractAddress, canMint, dryRunOutcome };
  },
});
</script>
<style scoped lang="scss">
@use 'src/components/mint/styles/mint.scss';
</style>
