<template>
  <div v-if="isReady">
    <mint />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Mint from 'src/components/mint/Mint.vue';
import { usePageReady } from 'src/hooks';

export default defineComponent({
  components: { Mint },
  setup() {
    const { isReady } = usePageReady();
    return { isReady };
  },
});
</script>
