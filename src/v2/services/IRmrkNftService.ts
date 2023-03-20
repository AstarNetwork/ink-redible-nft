import {
  ContractInventory,
  EquipCallParam,
  UnequipCallParam,
} from 'src/v2/repositories/IRmrkNftRepository';
import { ParentInventory } from 'src/modules/nft';

export interface IRmrkNftService {
  equip(param: EquipCallParam): Promise<void>;
  unequip(param: UnequipCallParam): Promise<void>;
  fetchParentInventories(address: string): Promise<ContractInventory[]>;
  getInventory(ownerAddress: string): Promise<ContractInventory[]>;
}
