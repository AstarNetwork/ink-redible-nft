<template>
  <Teleport to="#app--main">
    <div :class="[!isLoading && 'highest-z-index', className]">
      <astar-default-modal
        v-if="isModalOpen"
        :show="isModalOpen"
        :title="title"
        :is-closing="isClosing"
        :width="600"
        @close="closeModal"
      >
        <slot />
      </astar-default-modal>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { useStore } from 'src/store';
import { defineComponent, computed } from 'vue';

// Memo: wrapper for astar-default-modal
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: false,
      default: '',
    },
    isModalOpen: {
      type: Boolean,
      required: true,
    },
    isClosing: {
      type: Boolean,
      required: true,
    },
    closeModal: {
      type: Function,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const isLoading = computed<boolean>(() => store.getters['general/isLoading']);
    return {
      isLoading,
    };
  },
});
</script>

<style lang="scss">
.body--dark {
  .modalbg[data-v-393868e4] {
    -webkit-backdrop-filter: blur(50px);
    backdrop-filter: blur(50px);
    background: #081029b3 !important;
  }

  .modal-content {
    background: #081029b3 !important;
  }
}
</style>
