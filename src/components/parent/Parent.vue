<template>
  <div v-if="!isLoading" class="wrapper--parent">
    <div class="container--parent">
      <div v-if="token && token.assets.length > 0" class="image-container--parent">
        <img
          v-for="(part, index) in token.assets[0].parts.filter((x) => x.partUri)"
          :key="`part-${index}`"
          class="image--parent"
          :src="part.partUri"
        />
        <div v-if="token.assets.length === 0" class="row--no-images">
          <span class="text--lg"> No images for token ID: {{ parentId }} </span>
        </div>
      </div>

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

      <div v-if="collectionMetadata && token?.metadata" class="wrapper-nft-introduction">
        <nft-introduction
          :collection-metadata="collectionMetadata"
          :token-metadata="token.metadata"
          :is-valid="true"
        />
      </div>
      <div class="wrapper--nft-option">
        <attributes
          ranking="1678"
          ranking-all="2222"
          rarity="34.19"
          :metadata="token?.metadata"
          :token-id="parentId"
          :contract-address="contractAddress"
        />
        <inventory
          v-if="token"
          :token-id="Number(parentId)"
          :contract-address="contractAddress"
          :asset="token.assets[0]"
          :get-children="getChildren"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import NftIntroduction from 'src/components/common/NftIntroduction.vue';
import Attributes from 'src/components/common/Attributes.vue';
import Inventory from 'src/components/parent/Inventory.vue';
import { useNft2, useToken } from 'src/hooks';
import { Metadata } from 'src/modules/nft';
import { useStore } from 'src/store';

export default defineComponent({
  components: { NftIntroduction, Attributes, Inventory },
  setup() {
    // TODO refactor this component is very similar to ParentCard, at least regarding NFT rendering,
    // there should be only one component which displays NFT.
    const store = useStore();
    const route = useRoute();
    const parentId = String(route.query.parentId);
    const contractAddress = String(route.query.contractAddress);
    const { token, isLoading } = useToken(contractAddress, parentId);
    const collectionMetadata = computed<Metadata | undefined>(() =>
      store.getters['assets/getCollectionMetadata'](contractAddress)
    );
    const { getChildrenToEquipPreview } = useNft2();

    const reload = (): void => {
      window.location.reload();
    };

    const getChildren = async () => {
      return await getChildrenToEquipPreview(contractAddress, parseInt(parentId));
    };

    return {
      isLoading,
      token,
      parentId,
      contractAddress,
      collectionMetadata,
      getChildren,
      reload,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/parent/styles/parent.scss';
</style>
