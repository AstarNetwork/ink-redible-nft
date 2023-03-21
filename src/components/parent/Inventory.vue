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

    <div v-if="selectedTab === InventoryTab.inventory">
      <div v-if="isLoadingInventory" class="wrapper--items container--spinner">
        <q-spinner-gears color="primary" :size="gearHeight" />
      </div>
      <div v-else class="wrapper--items">
        <div
          v-for="[k, v] in acceptableEquipments"
          :key="Number(k.u64)"
          class="card--item"
          @click="navigateToChildFromInventory(Number(k.u64), String(v[0]?.partsAddress))"
        >
          <div class="box--nft-img">
            <img
              :src="v[0]?.gatewayUrl"
              :alt="String(v[0]?.id)"
              class="img--item"
              :class="checkIsEquipped(Number(v[0]?.id)) && 'img--item--equipped'"
            />
          </div>
          <span class="text--name">{{ v[0]?.id }}</span>
        </div>
      </div>
    </div>
    <div v-else class="wrapper--items">
      <div
        v-for="(item, index) in equipped"
        :key="index"
        @click="navigateToChildFromEquipped(Number(item.id))"
      >
        <div v-if="!isSlot(item) || isSlotEquipped(item)" class="card--item">
          <div class="box--nft-img">
            <img :src="item.partUri" :alt="String(item.id)" class="img--item" />
          </div>
          <span class="text--name">{{ item.id }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { getShortenAddress } from '@astar-network/astar-sdk-core';
import ModeTabs from 'src/components/common/ModeTabs.vue';
import { useBreakpoints, Part } from 'src/hooks';
import { ExtendedAsset, IBasePart, Id } from 'src/modules/nft';
import { networkParam, Path } from 'src/router/routes';
import { computed, defineComponent, PropType, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

enum InventoryTab {
  inventory = 'Inventory',
  equipped = 'Equipped',
}

export default defineComponent({
  components: { ModeTabs },
  props: {
    parts: {
      type: Object as PropType<Part[]>,
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
    contractAddress: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const selectedTab = ref<InventoryTab>(InventoryTab.inventory);
    const acceptableEquipments = ref<Map<Id, (ExtendedAsset | null)[]>>();
    const router = useRouter();
    const route = useRoute();
    const parentId = route.query.parentId?.toString() ?? '';
    const isLoadingInventory = ref<boolean>(false);

    const { width, screenSize } = useBreakpoints();
    const gearHeight = computed<string>(() => (width.value > screenSize.md ? '100px' : '48px'));

    const setAcceptableEquipments = async (): Promise<void> => {
      isLoadingInventory.value = true;
      acceptableEquipments.value = await props.getChildren(props.tokenId);
      isLoadingInventory.value = false;
    };

    const setSelectedTab = (isAttribute: boolean): void => {
      if (isAttribute) {
        selectedTab.value = InventoryTab.inventory;
      } else {
        selectedTab.value = InventoryTab.equipped;
      }
    };

    const isSlotEquipped = (part: IBasePart): boolean => !!part.partUri && isSlot(part);
    const isSlot = (part: IBasePart): boolean => part.partType === 'Slot';

    const equipped = computed<IBasePart[]>(() => props.parts.filter((it) => isSlotEquipped(it)));

    const navigateToChildFromEquipped = (id: number): void => {
      const base = networkParam + Path.Child;
      const part = props.parts.find((it) => it.id === id);
      const url = `${base}?childId=${part?.children[0].id}&parentId=${parentId}&contractAddress=${part?.children[0].contractAddress}&parentContractAddress=${props.contractAddress}`;
      router.push(url);
    };

    const navigateToChildFromInventory = (childId: number, partsAddress: string): void => {
      const base = networkParam + Path.Child;
      const url = `${base}?childId=${childId}&parentId=${parentId}&contractAddress=${partsAddress}&parentContractAddress=${props.contractAddress}`;
      router.push(url);
    };

    const checkIsEquipped = (childId: number): boolean => {
      return equipped.value.some((it) => it.childId === childId);
    };

    watchEffect(setAcceptableEquipments);

    return {
      selectedTab,
      InventoryTab,
      equipped,
      acceptableEquipments,
      isLoadingInventory,
      gearHeight,
      setSelectedTab,
      getShortenAddress,
      isSlot,
      isSlotEquipped,
      navigateToChildFromInventory,
      navigateToChildFromEquipped,
      checkIsEquipped,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/parent/styles/inventory.scss';
</style>
