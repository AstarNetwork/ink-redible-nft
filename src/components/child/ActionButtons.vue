<template>
  <div v-if="isReady" class="row--buttons">
    <astar-button
      v-if="isEquipped"
      :width="buttonWidth"
      :height="buttonHeight"
      class="button-action"
      @click="handleUnequip()"
    >
      <div class="icon--button">
        <astar-icon-unequip />
      </div>
      <span class="text--button">{{ $t('unequip') }}</span>
    </astar-button>

    <astar-button
      :disabled="isDisabled"
      :width="buttonWidth"
      :height="buttonHeight"
      class="button-action"
      @click="handleEquip()"
    >
      <div class="icon--button">
        <astar-icon-equip />
      </div>
      <span class="text--button">{{ $t('equip') }}</span>
    </astar-button>
    <a href="https://astar.subscan.io/" target="_blank" rel="noopener noreferrer">
      <astar-button :width="buttonWidth" :height="buttonHeight" class="button-action">
        <div class="icon--button">
          <astar-icon-external-link />
        </div>
        <span class="text--button"> {{ $t('detail') }} </span>
      </astar-button>
    </a>
  </div>
  <div v-else class="container--spinner">
    <q-spinner-gears color="primary" size="56px" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  props: {
    buttonWidth: {
      type: Number,
      required: true,
    },
    buttonHeight: {
      type: Number,
      required: true,
    },
    isEquipped: {
      type: Boolean,
      required: true,
    },
    isReady: {
      type: Boolean,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      required: true,
    },
    handleEquip: {
      type: Function,
      required: true,
    },
    handleUnequip: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/child/styles/action-buttons.scss';
</style>
