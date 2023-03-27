<template>
  <div v-if="!isFetching" class="wrapper--child">
    <div class="container--child">
      <nft :contract-address="contractAddress" :token-id="childId" />

      <div class="buttons">
        <astar-button :width="130" :height="48">
          <div class="row--button">
            <astar-icon-share />
            <span> {{ $t('share') }} </span>
          </div>
        </astar-button>
        <astar-button :width="130" :height="48" @click="reload">
          <div class="row--button">
            <astar-icon-refresh />
            <span> {{ $t('refresh') }} </span>
          </div>
        </astar-button>
      </div>

      <div class="wrapper-nft-introduction">
        <nft-introduction
          v-if="collectionMetadata && childTokenMetadata"
          :collection-metadata="collectionMetadata"
          :token-metadata="childTokenMetadata"
          :is-valid="true"
        />
      </div>
      <div class="wrapper--nft-option">
        <attributes
          v-if="childTokenMetadata"
          :metadata="childTokenMetadata"
          :token-id="childId"
          :contract-address="contractAddress"
        />
        <parent-info
          :collection="parentTokenMetadata?.name ?? ''"
          :description="parentTokenMetadata?.description ?? ''"
          :img="sanitizeIpfsUrl(parentTokenMetadata?.image)"
          :is-valid="true"
          :parent-contract-address="parentContractAddress"
          :child-contract-address="contractAddress"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import ParentInfo from 'src/components/child/ParentInfo.vue';
import Attributes from 'src/components/common/Attributes.vue';
import Nft from 'src/components/common/Nft.vue';
import NftIntroduction from 'src/components/common/NftIntroduction.vue';
import { useChildNft, useToken, useAccount } from 'src/hooks';
import { Metadata } from 'src/modules/nft';
import { sanitizeIpfsUrl } from 'src/modules/nft/ipfs';
import { useStore } from 'src/store';

export default defineComponent({
  components: { NftIntroduction, Attributes, ParentInfo, Nft },
  setup() {
    const route = useRoute();
    const store = useStore();
    const account = useAccount();
    const contractAddress = String(route.query.contractAddress);
    const parentContractAddress = String(route.query.parentContractAddress);
    const childId = String(route.query.childId);
    const parentId = String(route.query.parentId);
    const childToken = useToken(contractAddress, childId);
    const parentToken = useToken(parentContractAddress, parentId);
    const childTokenMetadata = computed(() => childToken.token.value?.metadata);
    const parentTokenMetadata = computed(() => parentToken.token.value?.metadata);
    const { isFetching, childDetail } = useChildNft(
      parentContractAddress,
      contractAddress,
      childId
    );
    const collectionMetadata = computed<Metadata | undefined>(() =>
      store.getters['assets/getCollectionMetadata'](contractAddress)
    );

    const reload = (): void => {
      window.location.reload();
    };

    return {
      sanitizeIpfsUrl,
      collectionMetadata,
      parentTokenMetadata,
      childTokenMetadata,
      contractAddress,
      parentContractAddress,
      childId,
      isFetching,
      childDetail,
      reload,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/child/styles/child.scss';
</style>
