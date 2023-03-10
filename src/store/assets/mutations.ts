import { ParentInventory, IdBasePart } from 'src/modules/nft';
import { MutationTree } from 'vuex';
import { AssetsStateInterface as State } from './state';
export interface AssetsMutations<S = State> {
  setParentInventories(state: S, payload: ParentInventory[]): void;
  setParentNfts(state: S, payload: IdBasePart[]): void;
}

const mutations: MutationTree<State> & AssetsMutations = {
  setParentInventories(state: State, payload: ParentInventory[]) {
    state.parentInventories = payload;
  },
  setParentNfts(state: State, payload: IdBasePart[]) {
    state.parentNfts = payload;
  },
};

export default mutations;
