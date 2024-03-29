import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';
import { Id } from 'src/modules/nft';
import { ChildInfo, Metadata, TokenAsset } from '../models';
import { ASTAR_NETWORK_IDX } from 'src/config/chain';
import { EventRecord } from '@polkadot/types/interfaces';

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
  parent?: ContractInventory;
}

export interface IRmrkNftRepository {
  getEquipCallData(
    param: EquipCallParam
  ): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>>;

  getUnequipCallData(
    param: UnequipCallParam
  ): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>>;

  getAcceptChildCallData(
    contractAddress: string,
    tokenId: number,
    childContractAddress: string,
    childTokenId: number,
    senderAddress: string
  ): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>>;

  getAddChildCallData(
    contractAddress: string,
    tokenId: number,
    childContractAddress: string,
    childTokenId: number,
    senderAddress: string
  ): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>>;

  getInventory(ownerAddress: string, networkIdx: ASTAR_NETWORK_IDX): Promise<ContractInventory[]>;

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

  getChildren(
    contractAddress: string,
    callerAddress: string,
    tokenId: number
  ): Promise<ChildInfo[]>;

  getMintPrice(contractAddress: string, callerAddress: string): Promise<bigint>;

  getAllowance(
    contractAddress: string,
    callerAddress: string,
    operatorContractAddress: string,
    tokenId: number
  ): Promise<boolean>;

  getApproveCall(
    contractAddress: string,
    callerAddress: string,
    operatorContractAddress: string,
    tokenId: number,
    approved: boolean
  ): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>>;

  decodeEventData(eventData: EventRecord, contractAddress: string): Promise<string>;
}
