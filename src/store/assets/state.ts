import { ParentInventory } from 'src/modules/nft';
import { ContractInventory } from 'src/v2/repositories';
export interface AssetsStateInterface {
  parentInventories: ParentInventory[];
  inventory: ContractInventory[];
}

function state(): AssetsStateInterface {
  return {
    parentInventories: [],
    inventory: [],
  };
}

export default state;
