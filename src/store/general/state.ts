import { GasTip } from '@astar-network/astar-sdk-core';
import type { Extensions } from 'src/hooks/useMetaExtensions';
import { endpointKey } from 'src/config/chainEndpoints';

export type SubstrateAccount = {
  address: string;
  name: string;
  source: string;
  balance?: string;
};

export enum AlertType {
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
  Copied = 'copied',
}

export type AlertBox = {
  alertMsg: string;
  alertType: AlertType;
  txHash?: string;
};

export type EcdsaAccount = {
  ethereum: string;
  ss58: string;
  h160: string;
};

export type ConnectionType = 'connected' | 'connecting' | 'offline';

export type Theme = 'LIGHT' | 'DARK';

export interface GeneralStateInterface {
  initialized: boolean;
  isLoading: boolean;
  alertBoxStack: AlertBox[];
  alertBox: AlertBox;
  chainInfo: any;
  metaExtensions: Extensions;
  extensionCount: number;
  substrateAccounts: SubstrateAccount[];
  currentNetworkStatus: ConnectionType;
  currentNetworkIdx: number;
  currentAddress: string;
  currentCustomEndpoint: string;
  headerName: string;
  currentWallet: string;
  gas: GasTip | undefined;
  currentBlock: number;
}

function state(): GeneralStateInterface {
  return {
    initialized: false,
    isLoading: false,
    alertBoxStack: [],
    alertBox: {
      alertMsg: '',
      alertType: AlertType.Success,
    },
    chainInfo: undefined,
    metaExtensions: {
      count: 0,
      extensions: [],
    },
    extensionCount: 0,
    substrateAccounts: [],
    currentNetworkStatus: 'connecting',
    currentNetworkIdx: endpointKey.SHIBUYA,
    currentAddress: '',
    currentCustomEndpoint: '',
    headerName: '',
    currentWallet: '',
    gas: undefined,
    currentBlock: 0,
  };
}

export default state;
