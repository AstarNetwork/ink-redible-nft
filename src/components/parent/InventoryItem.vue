<template>
  <div class="card--item" @click="navigateToChildPage(contractAddress, tokenId)">
    <div class="box--nft-img">
      <img :src="asset?.assetUri" class="img--item" :class="isEquipped && 'img--item--equipped'" />
    </div>
    <span class="text--name">{{ token?.metadata?.name }}</span>
  </div>
</template>

<script lang="ts">
import { useToken } from 'src/hooks';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    contractAddress: {
      type: String,
      required: true,
    },
    tokenId: {
      type: String,
      required: true,
    },
    isEquipped: {
      type: Boolean,
      default: false,
    },
    navigateToChildPage: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const { token } = useToken(props.contractAddress, props.tokenId);
    const asset = computed(() => token.value?.assets[0]);

    return { asset, token };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/parent/styles/inventory.scss';
</style>
