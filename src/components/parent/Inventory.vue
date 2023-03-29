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
        <inventory-item
          v-for="(item, index) in acceptableEquipments"
          :key="index"
          :contract-address="item.contractAddress"
          :token-id="item.tokenId"
          :navigate-to-child-page="navigateToChildPage"
          :is-equipped="checkIsEquipped(item)"
        />
      </div>
    </div>
    <div v-else class="wrapper--items">
      <inventory-item
        v-for="(item, index) in equipped"
        :key="index"
        :contract-address="item.children[0].contractAddress"
        :token-id="item.children[0].tokenId"
        :navigate-to-child-page="navigateToChildPage"
        :is-equipped="true"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { getShortenAddress } from '@astar-network/astar-sdk-core';
import ModeTabs from 'src/components/common/ModeTabs.vue';
import { useBreakpoints } from 'src/hooks';
import { networkParam, Path } from 'src/router/routes';
import { AddressIdPair, TokenAsset, Part } from 'src/v2/models';
import { computed, defineComponent, PropType, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import InventoryItem from './InventoryItem.vue';

enum InventoryTab {
  inventory = 'Inventory',
  equipped = 'Equipped',
}

export default defineComponent({
  components: { ModeTabs, InventoryItem },
  props: {
    asset: {
      type: Object as PropType<TokenAsset>,
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
    const acceptableEquipments = ref<AddressIdPair[]>();
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

    const isSlotEquipped = (part: Part): boolean => !!part.partUri && isSlot(part);
    const isSlot = (part: Part): boolean => part.partType === 'Slot';

    const equipped = computed<Part[]>(() => props.asset.parts.filter((it) => isSlotEquipped(it)));

    const navigateToChildPage = (childContractAddress: string, childTokenId: string) => {
      const base = networkParam + Path.Child;
      const url = `${base}?childId=${childTokenId}&parentId=${parentId}&contractAddress=${childContractAddress}&parentContractAddress=${props.contractAddress}`;
      router.push(url);
    };

    const checkIsEquipped = (child: AddressIdPair): boolean => {
      return equipped.value.some((it) =>
        it.children.some(
          (x) => x.tokenId === child.tokenId && x.contractAddress === child.contractAddress
        )
      );
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
      navigateToChildPage,
      checkIsEquipped,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/parent/styles/inventory.scss';
</style>
