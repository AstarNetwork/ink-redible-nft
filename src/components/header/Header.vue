<template>
  <div class="wrapper">
    <header-comp>
      <template #left>
        <div class="app-logo">
          <img src="../../assets/img/app-logo.svg" alt="app-logo" class="app-logo" />
        </div>
      </template>
      <template v-if="!currentAccount">
        <connect-button @click="openSelectModal">
          <astar-icon-wallet />
        </connect-button>
      </template>
      <template v-else>
        <account-button :account="currentAccount" @click="changeAccount" />
      </template>
      <network-button @show-network="modalNetwork = true" />
    </header-comp>

    <!-- Modals -->
    <modal-network
      v-model:isOpen="modalNetwork"
      v-model:selectNetwork="currentNetworkIdx"
      :network-idx="currentNetworkIdx"
    />
    <modal-connect-wallet
      :is-modal-connect-wallet="modalName === WalletModalOption.SelectWallet"
      :set-wallet-modal="setWalletModal"
      :set-close-modal="setCloseModal"
    />

    <modal-account
      v-if="modalAccountSelect"
      v-model:isOpen="modalAccountSelect"
      :set-wallet-modal="setWalletModal"
      :selected-wallet="selectedWallet"
      :disconnect-account="disconnectAccount"
      :current-account="currentAccount"
    />

    <modal-install-wallet
      v-if="modalName === WalletModalOption.NoExtension"
      :set-close-modal="setCloseModal"
      :selected-wallet="selectedWallet"
    />

    <modal-update-wallet
      v-if="modalName === WalletModalOption.OutdatedWallet"
      :set-close-modal="setCloseModal"
      :selected-wallet="selectedWallet"
    />
  </div>
</template>

<script lang="ts">
import AccountButton from 'src/components/header/AccountButton.vue';
import ConnectButton from 'src/components/header/ConnectButton.vue';
import ModalAccount from 'src/components/header/modals/ModalAccount.vue';
import ModalConnectWallet from 'src/components/header/modals/ModalConnectWallet.vue';
import ModalInstallWallet from 'src/components/header/modals/ModalInstallWallet.vue';
import ModalNetwork from 'src/components/header/modals/ModalNetwork.vue';
import ModalUpdateWallet from 'src/components/header/modals/ModalUpdateWallet.vue';
import NetworkButton from 'src/components/header/NetworkButton.vue';
import { WalletModalOption } from 'src/config/wallets';
import { useBreakpoints, useConnectWallet } from 'src/hooks';
import { useStore } from 'src/store';
import { computed, defineComponent, reactive, toRefs } from 'vue';
import HeaderComp from './HeaderComp.vue';

interface Modal {
  modalNetwork: boolean;
}

export default defineComponent({
  components: {
    ConnectButton,
    AccountButton,
    NetworkButton,
    ModalAccount,
    ModalConnectWallet,
    ModalInstallWallet,
    ModalNetwork,
    ModalUpdateWallet,
    HeaderComp,
  },
  setup() {
    const { width, screenSize } = useBreakpoints();

    const stateModal = reactive<Modal>({
      modalNetwork: false,
    });

    const {
      modalConnectWallet,
      modalName,
      currentAccount,
      currentAccountName,
      selectedWallet,
      modalAccountSelect,
      setCloseModal,
      setWalletModal,
      openSelectModal,
      changeAccount,
      disconnectAccount,
    } = useConnectWallet();

    const store = useStore();
    const currentNetworkIdx = computed(() => store.getters['general/networkIdx']);

    return {
      ...toRefs(stateModal),
      currentNetworkIdx,
      WalletModalOption,
      modalConnectWallet,
      currentAccount,
      modalName,
      currentAccountName,
      selectedWallet,
      modalAccountSelect,
      width,
      screenSize,
      setCloseModal,
      setWalletModal,
      openSelectModal,
      changeAccount,
      disconnectAccount,
    };
  },
});
</script>
<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';
.wrapper {
  z-index: 100;
  @media (min-width: $lg) {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0px;
  }
}

.icon {
  width: 127px;
  margin-left: -15px;
}

.text--logo-gradient {
  color: white;
  background: -webkit-linear-gradient(
    100.62deg,
    #e6007a -13.87%,
    #703ac2 10.44%,
    #0070eb 47.07%,
    #0297fb 89.31%,
    #0ae2ff 151.16%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.app-logo {
  width: 144px;
  height: 28px;
  @media (min-width: $md) {
    width: 204px;
    height: 40px;
  }
}
</style>
