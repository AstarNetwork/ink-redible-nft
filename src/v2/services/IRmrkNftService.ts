import { ASTAR_NETWORK_IDX } from 'src/config/chain';
import {
  ContractInventory,
  EquipCallParam,
  UnequipCallParam,
} from 'src/v2/repositories/IRmrkNftRepository';

export interface IRmrkNftService {
  equip(param: EquipCallParam): Promise<void>;
  unequip(param: UnequipCallParam): Promise<void>;
  acceptChild(
    contractAddress: string,
    tokenId: number,
    childContractAddress: string,
    childTokenId: number,
    senderAddress: string
  ): Promise<void>;
  getInventory(ownerAddress: string, networkIdx: ASTAR_NETWORK_IDX): Promise<ContractInventory[]>;
}
