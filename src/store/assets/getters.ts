import { ParentInventory } from 'src/modules/nft';
import { Metadata } from 'src/v2/models';
import { ContractInventory } from 'src/v2/repositories';
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import state, { AssetsStateInterface as State, OwnedToken } from './state';
export interface AssetsGetters {
  // TODO remove getParentInv...
  getParentInventories(state: State): ParentInventory[];
  getInventory(state: State): ContractInventory[];
  getOwnedTokens(state: State): OwnedToken[];
  getCollectionMetadata(state: State): (contractAddress: string) => Metadata | undefined;
}

const getters: GetterTree<State, StateInterface> & AssetsGetters = {
  getParentInventories: (state) => state.parentInventories,
  getInventory: (state) => state.inventory,
  getOwnedTokens: (state) => state.tokens,
  getCollectionMetadata: (state) => (contractAddress) =>
    state.collections.find((x) => x.address === contractAddress)?.metadata,
};

export default getters;
