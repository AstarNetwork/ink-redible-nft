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
  </div>
</template>
<script lang="ts">
import { useAccount, useBreakpoints } from 'src/hooks';
import { defineComponent, computed } from 'vue';
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

    const dummyItem = {
      id: 1,
      name: 'The Reborn Nebula',
      description: 'description',
      img: 'https://astar.network/_nuxt/reading-astar.87a786d8.svg',
      isValid: true,
    };

    const dummyList = [dummyItem, dummyItem, dummyItem, dummyItem];

    return { currentAccount, currentAccountName, address, dummyList };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/assets/styles/asset-list.scss';
</style>