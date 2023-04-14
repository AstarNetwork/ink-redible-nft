<template>
  <modal-wrapper
    :is-modal-open="show"
    :title="$t('parentPage.modals.acceptChild')"
    :is-closing="isClosingModal"
    :close-modal="closeModal"
  >
    <div class="wrapper">
      <div class="row--description">
        {{ $t('bondDescription') }}
      </div>

      <nft :contract-address="contractAddress" :token-id="childId" />
      <div class="row">
        <div class="row--collection">
          <span class="text--title">{{ collectionMetadata?.name }}</span>
          <div>
            <astar-icon-valid />
          </div>
        </div>
        <div class="row--collection">
          <span class="text--xl">{{ token?.metadata?.name }}</span>
        </div>
        <div class="row--collection row--attributes">
          <div
            v-for="[key, value] in Object.entries(token?.metadata?.properties)"
            :key="key.toString()"
            class="row--attribute"
          >
            <div class="attribute">{{ key }}</div>
            <div class="attribute">{{ value.value }}</div>
          </div>
        </div>
        <div class="row--collection row--buttons row">
          <astar-button :width="130" :height="48" class="button-action" @click="accept()">
            <div class="icon--button">
              <icon-bond />
            </div>
            <span class="text--button">{{ $t('bond') }}</span>
          </astar-button>
        </div>
      </div>
    </div>
  </modal-wrapper>
</template>

<script lang="ts">
import { truncate, wait } from '@astar-network/astar-sdk-core';
import { fadeDuration } from '@astar-network/astar-ui';
import ModalWrapper from 'src/components/common/ModalWrapper.vue';
import Nft from '../common/Nft.vue';
import { defineComponent, ref, computed } from 'vue';
import { useToken } from 'src/hooks';
import { useStore } from 'src/store';
import { Metadata } from 'src/v2/models';
import { ContractInventory } from 'src/v2/repositories';
import IconBond from './IconBond.vue';

export default defineComponent({
  components: { ModalWrapper, Nft, IconBond },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    setIsOpen: {
      type: Function,
      required: true,
    },
    contractAddress: {
      type: String,
      required: true,
    },
    childId: {
      type: String,
      required: true,
    },
    setChildren: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const { token, acceptChild, fetchToken } = useToken(props.contractAddress, props.childId);
    const collectionMetadata = computed<Metadata | undefined>(() =>
      store.getters['assets/getCollectionMetadata'](props.contractAddress)
    );
    const inventory = computed<ContractInventory>(() =>
      store.getters['assets/getInventory'].find(
        (x: ContractInventory) =>
          x.tokenId.toString() === props.childId && x.contractAddress === props.contractAddress
      )
    );

    const isClosingModal = ref<boolean>(false);
    const closeModal = async (): Promise<void> => {
      isClosingModal.value = true;
      await wait(fadeDuration);
      props.setIsOpen(false);
      isClosingModal.value = false;
    };

    const accept = async (): Promise<void> => {
      if (inventory && inventory.value.parent) {
        await acceptChild(
          inventory.value.parent?.contractAddress,
          inventory.value.parent?.tokenId,
          props.contractAddress,
          parseInt(props.childId)
        );
        await fetchToken(true);
        await props.setChildren();
        closeModal();
      } else {
        console.log('no parent');
      }
    };

    return {
      close,
      truncate,
      closeModal,
      isClosingModal,
      collectionMetadata,
      token,
      accept,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/child/styles/child.scss';
@use 'src/css/text.scss';
@use 'src/components/child/styles/action-buttons.scss';

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 36px;
  @media (min-width: $md) {
    padding-bottom: 0px;
  }
}

.row--collection {
  display: flex;
  column-gap: 10px;
  text-align: left;
  width: 100%;
  align-items: center;
}

.row--attributes {
  margin-top: 30px;
  padding: 24px;
  border-top: 1px solid $gray-3;
  border-bottom: 1px solid $gray-3;
}

.row--attribute {
  display: flex;
  width: 100%;
}

.attribute {
  width: 50%;
}

.row {
  margin-top: 30px;
}

.row--description {
  margin-bottom: 34px;
  padding: 0 16px;
  @media (min-width: $sm) {
    padding: 0;
  }
}
</style>
