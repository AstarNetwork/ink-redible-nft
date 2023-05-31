<template>
  <div class="wrapper--mint">
    <div class="collection--image">Collection image goes here</div>
    <mint-button :can-mint="canMint" :price-info="dryRunOutcome" :mint="mint" />
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
import { useAccount, useNetworkInfo } from 'src/hooks';
import MintButton from './MintButton.vue';
import { NftCollection, getCollection } from './collections';

export default defineComponent({
  components: {
    MintButton,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const account = useAccount();
    const { currentNetworkIdx } = useNetworkInfo();
    const contractAddress = ref<string>(String(route.params.contractAddress));
    const dryRunOutcome = ref<DryRunResult | undefined>(undefined);
    const rmrkService = container.get<IRmrkNftService>(Symbols.RmrkNftService);
    const canMint = computed<boolean>(() => dryRunOutcome.value !== undefined);
    const collectionInfo = ref<NftCollection | undefined>(undefined);

    const mint = async () => {
      rmrkService.mint(
        contractAddress.value,
        account.currentAccount.value!,
        collectionInfo.value?.mintPrice ?? BigInt(0)
      );
    };

    watch(
      [contractAddress, account.currentAccount, currentNetworkIdx],
      async () => {
        if (!isValidAddressPolkadotAddress(contractAddress.value)) {
          router.push({ name: '404' });
        } else {
          if (account.currentAccount.value) {
            try {
              collectionInfo.value = getCollection(contractAddress.value, currentNetworkIdx.value);
              if (!collectionInfo.value) {
                router.push({ name: '404' });
              }

              dryRunOutcome.value = await rmrkService.mintDryRun(
                contractAddress.value,
                account.currentAccount.value,
                collectionInfo.value?.mintPrice ?? BigInt(0)
              );
            } catch (e) {
              console.error(e);
            }
          }
        }
      },
      { immediate: true }
    );

    return { contractAddress, canMint, dryRunOutcome, mint };
  },
});
</script>
<style scoped lang="scss">
@use 'src/components/mint/styles/mint.scss';
</style>
