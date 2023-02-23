<template>
  <div>
    <parent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Parent from 'src/components/parent/Parent.vue';

export default defineComponent({
  components: { Parent },
  setup() {
    return {};
  },
});
</script>
