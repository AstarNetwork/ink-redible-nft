<template>
  <div class="wrapper--accepted-equipment">
    <div v-for="[k, v] in previews" :key="Number(k.u64)" class="container--equipment">
      <!-- Assuming that asset with index 0 is preview one -->
      <img :src="v[0]?.gatewayUrl" /><br />
      <astar-button :width="80" :height="30" @click="equip(slotId, k, previews?.get(k))">
        <span>
          {{ $t('equip') }}
        </span>
      </astar-button>
    </div>
  </div>
</template>
<script lang="ts">
import { Id, ExtendedAsset } from 'src/modules/nft';
import { defineComponent, watchEffect, ref } from 'vue';

export default defineComponent({
  props: {
    tokenId: {
      type: Number,
      required: true,
    },
    slotId: {
      type: Number,
      required: true,
    },
    getChildren: {
      type: Function,
      required: true,
    },
    equip: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const previews = ref<Map<Id, (ExtendedAsset | null)[]>>();

    const getPreviews = async (): Promise<void> => {
      previews.value = await props.getChildren(props.tokenId);
    };

    watchEffect(async () => {
      await getPreviews();
    });

    return {
      previews,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/assets/styles/accepted-equipemnt.scss';
</style>
