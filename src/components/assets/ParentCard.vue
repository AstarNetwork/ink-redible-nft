<template>
  <div v-if="!isLoading">
    <div v-if="token && token.assets.length > 0" class="image-container--parent">
      <img
        v-for="(part, index) in token.assets[0].parts"
        :key="`part-${index}`"
        class="image--parent"
        :src="part.partUri"
      />
      <div v-if="token.assets.length === 0">
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
      <span class="text--description">
        {{ token?.metadata ? token.metadata.name : 'Unknown' }}
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';
import { useToken } from 'src/hooks';
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
    const collectionMetadata = computed<Metadata | undefined>(() =>
      store.getters['assets/getCollectionMetadata'](props.contractAddress)
    );
    const { token, isLoading, fetchChildren } = useToken(
      props.contractAddress,
      props.id.toString()
    );

    watch([token], () => {
      fetchChildren();
    });

    return { token, isLoading, collectionMetadata };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/assets/styles/parent-card.scss';
</style>
