<template>
  <div v-if="currentAccount" class="wrapper--inventory">
    <div class="box--address">
      <span class="text--account">{{ currentAccountName }}</span>
      <span class="text--address">
        {{ address }}
      </span>
    </div>

    <div v-if="dummyList.length > 0" class="container--item">
      <div v-for="(item, index) in dummyList" :key="index" class="card--item">
        <img :src="item.img" :alt="item.name" class="item--img" />
        <div class="row--name">
          <span class="text--name">
            {{ item.name }}
          </span>
          <div v-if="item.isValid">
            <astar-icon-valid />
          </div>
        </div>
        <div>
          <span class="text--description">{{ item.description }}</span>
        </div>
      </div>
    </div>
    <div v-else>
      <span>Your wallet does't have any items</span>
    </div>

    <!-- Memo: temporary example -->
    <div class="container--example">
      <div>
        <p class="text--xl">Fetching NFTs example</p>
        <p class="text--lg">Chunky Address: {{ chunkyAddress }}</p>
        <p class="text--lg">Parts Address: {{ partsAddress }}</p>
      </div>

      <div>
        <p class="text--lg">Token ID: #{{ tokenId }}</p>
      </div>
      <div>
        <div class="image-container">
          <img
            v-for="(part, index) in parts"
            class="image"
            :src="part.metadataUri"
            :key="`part-${index}`"
          />
        </div>
      </div>
      <div v-if="parts.length > 0" class="container--item">
        <div v-for="(item, index) in parts" :key="index" class="card--item">
          <img :src="item.metadataUri" :alt="String(item.id)" class="item--img" />
          <div class="row--name">
            <span class="text--name">
              {{ item.id }}
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useAccount, useBreakpoints, useNft, chunkyAddress, partsAddress } from 'src/hooks';
import { defineComponent, computed, watchEffect } from 'vue';
import { getShortenAddress } from '@astar-network/astar-sdk-core';

export default defineComponent({
  components: {},
  setup() {
    const { width, screenSize } = useBreakpoints();
    const { currentAccount, currentAccountName } = useAccount();
    const address = computed<string>(() => {
      const place = width.value > screenSize.md ? 0 : 15;
      return getShortenAddress(currentAccount.value, place);
    });

    // Todo: get from url
    const tokenId = 1;
    const { parts } = useNft(tokenId);

    watchEffect(() => {
      console.log('parts', parts.value);
    });

    const dummyItem = {
      id: 1,
      name: 'The Reborn Nebula',
      description: 'description',
      img: 'https://astar.network/_nuxt/reading-astar.87a786d8.svg',
      isValid: true,
    };

    const dummyList = [dummyItem, dummyItem, dummyItem, dummyItem];

    return {
      currentAccount,
      currentAccountName,
      address,
      dummyList,
      parts,
      chunkyAddress,
      partsAddress,
      tokenId,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/assets/styles/asset-list.scss';
</style>
