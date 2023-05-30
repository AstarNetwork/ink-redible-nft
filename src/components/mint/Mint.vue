<template>
  <div class="wrapper--mint">
    <mint-button :can-mint="canMint" :price-info="dryRunOutcome" />
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
import MintButton from './MintButton.vue';

export default defineComponent({
  components: {
    MintButton,
  },
  setup() {
    const contractAddress = ref<string>('');
    const dryRunOutcome = ref<DryRunResult | undefined>(undefined);
    const rmrkService = container.get<IRmrkNftService>(Symbols.RmrkNftService);
    const route = useRoute();
    const router = useRouter();
    const account = useAccount();
    contractAddress.value = String(route.params.contractAddress);

    const canMint = computed<boolean>(() => dryRunOutcome.value !== undefined);

    watch(
      [contractAddress, account.currentAccount],
      async () => {
        if (!isValidAddressPolkadotAddress(contractAddress.value)) {
          router.push({ name: '404' });
        } else {
          if (account.currentAccount.value) {
            try {
              dryRunOutcome.value = await rmrkService.mintDryRun(
                contractAddress.value,
                account.currentAccount.value,
                BigInt('1000000000000000000')
              );
            } catch (e) {
              console.log(e);
            }
            console.log(dryRunOutcome.value);
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
