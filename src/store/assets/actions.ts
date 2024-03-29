import { IRmrkNftService } from 'src/v2/services/IRmrkNftService';
import { StateInterface } from 'src/store';
import { AssetsStateInterface as State, Contract, OwnedToken } from 'src/store/assets/state';
import { ActionTree } from 'vuex';
import { container } from 'src/v2/common';
import { Symbols } from 'src/v2/symbols';
import { IRmrkNftRepository } from 'src/v2/repositories';
import { sanitizeIpfsUrl } from 'src/modules/nft/ipfs';
import { ASTAR_NETWORK_IDX } from 'src/config/chain';

const actions: ActionTree<State, StateInterface> = {
  async getInventory(
    { commit },
    { address, networkIdx }: { address: string; networkIdx: ASTAR_NETWORK_IDX }
  ): Promise<void> {
    try {
      commit('general/setLoading', true, { root: true });
      const service = container.get<IRmrkNftService>(Symbols.RmrkNftService);
      const inventories = await service.getInventory(address, networkIdx);
      commit('setInventory', inventories);
    } catch (error) {
      console.error(error);
    } finally {
      commit('general/setLoading', false, { root: true });
    }
  },

  async getContract(
    { commit, state },
    { contractAddress, userAddress }: { contractAddress: string; userAddress: string }
  ): Promise<void> {
    if (!state.collections.find((x) => x.address === contractAddress)) {
      try {
        const nftRepo = container.get<IRmrkNftRepository>(Symbols.RmrkNftRepository);
        const metadata = await nftRepo.getCollectionMetadata(contractAddress, userAddress);
        const sanitizedMetadata = metadata
          ? { ...metadata, mediaUri: sanitizeIpfsUrl(metadata.mediaUri) }
          : metadata;
        commit('setCollection', {
          address: contractAddress,
          metadata: sanitizedMetadata,
        } as Contract);
      } catch (error) {
        console.error(error);
      }
    }
  },
  async getToken(
    { commit },
    {
      contractAddress,
      userAddress,
      tokenId,
    }: { contractAddress: string; userAddress: string; tokenId: number }
  ): Promise<void> {
    try {
      commit('general/setLoading', true, { root: true });
      const nftRepo = container.get<IRmrkNftRepository>(Symbols.RmrkNftRepository);
      const [assets, metadata] = await Promise.all([
        nftRepo.getTokenAssets(contractAddress, userAddress, tokenId),
        nftRepo.getTokenMetadata(contractAddress, userAddress, tokenId),
      ]);
      commit('setToken', {
        contractAddress,
        id: tokenId.toString(),
        assets,
        metadata,
      } as OwnedToken);
    } catch (error) {
      console.error(error);
    } finally {
      commit('general/setLoading', false, { root: true });
    }
  },
};

export default actions;
