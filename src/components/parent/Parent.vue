<template>
  <div class="wrapper--parent">
    <div class="container--parent">
      <img :src="dummyNft.img" alt="nft-logo" class="img--nft-big" />

      <div class="buttons">
        <astar-button :width="130" :height="48">
          <span> {{ $t('share') }} </span>
        </astar-button>
        <astar-button :width="130" :height="48">
          <span> {{ $t('refresh') }} </span>
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
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
// import { useRoute } from 'vue-router';
import NftIntroduction from 'src/components/common/NftIntroduction.vue';

export default defineComponent({
  components: { NftIntroduction },
  setup() {
    // const route = useRoute();
    // const id = computed<string>(() => route.query.id as string);

    // watchEffect(() => {
    //   console.log('id', id);
    // });

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

    return { dummyNft };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/parent/styles/parent.scss';
</style>
