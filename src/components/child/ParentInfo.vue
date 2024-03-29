<template>
  <div class="wrapper--parent-info">
    <div class="box--title">
      <span class="text--parent">{{ $t('parent') }}</span>
    </div>
    <div v-if="equippedParentNft || isChild" class="box-nft--info">
      <span v-if="equippedParentNft && isChildAccepted">{{ $t('child.equippedInventory') }}</span>
      <span v-else-if="!isChildAccepted">{{ $t('child.equippedInventoryNotAccepted') }}</span>
      <span v-else class="text--description">
        {{ $t('child.unequippedInventory') }}
      </span>
      <div class="row--nft-img-buttons">
        <div class="box--nft-img" @click="navigateToParent">
          <img
            v-for="(part, index) in parts"
            :key="`part-${index}`"
            class="item--img"
            :src="part.partUri"
          />
        </div>
        <div class="column--nft-right">
          <div class="row--nft-title">
            <span class="text--label">{{ collectionName }}</span>
            <div v-if="isValid" class="icon--valid">
              <astar-icon-valid />
            </div>
          </div>
          <div class="row--parent-nft-id">
            <span class="text--lg">
              {{ tokenName }}
            </span>
          </div>
          <div class="buttons--xl-screen">
            <action-buttons
              :is-disabled="!slotVacant"
              :button-width="buttonWidth"
              :button-height="48"
              :is-equipped="equippedParentNft"
              :handle-equip="handleEquip"
              :handle-unequip="handleUnequip"
              :handle-bond="handleBond"
              :is-ready="!isLoadingItem && !isLoading"
              :is-child-accepted="isChildAccepted"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="box-nft--info">
      <div v-if="!isLoading && !isLoadingItem">
        <span v-if="!slotVacant" class="text--description">
          {{ $t('child.parentNotVacant') }}
        </span>
      </div>
      <div class="buttons--lg-screen">
        <action-buttons
          :is-disabled="!slotVacant"
          :button-width="buttonWidth"
          :button-height="48"
          :is-equipped="equippedParentNft"
          :handle-equip="handleEquip"
          :handle-unequip="handleUnequip"
          :handle-bond="handleBond"
          :is-ready="!isLoadingItem && !isLoading"
          :is-child-accepted="isChildAccepted"
        />
      </div>
    </div>
    <div class="buttons--phone-screen">
      <action-buttons
        :is-disabled="!slotVacant"
        :is-equipped="equippedParentNft"
        :button-width="buttonWidth"
        :button-height="48"
        :handle-equip="handleEquip"
        :handle-unequip="handleUnequip"
        :handle-bond="handleBond"
        :is-loading-item="isLoadingItem"
        :is-ready="!isLoadingItem && !isLoading"
        :is-child-accepted="isChildAccepted"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { getShortenAddress } from '@astar-network/astar-sdk-core';
import ActionButtons from 'src/components/child/ActionButtons.vue';
import { useBreakpoints, useToken } from 'src/hooks';
import { networkParam, Path } from 'src/router/routes';
import { Part } from 'src/v2/models';
import { computed, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

enum InventoryTab {
  inventory = 'Inventory',
  equipped = 'Equipped',
}

export default defineComponent({
  components: { ActionButtons },
  props: {
    collectionName: {
      type: String,
      required: true,
    },
    tokenName: {
      type: String,
      required: true,
    },
    isValid: {
      type: Boolean,
      required: false,
      default: false,
    },
    parentContractAddress: {
      type: String,
      required: true,
    },
    childContractAddress: {
      type: String,
      required: true,
    },
    parentTokenId: {
      type: String,
      required: true,
    },
    childTokenId: {
      type: String,
      required: true,
    },
    isChild: {
      type: Boolean,
      default: true,
    },
    isChildAccepted: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const { width, screenSize } = useBreakpoints();
    const router = useRouter();

    const { token, fetchToken, equip, unequip, acceptChild, isLoading } = useToken(
      props.parentContractAddress,
      props.parentTokenId
    );
    const parts = computed(() => token.value?.assets[0].parts ?? []);
    const isLoadingItem = ref<boolean>(false);
    const selectedTab = ref<InventoryTab>(InventoryTab.inventory);

    const loadParentToken = async (): Promise<void> => {
      await fetchToken(true);
    };

    const setSelectedTab = (isAttribute: boolean): void => {
      selectedTab.value = isAttribute ? InventoryTab.inventory : InventoryTab.equipped;
    };

    const buttonWidth = computed<number>(() => {
      // const widthTwoButtons = width.value > screenSize.xl ? 170 : 142;
      // const widthThreeButtons = width.value > screenSize.xl ? 124 : 102;
      return 130;
    });

    const slotVacant = computed<Part | undefined>(() => {
      const partFound = parts.value.find(
        (it) => it.partType === 'Slot' && it.equippable.includes(props.childContractAddress)
      );

      return partFound;
    });

    const equippedParentNft = computed<boolean>(() => {
      if (parts.value) {
        for (const part of parts.value) {
          if (
            part.children?.length > 0 &&
            part.equippable.includes(props.childContractAddress) &&
            part.children[0].tokenId === props.childTokenId
          ) {
            return true;
          }
        }
      }
      return false;
    });

    const handleUnequip = async (): Promise<void> => {
      const part = parts.value.find(
        (it) =>
          it.children?.length > 0 &&
          it.children[0].tokenId === props.childTokenId &&
          it.children[0].contractAddress === props.childContractAddress
      );
      await unequip(props.parentContractAddress, Number(part?.id));
      await loadParentToken();
      navigateToParent();
    };

    const handleEquip = async (): Promise<void> => {
      if (!slotVacant.value) return;
      const slotId = Number(slotVacant.value.id);
      await equip(
        slotId,
        props.childTokenId,
        props.parentContractAddress,
        props.childContractAddress
      );
      await loadParentToken();
      navigateToParent();
    };

    const handleBond = async (): Promise<void> => {
      await acceptChild(
        props.parentContractAddress,
        parseInt(props.parentTokenId),
        props.childContractAddress,
        parseInt(props.childTokenId)
      );
      await loadParentToken();
      navigateToParent();
    };

    const navigateToParent = (): void => {
      const base = networkParam + Path.Parent;
      const url = `${base}?parentId=${props.parentTokenId}&contractAddress=${props.parentContractAddress}`;
      router.push(url);
    };

    return {
      selectedTab,
      InventoryTab,
      buttonWidth,
      equippedParentNft,
      parts,
      isLoadingItem,
      isLoading,
      slotVacant,
      handleUnequip,
      handleEquip,
      setSelectedTab,
      getShortenAddress,
      navigateToParent,
      handleBond,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/child/styles/parent-info.scss';
</style>
