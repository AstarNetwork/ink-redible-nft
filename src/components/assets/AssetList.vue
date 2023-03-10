<template>
  <div v-if="currentAccount" class="wrapper--inventory">
    <div class="box--address">
      <span class="text--account">{{ currentAccountName }}</span>
      <span class="text--address">
        {{ address }}
      </span>
    </div>
    <div v-if="parentInventories">
      <div class="container--item">
        <div
          v-for="(item, index) in parentInventories"
          :key="index"
          class="card--item"
          @click="navigateToParent(item.id)"
        >
          <parent-card :id="Number(item.id)" />
        </div>
      </div>
    </div>
    <div v-else>
      <span>Your wallet does't have any items</span>
    </div>

    <!-- Memo: temporary example -->
    <div v-if="isShibuya" class="container--example">
      <div>
        <p class="text--xl">Fetching NFTs example</p>
        <p class="text--lg">Base Contract Address: {{ baseContractAddress }}</p>
        <p class="text--lg">Parts Address: {{ partsAddress }}</p>
      </div>

      <div>
        <p class="text--lg">Token ID: #{{ tokenId }}</p>
      </div>
      <div>
        <div class="image-container">
          <img
            v-for="(part, index) in parts"
            :key="`part-${index}`"
            class="image"
            :src="part.metadataUri"
          />
        </div>
      </div>
      <div v-if="parts.length > 0" class="container--item">
        <div v-for="(item, index) in parts" :key="index" class="card--item">
          <div v-if="item.metadataUri">
            <img :src="item.metadataUri" :alt="String(item.id)" class="item--img" />
            <div class="row--name">
              <span class="text--name">
                {{ item.id }}
              </span>
            </div>
            <div>
              <astar-button
                v-if="isSlot(item) && isSlotEquipped(item)"
                :width="80"
                :height="30"
                @click="unequip(item.id)"
              >
                Unequip
              </astar-button>
            </div>
          </div>
          <div v-else>
            <accepted-equipment
              v-if="isSlot(item) && !isSlotEquipped(item)"
              :token-id="tokenId"
              :slot-id="Number(item.id)"
              :get-children="getChildrenToEquipPreview"
              :equip="equip"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useAccount, useBreakpoints, useNft, useNetworkInfo } from 'src/hooks';
import { defineComponent, computed, watchEffect } from 'vue';
import { getShortenAddress } from '@astar-network/astar-sdk-core';
import { IBasePart, IdBasePart, ParentInventory } from 'src/modules/nft';
import { endpointKey } from 'src/config/chainEndpoints';
import AcceptedEquipment from 'src/components/assets/AcceptedEquipment.vue';
import ParentCard from 'src/components/assets/ParentCard.vue';
import { useStore } from 'src/store';
import { networkParam, Path } from 'src/router/routes';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { AcceptedEquipment, ParentCard },
  setup() {
    const { width, screenSize } = useBreakpoints();
    const { currentAccount, currentAccountName } = useAccount();
    const address = computed<string>(() => {
      const place = width.value > screenSize.md ? 0 : 15;
      return getShortenAddress(currentAccount.value, place);
    });
    const { currentNetworkIdx } = useNetworkInfo();
    const isShibuya = computed(() => currentNetworkIdx.value === endpointKey.SHIBUYA);
    const router = useRouter();
    const store = useStore();
    const parentInventories = computed<ParentInventory[]>(
      () => store.getters['assets/getParentInventories']
    );

    // Todo: get from url
    const tokenId = 1;
    const { parts, unequip, equip, getChildrenToEquipPreview, baseContractAddress, partsAddress } =
      useNft(tokenId);
    const isSlotEquipped = (part: IBasePart): boolean =>
      !!part.metadataUri && !!part.equippable && part.equippable.length > 0;

    const isSlot = (part: IBasePart): boolean => part.partType === 'Slot';
    watchEffect(() => {
      console.log('parts', parts.value);
    });

    const dummyItem = {
      id: 1,
      name: 'The Reborn Nebula',
      description: 'description',
      img: 'https://astar.network/_nuxt/reading-astar.87a786d8.svg',
      isValid: true,
    };

    const dummyList = [dummyItem, dummyItem, dummyItem, dummyItem];

    const navigateToParent = (id: string): void => {
      const base = networkParam + Path.Parent;
      const url = `${base}?tokenId=${id}`;
      router.push(url);
    };

    return {
      currentAccount,
      currentAccountName,
      address,
      dummyList,
      parts,
      baseContractAddress,
      partsAddress,
      tokenId,
      parentInventories,
      isShibuya,
      isSlotEquipped,
      isSlot,
      unequip,
      equip,
      getChildrenToEquipPreview,
      navigateToParent,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/assets/styles/asset-list.scss';
</style>
