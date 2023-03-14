<template>
  <div id="app--main" class="tw-h-screen tw-flex tw-overflow-hidden">
    <div class="tw-flex tw-flex-col tw-w-0 tw-flex-1 tw-overflow-y-auto lg:tw-overflow-hidden">
      <portal-header />
      <main
        id="assets-top"
        class="
          tw-flex-1 tw-relative tw-z-0
          lg:tw-py-12 lg:tw-overflow-y-auto
          tw-overflow-x-hidden
          focus:tw-outline-none
          box--main
        "
      >
        <div class="wrapper--components">
          <slot />
        </div>
        <div class="wrapper--footer">
          <app-footer />
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGasPrice } from 'src/hooks';
import PortalHeader from 'src/components/header/Header.vue';
import AppFooter from 'src/components/common/Footer.vue';

export default defineComponent({
  components: {
    PortalHeader,
    AppFooter,
  },
  setup() {
    const isFetchGas = true;
    useGasPrice(isFetchGas);

    return {};
  },
});
</script>

<style lang="scss" scoped>
.wrapper--components {
  padding: 0 8px;
  @media (min-width: $lg) {
    padding: 0 108px;
  }
}

// Memo: makes footer on the bottom of the page
.box--main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.wrapper--footer {
  margin-top: auto;
}
</style>
