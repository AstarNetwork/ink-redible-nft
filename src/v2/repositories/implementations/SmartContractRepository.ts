import { ApiPromise } from '@polkadot/api';
import { Abi, ContractPromise } from '@polkadot/api-contract';
import { ContractCallOutcome } from '@polkadot/api-contract/types';
import { ApiBase } from '@polkadot/api/base';
import { SubmittableExtrinsic } from '@polkadot/api/types';
import { DispatchError, WeightV2 } from '@polkadot/types/interfaces';
import { ISubmittableResult } from '@polkadot/types/types';
import { rmrkAbi } from 'src/modules/nft/abi/rmrk'; // TODO this should be injected.
import { IApi } from 'src/v2/integration';

/**
 * Contains common functions to interact with the RMRK contract.
 */
export class SmartContractRepository {
  private gasLimit: WeightV2 | null;

  constructor(private apiFactory: IApi) {
    this.gasLimit = null;
  }

  protected async getContractCall(
    contractAddress: string,
    call: string,
    senderAddress: string,
    ...params: unknown[]
  ): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>> {
    const contract = this.getRmrkContract(await this.apiFactory.getApi(), contractAddress);
    const gasLimit = this.getGasLimit(contract.api);
    const txResult = await contract.query[call](
      senderAddress,
      {
        gasLimit,
        storageDepositLimit: null,
      },
      ...params
    );

    if (txResult.result.isErr || txResult.result.toString().includes('Revert')) {
      throw this.getErrorMessage(txResult.result.value as DispatchError);
    } else if (txResult.result.toString().includes('Revert')) {
      throw txResult.result.value;
    }

    const extrinsic = contract.tx[call](
      {
        gasLimit: this.increaseGasLimit(contract.api, txResult.gasRequired),
        storageDepositLimit: txResult.storageDeposit.isCharge
          ? txResult.storageDeposit.asCharge
          : 0,
      },
      ...params
    );

    return extrinsic;
  }

  protected async dryRun(
    contract: ContractPromise,
    senderAddress: string,
    call: string,
    value: bigint,
    ...params: unknown[]
  ): Promise<ContractCallOutcome> {
    const gasLimit = this.getGasLimit(contract.api);
    const txResult = await contract.query[call](
      senderAddress,
      {
        gasLimit,
        storageDepositLimit: null,
        value,
      },
      ...params
    );

    if (txResult.result.isErr) {
      throw this.getErrorMessage(txResult.result.value as DispatchError);
    } else if (txResult.result.toString().includes('Revert')) {
      throw txResult.result.value;
    }

    return txResult;
  }

  // TODO refactor, very similar to getContractCall
  protected async getContractCall2(
    contract: ContractPromise,
    senderAddress: string,
    call: string,
    value: bigint,
    ...params: unknown[]
  ): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>> {
    const txResult = await this.dryRun(contract, senderAddress, call, value, ...params);

    const extrinsic = contract.tx[call](
      {
        gasLimit: txResult.gasRequired, // this.increaseGasLimit(contract.api, txResult.gasRequired), // TODO increasing might be not needed
        storageDepositLimit: txResult.storageDeposit.isCharge
          ? txResult.storageDeposit.asCharge
          : 0,
        value,
      },
      ...params
    );

    return extrinsic;
  }

  private getRmrkContract = (api: ApiPromise, contractAddress: string): ContractPromise => {
    const abi = new Abi(rmrkAbi, api.registry.getChainProperties());
    const contract = new ContractPromise(api, abi, contractAddress);
    if (!contract || contract === null) new Error('There is no contract found');

    // const initialGasLimit = contract.registry.createType(
    //   'WeightV2',
    //   api.consts.system.blockWeights['maxBlock']
    // );
    // return { contract, initialGasLimit };
    return contract;
  };

  private getGasLimit(api: ApiPromise | ApiBase<'promise'>): WeightV2 {
    if (!this.gasLimit) {
      this.gasLimit = api.registry.createType(
        'WeightV2',
        api.consts.system.blockWeights['maxBlock']
      ) as WeightV2;
    }

    return this.gasLimit;
  }

  /**
   * Since some conditions can change on a chain since the gas estimation was done, we need to increase the gas limit
   * to be sure that the transaction will be executed.
   * @param api ApiPromise or ApiBase
   * @param weight Weight to increase.
   * @returns Increased weight.
   */
  private increaseGasLimit = (api: ApiPromise | ApiBase<'promise'>, weight: WeightV2): WeightV2 => {
    return api.registry.createType('WeightV2', {
      refTime: weight.refTime.toBn().muln(1.1),
      proofSize: weight.proofSize.toBn().muln(1.1),
    }) as WeightV2;
  };

  // TODO - move to utils, since the same method exists in WalletService.
  private getErrorMessage(dispatchError: DispatchError) {
    let message = '';
    if (dispatchError.isModule) {
      try {
        const mod = dispatchError.asModule;
        const error = dispatchError.registry.findMetaError(mod);

        message = `${error.section}.${error.name}`;
      } catch (error) {
        // swallow
        console.error(error);
      }
    } else if (dispatchError.isToken) {
      message = `${dispatchError.type}.${dispatchError.asToken.type}`;
    }

    return message;
  }
}
