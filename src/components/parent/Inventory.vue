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
      <div v-for="[k, v] in acceptableEquipments" :key="Number(k.u64)" class="card--item">
        <div class="box--nft-img">
          <img :src="v[0]?.gatewayUrl" :alt="String(v[0]?.id)" class="img--item" />
        </div>
        <span class="text--name">{{ v[0]?.id }}</span>
      </div>
      <!-- <div class="card--item">
        <div class="box--nft-add">
          <span class="text--lg">+</span>
          <span class="text--name">{{ $t('add') }}</span>
        </div>
      </div> -->
    </div>
    <div v-else class="wrapper--items">
      <div v-for="(item, index) in equipped" :key="index">
        <div v-if="!isSlot(item) || isSlotEquipped(item)" class="card--item">
          <div class="box--nft-img">
            <img :src="item.metadataUri" :alt="String(item.id)" class="img--item" />
          </div>
          <span class="text--name">{{ item.id }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, computed, watchEffect } from 'vue';
import ModeTabs from 'src/components/common/ModeTabs.vue';
import { getShortenAddress } from '@astar-network/astar-sdk-core';
import { ExtendedAsset, IBasePart, Id } from 'src/modules/nft';

enum InventoryTab {
  inventory = 'Inventory',
  equipped = 'Equipped',
}

export default defineComponent({
  components: { ModeTabs },
  props: {
    parts: {
      type: Object as PropType<IBasePart[]>,
      required: true,
    },
    getChildren: {
      type: Function,
      required: true,
    },
    tokenId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const selectedTab = ref<InventoryTab>(InventoryTab.inventory);
    const acceptableEquipments = ref<Map<Id, (ExtendedAsset | null)[]>>();

    const setAcceptableEquipments = async (): Promise<void> => {
      acceptableEquipments.value = await props.getChildren(props.tokenId);
    };

    const setSelectedTab = (isAttribute: boolean): void => {
      if (isAttribute) {
        selectedTab.value = InventoryTab.inventory;
      } else {
        selectedTab.value = InventoryTab.equipped;
      }
    };

    const isSlotEquipped = (part: IBasePart): boolean =>
      !!part.metadataUri && !!part.equippable && part.equippable.length > 0;
    const isSlot = (part: IBasePart): boolean => part.partType === 'Slot';

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

    const equipped = computed<IBasePart[]>(() =>
      props.parts.filter((it) => !isSlot(it) || isSlotEquipped(it))
    );

    watchEffect(setAcceptableEquipments);

    return {
      selectedTab,
      InventoryTab,
      equipped,
      acceptableEquipments,
      setSelectedTab,
      getShortenAddress,
      isSlot,
      isSlotEquipped,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/parent/styles/inventory.scss';
</style>
