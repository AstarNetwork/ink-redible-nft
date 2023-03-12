<template>
  <div class="wrapper--parent-info">
    <div class="box--title">
      <span class="text--parent">{{ $t('parent') }}</span>
    </div>
    <div v-if="equippedParentNft" class="box-nft--info">
      <span v-if="!isLoading && !isLoadingItem">{{ $t('child.equippedInventory') }}</span>
      <div class="row--nft-img-buttons">
        <div class="box--nft-img">
          <img
            v-for="(part, index) in parts"
            :key="`part-${index}`"
            class="item--img"
            :src="part.metadataUri"
          />
        </div>
        <div class="column--nft-right">
          <div class="row--nft-title">
            <span class="text--label">{{ collection }}</span>
            <div v-if="isValid" class="icon--valid">
              <astar-icon-valid />
            </div>
          </div>
          <div class="row--parent-nft-id">
            <span class="text--lg">
              {{ $t('child.parentNft', { id: parentId }) }}
            </span>
          </div>
          <div class="buttons--lg-screen">
            <action-buttons
              :button-width="buttonWidth"
              :button-height="48"
              :is-equipped="!!equippedParentNft"
              :handle-equip="handleEquip"
              :is-ready="!isLoadingItem && !isLoading"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="box-nft--info">
      <span v-if="!isLoading && !isLoadingItem">{{ $t('child.unequippedInventory') }}</span>
      <div class="buttons--lg-screen">
        <action-buttons
          :button-width="buttonWidth"
          :button-height="48"
          :is-equipped="equippedParentNft"
          :handle-equip="handleEquip"
          :is-ready="!isLoadingItem && !isLoading"
        />
      </div>
    </div>
    <div class="buttons--phone-screen">
      <action-buttons
        :is-equipped="equippedParentNft"
        :button-width="buttonWidth"
        :button-height="48"
        :handle-equip="handleEquip"
        :is-loading-item="isLoadingItem"
        :is-ready="!isLoadingItem && !isLoading"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { getShortenAddress } from '@astar-network/astar-sdk-core';
import ActionButtons from 'src/components/child/ActionButtons.vue';
import { useBreakpoints, useNft } from 'src/hooks';
import { ExtendedAsset, Id } from 'src/modules/nft';
import { computed, defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

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
    description: {
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
    const route = useRoute();
    const childId = route.query.childId?.toString() ?? '';
    const parentId = route.query.parentId?.toString() ?? '';
    const itemPreview = ref<[Id, (ExtendedAsset | null)[]]>();
    const isLoadingItem = ref<boolean>(false);

    const { parts, unequip, equip, getChildrenToEquipPreview, isLoading } = useNft(
      Number(parentId)
    );

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

    const equippedParentNft = computed<boolean>(() => {
      if (parts.value) {
        for (const part of parts.value) {
          if (part.childId === Number(childId)) {
            return true;
          }
        }
      }
      return false;
    });

    const setItemPreview = async (): Promise<void> => {
      if (!equippedParentNft.value && !isLoading.value) {
        isLoadingItem.value = true;
        const preview = await getChildrenToEquipPreview(Number(parentId));
        if (!preview) return;
        const p = Array.from(preview).find((it) => it[0].u64 === Number(childId));
        itemPreview.value = p;
        isLoadingItem.value = false;
      }
    };

    watch([equippedParentNft, isLoading], setItemPreview, { immediate: true });

    const handleEquip = async () => {
      if (equippedParentNft.value) {
        const part = parts.value.find((it) => it.childId === Number(childId));
        await unequip(Number(part?.id));
      } else {
        const p = itemPreview.value;
        if (!p) return;
        // Memo: find a way to select the position (such as right or left hand) from UI
        const slotLocation = parts.value.find((it) => it.partType === 'Slot' && !it.childId);
        const slotId = Number(slotLocation?.id);
        await equip(slotId, p[0], p[1]);
      }
    };

    return {
      selectedTab,
      InventoryTab,
      buttonWidth,
      equippedParentNft,
      parts,
      parentId,
      isLoadingItem,
      isLoading,
      handleEquip,
      setSelectedTab,
      getShortenAddress,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/child/styles/parent-info.scss';
</style>
