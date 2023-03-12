import { EquipCallParam, UnequipCallParam } from 'src/v2/repositories/IRmrkNftRepository';
import { ParentInventory } from './../../modules/nft/index';

export interface IRmrkNftService {
  equip(param: EquipCallParam): Promise<void>;
  unequip(param: UnequipCallParam): Promise<void>;
  fetchParentInventories(address: string): Promise<ParentInventory[]>;
}
