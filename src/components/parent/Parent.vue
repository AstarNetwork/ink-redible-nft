<template>
  <div v-if="!isLoading" class="wrapper--parent">
    <div class="container--parent">
      <div v-if="assets.length > 0" class="image-container--parent">
        <img
          v-for="(part, index) in assets[0].parts.filter((x) => x.partUri)"
          :key="`part-${index}`"
          class="image--parent"
          :src="part.partUri"
        />
        <div v-if="assets.length === 0" class="row--no-images">
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

      <div v-if="collectionMetadata && tokenMetadata" class="wrapper-nft-introduction">
        <nft-introduction
          :collection-metadata="collectionMetadata"
          :token-metadata="tokenMetadata"
          :is-valid="true"
        />
      </div>
      <div class="wrapper--nft-option">
        <attributes
          ranking="1678"
          ranking-all="2222"
          rarity="34.19"
          :metadata="tokenMetadata"
          :token-id="parentId"
          :contract-address="contractAddress"
        />
        <inventory
          :token-id="Number(parentId)"
          :contract-address="contractAddress"
          :parts="assets[0].parts"
          :get-children="getChildren"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import NftIntroduction from 'src/components/common/NftIntroduction.vue';
import Attributes from 'src/components/common/Attributes.vue';
import Inventory from 'src/components/parent/Inventory.vue';
import { useNft2, Asset } from 'src/hooks';
import { Metadata } from 'src/modules/nft';

export default defineComponent({
  components: { NftIntroduction, Attributes, Inventory },
  setup() {
    // TODO refactor this component is very similar to ParetnCard, at least regarding NFT rendering,
    // there should be only one component which displays NFT.
    const isLoading = ref<boolean>(false);
    const assets = ref<Asset[]>([]);
    const collectionMetadata = ref<Metadata | undefined>();
    const tokenMetadata = ref<Metadata | undefined>();
    const route = useRoute();
    const parentId = String(route.query.parentId);
    const contractAddress = String(route.query.contractAddress);
    const { getToken, getCollectionMetadata, getTokenMetadata, getChildrenToEquipPreview } =
      useNft2();

    const loadData = async (): Promise<void> => {
      isLoading.value = true;
      assets.value = await getToken(contractAddress, parseInt(parentId));
      // TODO this can be optimized to fetch collection metadata only once per contract.
      collectionMetadata.value = await getCollectionMetadata(contractAddress);
      tokenMetadata.value = await getTokenMetadata(contractAddress, parseInt(parentId));
      isLoading.value = false;
    };

    loadData();

    const reload = (): void => {
      window.location.reload();
    };

    const getChildren = () => {
      return getChildrenToEquipPreview(contractAddress, parseInt(parentId));
    };

    return {
      isLoading,
      assets,
      parentId,
      contractAddress,
      collectionMetadata,
      tokenMetadata,
      getChildren,
      reload,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/parent/styles/parent.scss';
</style>
