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
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { isValidAddressPolkadotAddress } from '@astar-network/astar-sdk-core';
import { container } from 'src/v2/common';
import { IRmrkNftService } from 'src/v2/services';
import { Symbols } from 'src/v2/symbols';
import { DryRunResult } from 'src/v2/services';
import { useAccount, useNetworkInfo } from 'src/hooks';
import MintButton from './MintButton.vue';
import { NftCollection, getCollection } from './collections';
import { BusyMessage, IEventAggregator } from 'src/v2/messaging';

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
    const rmrkService = container.get<IRmrkNftService>(Symbols.RmrkNftService);
    const canMint = computed<boolean>(() => dryRunOutcome.value !== undefined);
    const collectionInfo = ref<NftCollection | undefined>(undefined);

    const title = ref<string>('');
    const description = ref<string>('');
    const imageUrl = ref<string>('');

    const { result, loading, error } = useQuery(gql`
      query CommentsByContract {
        posts(
          where: {
            title_containsInsensitive: "${collectionName.value}"
            rootPost: { space: { id_eq: "11453" } }
          }
        ) {
          id
          image
          title
          canonical
          body
          tagsOriginal
        }
      }
    `);

    const mint = async () => {
      rmrkService.mint(
        contractAddress.value,
        account.currentAccount.value!,
        collectionInfo.value?.mintPrice ?? BigInt(0)
      );
    };

    const setNotBusy = () => {
      const aggregator = container.get<IEventAggregator>(Symbols.EventAggregator);
      aggregator.publish(new BusyMessage(false));
    };

    watch(
      [collectionName, account.currentAccount, currentNetworkIdx],
      async () => {
        try {
          const aggregator = container.get<IEventAggregator>(Symbols.EventAggregator);
          aggregator.publish(new BusyMessage(true));
          collectionInfo.value = getCollection(collectionName.value, currentNetworkIdx.value);
          if (!collectionInfo.value) {
            router.push({ name: '404' });
          }

          contractAddress.value = collectionInfo.value?.contractAddress ?? '';
          if (!isValidAddressPolkadotAddress(contractAddress.value)) {
            router.push({ name: '404' });
          } else {
            if (!contractAddress.value || !account.currentAccount.value) {
              return;
            }

            dryRunOutcome.value = await rmrkService.mintDryRun(
              contractAddress.value,
              account.currentAccount.value,
              collectionInfo.value?.mintPrice ?? BigInt(0)
            );
          }
        } catch (e) {
          console.error(e);
        }
      },
      { immediate: true }
    );

    watch(
      [result, error],
      () => {
        const post = result.value?.posts?.find((p: any) =>
          p.canonical.includes(contractAddress.value)
        );
        if (post) {
          title.value = post.title;
          description.value = post.body;
          imageUrl.value = `https://ipfs.subsocial.network/ipfs/${post.image}`;
        }
      },
      { immediate: true }
    );

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
