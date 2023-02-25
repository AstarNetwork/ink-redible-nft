<template>
  <div class="wrapper--child">
    <div class="container--child">
      <img :src="dummyNft.img" alt="nft-logo" class="img--nft-big" />

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
          :id="dummyNft.id"
          :collection="dummyNft.collection"
          :description="dummyNft.description"
          :img="dummyNft.img"
          :is-valid="dummyNft.isValid"
        />
      </div>
      <div class="wrapper--nft-option">
        <attributes :dummy-specifics="dummySpecifics" :dummy-items="dummyItems" />
        <parent-info
          :id="dummyParentNft.id"
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
import { computed, defineComponent } from 'vue';
import NftIntroduction from 'src/components/common/NftIntroduction.vue';
import Attributes from 'src/components/common/Attributes.vue';
import ParentInfo from 'src/components/child/ParentInfo.vue';

export default defineComponent({
  components: { NftIntroduction, Attributes, ParentInfo },
  setup() {
    const reload = (): void => {
      window.location.reload();
    };

    const dummyNft = computed(() => {
      return {
        id: '10',
        collection: 'Starmap',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: 'https://astar.network/_nuxt/reading-astar.87a786d8.svg',
        isValid: true,
      };
    });

    const dummyItems = [{ description: 'Background', value: 'AAA', changeRate: 20 }];

    const dummySpecifics = {
      contract: 'Axjio5fSDjfdsliZxNxNGhGhsdaZsifdslAbcCb02',
      tokenId: '10',
      chain: 'ASTAR',
    };

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

    return { dummyNft, reload, dummyItems, dummySpecifics, dummyParentNft };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/child/styles/child.scss';
</style>
