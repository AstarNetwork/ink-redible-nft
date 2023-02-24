<template>
  <div class="wrapper--inventory">
    <div class="wrapper--mode-tabs">
      <mode-tabs
        :tab1="InventoryTab.inventory"
        :tab2="InventoryTab.equipped"
        :is-tab1="selectedTab === InventoryTab.inventory"
        :set-is-tab1="setSelectedTab"
      />
    </div>

    <div v-if="selectedTab === InventoryTab.inventory" class="wrapper--items">
      <div v-for="(item, index) in dummyList" :key="index" class="card--item">
        <div class="box--nft-img">
          <img :src="item.img" :alt="item.name" class="img--item" />
        </div>
        <span class="text--name">{{ item.name }}</span>
      </div>
    </div>
    <div v-else class="wrapper--items">
      <div v-for="(item, index) in dummyEquippedList" :key="index" class="card--item">
        <div class="box--nft-img">
          <img :src="item.img" :alt="item.name" class="img--item" />
        </div>
        <span class="text--name">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import ModeTabs from 'src/components/common/ModeTabs.vue';
import { getShortenAddress } from '@astar-network/astar-sdk-core';

enum InventoryTab {
  inventory = 'Inventory',
  equipped = 'Equipped',
}

export default defineComponent({
  components: { ModeTabs },
  setup(props) {
    const selectedTab = ref<InventoryTab>(InventoryTab.inventory);
    const setSelectedTab = (isAttribute: boolean): void => {
      if (isAttribute) {
        selectedTab.value = InventoryTab.inventory;
      } else {
        selectedTab.value = InventoryTab.equipped;
      }
    };

    const dummyItemA = {
      id: 1,
      name: 'The Reborn Nebula',
      description: 'description',
      img: 'https://astar.network/_nuxt/reading-astar.87a786d8.svg',
      isValid: true,
    };

    const dummyItemB = {
      id: 555,
      name: 'Starmap',
      description: 'description',
      img: require('../../assets/img/parent-example.svg'),
      isValid: true,
    };

    const dummyList = [dummyItemA, dummyItemB, dummyItemA, dummyItemB];

    const dummyEquippedList = [dummyItemB, dummyItemA];

    return {
      selectedTab,
      InventoryTab,
      setSelectedTab,
      getShortenAddress,
      dummyList,
      dummyEquippedList,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/common/styles/inventory.scss';
</style>
