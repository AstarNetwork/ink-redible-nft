<template>
  <div v-if="!isLoading">
    <div v-if="assets.length > 0" class="image-container--parent">
      <img
        v-for="(part, index) in assets[0].parts"
        :key="`part-${index}`"
        class="image--parent"
        :src="part.partUri"
      />
      <div v-if="assets.length === 0">
        <span class="text--lg">No images for token ID: {{ id }}</span>
      </div>
    </div>

    <div class="row--name">
      <span class="text--collection">{{
        collectionMetadata ? collectionMetadata.name : 'unknown'
      }}</span>
      <div v-if="true">
        <astar-icon-valid />
      </div>
    </div>
    <div class="row--name-info">
      <span class="text--description"> {{ tokenMetadata ? tokenMetadata.name : 'Unknown' }} </span>
    </div>
  </div>
</template>
<script lang="ts">
import { Asset, useNft2 } from 'src/hooks';
import { Metadata } from 'src/modules/nft';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    contractAddress: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const isLoading = ref<boolean>(false);
    const assets = ref<Asset[]>([]);
    const collectionMetadata = ref<Metadata>();
    const tokenMetadata = ref<Metadata>();
    const { getToken, getCollectionMetadata, getTokenMetadata } = useNft2();

    const loadData = async (): Promise<void> => {
      isLoading.value = true;
      assets.value = await getToken(props.contractAddress, props.id);
      // TODO this can be optimized to fetch collection metadata only once per contract.
      collectionMetadata.value = await getCollectionMetadata(props.contractAddress);
      tokenMetadata.value = await getTokenMetadata(props.contractAddress, props.id);
      isLoading.value = false;
    };

    loadData();

    return { assets, isLoading, collectionMetadata, tokenMetadata };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/assets/styles/parent-card.scss';
</style>
