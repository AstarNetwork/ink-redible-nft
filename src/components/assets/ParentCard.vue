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
import { defineComponent, ref, computed } from 'vue';
import { Asset, useNft2 } from 'src/hooks';
import { Metadata } from 'src/v2/models';
import { useStore } from 'src/store';

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
    const store = useStore();
    const isLoading = ref<boolean>(false);
    const assets = ref<Asset[]>([]);
    const collectionMetadata = computed<Metadata | undefined>(() =>
      store.getters['assets/getCollectionMetadata'](props.contractAddress)
    );
    const tokenMetadata = ref<Metadata>();
    const { getToken, getTokenMetadata } = useNft2();

    const loadData = async (): Promise<void> => {
      isLoading.value = true;
      assets.value = await getToken(props.contractAddress, props.id);
      // TODO this can be optimized to fetch collection metadata only once per contract.
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
