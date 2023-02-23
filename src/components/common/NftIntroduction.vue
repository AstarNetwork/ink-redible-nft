<template>
  <div class="wrapper--nft-introduction">
    <div class="row--name">
      <span class="text--xl">{{ collection }}</span>
      <span class="text--xl">#{{ id }}</span>
    </div>
    <div class="box--title-description">
      <div class="row--title">
        <img :src="img" :alt="id" class="img--nft" />
        <div class="column--nft-title">
          <div>
            <span class="text--label">Collection</span>
          </div>
          <div class="row--title-valid">
            <span class="text--lg">{{ collection }}</span>
            <div v-if="isValid" class="icon--valid">
              <astar-icon-valid />
            </div>
          </div>
        </div>
      </div>
      <div class="box--description">
        <span class="text--description">{{ description }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    collection: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    isValid: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/common/styles/nft-introduction.scss';
</style>
