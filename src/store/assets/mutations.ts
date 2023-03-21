import { ParentInventory } from 'src/modules/nft';
import { ContractInventory } from 'src/v2/repositories';
import { MutationTree } from 'vuex';
import { AssetsStateInterface as State, Contract, OwnedToken } from './state';
export interface AssetsMutations<S = State> {
  setParentInventories(state: S, payload: ParentInventory[]): void;
  setInventory(state: S, payload: ContractInventory[]): void;
  setOwnedToken(state: S, payload: OwnedToken): void;
  setCollection(state: S, payload: Contract): void;
}

const mutations: MutationTree<State> & AssetsMutations = {
  setParentInventories(state: State, payload: ParentInventory[]) {
    state.parentInventories = payload;
  },
  setInventory(state: State, payload: ContractInventory[]) {
    state.inventory = payload;
  },
  setOwnedToken(state: State, payload: OwnedToken) {
    state.tokens = [
      ...state.tokens.filter(
        (x) => x.id !== payload.id && x.contractAddress !== payload.contractAddress
      ),
      payload,
    ];
  },
  setCollection(state: State, payload: Contract) {
    state.collections = [...state.collections.filter((x) => x.address != payload.address), payload];
  },
};

export default mutations;
