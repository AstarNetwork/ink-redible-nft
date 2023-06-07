<template>
  <div class="wrapper--mint">
    <div class="container--mint">
      <img v-if="imageUrl" class="collection--image" :src="imageUrl" />
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

    watch(
      [collectionName, account.currentAccount, currentNetworkIdx],
      async () => {
        try {
          collectionInfo.value = getCollection(collectionName.value, currentNetworkIdx.value);
          if (!collectionInfo.value) {
            router.push({ name: '404' });
          }

          contractAddress.value = collectionInfo.value?.contractAddress ?? '';
          if (!isValidAddressPolkadotAddress(contractAddress.value)) {
            router.push({ name: '404' });
          } else {
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
        console.log('error', error.value);
        console.log('result', result.value);
        if (result.value?.posts?.length > 0) {
          title.value = result.value.posts[0].title;
          description.value = result.value.posts[0].body;
          imageUrl.value = `https://ipfs.subsocial.network/ipfs/${result.value.posts[0].image}`;
        }
      },
      { immediate: true }
    );

    return { contractAddress, canMint, dryRunOutcome, mint, title, description, imageUrl };
  },
});
</script>
<style scoped lang="scss">
@use 'src/components/mint/styles/mint.scss';
</style>
