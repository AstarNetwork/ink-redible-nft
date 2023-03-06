<template>
  <child />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Child from 'src/components/child/Child.vue';

export default defineComponent({
  components: { Child },
  setup() {
    return {};
  },
});
</script>
