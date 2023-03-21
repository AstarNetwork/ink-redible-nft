import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';
import { Id } from 'src/modules/nft';
import { Metadata, TokenAsset } from '../models';

export interface EquipCallParam {
  parentContractAddress: string;
  tokenId: Id;
  assetId: string;
  slot: number;
  childContractAddress: string;
  childTokenId: Id;
  childAssetId: string;
  senderAddress: string;
}

export interface UnequipCallParam {
  contractAddress: string;
  tokenId: number;
  slotId: string;
  senderAddress: string;
}

export interface ContractInventory {
  contractAddress: string;
  tokenId: number;
}

export interface IRmrkNftRepository {
  getEquipCallData(
    param: EquipCallParam
  ): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>>;

  getUnequipCallData(
    param: UnequipCallParam
  ): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>>;

  getInventory(ownerAddress: string): Promise<ContractInventory[]>;

  getCollectionMetadata(
    contractAddress: string,
    callerAddress: string
  ): Promise<Metadata | undefined>;

  getTokenMetadata(
    contractAddress: string,
    callerAddress: string,
    tokenId: number
  ): Promise<Metadata | undefined>;

  getTokenAssets(
    contractAddress: string,
    callerAddress: string,
    tokenId: number
  ): Promise<TokenAsset[]>;
}
