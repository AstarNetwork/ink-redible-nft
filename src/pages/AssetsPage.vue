<template>
  <div>
    <assets id="assets-top" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Assets from 'src/components/assets/Assets.vue';

export default defineComponent({
  components: { Assets },
  setup() {
    // useMeta(generateMeta(Path.Assets));
    // const store = useStore();
    // const { isMainnet } = useNetworkInfo();
    // const { currentAccount } = useAccount();
    // const xcmAssets = computed<XcmAssets>(() => store.getters['assets/getAllAssets']);

    // const handleLoadingAssets = async (): Promise<void> => {
    //   const account = localStorage.getItem(LOCAL_STORAGE.SELECTED_ADDRESS);
    //   if (!isMainnet.value || !account) {
    //     store.commit('general/setLoading', false);
    //     return;
    //   }
    //   if (xcmAssets.value.assets.length === 0) {
    //     store.commit('general/setLoading', true);
    //   } else {
    //     store.commit('general/setLoading', false);
    //   }
    // };
    // watch([xcmAssets], handleLoadingAssets, { immediate: true });
    return {};
  },
});
</script>
<style lang="scss" scoped>
#assets-top {
  @media (min-width: $lg) {
    margin-top: 50px;
  }
}
</style>
