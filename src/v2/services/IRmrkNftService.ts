import { ContractCallOutcome } from '@polkadot/api-contract/types';
import { ASTAR_NETWORK_IDX } from 'src/config/chain';
import {
  ContractInventory,
  EquipCallParam,
  UnequipCallParam,
} from 'src/v2/repositories/IRmrkNftRepository';

export interface DryRunResult {
  result: ContractCallOutcome;
  storageFeeFormatted: string;
  gasFormatted: string;
  priceFormatted: string;
  total: bigint;
}

export interface IRmrkNftService {
  equip(param: EquipCallParam): Promise<void>;

  unequip(param: UnequipCallParam): Promise<void>;

  acceptChild(
    contractAddress: string,
    tokenId: number,
    childContractAddress: string,
    childTokenId: number,
    senderAddress: string
  ): Promise<void>;

  getInventory(ownerAddress: string, networkIdx: ASTAR_NETWORK_IDX): Promise<ContractInventory[]>;

  mintDryRun(
    contractAddress: string,
    senderAddress: string,
    price: bigint
  ): Promise<DryRunResult | undefined>;

  mint(contractAddress: string, senderAddress: string, price: bigint): Promise<void>;

  addChild(
    contractAddress: string,
    tokenId: number,
    childContractAddress: string,
    childTokenId: number,
    senderAddress: string
  ): Promise<void>;

  approve(
    contractAddress: string,
    callerAddress: string,
    operatorContractAddress: string,
    tokenId: number,
    approved: boolean
  ): Promise<void>;
}
