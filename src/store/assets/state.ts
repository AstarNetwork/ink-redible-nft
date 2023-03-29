import { ParentInventory } from 'src/modules/nft';
import { Metadata, Asset, TokenAsset } from 'src/v2/models';
import { ContractInventory } from 'src/v2/repositories';

export interface OwnedToken {
  id: string;
  contractAddress: string;
  assets: TokenAsset[];
  metadata: Metadata | undefined;
}

export interface Contract {
  address: string;
  metadata: Metadata;
}

export interface AssetsStateInterface {
  parentInventories: ParentInventory[];
  inventory: ContractInventory[];
  tokens: OwnedToken[];
  collections: Contract[];
}

function state(): AssetsStateInterface {
  return {
    parentInventories: [],
    inventory: [],
    tokens: [],
    collections: [],
  };
}

export default state;
