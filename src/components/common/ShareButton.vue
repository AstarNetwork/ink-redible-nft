<template>
  <a :href="url" target="_blank">
    <astar-button :width="130" :height="48">
      <div class="row--button">
        <astar-icon-share />
        <span> {{ $t('share') }} </span>
      </div>
    </astar-button>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const url = `https://twitter.com/intent/tweet?text=Hey, look what I got from @AstarNetwork ${encodeURIComponent(
      window.location.href
    )}`;

    return { url };
  },
});
</script>

<style scoped>
.row--button {
  display: flex;
  justify-content: center;
  column-gap: 12px;
  align-items: center;
}
</style>
