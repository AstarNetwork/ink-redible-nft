import { IRmrkNftService } from './../../v2/services/IRmrkNftService';
import { StateInterface } from 'src/store';
import { AssetsStateInterface as State } from 'src/store/assets/state';
import { ActionTree } from 'vuex';
import { container } from 'src/v2/common';
import { Symbols } from 'src/v2/symbols';

const actions: ActionTree<State, StateInterface> = {
  async getParentInventories({ commit }, { address }: { address: string }): Promise<void> {
    try {
      const service = container.get<IRmrkNftService>(Symbols.RmrkNftService);
      const inventories = await service.fetchParentInventories(address);
      commit('setParentInventories', inventories);
    } catch (error) {
      console.error(error);
    }
  },
};

export default actions;
