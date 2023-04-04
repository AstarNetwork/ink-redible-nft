<template>
  <div id="app--main">
    <div :class="page === 'Assets' ? 'assets--bg' : 'nft--bg'">
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
import { defineComponent, computed } from 'vue';
import { useGasPrice } from 'src/hooks';
import PortalHeader from 'src/components/header/Header.vue';
import AppFooter from 'src/components/common/Footer.vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  components: {
    PortalHeader,
    AppFooter,
  },
  setup() {
    const isFetchGas = true;
    useGasPrice(isFetchGas);
    const route = useRoute();
    const page = computed<string>(() =>
      route.matched[0] && route.matched[0].hasOwnProperty('name')
        ? (route.matched[0].name as string)
        : ''
    );

    return { page };
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
  padding-top: 64px;
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

.nft--bg {
  background-color: #081029;
  @media (min-width: $lg) {
    background-image: url('src/assets/img/stars-3.svg');
    background-position: center top 100px;
  }
}

.assets--bg {
  background-color: #081029;
  @media (min-width: $lg) {
    background-image: url('src/assets/img/stars-4.svg');
    background-size: cover;
  }
}
</style>
