import { ParentInventory } from 'src/modules/nft';
import { MutationTree } from 'vuex';
import { AssetsStateInterface as State } from './state';
export interface AssetsMutations<S = State> {
  setParentInventories(state: S, payload: ParentInventory[]): void;
}

const mutations: MutationTree<State> & AssetsMutations = {
  setParentInventories(state: State, payload: ParentInventory[]) {
    state.parentInventories = payload;
  },
};

export default mutations;
