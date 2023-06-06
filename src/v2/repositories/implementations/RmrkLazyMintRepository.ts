import { IApi } from 'src/v2/integration';
import { IRmrkLazyMintRepository } from '../IRmrkLazyMintRepository';
import { SmartContractRepository } from './SmartContractRepository';
import { Symbols } from 'src/v2/symbols';
import { inject, injectable } from 'inversify';
import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';
import { ApiPromise } from '@polkadot/api';
import { Abi, ContractPromise } from '@polkadot/api-contract';
import rmrkProxyAbi from 'src/modules/nft/rmrk-lazy-mint-proxy/rmrk_proxy.json';
import { ContractCallOutcome } from '@polkadot/api-contract/types';

@injectable()
export class RmrkLazyMintRepository
  extends SmartContractRepository
  implements IRmrkLazyMintRepository
{
  constructor(@inject(Symbols.DefaultApi) private api: IApi) {
    super(api);
  }

  public async getMintCall(
    contractAddress: string,
    senderAddress: string,
    price: bigint
  ): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>> {
    const api = await this.api.getApi();
    const contract = this.getContract(api, contractAddress);
    const transaction = await this.getContractCall2(contract, senderAddress, 'mint', price);

    return transaction;
  }

  public async mintDryRun(
    contractAddress: string,
    senderAddress: string,
    price: bigint
  ): Promise<ContractCallOutcome> {
    const api = await this.api.getApi();
    const contract = this.getContract(api, contractAddress);
    return await this.dryRun(contract, senderAddress, 'mint', price);
  }

  private getContract = (api: ApiPromise, contractAddress: string): ContractPromise => {
    const abi = new Abi(rmrkProxyAbi, api.registry.getChainProperties());
    const contract = new ContractPromise(api, abi, contractAddress);
    if (!contract || contract === null) new Error('There is no contract found');

    return contract;
  };
}
