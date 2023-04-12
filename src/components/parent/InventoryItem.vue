<template>
  <div
    class="card--item"
    @click="
      isAccepted ? navigateToChildPage(contractAddress, tokenId) : setShowAcceptChildModal(true)
    "
  >
    <div :class="isAccepted ? 'box--nft-img' : 'box--nft-img-pending'">
      <img :src="asset?.assetUri" class="img--item" :class="isEquipped && 'img--item--equipped'" />
    </div>
    <span class="text--name">{{ token?.metadata?.name }}</span>

    <modal-accept-child
      v-if="showAcceptChildModal"
      :set-is-open="setShowAcceptChildModal"
      :show="showAcceptChildModal"
      :contract-address="contractAddress"
      :child-id="tokenId"
      :set-children="setChildren"
    />
  </div>
</template>

<script lang="ts">
import { useToken } from 'src/hooks';
import { defineComponent, computed, ref } from 'vue';
import ModalAcceptChild from './ModalAcceptChild.vue';

export default defineComponent({
  components: { ModalAcceptChild },
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
    isAccepted: {
      type: Boolean,
      default: false,
    },
    navigateToChildPage: {
      type: Function,
      required: true,
    },
    setChildren: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const { token } = useToken(props.contractAddress, props.tokenId);
    const asset = computed(() => token.value?.assets[0]);
    const showAcceptChildModal = ref<boolean>(false);

    const setShowAcceptChildModal = (isOpen: boolean): void => {
      showAcceptChildModal.value = isOpen;
    };

    return { asset, token, showAcceptChildModal, setShowAcceptChildModal };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/parent/styles/inventory.scss';
</style>
