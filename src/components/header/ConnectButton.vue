<template>
  <button type="button" :class="width >= screenSize.sm ? 'btn--connect' : 'm-btn--connect'">
    <astar-icon-base class="iconbase" stroke="currentColor">
      <slot />
    </astar-icon-base>
    <template v-if="width >= screenSize.sm">
      {{ $t('connect') }}
    </template>
  </button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { useBreakpoints } from 'src/hooks';

export default defineComponent({
  setup(props) {
    const { width, screenSize } = useBreakpoints();

    return {
      width,
      screenSize,
      ...toRefs(props),
    };
  },
});
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';
@import 'src/css/utils.scss';

.btn--connect {
  display: flex;
  height: 32px;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px 8px 16px;
  border-radius: 16px;
  margin-left: 8px;
  background: #141c34;
  color: #fff;
  border: 1px solid $gray-6;
  transition: all 0.3s ease 0s;
}
.btn--connect:hover {
  background: $astar-blue;
}

.m-btn--connect {
  padding-left: 10px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-left: 16px;
  transition: all 0.3s ease 0s;
  background: #141c34;
  color: #fff;
}
.m-btn--connect:hover {
  background: $astar-blue;
}

.iconbase {
  width: rem(20);
  height: rem(20);
  margin-left: -4px;
  margin-right: 4px;
  color: $gray-4;
}
</style>
