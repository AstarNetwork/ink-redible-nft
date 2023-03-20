<template>
  <div class="wrapper--nft-introduction">
    <div class="row--name">
      <span class="text--xl">{{ tokenMetadata?.name }}</span>
    </div>
    <div class="box--title-description">
      <div class="row--title">
        <img
          :src="sanitizeIpfsUrl(collectionMetadata?.mediaUri)"
          :alt="collectionMetadata?.name"
          class="img--nft"
        />
        <div class="column--nft-title">
          <div>
            <span class="text--label">{{ $t('collection') }}</span>
          </div>
          <div class="row--title-valid">
            <span class="text--lg">{{ collectionMetadata?.name }}</span>
            <div v-if="isValid" class="icon--valid">
              <astar-icon-valid />
            </div>
          </div>
        </div>
      </div>
      <div class="box--description">
        <span class="text--description">{{ collectionMetadata?.description }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Metadata } from 'src/modules/nft';
import { sanitizeIpfsUrl } from 'src/modules/nft/ipfs';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    collectionMetadata: {
      type: Object as PropType<Metadata>,
      required: true,
    },
    tokenMetadata: {
      type: Object as PropType<Metadata>,
      required: true,
    },
    isValid: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {
    return { sanitizeIpfsUrl };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/common/styles/nft-introduction.scss';
</style>
