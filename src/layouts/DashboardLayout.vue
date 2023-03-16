<template>
  <div id="app--main">
    <div>
      <portal-header />
      <main class="box--main">
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
  height: 100%;
  @media (min-width: $lg) {
    padding: 0 96px;
  }
}

// Memo: makes footer on the bottom of the page
.box--main {
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: $lg) {
    padding-top: 64px;
    overflow-y: auto;
  }
}

.wrapper--footer {
  margin-top: auto;
  margin-bottom: 32px;
  @media (min-width: $lg) {
    margin-bottom: 0px;
  }
}

#app--main {
  background-image: url('src/assets/img/stars.svg');
  background-size: cover;
  background-color: #000000;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
}
</style>
