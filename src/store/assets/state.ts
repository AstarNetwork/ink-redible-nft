import { ParentInventory } from 'src/modules/nft/index';
export interface AssetsStateInterface {
  parentInventories: ParentInventory[];
}

function state(): AssetsStateInterface {
  return {
    parentInventories: [],
  };
}

export default state;
