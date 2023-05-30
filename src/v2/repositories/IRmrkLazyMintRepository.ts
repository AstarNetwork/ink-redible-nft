import { ContractCallOutcome } from '@polkadot/api-contract/types';
import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';

export interface IRmrkLazyMintRepository {
  getMintCall(
    contractAddress: string,
    senderAddress: string,
    price: bigint
  ): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>>;

  mintDryRun(
    contractAddress: string,
    senderAddress: string,
    price: bigint
  ): Promise<ContractCallOutcome>;
}
