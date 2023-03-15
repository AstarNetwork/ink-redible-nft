<template>
  <div v-if="isValidContractAddress && isValidTokenId" class="img--nft-big">
    <q-carousel v-model="displayedAsset" animated arrows navigation infinite>
      <q-carousel-slide
        v-for="(asset, index) in assets"
        :key="index"
        :name="index"
        :img-src="asset.proxiedAssetUri"
      />
    </q-carousel>
  </div>
  <img
    v-else
    src="https://qph.cf2.quoracdn.net/main-qimg-ca529ccb08880f1f9a206a364e42ae62-lq"
    alt="nft-logo"
    class="img--nft-big"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { isValidAddressPolkadotAddress } from '@astar-network/astar-sdk-core';
import { useNft, AssetExtended } from 'src/hooks';

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
    const { getToken } = useNft(0);
    const isValidContractAddress = isValidAddressPolkadotAddress(props.contractAddress);
    const isValidTokenId = !!props.tokenId;
    const assets = ref<AssetExtended[]>([]);
    const displayedAsset = ref(0);

    const loadToken = async (): Promise<void> => {
      assets.value = await getToken(props.contractAddress, props.tokenId);
    };

    loadToken();

    return { isValidContractAddress, isValidTokenId, assets, displayedAsset };
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
