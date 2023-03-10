import { IdBasePart } from 'src/modules/nft';
import { ParentInventory } from './../../modules/nft/index';
import {
  UnequipCallParam,
  EquipCallParam,
  GetParentNftsParam,
} from 'src/v2/repositories/IRmrkNftRepository';

export interface IRmrkNftService {
  equip(param: EquipCallParam): Promise<void>;
  unequip(param: UnequipCallParam): Promise<void>;
  fetchParentInventories(address: string): Promise<ParentInventory[]>;
  fetchParentNfts(param: GetParentNftsParam): Promise<IdBasePart[]>;
}
