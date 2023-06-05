import { CodePromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import Files from 'fs';
import type { ApiPromise } from '@polkadot/api';
import {
  _genValidGasLimitAndValue,
  _signAndSend,
  SignAndSendSuccessResponse,
} from '@727-ventures/typechain-types';
import type { ConstructorOptions } from '@727-ventures/typechain-types';
import type { WeightV2 } from '@polkadot/types/interfaces';
import type * as ArgumentTypes from '../types-arguments/rmrk_proxy';
import type BN from 'bn.js';

export default class Constructors {
  readonly nativeAPI: ApiPromise;
  readonly signer: KeyringPair;

  constructor(nativeAPI: ApiPromise, signer: KeyringPair) {
    this.nativeAPI = nativeAPI;
    this.signer = signer;
  }

  /**
   * new
   *
   * @param { ArgumentTypes.AccountId } rmrkContract,
   * @param { ArgumentTypes.AccountId } catalogContract,
   * @param { (string | number | BN) } mintPrice,
   */
  async new(
    rmrkContract: ArgumentTypes.AccountId,
    catalogContract: ArgumentTypes.AccountId,
    mintPrice: string | number | BN,
    __options?: ConstructorOptions
  ) {
    const __contract = JSON.parse(
      Files.readFileSync('./src/modules/nft/contracts/rmrk_proxy.contract').toString()
    );
    const code = new CodePromise(this.nativeAPI, __contract, __contract.source.wasm);
    const gasLimit = (await _genValidGasLimitAndValue(this.nativeAPI, __options))
      .gasLimit as WeightV2;

    const storageDepositLimit = __options?.storageDepositLimit;
    const tx = code.tx['new']!(
      { gasLimit, storageDepositLimit: storageDepositLimit as BN, value: __options?.value as BN },
      rmrkContract,
      catalogContract,
      mintPrice
    );
    let response;

    try {
      response = await _signAndSend(
        this.nativeAPI.registry,
        tx,
        this.signer,
        (event: any) => event
      );
    } catch (error) {
      console.log(error);
    }

    return {
      result: response as SignAndSendSuccessResponse,
      // @ts-ignore
      address: (response as SignAndSendSuccessResponse)!.result!.contract.address.toString(),
    };
  }
}
