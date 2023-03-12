<template>
  <div v-if="isReady">
    <assets />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Assets from 'src/components/assets/Assets.vue';
import { usePageReady } from 'src/hooks';

export default defineComponent({
  components: { Assets },
  setup() {
    const { isReady } = usePageReady();
    return { isReady };
  },
});
</script>
