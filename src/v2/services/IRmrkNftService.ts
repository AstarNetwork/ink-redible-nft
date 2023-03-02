import { ParentInventory } from './../../modules/nft/index';
import { UnequipCallParam, EquipCallParam } from 'src/v2/repositories/IRmrkNftRepository';

export interface IRmrkNftService {
  equip(param: EquipCallParam): Promise<void>;
  unequip(param: UnequipCallParam): Promise<void>;
  fetchParentInventories(address: string): Promise<ParentInventory[]>;
}
