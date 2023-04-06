<template>
  <div class="header highest-z-index">
    <div class="header-left">
      <div>
        <slot name="left"></slot>
      </div>
    </div>
    <div class="header-right">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComp',
});
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

.header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 96px;
  padding: 40px 40px 25px 40px;
  background: rgba(247, 247, 248, 0.8);
  mix-blend-mode: normal;
  backdrop-filter: blur(200px);
  border-bottom: 1px solid;
  border-image: linear-gradient(
    90deg,
    #e6007a -4%,
    #e6007a -3.88%,
    #703ac2 17.01%,
    #0070eb 42.25%,
    #0297fb 73.9%,
    #0ae2ff 97.42%
  );
  border-image-slice: 1;
  @media (min-width: $lg) {
    padding-left: 88px;
    padding-right: 88px;
  }
}

.header-left {
  display: flex;
  height: 100%;
  align-items: center;
  font-weight: 590;
  font-size: 1.625rem;
  padding: 0.75rem;
  color: $gray-5-selected;
}

.header-right {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0.75rem;
}

.body--dark {
  .header {
    background: #081029;
    backdrop-filter: blur(50px);
  }
  .header-left {
    color: $gray-1;
  }
}

@media screen and (max-width: $lg) {
  .header {
    height: 4rem;
    padding-top: 36px;
    padding-left: 20px;
    padding-right: 16px;
  }

  .header-left {
    padding: 0rem;
  }

  .header-right {
    padding: 0rem;
  }
}
</style>
