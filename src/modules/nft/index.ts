import type BN from 'bn.js';

export {
  unequipSlot,
  getEquippableChildren,
  equipSlot,
  readNft,
  fetchChildDetails,
} from 'src/modules/nft/read-token';
export { queryParentInventories } from 'src/modules/nft/graphQl';

export type ExtendedAsset = Asset & { id: number; gatewayUrl: string; partsAddress: string };

export type PartType = 'None' | 'Slot' | 'Fixed';

// Memo: use for fetching NFT's metadata without connecting wallet (it doesn't matter which address is being used)
export const SAMPLE_WALLET_ADDRESS = 'XLoLJBQoMPHMLXYhdFobSpH5GujRoUH8d1sUtaEtoBG7zaS';

export interface IBasePart {
  id?: string | number;
  partType: PartType;
  equippable?: string[] | '*';
  partUri?: string;
  metadataUri?: string;
  isEquippableByAll?: boolean;
  z?: number;
  childId?: number;
  childTokenAddress?: string;
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

export interface ParentInventory {
  id: string;
}

export interface ChildDetail {
  description: string;
  image: string;
  name: string;
}
