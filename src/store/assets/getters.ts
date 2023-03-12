import { ParentInventory } from 'src/modules/nft';
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AssetsStateInterface as State } from './state';
export interface AssetsGetters {
  getParentInventories(state: State): ParentInventory[];
}

const getters: GetterTree<State, StateInterface> & AssetsGetters = {
  getParentInventories: (state) => state.parentInventories,
};

export default getters;
