import Parent from 'pages/Parent.vue';
import Child from 'pages/Child.vue';
import AssetsPage from 'pages/AssetsPage.vue';
import { endpointKey, getNetworkName } from 'src/config/chainEndpoints';
import { LOCAL_STORAGE } from 'src/config/localStorage';

const networkIdxStore = localStorage.getItem(LOCAL_STORAGE.NETWORK_IDX);

export const networkParam =
  '/' +
  getNetworkName(networkIdxStore ? (Number(networkIdxStore) as endpointKey) : endpointKey.SHIBUYA);

export enum Path {
  Assets = '/assets',
  Parent = '/parent',
  Child = '/child',
}

const routes = [
  {
    path: '/',
    redirect: networkParam + Path.Assets,
  },
  {
    path: Path.Assets,
    redirect: networkParam + Path.Assets,
  },
  {
    path: '/:network' + Path.Assets,
    name: 'Assets',
    component: AssetsPage,
  },
  {
    path: '/:network' + Path.Child,
    name: 'Child',
    component: Child,
  },
  {
    path: '/:network' + Path.Parent,
    name: 'Parent',
    component: Parent,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    redirect: '/',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
