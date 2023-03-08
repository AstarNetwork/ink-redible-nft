<template>
  <div class="wrapper--parent-info">
    <div class="box--title">
      <span class="text--parent">{{ $t('parent') }}</span>
    </div>
    <div class="box-nft--info">
      <span>{{ $t('child.equippedInventory') }}</span>
      <div class="row--nft-img-buttons">
        <img :src="img" alt="parent" class="box--nft-img" />
        <div class="column--nft-right">
          <div class="row--nft-title">
            <span class="text--label">{{ collection }}</span>
            <div v-if="isValid" class="icon--valid">
              <astar-icon-valid />
            </div>
          </div>
          <div class="row--parent-nft-id">
            <span class="text--lg">
              {{ $t('child.parentNft', { id }) }}
            </span>
          </div>
          <div class="buttons--lg-screen">
            <action-buttons :button-width="buttonWidth" :button-height="48" />
          </div>
        </div>
      </div>
    </div>
    <div class="buttons--phone-screen">
      <action-buttons :button-width="buttonWidth" :button-height="48" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { getShortenAddress } from '@astar-network/astar-sdk-core';
import { useBreakpoints } from 'src/hooks';
import ActionButtons from 'src/components/child/ActionBurrons.vue';
enum InventoryTab {
  inventory = 'Inventory',
  equipped = 'Equipped',
}

export default defineComponent({
  components: { ActionButtons },
  props: {
    collection: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    isValid: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const { width, screenSize } = useBreakpoints();
    const selectedTab = ref<InventoryTab>(InventoryTab.inventory);
    const setSelectedTab = (isAttribute: boolean): void => {
      if (isAttribute) {
        selectedTab.value = InventoryTab.inventory;
      } else {
        selectedTab.value = InventoryTab.equipped;
      }
    };

    const buttonWidth = computed<number>(() => (width.value > screenSize.xl ? 170 : 142));
    // const buttonWidth = computed<number>(() => (width.value > screenSize.xl ? 124 : 102));

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
      buttonWidth,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/child/styles/parent-info.scss';
</style>
