<template>
  <div class="tw-fixed tw-z-10 tw-inset-0 tw-overflow-y-auto wrapper">
    <div class="tw-flex tw-items-center tw-justify-center tw-min-h-screen">
      <!-- Background overlay -->
      <div class="tw-fixed tw-inset-0 tw-transition-opacity" aria-hidden="true">
        <div class="tw-absolute tw-inset-0 tw-opacity-75"></div>
      </div>

      <div class="tw-transform tw-text-gray-400 dark:tw-text-darkGray-500 loader">
        <astar-spinner />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
<style scoped lang="scss">
@import 'src/css/quasar.variables.scss';
.wrapper {
  background: rgba(255, 255, 255, 0.7);
}
.loader {
  min-height: 100px;
  min-width: 100px;
}
.body--dark {
  .wrapper {
    background: rgba(1, 1, 1, 0.6);
  }
}
</style>
