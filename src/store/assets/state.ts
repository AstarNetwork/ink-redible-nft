import { ParentInventory, IdBasePart } from 'src/modules/nft';
export interface AssetsStateInterface {
  parentInventories: ParentInventory[];
  parentNfts: IdBasePart[];
}

function state(): AssetsStateInterface {
  return {
    parentInventories: [],
    parentNfts: [],
  };
}

export default state;
