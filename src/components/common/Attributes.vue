<template>
  <div class="wrapper--attributes">
    <div class="wrapper--mode-tabs">
      <mode-tabs
        :tab1="AttributeTab.attributes"
        :tab2="AttributeTab.specifics"
        :is-tab1="selectedTab === AttributeTab.attributes"
        :set-is-tab1="setSelectedTab"
      />
    </div>
    <div class="wrapper--items">
      <div class="container--ranking">
        <div class="column--ranking">
          <span class="text--ranking">{{ $t('assets.attributes.ranking') }}</span>
          <div class="row--ranking">
            <span class="text--ranking-value">{{ ranking }}</span>
            <span class="text--ranking-all">/ {{ rankingAll }}</span>
          </div>
        </div>
        <div class="column--ranking">
          <span class="text--ranking">{{ $t('assets.attributes.rarity') }}</span>
          <span class="text--ranking-value">{{ rarity }}</span>
        </div>
      </div>
      <div v-if="selectedTab === AttributeTab.attributes" class="wrapper--items">
        <div v-for="item in dummyItems" :key="item.description" class="container--item">
          <span class="text--attributes-value">{{ item.description }}</span>
          <span class="text--attributes-value">{{ item.value }}</span>
          <div class="column--change-rate">
            <span class="text--attributes-value">
              {{ item.changeRate > 0 ? `+ ${item.changeRate}%` : `${item.changeRate}%` }}
            </span>
          </div>
        </div>
      </div>
      <div v-else class="wrapper--items">
        <div class="container--specifics">
          <span class="text--attributes-value">Contract</span>
          <div class="column--external-link">
            <span class="text--attributes-value">
              {{ getShortenAddress(dummySpecifics.contract) }}
            </span>
            <div class="icon--external-link">
              <astar-icon-external-link />
            </div>
          </div>
        </div>
        <div class="container--specifics">
          <span class="text--attributes-value">Token ID</span>
          <div class="column--external-link">
            <span class="text--attributes-value">
              {{ dummySpecifics.tokenId }}
            </span>
            <div class="icon--external-link">
              <astar-icon-external-link />
            </div>
          </div>
        </div>
        <div class="container--specifics">
          <span class="text--attributes-value">Chain</span>
          <div class="column--chain">
            <span class="text--attributes-value">
              {{ dummySpecifics.chain }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import ModeTabs from 'src/components/common/ModeTabs.vue';
import { getShortenAddress } from '@astar-network/astar-sdk-core';

enum AttributeTab {
  attributes = 'Attributes',
  specifics = 'Specifics',
}

export default defineComponent({
  components: { ModeTabs },
  props: {
    ranking: {
      type: String,
      required: true,
    },
    rankingAll: {
      type: String,
      required: true,
    },
    rarity: {
      type: String,
      required: false,
      default: '',
    },
  },
  setup(props) {
    const selectedTab = ref<AttributeTab>(AttributeTab.attributes);
    const setSelectedTab = (isAttribute: boolean): void => {
      if (isAttribute) {
        selectedTab.value = AttributeTab.attributes;
      } else {
        selectedTab.value = AttributeTab.specifics;
      }
      console.log('selectedTab.value', selectedTab.value);
    };
    const dummyItems = [
      { description: 'Background', value: 'AAA', changeRate: 20 },
      { description: 'Eyes', value: 'BBB', changeRate: 0 },
      { description: 'Signature', value: 'YES', changeRate: 30 },
    ];

    const dummySpecifics = {
      contract: 'Axjio5fSDjfdsliZxNxNGhGhsdaZsifdslAbcCb02',
      tokenId: '555',
      chain: 'ASTAR',
    };
    return {
      selectedTab,
      AttributeTab,
      dummyItems,
      dummySpecifics,
      setSelectedTab,
      getShortenAddress,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/common/styles/attributes.scss';
</style>
