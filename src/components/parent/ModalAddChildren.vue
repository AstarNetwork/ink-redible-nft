<template>
  <modal-wrapper
    :is-modal-open="show"
    :title="$t('parentPage.modals.addChildren')"
    :is-closing="isClosingModal"
    :close-modal="closeModal"
  >
    <div class="wrapper">
      <div v-if="equippableTokens.length === 0">
        {{ $t('parentPage.modals.noChildrenToAdd') }}
      </div>
      <div v-else>{{ $t('parentPage.modals.addChildrenDescription') }}</div>
      <div v-for="(item, key) in equippableTokens" :key="key" class="wrapper--nft">
        <img :src="item.assets[0].assetUri" :alt="item.metadata?.name" class="img--nft" />
        <div class="info">
          <div class="collection--name">
            {{ getCollectionMetadata(item.contractAddress)?.name }}
          </div>
          <div class="name">{{ item.metadata?.name }}</div>
          <div class="wrapper--buttons">
            <astar-button
              v-if="!allowances[key] && allowances.length > 0"
              :width="100"
              :height="48"
              class="button-action"
              @click="approve(item.contractAddress, item.id)"
            >
              <span class="text--button">{{ $t('approve') }}</span>
            </astar-button>
            <astar-button
              :disabled="!allowances[key]"
              :width="200"
              :height="48"
              class="button-action"
              @click="addChild(item.contractAddress, item.id)"
            >
              <div class="icon--button">
                <icon-bond />
              </div>
              <span class="text--button">{{ $t('addToInventory') }}</span>
            </astar-button>
          </div>
        </div>
      </div>
    </div>
  </modal-wrapper>
</template>

<script lang="ts">
import { truncate, wait } from '@astar-network/astar-sdk-core';
import { fadeDuration } from '@astar-network/astar-ui';
import ModalWrapper from 'src/components/common/ModalWrapper.vue';
import { useAccount, useToken } from 'src/hooks';
import { useStore } from 'src/store';
import { OwnedToken } from 'src/store/assets/state';
import { ContractInventory } from 'src/v2/repositories';
import { defineComponent, ref, watch, computed } from 'vue';
import { Metadata } from 'src/v2/models';
import IconBond from './IconBond.vue';
import { container } from 'src/v2/common';
import { Symbols } from 'src/v2/symbols';
import { RmrkNftRepository } from 'src/v2/repositories/implementations';

export default defineComponent({
  components: { ModalWrapper, IconBond },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    setIsOpen: {
      type: Function,
      required: true,
    },
    parentContractAddress: {
      type: String,
      required: true,
    },
    parentTokenId: {
      type: Number,
      required: true,
    },
    addChild: {
      type: Function,
      required: true,
    },
    approveParent: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const { currentAccount } = useAccount();
    const isClosingModal = ref<boolean>(false);
    const equippableTokens = ref<OwnedToken[]>([]);
    const allowances = ref<boolean[]>([]);
    const { allSlots } = useToken(props.parentContractAddress, props.parentTokenId.toString());

    const inventory = computed<ContractInventory[]>(() => store.getters['assets/getInventory']);

    const closeModal = async (): Promise<void> => {
      isClosingModal.value = true;
      await wait(fadeDuration);
      props.setIsOpen(false);
      isClosingModal.value = false;
    };

    const findPossibleChildTokens = (): OwnedToken[] => {
      // 1. Find all addresses that can be equipped to the parent token
      const equippableAddresses = allSlots.value
        .map((slot) => slot.equippable)
        .reduce((a, b) => a.concat(b), []);
      // 2. Find addresses of all tokens owned by the user, but not equipped to another token.
      const equippableInventory = inventory.value.filter(
        (x) => equippableAddresses.indexOf(x.contractAddress) > -1 && !x.parent
      );
      // 3. Get tokens from the store
      const tokens = (<OwnedToken[]>store.getters['assets/getOwnedTokens']).filter(
        (x) =>
          equippableInventory.findIndex(
            (y) => y.tokenId.toString() === x.id && y.contractAddress === x.contractAddress
          ) > -1
      );

      return tokens;
    };

    const getAllowances = async (tokens: OwnedToken[]): Promise<boolean[]> => {
      const rmrkRepository = container.get<RmrkNftRepository>(Symbols.RmrkNftRepository);
      const promises = tokens.map((token) => {
        return rmrkRepository.getAllowance(
          token.contractAddress,
          currentAccount.value,
          props.parentContractAddress,
          parseInt(token.id)
        );
      });
      const allowances = await Promise.all(promises);

      return allowances;
    };

    const getCollectionMetadata = (contractAddress: string): Metadata | undefined =>
      store.getters['assets/getCollectionMetadata'](contractAddress);

    const approve = async (childContractAddress: string, childTokenId: string): Promise<void> => {
      await props.approveParent(childContractAddress, parseInt(childTokenId));
      allowances.value = await getAllowances(equippableTokens.value);
    };

    watch(
      allSlots,
      async () => {
        equippableTokens.value = findPossibleChildTokens();
        allowances.value = await getAllowances(equippableTokens.value);
        console.log(allowances.value);
      },
      { immediate: true }
    );

    return {
      close,
      truncate,
      closeModal,
      getCollectionMetadata,
      approve,
      allowances,
      isClosingModal,
      equippableTokens,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/css/quasar.variables.scss';
@use 'src/components/child/styles/action-buttons.scss';

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 36px;
  margin: 24px;
  @media (min-width: $md) {
    padding-bottom: 0px;
    margin: 0px;
  }
}

.wrapper--nft {
  width: 100%;
  display: flex;
  margin: 16px 0px;

  margin: 16px 0px;
  border-bottom: 1px solid #9da3ae;
  padding-bottom: 24px;
}

.wrapper--nft:last-child {
  border-bottom: none;
  padding-bottom: 0px;
}

.img--nft {
  width: 120px;
  height: 120px;
  border-radius: 16px;
  background: $img-background;
}

.info {
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  width: 100%;
}

.name {
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;
  margin-top: 12px;
  margin-bottom: 18px;
}

.collection--name {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #b1b7c1;
}

.right {
  margin-left: auto;
}

.wrapper--buttons {
  display: flex;
  column-gap: 16px;
}

.add--child {
  margin-left: 16px;
}
</style>
