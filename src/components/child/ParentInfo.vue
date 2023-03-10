<template>
  <div class="wrapper--parent-info">
    <div class="box--title">
      <span class="text--parent">{{ $t('parent') }}</span>
    </div>
    <div v-if="equippedParentNft" class="box-nft--info">
      <span>{{ $t('child.equippedInventory') }}</span>
      <div class="row--nft-img-buttons">
        <div class="box--nft-img">
          <img
            v-for="(part, index) in equippedParentNft.parts"
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
              {{ $t('child.parentNft', { id: equippedParentNft.parentId }) }}
            </span>
          </div>
          <div class="buttons--lg-screen">
            <action-buttons
              :button-width="buttonWidth"
              :button-height="48"
              :is-equipped="!!equippedParentNft"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="box-nft--info">
      <span>{{ $t('child.unequippedInventory') }}</span>
      <div class="buttons--lg-screen">
        <action-buttons
          :button-width="buttonWidth"
          :button-height="48"
          :is-equipped="!!equippedParentNft"
        />
      </div>
    </div>
    <div class="buttons--phone-screen">
      <action-buttons
        :is-equipped="!!equippedParentNft"
        :button-width="buttonWidth"
        :button-height="48"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { getShortenAddress } from '@astar-network/astar-sdk-core';
import { useBreakpoints } from 'src/hooks';
import ActionButtons from 'src/components/child/ActionBurrons.vue';
import { IdBasePart } from 'src/modules/nft';
import { useStore } from 'src/store';
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

    const store = useStore();
    const parentNfts = computed<IdBasePart[]>(() => store.getters['assets/getParentNfts']);

    const tokenId = route.query.tokenId?.toString() ?? '';

    // Todo: refactor here to make it more scalable
    const equippedParentNft = computed<IdBasePart | false>(() => {
      const parentNftsRef = parentNfts.value;
      if (parentNftsRef) {
        for (const it of parentNftsRef) {
          for (const part of it.parts) {
            if (part.childId === Number(tokenId)) {
              return it;
            }
          }
        }
      }
      return false;
    });

    return {
      selectedTab,
      InventoryTab,
      setSelectedTab,
      getShortenAddress,
      buttonWidth,
      equippedParentNft,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/child/styles/parent-info.scss';
</style>
