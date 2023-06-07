import { ParentInventory } from 'src/modules/nft';
import { ContractInventory } from 'src/v2/repositories';
import { MutationTree } from 'vuex';
import { AssetsStateInterface as State, Contract, OwnedToken } from './state';
export interface AssetsMutations<S = State> {
  setParentInventories(state: S, payload: ParentInventory[]): void;
  setInventory(state: S, payload: ContractInventory[]): void;
  appendInventory(state: S, payload: ContractInventory[]): void;
  updateInventory(state: S, payload: ContractInventory): void;
  setCollection(state: S, payload: Contract): void;
  setToken(state: S, payload: OwnedToken): void;
}

const mutations: MutationTree<State> & AssetsMutations = {
  setParentInventories(state: State, payload: ParentInventory[]) {
    state.parentInventories = payload;
  },
  setInventory(state: State, payload: ContractInventory[]) {
    state.inventory = payload;
  },
  appendInventory(state: State, payload: ContractInventory[]) {
    state.inventory = [...state.inventory, ...payload];
  },
  updateInventory(state: State, payload: ContractInventory) {
    state.inventory = [
      ...state.inventory.filter(
        (x) => x.contractAddress !== payload.contractAddress || x.tokenId !== payload.tokenId
      ),
      payload,
    ];
  },
  setCollection(state: State, payload: Contract) {
    state.collections = [
      ...state.collections.filter((x) => x.address !== payload.address),
      payload,
    ];
  },
  setToken(state: State, payload: OwnedToken) {
    state.tokens = [
      ...state.tokens.filter(
        (x) => x.contractAddress !== payload.contractAddress || x.id !== payload.id
      ),
      payload,
    ];
  },
};

export default mutations;
