<template>
  <div v-click-away="closeOption" class="wrapper--links-options">
    <div class="column--icon-dot" @click="isOptionsOpen = true">
      <astar-icon-base class="icon--dot" stroke="currentColor" icon-name="option">
        <astar-icon-3dots />
      </astar-icon-base>
    </div>
    <div v-if="isOptionsOpen" class="box--options">
      <div v-for="(link, i) in links" :key="i">
        <a class="row--option" :href="link.url" target="_blank" rel="noopener noreferrer">
          <div class="icon--link">
            <astar-icon-external-link />
          </div>
          <span class="text--option">{{ link.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { headerLinks } from 'src/links';

export default defineComponent({
  setup(props) {
    const isOptionsOpen = ref<boolean>(false);
    const isModalImportTokens = ref<boolean>(false);
    const { t } = useI18n();

    const closeOption = (): void => {
      isOptionsOpen.value = false;
    };

    const links = [
      {
        name: t('links.docs'),
        url: headerLinks.docs,
      },
      {
        name: t('links.aboutInk'),
        url: headerLinks.ink,
      },
      {
        name: t('links.aboutAstar'),
        url: headerLinks.astar,
      },
    ];

    return {
      isModalImportTokens,
      isOptionsOpen,
      links,
      closeOption,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'src/components/common/styles/links-header.scss';
</style>
