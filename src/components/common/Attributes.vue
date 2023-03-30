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
      <!-- <div v-if="ranking" class="container--ranking">
        <div class="column--ranking">
          <span class="text--ranking">{{ $t('assets.attributes.ranking') }}</span>
          <div class="row--ranking">
            <span class="text--ranking-value">{{ ranking }}</span>
            <span class="text--ranking-all">/ {{ rankingAll }}</span>
          </div>
        </div>
        <div v-if="rarity" class="column--ranking">
          <span class="text--ranking">{{ $t('assets.attributes.rarity') }}</span>
          <span class="text--ranking-value">{{ rarity }}</span>
        </div>
      </div> -->
      <div v-if="selectedTab === AttributeTab.attributes">
        <div v-if="metadata" class="wrapper--items">
          <div
            v-for="[key, value] in Object.entries(metadata.properties)"
            :key="key.toString()"
            class="wrapper--container--item"
          >
            <div class="container--item">
              <div>
                <span class="text--attributes-value">{{ key }}</span>
              </div>
              <div>
                <span class="text--attributes-value">{{ value.value }}</span>
              </div>
              <div class="column--change-rate">
                <!-- <span class="text--attributes-value">
                {{ item.changeRate > 0 ? `+ ${item.changeRate}%` : `${item.changeRate}%` }}
              </span> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="wrapper--items">
        <div class="container--specifics">
          <span class="text--attributes-value">Contract</span>
          <a
            :href="subScanContractUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="column--external-link"
          >
            <span class="text--attributes-value">
              {{ getShortenAddress(contractAddress) }}
            </span>
            <div class="icon--external-link">
              <astar-icon-external-link />
            </div>
          </a>
        </div>
        <div class="container--specifics">
          <span class="text--attributes-value">Token ID</span>
          <a
            href="https://astar.subscan.io/"
            target="_blank"
            rel="noopener noreferrer"
            class="column--external-link"
          >
            <span class="text--attributes-value">
              {{ tokenId }}
            </span>
            <div class="icon--external-link">
              <astar-icon-external-link />
            </div>
          </a>
        </div>
        <div class="container--specifics">
          <span class="text--attributes-value">Chain</span>
          <div class="column--chain">
            <!-- Todo: check the network information from metadata -->
            <img
              v-if="currentNetworkName === astarChain.ASTAR"
              src="../../assets/img/astar.png"
              alt="chain-image"
              class="img--chain"
            />
            <img
              v-else-if="currentNetworkName === astarChain.SHIDEN"
              src="../../assets/img/shiden_logo.png"
              alt="chain-image"
              class="img--chain"
            />
            <img
              v-else
              src="../../assets/img/shibuya_logo.png"
              alt="chain-image"
              class="img--chain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, computed } from 'vue';
import ModeTabs from 'src/components/common/ModeTabs.vue';
import { getShortenAddress } from '@astar-network/astar-sdk-core';
import { useNetworkInfo } from 'src/hooks';
import { astarChain } from 'src/config/chain';
import { providerEndpoints } from 'src/config/chainEndpoints';
import { Metadata } from 'src/modules/nft';
import { metadata } from '@polkadot/types/interfaces/essentials';

enum AttributeTab {
  attributes = 'Attributes',
  specifics = 'Specifics',
}

export default defineComponent({
  components: { ModeTabs },
  props: {
    ranking: {
      type: String,
      required: false,
      default: '',
    },
    rankingAll: {
      type: String,
      required: false,
      default: '',
    },
    rarity: {
      type: String,
      required: false,
      default: '',
    },
    metadata: {
      type: Object as PropType<Metadata | undefined>,
      required: true,
    },
    contractAddress: {
      type: String,
      required: true,
    },
    tokenId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const selectedTab = ref<AttributeTab>(AttributeTab.attributes);
    const { currentNetworkName, currentNetworkIdx } = useNetworkInfo();
    const subScanContractUrl = computed<string>(
      () => `${providerEndpoints[currentNetworkIdx.value].subscan}/account/${props.contractAddress}`
    );

    const setSelectedTab = (isAttribute: boolean): void => {
      if (isAttribute) {
        selectedTab.value = AttributeTab.attributes;
      } else {
        selectedTab.value = AttributeTab.specifics;
      }
    };

    return {
      selectedTab,
      AttributeTab,
      currentNetworkName,
      astarChain,
      subScanContractUrl,
      setSelectedTab,
      getShortenAddress,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/common/styles/attributes.scss';
</style>
