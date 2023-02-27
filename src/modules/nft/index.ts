import { Asset } from './rmrk-contract';

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
