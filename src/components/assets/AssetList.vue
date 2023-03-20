<template>
  <div v-if="currentAccount" class="wrapper--inventory">
    <div class="box--address">
      <span class="text--account">{{ currentAccountName }}</span>
      <span class="text--address">
        {{ address }}
      </span>
    </div>
    <div v-if="inventory">
      <div class="container--item">
        <div
          v-for="(item, index) in inventory"
          :key="index"
          class="card--item"
          @click="navigateToParent(item.contractAddress, item.tokenId.toString())"
        >
          <parent-card :id="Number(item.tokenId)" :contract-address="item.contractAddress" />
        </div>
      </div>
    </div>
    <div v-else>
      <span>Your wallet does't have any items</span>
    </div>
  </div>
</template>
<script lang="ts">
import { useAccount, useBreakpoints, useNft2, useNetworkInfo } from 'src/hooks';
import { defineComponent, computed, watchEffect } from 'vue';
import { getShortenAddress } from '@astar-network/astar-sdk-core';
import { IBasePart } from 'src/modules/nft';
import ParentCard from 'src/components/assets/ParentCard.vue';
import { useStore } from 'src/store';
import { networkParam, Path } from 'src/router/routes';
import { useRouter } from 'vue-router';
import { ContractInventory } from 'src/v2/repositories/IRmrkNftRepository';

export default defineComponent({
  components: { ParentCard },
  setup() {
    const { width, screenSize } = useBreakpoints();
    const { currentAccount, currentAccountName } = useAccount();
    const address = computed<string>(() => {
      const place = width.value > screenSize.md ? 0 : 15;
      return getShortenAddress(currentAccount.value, place);
    });
    const { currentNetworkIdx } = useNetworkInfo();
    const router = useRouter();
    const store = useStore();
    const inventory = computed<ContractInventory[]>(() => store.getters['assets/getInventory']);
    const { availableContracts } = useNft2();

    const isSlot = (part: IBasePart): boolean => part.partType === 'Slot';
    const navigateToParent = (contractAddress: string, id: string): void => {
      const base = networkParam + Path.Parent;
      const url = `${base}?contractAddress=${contractAddress}&parentId=${id}`;
      router.push(url);
    };

    return {
      currentAccount,
      currentAccountName,
      address,
      availableContracts,
      inventory,
      isSlot,
      navigateToParent,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/assets/styles/asset-list.scss';
</style>
