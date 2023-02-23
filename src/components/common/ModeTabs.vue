<template>
  <div class="row--tab">
    <div class="row--mode-tab">
      <div
        :class="[isTab1 ? 'selected-tab text--selected' : 'unselected-tab']"
        class="box--tab"
        @click="setIsTab1(true)"
      >
        <span class="text--title-tab"> {{ tab1 }} </span>
      </div>
      <div
        :class="[!isTab1 ? 'selected-tab text--selected' : 'unselected-tab']"
        class="box--tab"
        @click="setIsTab1(false)"
      >
        <span class="text--title-tab"> {{ tab2 }} </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isTab1: {
      type: Boolean,
      required: true,
    },
    setIsTab1: {
      type: Function,
      required: true,
    },
    tab1: {
      type: String,
      required: true,
    },
    tab2: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/common/styles/mode-tabs.scss';
</style>
