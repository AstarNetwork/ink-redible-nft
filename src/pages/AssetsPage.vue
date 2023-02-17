<template>
  <div>
    <assets />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Assets from 'src/components/assets/Assets.vue';

export default defineComponent({
  components: { Assets },
  setup() {
    return {};
  },
});
</script>
