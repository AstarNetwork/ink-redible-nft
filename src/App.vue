<template>
  <div>
    <dashboard-layout>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <Suspense>
            <template #default>
              <transition name="route" mode="out-in">
                <component :is="Component"></component>
              </transition>
            </template>
            <template #fallback>
              <modal-loading />
            </template>
          </Suspense>
        </keep-alive>
      </router-view>
    </dashboard-layout>

    <modal-loading v-if="isLoading" />

    <transition name="fade">
      <alert-box
        v-show="showAlert.showAlertMsg"
        :msg="showAlert.alertMsg"
        :alert-type="showAlert.alertType"
      />
    </transition>
    <notification-stack />

    <cookie-policy />
  </div>
</template>
<script lang="ts">
// Fix for breaking change introduced in polkadot js v7.x
// https://polkadot.js.org/docs/api/FAQ/#since-upgrading-to-the-7x-series-typescript-augmentation-is-missing
import 'reflect-metadata';
import '@polkadot/api-augment';
import { defineComponent, computed, watch } from 'vue';
import DashboardLayout from 'layouts/DashboardLayout.vue';
import { useStore } from 'src/store';
import ModalLoading from 'components/common/ModalLoading.vue';
import AlertBox from 'components/common/AlertBox.vue';
import CookiePolicy from 'components/common/CookiePolicy.vue';
import NotificationStack from './components/common/Notification/NotificationStack.vue';
import 'animate.css';
import {
  BusyMessage,
  ExtrinsicStatusMessage,
  IEventAggregator,
  NewBlockMessage,
  NewEraMessage,
  TokenMintedMessage,
} from 'src/v2/messaging';
import { setCurrentWallet } from 'src/v2/app.container';
import { container } from 'src/v2/common';
import { Symbols } from 'src/v2/symbols';
import { useAppRouter, useAccount, useNetworkInfo } from 'src/hooks';
import { ContractInventory } from './v2/repositories';

export default defineComponent({
  name: 'App',
  components: {
    DashboardLayout,
    ModalLoading,
    AlertBox,
    CookiePolicy,
    NotificationStack,
  },
  setup() {
    useAppRouter();
    const store = useStore();
    const { currentAccount } = useAccount();
    const { currentNetworkIdx } = useNetworkInfo();
    const isLoading = computed(() => store.getters['general/isLoading']);
    const showAlert = computed(() => store.getters['general/showAlert']);
    const isEthWallet = computed<boolean>(() => store.getters['general/isEthWallet']);
    const currentWallet = computed<string>(() => store.getters['general/currentWallet']);
    const inventory = computed<ContractInventory[]>(() => store.getters['assets/getInventory']);

    // Handle busy and extrisnsic call status messages.
    const eventAggregator = container.get<IEventAggregator>(Symbols.EventAggregator);
    eventAggregator.subscribe(ExtrinsicStatusMessage.name, (m) => {
      const message = m as ExtrinsicStatusMessage;
      store.dispatch(
        'general/showAlertMsg',
        {
          msg: message.message,
          alertType: message.success ? 'success' : 'error',
        },
        { root: true }
      );
    });

    eventAggregator.subscribe(BusyMessage.name, (m) => {
      const message = m as BusyMessage;
      store.commit('general/setLoading', message.isBusy, { root: true });
    });

    eventAggregator.subscribe(NewBlockMessage.name, (m) => {
      const message = m as NewBlockMessage;
      store.commit('general/setCurrentBlock', message.blockNumber, { root: true });
    });

    eventAggregator.subscribe(NewEraMessage.name, (m) => {
      const message = m as NewEraMessage;
      store.commit('dapps/setCurrentEra', message.era, { root: true });
    });

    const getInventory = async (): Promise<void> => {
      if (!currentAccount.value) return;
      await store.dispatch('assets/getInventory', {
        address: currentAccount.value,
        networkIdx: currentNetworkIdx.value,
      });
    };

    eventAggregator.subscribe(TokenMintedMessage.name, async (m) => {
      // Give some time for indexer to update.
      // TODO - get minted token Id and manually put it to inventory
      const inventorySize = inventory.value.length;
      const interval = setInterval(() => {
        if (inventory.value.length > inventorySize) {
          clearInterval(interval);
          return;
        }

        getInventory();
      }, 7000);
    });

    // Handle wallet change so we can inject proper wallet
    watch([isEthWallet, currentWallet], () => {
      setCurrentWallet(isEthWallet.value, currentWallet.value);
    });

    watch(
      [currentAccount, currentNetworkIdx],
      async () => {
        getInventory();
      },
      { immediate: true }
    );

    watch([inventory], async () => {
      // Fetch collections metadata
      if (inventory.value.length > 0) {
        const uniqueAddresses = [...new Set(inventory.value.map((x) => x.contractAddress))];
        await Promise.all(
          uniqueAddresses.map((x) => {
            store.dispatch('assets/getContract', {
              contractAddress: x,
              userAddress: currentAccount.value,
            });
          })
        );
      }
    });

    const removeSplashScreen = () => {
      var elem = document.getElementById('splash');
      elem?.remove();
    };

    removeSplashScreen();

    return {
      isLoading,
      showAlert,
    };
  },
});
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';
.bg-black-alt {
  background: #191919;
}
.text-black-alt {
  color: #191919;
}
.border-black-alt {
  border-color: #191919;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
