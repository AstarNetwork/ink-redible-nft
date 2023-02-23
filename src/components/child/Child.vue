<template>
  <div class="wrapper--child">
    <h1>Child</h1>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  // components: { HeroConnectWallet, Inventory },
  setup() {
    const route = useRoute();
    const id = computed<string>(() => route.query.id as string);

    watchEffect(() => {
      console.log('id', id);
    });

    return { id };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/child/styles/child.scss';
</style>
