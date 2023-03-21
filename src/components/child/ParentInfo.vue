<template>
  <div class="wrapper--parent-info">
    <div class="box--title">
      <span class="text--parent">{{ $t('parent') }}</span>
    </div>
    <div v-if="equippedParentNft" class="box-nft--info">
      <span v-if="!isLoading && !isLoadingItem">{{ $t('child.equippedInventory') }}</span>
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
              :is-disabled="!slotVacant"
              :button-width="buttonWidth"
              :button-height="48"
              :is-equipped="equippedParentNft"
              :handle-equip="handleEquip"
              :handle-unequip="handleUnequip"
              :is-ready="!isLoadingItem && !isLoading"
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
        <span v-else class="text--description">
          {{ $t('child.unequippedInventory') }}
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
          :is-ready="!isLoadingItem && !isLoading"
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
        :is-loading-item="isLoadingItem"
        :is-ready="!isLoadingItem && !isLoading"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { getShortenAddress } from '@astar-network/astar-sdk-core';
import ActionButtons from 'src/components/child/ActionButtons.vue';
import { useBreakpoints, useNft, useNft2, useToken, useAccount } from 'src/hooks';
import { ExtendedAsset, IBasePart, Id } from 'src/modules/nft';
import { networkParam, Path } from 'src/router/routes';
import { computed, defineComponent, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'src/store';

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
    parentContractAddress: {
      type: String,
      required: true,
    },
    childContractAddress: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { width, screenSize } = useBreakpoints();
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const account = useAccount();
    const childId = String(route.query.childId);
    const parentId = String(route.query.parentId);
    const parts = computed(() => token.value?.assets[0].parts ?? []);

    const { unequip, equip, isLoading } = useNft(Number(parentId));
    const { token, fetchToken } = useToken(props.parentContractAddress, parentId);
    const { getToken, getChildrenToEquipPreview } = useNft2();

    const itemPreview = ref<[Id, (ExtendedAsset | null)[]]>();
    const isLoadingItem = ref<boolean>(false);
    const selectedTab = ref<InventoryTab>(InventoryTab.inventory);

    const loadParentToken = async (): Promise<void> => {
      await fetchToken(true);
    };

    loadParentToken();

    const setSelectedTab = (isAttribute: boolean): void => {
      selectedTab.value = isAttribute ? InventoryTab.inventory : InventoryTab.equipped;
    };

    const buttonWidth = computed<number>(() => {
      const widthTwoButtons = width.value > screenSize.xl ? 170 : 142;
      const widthThreeButtons = width.value > screenSize.xl ? 124 : 102;
      return equippedParentNft ? widthThreeButtons : widthTwoButtons;
    });

    const slotVacant = computed<IBasePart | undefined>(() => {
      // return parts.value.find((it) => it.partType === 'Slot' && !it.childId);
      return parts.value.find(
        (it) => it.partType === 'Slot' && it.equippable.includes(props.childContractAddress)
      );
    });

    const equippedParentNft = computed<boolean>(() => {
      if (parts.value) {
        for (const part of parts.value) {
          if (
            part.children?.length > 0 &&
            part.equippable.includes(props.childContractAddress) &&
            part.children[0].id === Number(childId)
          ) {
            return true;
          }
        }
      }
      return false;
    });

    const setItemPreview = async (): Promise<void> => {
      if (!isLoading.value && slotVacant.value) {
        isLoadingItem.value = true;
        const preview = await getChildrenToEquipPreview(
          props.parentContractAddress,
          Number(parentId)
        );
        if (!preview) throw Error(`there are no equitable child Nfts with parentId:${parentId}`);
        itemPreview.value = Array.from(preview).find((it) => it[0].u64 === Number(childId));
        isLoadingItem.value = false;
      }
    };

    const handleUnequip = async (): Promise<void> => {
      const part = parts.value.find(
        (it) => it.children?.length > 0 && it.children[0].id === Number(childId)
      );
      await unequip(Number(part?.id));
      await loadParentToken();
    };

    const handleEquip = async (): Promise<void> => {
      if (!itemPreview.value || !slotVacant.value) return;
      // Todo: find a way to select the position (such as right or left hand) from UI
      const slotId = Number(slotVacant.value.id);
      await equip(
        slotId,
        itemPreview.value[0],
        itemPreview.value[1],
        props.parentContractAddress,
        props.childContractAddress
      );
      await loadParentToken();
    };

    const navigateToParent = (): void => {
      const base = networkParam + Path.Parent;
      const url = `${base}?parentId=${parentId}&contractAddress=${props.parentContractAddress}`;
      router.push(url);
    };

    watch([parts, isLoading], setItemPreview, { immediate: true });
    return {
      selectedTab,
      InventoryTab,
      buttonWidth,
      equippedParentNft,
      parts,
      parentId,
      isLoadingItem,
      isLoading,
      slotVacant,
      handleUnequip,
      handleEquip,
      setSelectedTab,
      getShortenAddress,
      navigateToParent,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/child/styles/parent-info.scss';
</style>
