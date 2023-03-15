<template>
  <div v-if="!isLoading">
    <div class="image-container--parent">
      <img
        v-for="(part, index) in parts"
        :key="`part-${index}`"
        class="image--parent"
        :src="part.metadataUri"
      />
      <div v-if="parts.length === 0">
        <span class="text--lg">No images for token ID: {{ id }}</span>
      </div>
    </div>

    <div class="row--name">
      <span class="text--collection">Collection </span>
      <div v-if="true">
        <astar-icon-valid />
      </div>
    </div>
    <div class="row--name-info">
      <span class="text--description"> Token ID: {{ id }} </span>
    </div>
  </div>
</template>
<script lang="ts">
import { useNft } from 'src/hooks';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { parts, isLoading } = useNft(props.id);
    return { parts, isLoading };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/assets/styles/parent-card.scss';
</style>
