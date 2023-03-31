<template>
  <div class="wrapper--footer">
    <div class="box--footer" :class="isAssetsPage ? 'box--footer-assets' : 'box--footer-nft '">
      <div class="row--icons">
        <a :href="socialUrl.discord" target="_blank" class="icon-link" rel="noreferrer">
          <astar-icon-base class="icon" viewBox="0 0 448 512" icon-name="Discord">
            <astar-icon-discord />
          </astar-icon-base>
        </a>
        <a :href="socialUrl.twitter" target="_blank" class="icon-link" rel="noreferrer">
          <astar-icon-base class="icon" viewBox="0 0 512 512" icon-name="Twitter">
            <astar-icon-twitter />
          </astar-icon-base>
        </a>
        <a :href="socialUrl.github" target="_blank" class="icon-link" rel="noreferrer">
          <astar-icon-base class="icon icon--github" viewBox="0 0 448 512" icon-name="GitHub">
            <astar-icon-github />
          </astar-icon-base>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { socialUrl } from 'src/links';
import { Path } from 'src/router';
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const isAssetsPage = computed<boolean>(() => {
      const paths = route.path.split('/');
      return `/${paths[paths.length - 1]}` === Path.Assets;
    });

    return { socialUrl, isAssetsPage };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/common/styles/footer.scss';
</style>
