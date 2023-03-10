import { ParentInventory, IdBasePart } from 'src/modules/nft';
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AssetsStateInterface as State } from './state';
export interface AssetsGetters {
  getParentInventories(state: State): ParentInventory[];
  getParentNfts(state: State): IdBasePart[];
}

const getters: GetterTree<State, StateInterface> & AssetsGetters = {
  getParentInventories: (state) => state.parentInventories,
  getParentNfts: (state) => state.parentNfts,
};

export default getters;
