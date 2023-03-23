<template>
  <div v-if="isValidContractAddress && isValidTokenId && token" class="img--nft-big">
    <q-carousel v-model="displayedAsset" animated arrows navigation infinite>
      <q-carousel-slide
        v-for="(asset, index) in token.assets"
        :key="index"
        :name="index"
        :img-src="sanitizeIpfsUrl(asset.assetUri)"
      />
    </q-carousel>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { isValidAddressPolkadotAddress } from '@astar-network/astar-sdk-core';
import { useToken } from 'src/hooks';
import { sanitizeIpfsUrl } from 'src/modules/nft/ipfs';

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
  },
  setup(props) {
    const { token } = useToken(props.contractAddress, props.tokenId);
    const isValidContractAddress = isValidAddressPolkadotAddress(props.contractAddress);
    const isValidTokenId = !!props.tokenId;
    const displayedAsset = ref(0);

    return { isValidContractAddress, isValidTokenId, token, displayedAsset, sanitizeIpfsUrl };
  },
});
</script>
<style lang="scss" scoped>
@use 'src/components/child/styles/child.scss';

.q-carousel {
  background-color: transparent;
  height: 320px;
  width: 320px;
  @media (min-width: $md) {
    height: 100%;
    width: 100%;
  }
}
</style>
