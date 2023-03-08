<template>
  <div v-if="!isLoading" class="wrapper--parent">
    <div class="container--parent">
      <div class="image-container--parent">
        <img
          v-for="(part, index) in p"
          :key="`part-${index}`"
          class="image--parent"
          :src="part.metadataUri"
        />
        <div v-if="p.length === 0" class="row--no-images">
          <span class="text--lg">No images for token ID: {{ tokenId }}</span>
        </div>
      </div>

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
          :name="tokenId"
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
        <inventory
          :token-id="Number(tokenId)"
          :parts="p"
          :get-children="getChildrenToEquipPreview"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import NftIntroduction from 'src/components/common/NftIntroduction.vue';
import Attributes from 'src/components/common/Attributes.vue';
import Inventory from 'src/components/parent/Inventory.vue';
import { useNft } from 'src/hooks';
import { IBasePart } from 'src/modules/nft';

export default defineComponent({
  components: { NftIntroduction, Attributes, Inventory },
  setup() {
    const route = useRoute();
    const tokenId = computed<string>(() => route.query.tokenId as string);
    const { parts, isLoading, getChildrenToEquipPreview } = useNft(Number(tokenId.value));
    const p = computed<IBasePart[]>(() => parts.value as IBasePart[]);

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

    watchEffect(() => {
      console.log('parts', parts.value);
    });

    return {
      dummyNft,
      reload,
      dummyItems,
      dummySpecifics,
      isLoading,
      p,
      tokenId,
      getChildrenToEquipPreview,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/parent/styles/parent.scss';
</style>
