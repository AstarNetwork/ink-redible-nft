import type BN from 'bn.js';

export { queryParentInventories } from 'src/modules/nft/graphQl';

export type ExtendedAsset = Asset & { id: number; gatewayUrl: string; partsAddress: string };

export type Asset = {
  equippableGroupId: number;
  assetUri: Array<number>;
  partIds: Array<number>;
};

export interface Id {
  u8?: number | string | BN;
  u16?: number | string | BN;
  u32?: number | string | BN;
  u64?: number | string | BN;
  u128?: number | string | BN;
  bytes?: Array<any>;
}

export interface ParentInventory {
  id: string;
}

export interface ChildDetail {
  description: string;
  image: string;
  name: string;
}

export interface Metadata {
  name: string;
  description: string;
  externalUri?: string;
  mediaUri?: string;
  image: string;
  properties: {
    [key: string]: Property;
  };
}

export interface Property {
  type: string;
  value: string;
}
