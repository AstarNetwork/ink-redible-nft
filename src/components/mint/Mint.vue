<template>
  <div class="wrapper--mint">
    <div class="container--mint">
      <img
        v-if="imageUrl"
        class="collection--image"
        :src="imageUrl"
        @load="setNotBusy()"
        @error="setNotBusy()"
      />
      <div class="description--mint">
        <div class="description--wrapper">
          <div class="row--name">
            <span class="text--xl">{{ title }}</span>
          </div>
          <div class="description">{{ description }}</div>
        </div>
        <mint-button :can-mint="canMint" :price-info="dryRunOutcome" :mint="mint" />
      </div>
    </div>
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
import { BusyMessage, IEventAggregator } from 'src/v2/messaging';
import { useCollectionInfo } from 'src/hooks/useCollectionInfo';
import { IRmrkNftRepository } from 'src/v2/repositories';

export default defineComponent({
  components: {
    MintButton,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const account = useAccount();
    const { currentNetworkIdx } = useNetworkInfo();
    const collectionName = ref<string>(String(route.params.collectionName));
    const contractAddress = ref<string>(String(''));
    const dryRunOutcome = ref<DryRunResult | undefined>(undefined);
    const mintPrice = ref<bigint>(BigInt(0));
    const rmrkService = container.get<IRmrkNftService>(Symbols.RmrkNftService);
    const canMint = computed<boolean>(() => dryRunOutcome.value !== undefined);
    const rmrkRepo = container.get<IRmrkNftRepository>(Symbols.RmrkNftRepository);

    const title = ref<string>('');
    const description = ref<string>('');
    const imageUrl = ref<string>('');

    const { result, error } = useCollectionInfo();
    const mint = async () => {
      rmrkService.mint(contractAddress.value, account.currentAccount.value!, mintPrice.value);
    };

    const setNotBusy = () => {
      const aggregator = container.get<IEventAggregator>(Symbols.EventAggregator);
      aggregator.publish(new BusyMessage(false));
    };

    watch(
      [collectionName, account.currentAccount, currentNetworkIdx, contractAddress],
      async () => {
        try {
          const aggregator = container.get<IEventAggregator>(Symbols.EventAggregator);
          aggregator.publish(new BusyMessage(true));

          if (!isValidAddressPolkadotAddress(contractAddress.value)) {
            router.push({ name: '404' });
          } else {
            if (!account.currentAccount.value) {
              return;
            }
            mintPrice.value = await rmrkRepo.getMintPrice(
              contractAddress.value,
              account.currentAccount.value
            );

            dryRunOutcome.value = await rmrkService.mintDryRun(
              contractAddress.value,
              account.currentAccount.value,
              mintPrice.value
            );
          }
        } catch (e) {
          console.error(e);
        }
      }
    );

    watch([result, error], () => {
      const post = result.value?.posts?.find(
        (p: any) => p.title.toLowerCase() === collectionName.value.toLowerCase()
      );
      if (post) {
        title.value = post.title;
        description.value = post.body;
        imageUrl.value = `https://ipfs.subsocial.network/ipfs/${post.image}`;
        contractAddress.value = post.canonical.split('/').pop();
      } else {
        router.push({ name: '404' });
      }
    });

    return {
      contractAddress,
      canMint,
      dryRunOutcome,
      mint,
      title,
      description,
      imageUrl,
      setNotBusy,
    };
  },
});
</script>
<style scoped lang="scss">
@use 'src/components/mint/styles/mint.scss';
</style>
