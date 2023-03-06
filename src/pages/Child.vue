<template>
  <div v-if="isReady">
    <child />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Child from 'src/components/child/Child.vue';
import { usePageReady } from 'src/hooks';

export default defineComponent({
  components: { Child },
  setup() {
    const { isReady } = usePageReady();
    return { isReady };
  },
});
</script>
