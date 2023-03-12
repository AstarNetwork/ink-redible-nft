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
      <div
        v-for="[k, v] in acceptableEquipments"
        :key="Number(k.u64)"
        class="card--item"
        @click="navigateToChildFromInventory(Number(k.u64), String(v[0]?.partsAddress))"
      >
        <div class="box--nft-img">
          <img :src="v[0]?.gatewayUrl" :alt="String(v[0]?.id)" class="img--item" />
        </div>
        <span class="text--name">{{ v[0]?.id }}</span>
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
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, computed, watchEffect } from 'vue';
import ModeTabs from 'src/components/common/ModeTabs.vue';
import { getShortenAddress } from '@astar-network/astar-sdk-core';
import { ExtendedAsset, IBasePart, Id } from 'src/modules/nft';
import { networkParam, Path } from 'src/router/routes';
import { useAccount, useNetworkInfo } from 'src/hooks';
import { providerEndpoints } from 'src/config/chainEndpoints';
import { useRouter, useRoute } from 'vue-router';
import { getContract, getGasLimit } from 'src/modules/nft/common-api';
import { $api } from 'src/boot/api';

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
    const { currentAccount } = useAccount();
    const { currentNetworkIdx } = useNetworkInfo();
    const router = useRouter();
    const route = useRoute();
    const parentId = route.query.parentId?.toString() ?? '';

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

    const equipped = computed<IBasePart[]>(() => props.parts.filter((it) => isSlotEquipped(it)));

    const navigateToChildFromEquipped = async (id: number): Promise<void> => {
      try {
        const mainContractAddress =
          String(providerEndpoints[Number(currentNetworkIdx.value)].baseContractAddress![0]) || '';
        const contract = await getContract({ api: $api!, address: mainContractAddress });

        const { output: equipment } = await contract.query['equippable::getEquipment'](
          currentAccount.value,
          {
            gasLimit: getGasLimit(contract.api),
            storageDepositLimit: null,
          },
          { u64: parentId },
          id
        );
        const equipmentString = equipment?.toString() as string;
        const childId = Number(JSON.parse(equipmentString).childNft[1].u64);
        const childTokenAddress = String(JSON.parse(equipmentString).childNft[0]);
        const base = networkParam + Path.Child;
        const url = `${base}?childId=${childId}&parentId=${parentId}&contractAddress=${childTokenAddress}`;
        router.push(url);
      } catch (error) {
        console.error(error);
        const fallback = networkParam + Path.Assets;
        router.push(fallback);
      }
    };

    const navigateToChildFromInventory = (childId: number, partsAddress: string): void => {
      const base = networkParam + Path.Child;
      const url = `${base}?childId=${childId}&parentId=${parentId}&contractAddress=${partsAddress}`;
      router.push(url);
    };

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
      navigateToChildFromInventory,
      navigateToChildFromEquipped,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/parent/styles/inventory.scss';
</style>
