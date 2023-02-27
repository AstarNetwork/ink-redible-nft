import type BN from 'bn.js';

export { unequipSlot, getEquippableChildren, equipSlot, readNft } from 'src/modules/nft/read-token';

export type ExtendedAsset = Asset & { id: number; gatewayUrl: string };

export type PartType = 'None' | 'Slot' | 'Fixed';

export interface IBasePart {
  id?: string | number;
  partType: PartType;
  equippable?: string[] | '*';
  partUri?: string;
  metadataUri?: string;
  isEquippableByAll?: boolean;
  z?: number;
}

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
