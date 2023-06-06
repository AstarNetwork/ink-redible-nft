import { Metadata } from 'src/v2/models';
import { ContractInventory } from 'src/v2/repositories';
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AssetsStateInterface as State, OwnedToken } from './state';

export interface AssetsGetters {
  getInventory(state: State): ContractInventory[];
  getOwnedTokens(state: State): OwnedToken[];
  getCollectionMetadata(state: State): (contractAddress: string) => Metadata | undefined;
  getToken(state: State): (contractAddress: string, tokenId: string) => OwnedToken | undefined;
}

const getters: GetterTree<State, StateInterface> & AssetsGetters = {
  getInventory: (state) => state.inventory,
  getOwnedTokens: (state) => state.tokens,
  getCollectionMetadata: (state) => (contractAddress) =>
    state.collections.find((x) => x.address === contractAddress)?.metadata,
  getToken: (state) => (contractAddress, tokenId) =>
    state.tokens.find((x) => x.contractAddress === contractAddress && x.id == tokenId),
};

export default getters;
