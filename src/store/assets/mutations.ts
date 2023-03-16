import { ParentInventory } from 'src/modules/nft';
import { ContractInventory } from 'src/v2/repositories';
import { MutationTree } from 'vuex';
import { AssetsStateInterface as State } from './state';
export interface AssetsMutations<S = State> {
  setParentInventories(state: S, payload: ParentInventory[]): void;
  setInventory(state: S, payload: ContractInventory[]): void;
}

const mutations: MutationTree<State> & AssetsMutations = {
  setParentInventories(state: State, payload: ParentInventory[]) {
    state.parentInventories = payload;
  },
  setInventory(state: State, payload: ContractInventory[]) {
    state.inventory = payload;
  },
};

export default mutations;
