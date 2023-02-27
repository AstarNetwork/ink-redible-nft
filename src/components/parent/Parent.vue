<template>
  <div class="wrapper--parent">
    <div class="container--parent">
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
        <attributes
          ranking="1678"
          ranking-all="2222"
          rarity="34.19"
          :dummy-items="dummyItems"
          :dummy-specifics="dummySpecifics"
        />
        <inventory />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
// import { useRoute } from 'vue-router';
import NftIntroduction from 'src/components/common/NftIntroduction.vue';
import Attributes from 'src/components/common/Attributes.vue';
import Inventory from 'src/components/parent/Inventory.vue';

export default defineComponent({
  components: { NftIntroduction, Attributes, Inventory },
  setup() {
    // const route = useRoute();
    // const id = computed<string>(() => route.query.id as string);

    // watchEffect(() => {
    //   console.log('id', id);
    // });

    const reload = (): void => {
      window.location.reload();
    };

    const dummyNft = computed(() => {
      return {
        id: '555',
        collection: 'Starmap',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: require('../../assets/img/parent-example.svg'),
        isValid: true,
      };
    });

    const dummyItems = [
      { description: 'Background', value: 'AAA', changeRate: 20 },
      { description: 'Eyes', value: 'BBB', changeRate: 0 },
      { description: 'Signature', value: 'YES', changeRate: 30 },
    ];

    const dummySpecifics = {
      contract: 'Axjio5fSDjfdsliZxNxNGhGhsdaZsifdslAbcCb02',
      tokenId: '555',
      chain: 'ASTAR',
    };

    return { dummyNft, reload, dummyItems, dummySpecifics };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/parent/styles/parent.scss';
</style>
