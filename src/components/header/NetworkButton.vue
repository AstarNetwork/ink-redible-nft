<template>
  <div>
    <connect-button v-if="isNotSelectedEndpoint" @click="showNetworkModal">
      <astar-icon-network />
    </connect-button>
    <template v-else>
      <meta-update-button
        v-if="isNeedUpdate(isLatestChain, extensionCount)"
        @updated-meta="isLatestChain = true"
      />
      <button
        v-else
        type="button"
        class="btn--network"
        :class="screenSize.sm > width && 'm-btn--network'"
        @click="showNetworkModal"
      >
        <img v-show="currentLogo" class="icon" width="16" :src="currentLogo" />
        <div class="column--network-name">
          <div v-if="width >= screenSize.md">
            <span class="text--md">
              {{ currentNetworkName }}
            </span>
          </div>
          <div v-else>
            <span class="text--sm">
              {{ currentNetworkName.replace('Network', '') }}
            </span>
          </div>
        </div>
      </button>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, computed, ref } from 'vue';
import { useStore } from 'src/store';
import { providerEndpoints } from 'src/config/chainEndpoints';
import { useBreakpoints } from 'src/hooks';
import { LOCAL_STORAGE } from 'src/config/localStorage';
import MetaUpdateButton from 'src/components/header/MetaUpdateButton.vue';
import ConnectButton from 'src/components/header/ConnectButton.vue';

export default defineComponent({
  components: {
    MetaUpdateButton,
    ConnectButton,
  },
  emits: ['show-network'],
  setup(props, { emit }) {
    const { width, screenSize } = useBreakpoints();
    const store = useStore();
    const isNotSelectedEndpoint = localStorage.getItem(LOCAL_STORAGE.SELECTED_ENDPOINT) === null;
    const currentNetworkStatus = computed(() => store.getters['general/networkStatus']);
    const currentNetworkIdx = computed(() => store.getters['general/networkIdx']);
    const chainInfo = computed(() => store.getters['general/chainInfo']);
    const metaExtensions = computed(() => store.getters['general/metaExtensions']);
    const extensionCount = computed(() => store.getters['general/extensionCount']);
    const currentNetworkName = ref<string>(providerEndpoints[currentNetworkIdx.value].displayName);
    const currentLogo = ref<string>(providerEndpoints[currentNetworkIdx.value].defaultLogo);
    const isLatestChain = ref<boolean>(false);
    const version = ref<string>('0.0.0');

    watch(currentNetworkIdx, (networkIdx) => {
      currentNetworkName.value = providerEndpoints[networkIdx].displayName;
      currentLogo.value = providerEndpoints[networkIdx].defaultLogo;
    });

    watch(
      () => chainInfo.value,
      () => {
        version.value = `0.0.${chainInfo.value?.specVersion}`;
      }
    );

    watch(
      () => metaExtensions.value,
      () => {
        if (metaExtensions?.value?.extensions.length > 0) {
          version.value = metaExtensions?.value?.extensions[0].extension.version;
        }
      }
    );

    const showNetworkModal = () => {
      emit('show-network');
    };

    return {
      isNotSelectedEndpoint,
      currentNetworkStatus,
      currentNetworkName,
      currentLogo,
      isLatestChain,
      extensionCount,
      version,
      width,
      screenSize,
      showNetworkModal,
    };
  },
  methods: {
    isNeedUpdate(isLatestChain: boolean, extensionCount: number | undefined) {
      return extensionCount && extensionCount > 0 && !isLatestChain;
    },
  },
});
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';
@import 'src/css/utils.scss';

.btn--network {
  display: flex;
  height: 32px;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px 8px 12px;
  border-radius: 16px;
  margin-left: 8px;
  background: #141c34;
  color: #fff;
  border: 1px solid $gray-6;
  transition: all 0.3s ease 0s;
  @media (min-width: $sm) {
    margin-left: 16px;
  }
}

.btn--network:hover {
  background: $astar-blue;
}

.divider {
  margin: 0 8px;
  height: 22px;
  border-left: 1px solid $gray-6;
}

.iconbase {
  color: $gray-3;
  width: rem(22);
  height: rem(22);
}

.icon {
  margin-left: 8px;
  @media (min-width: $sm) {
    margin-right: 8px;
  }
}

.m-btn--network {
  box-shadow: none;
  padding: 8px;
  padding-left: 0px;
  background: #141c34;
  color: #fff;
  display: flex;
  column-gap: 6px;
  align-items: center;
  @media (min-width: $sm) {
    column-gap: 8px;
    padding-left: 8px;
  }
  .iconbase {
    color: $gray-4;
  }
  .divider {
    margin: 0 8px;
    border-left: 1px solid $gray-4;
  }
}

.column--network-name {
  margin-top: -1px;
}
</style>
