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
              :handle-equip="handleEquip"
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
          :handle-equip="handleEquip"
        />
      </div>
    </div>
    <div class="buttons--phone-screen">
      <action-buttons
        :is-equipped="!!equippedParentNft"
        :button-width="buttonWidth"
        :button-height="48"
        :handle-equip="handleEquip"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { getShortenAddress } from '@astar-network/astar-sdk-core';
import { useAccount, useBreakpoints, useNetworkInfo } from 'src/hooks';
import ActionButtons from 'src/components/child/ActionButtons.vue';
import { IdBasePart } from 'src/modules/nft';
import { useStore } from 'src/store';
import { useRoute } from 'vue-router';
import { providerEndpoints } from 'src/config/chainEndpoints';
import { container } from 'src/v2/common';
import { IRmrkNftService } from 'src/v2/services';
import { Symbols } from 'src/v2/symbols';

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
    const { currentAccount } = useAccount();
    const { currentNetworkIdx } = useNetworkInfo();
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

    const handleEquip = async () => {
      const rmrkNftService = container.get<IRmrkNftService>(Symbols.RmrkNftService) || '';

      if (equippedParentNft.value) {
        const baseContractAddress =
          String(providerEndpoints[Number(currentNetworkIdx.value)].baseContractAddress![0]) || '';
        const part = equippedParentNft.value.parts.find((it) => tokenId === String(it.childId));
        await rmrkNftService.unequip({
          contractAddress: baseContractAddress,
          tokenId: Number(equippedParentNft.value.parentId),
          slotId: String(part?.id),
          senderAddress: currentAccount.value,
        });
      } else {
        const partsAddress = String(
          providerEndpoints[Number(currentNetworkIdx.value)].partsAddress
        );

        // TODO see how to handle this
        // const parentAssetToEquip = '2';
        // TODO determine asset to equip
        // Assumption. Asset 0 is preview, asset 1 goes to lowest slot number, asset 2 to next one and so on....
        // const slots = parts.value.filter((x) => x.partType === 'Slot').map((x) => x.id);
        // const assetIndex = slots.indexOf(slot) + 1;
        // const assetId = assets ? assets[assetIndex]?.id.toString() : '1';
        // await rmrkNftService.equip({
        //   parentContractAddress: baseContractAddress,
        //   tokenId: { u64: tokenId },
        //   assetId: parentAssetToEquip,
        //   slot: Number(slot.toString()), // 12
        //   childContractAddress: partsAddress,
        //   childTokenId: childTokenId,  // {u64: 1}
        //   childAssetId: assetId ?? '1',
        //   senderAddress: currentAccount.value,
        // });
      }
    };

    return {
      selectedTab,
      InventoryTab,
      setSelectedTab,
      getShortenAddress,
      buttonWidth,
      equippedParentNft,
      handleEquip,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/child/styles/parent-info.scss';
</style>
