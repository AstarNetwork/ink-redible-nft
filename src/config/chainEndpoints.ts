import { RegistryTypes } from '@polkadot/types/types';
import * as typeDefs from 'src/config/api/polkadot/registry-types';
import { ASTAR_CHAIN } from 'src/config/chain';

export interface ChainProvider {
  networkAlias: string;
  displayName: string;
  info?: string;
  endpoints: { name: string; endpoint: string }[];
  isSupportContract: boolean;
  prefix?: number; // Used in extrinsic transactions, also to determine if a network supports extensic transactions.
  typeDef: RegistryTypes;
  key: endpointKey;
  isStoreEnabled: boolean;
  subscan: string;
  blockscout: string;
  evmChainId: string;
  evmEndpoints: string[];
  faucetEndpoint: string;
  // Memo: using `require` occurs error in `yarn test`
  defaultLogo: string;
  baseContractAddress?: string[];
}

export enum endpointKey {
  ASTAR = 0,
  SHIDEN = 1,
  SHIBUYA = 2,
  LOCAL = 3,
  CUSTOM = 4,
}

export const providerEndpoints: ChainProvider[] = [
  {
    networkAlias: 'astar',
    displayName: 'Astar Network',
    info: 'Smart contract platform for decentralized applications (dapps) on the Polkadot network',
    endpoints: [
      { name: 'Astar', endpoint: 'wss://rpc.astar.network' },
      { name: 'Dwellir', endpoint: 'wss://astar-rpc.dwellir.com' },
      { name: 'Pinknode', endpoint: 'wss://public-rpc.pinknode.io/astar' },
      { name: 'OnFinality', endpoint: 'wss://astar.api.onfinality.io/public-ws' },
      { name: 'Light Client (experimental)', endpoint: 'light://substrate-connect/polkadot/astar' },
    ],
    isSupportContract: true,
    prefix: 0x250,
    typeDef: typeDefs.plasmCollatorDefinitions,
    key: endpointKey.ASTAR,
    isStoreEnabled: true,
    subscan: 'https://astar.subscan.io',
    blockscout: 'https://blockscout.com/astar',
    evmChainId: '592',
    evmEndpoints: ['https://evm.astar.network', 'https://astar.api.onfinality.io/public'],
    faucetEndpoint: 'https://us-central1-facuet-bot.cloudfunctions.net/app/astar',
    defaultLogo:
      'https://github.com/AstarNetwork/astar-apps/blob/main/src/assets/img/chain/astar.png?raw=true',
  },
  {
    networkAlias: 'shiden',
    displayName: 'Shiden Network',
    info: 'Smart contract platform for decentralized applications (dapps) on the Kusama network',
    endpoints: [
      { name: 'Shiden', endpoint: 'wss://rpc.shiden.astar.network' },
      { name: 'Dwellir', endpoint: 'wss://shiden-rpc.dwellir.com' },
      { name: 'Pinknode', endpoint: 'wss://rpc.pinknode.io/shiden/explorer' },
      { name: 'OnFinality', endpoint: 'wss://shiden.api.onfinality.io/public-ws' },
      { name: 'Light Client (experimental)', endpoint: 'light://substrate-connect/kusama/shiden' },
    ],
    isSupportContract: true,
    prefix: 0x150,
    typeDef: typeDefs.plasmCollatorDefinitions,
    key: endpointKey.SHIDEN,
    isStoreEnabled: true,
    subscan: 'https://shiden.subscan.io',
    blockscout: 'https://blockscout.com/shiden',
    evmChainId: '336',
    evmEndpoints: ['https://evm.shiden.astar.network', 'https://shiden.api.onfinality.io/public'],
    faucetEndpoint: 'https://us-central1-facuet-bot.cloudfunctions.net/app/shiden',
    defaultLogo:
      'https://github.com/AstarNetwork/astar-apps/blob/main/src/assets/img/chain/shiden.png?raw=true',
  },
  {
    networkAlias: 'shibuya-testnet',
    displayName: 'Shibuya Network',
    info: 'The test network of the layer 2 scaling blockchain',
    endpoints: [
      { name: 'Shibuya', endpoint: 'wss://rpc.shibuya.astar.network' },
      { name: 'Dwellir', endpoint: 'wss://shibuya-rpc.dwellir.com' },
      { name: 'Light Client (experimental)', endpoint: 'light://substrate-connect/tokyo/shibuya' },
    ],
    isSupportContract: true,
    prefix: 0xff51,
    typeDef: typeDefs.plasmCollatorDefinitions,
    key: endpointKey.SHIBUYA,
    isStoreEnabled: true,
    subscan: 'https://shibuya.subscan.io',
    blockscout: 'https://blockscout.com/shibuya',
    evmChainId: '81',
    evmEndpoints: ['https://evm.shibuya.astar.network'],
    faucetEndpoint: 'https://us-central1-facuet-bot.cloudfunctions.net/app/shibuya',
    defaultLogo:
      'https://github.com/AstarNetwork/astar-apps/blob/main/src/assets/img/chain/shibuya.png?raw=true',
    baseContractAddress: [
      'Wcg8cuKcJgQGm15tZ5F14JXuWehm1Q67K92jfbTpKPrPm6S',
      'adDDmXkrVUhcFNy74zJm9CohrvDCbBixhvLCzrrmzo5HG3U',
      'WDkMQy5AgSXfByPW23szAFYrxtXbNUA7umL49YbTZysfa9w',
      'XMAfed8ZvqDUQzoy8NuU715vhKs6rRckSYwSWuqQsM8ZWGv',
      'bMsPywwU4m9F9ZZ48cSffEyGeYJ66A5N3PGDv76Yogpp7zX',
    ],
  },
  {
    networkAlias: 'development',
    displayName: 'Local Network',
    endpoints: [{ name: 'Local Network', endpoint: 'ws://127.0.0.1:9944' }],
    isSupportContract: true,
    typeDef: typeDefs.plasmCollatorDefinitions,
    key: endpointKey.LOCAL,
    isStoreEnabled: true,
    subscan: '',
    blockscout: '',
    evmChainId: '4369',
    evmEndpoints: ['http://127.0.0.1:9933'],
    faucetEndpoint: '',
    defaultLogo:
      'https://github.com/AstarNetwork/astar-apps/blob/main/src/assets/img/chain/shibuya.png?raw=true',
    baseContractAddress: ['5GwLspTnciq9VqY5a2JHBRSXK6EhPv8Q8BBZy43MYwKK8X9p'],
  },
  {
    networkAlias: 'custom-node',
    displayName: 'Custom Network',
    endpoints: [{ name: '', endpoint: '' }],
    isSupportContract: true,
    typeDef: typeDefs.plasmCollatorDefinitions,
    key: endpointKey.CUSTOM,
    isStoreEnabled: true,
    subscan: '',
    blockscout: '',
    evmChainId: '',
    evmEndpoints: [''],
    faucetEndpoint: '',
    defaultLogo:
      'https://github.com/AstarNetwork/astar-apps/blob/main/src/assets/img/chain/shibuya.png?raw=true',
  },
];

// Memo: return the provider index for Local and Custom node
export const getProviderIndex = (chain: ASTAR_CHAIN) => {
  switch (chain) {
    case 'Astar':
      return endpointKey.ASTAR;
    case 'Shiden':
      return endpointKey.SHIDEN;
    case 'Development':
      return endpointKey.LOCAL;
    default:
      return endpointKey.SHIBUYA;
  }
};

export const getNetworkName = (chain: endpointKey): string => {
  return providerEndpoints[chain].networkAlias;
};
