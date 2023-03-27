import { PartType } from 'src/modules/nft/rmrk-contract/types/types-returns/rmrk_contract';

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

export interface TokenAsset {
  equippableGroupId: number;
  assetUri: string;
  parts: Part[];
  id: number;
  contractAddress: string;
  tokenId: string;
}

export interface Part {
  id: number;
  partType: PartType;
  z: number;
  partUri: string;
  isEquippableByAll: boolean;
  children: TokenAsset[];
  equippable: string[];
}
