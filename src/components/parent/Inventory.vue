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
        <div class="box--nft-img">
          <div class="img--plus" @click="setShowModalAddChildren(true)">
            <span class="text--plus">+</span>
            <span class="text--add">{{ $t('add') }}</span>
          </div>
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
            <img :src="item.metadataUri" :alt="String(item.id)" class="img--item" />
          </div>
          <span class="text--name">{{ item.id }}</span>
        </div>
      </div>
    </div>
    <modal-add-children
      v-if="showModalAddChildren"
      :set-is-open="setShowModalAddChildren"
      :show="showModalAddChildren"
    />
  </div>
</template>
<script lang="ts">
import { getShortenAddress } from '@astar-network/astar-sdk-core';
import ModeTabs from 'src/components/common/ModeTabs.vue';
import { useBreakpoints } from 'src/hooks';
import { ExtendedAsset, IBasePart, Id } from 'src/modules/nft';
import { networkParam, Path } from 'src/router/routes';
import { computed, defineComponent, PropType, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ModalAddChildren from 'src/components/parent/ModalAddChildren.vue';

enum InventoryTab {
  inventory = 'Inventory',
  equipped = 'Equipped',
}

export default defineComponent({
  components: { ModeTabs, ModalAddChildren },
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
    const router = useRouter();
    const route = useRoute();
    const parentId = route.query.parentId?.toString() ?? '';
    const isLoadingInventory = ref<boolean>(false);

    const { width, screenSize } = useBreakpoints();
    const gearHeight = computed<string>(() => (width.value > screenSize.md ? '100px' : '48px'));

    const showModalAddChildren = ref<boolean>(false);
    const setShowModalAddChildren = (isOpen: boolean): void => {
      showModalAddChildren.value = isOpen;
    };

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

    const isSlotEquipped = (part: IBasePart): boolean =>
      !!part.metadataUri && !!part.equippable && part.equippable.length > 0;
    const isSlot = (part: IBasePart): boolean => part.partType === 'Slot';

    const equipped = computed<IBasePart[]>(() => props.parts.filter((it) => isSlotEquipped(it)));

    const navigateToChildFromEquipped = (id: number): void => {
      const base = networkParam + Path.Child;
      const part = props.parts.find((it) => it.id === id);
      const url = `${base}?childId=${part?.childId}&parentId=${parentId}&contractAddress=${part?.childTokenAddress}`;
      router.push(url);
    };

    const navigateToChildFromInventory = (childId: number, partsAddress: string): void => {
      const base = networkParam + Path.Child;
      const url = `${base}?childId=${childId}&parentId=${parentId}&contractAddress=${partsAddress}`;
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
      showModalAddChildren,
      setSelectedTab,
      getShortenAddress,
      isSlot,
      isSlotEquipped,
      navigateToChildFromInventory,
      navigateToChildFromEquipped,
      checkIsEquipped,
      setShowModalAddChildren,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/parent/styles/inventory.scss';
</style>
