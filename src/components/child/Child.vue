<template>
  <div v-if="!isFetching" class="wrapper--child">
    <div class="container--child">
      <nft :contract-address="contractAddress" :token-id="childId" />

      <div class="buttons">
        <astar-button :width="130" :height="48">
          <div class="row--button">
            <astar-icon-share />
            <span> {{ $t('share') }} </span>
          </div>
        </astar-button>
        <astar-button :width="130" :height="48" @click="reload">
          <div class="row--button">
            <astar-icon-refresh />
            <span> {{ $t('refresh') }} </span>
          </div>
        </astar-button>
      </div>

      <div class="wrapper-nft-introduction">
        <nft-introduction
          :name="childDetail.name"
          :description="childDetail.description"
          :img="dummyParentNft.img"
          :collection="dummyParentNft.collection"
          :is-valid="true"
        />
      </div>
      <div class="wrapper--nft-option">
        <attributes
          :dummy-items="dummyItems"
          :token-id="childId"
          :contract-address="contractAddress"
        />
        <parent-info
          :collection="dummyParentNft.collection"
          :description="dummyParentNft.description"
          :img="dummyParentNft.img"
          :is-valid="dummyParentNft.isValid"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import ParentInfo from 'src/components/child/ParentInfo.vue';
import Attributes from 'src/components/common/Attributes.vue';
import Nft from 'src/components/common/Nft.vue';
import NftIntroduction from 'src/components/common/NftIntroduction.vue';
import { useChildNft } from 'src/hooks';
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: { NftIntroduction, Attributes, ParentInfo, Nft },
  setup() {
    const route = useRoute();
    const contractAddress = String(route.query.contractAddress);
    const childId = String(route.query.childId);
    const { isFetching, childDetail } = useChildNft(childId);

    const reload = (): void => {
      window.location.reload();
    };

    const dummyItems = [{ description: 'Background', value: 'AAA', changeRate: 20 }];

    const dummyParentNft = computed(() => {
      return {
        id: '555',
        collection: 'Starmap',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: require('../../assets/img/parent-example.svg'),
        isValid: true,
      };
    });

    return {
      dummyItems,
      dummyParentNft,
      contractAddress,
      childId,
      isFetching,
      childDetail,
      reload,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/child/styles/child.scss';
</style>
