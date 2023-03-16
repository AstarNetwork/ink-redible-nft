import { ParentInventory } from 'src/modules/nft';
import { ContractInventory } from 'src/v2/repositories';
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AssetsStateInterface as State } from './state';
export interface AssetsGetters {
  // TODO remove getParentInv...
  getParentInventories(state: State): ParentInventory[];
  getInventory(state: State): ContractInventory[];
}

const getters: GetterTree<State, StateInterface> & AssetsGetters = {
  getParentInventories: (state) => state.parentInventories,
  getInventory: (state) => state.inventory,
};

export default getters;
