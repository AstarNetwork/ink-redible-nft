<template>
  <div v-if="isReady">
    <parent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Parent from 'src/components/parent/Parent.vue';
import { usePageReady } from 'src/hooks';

export default defineComponent({
  components: { Parent },
  setup() {
    const { isReady } = usePageReady();
    return { isReady };
  },
});
</script>
