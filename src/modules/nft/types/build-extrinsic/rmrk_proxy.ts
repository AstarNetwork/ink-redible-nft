/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@727-ventures/typechain-types';
import { buildSubmittableExtrinsic } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/rmrk_proxy';
import type BN from 'bn.js';
import type { ApiPromise } from '@polkadot/api';

export default class Methods {
  private __nativeContract: ContractPromise;
  private __apiPromise: ApiPromise;

  constructor(nativeContract: ContractPromise, apiPromise: ApiPromise) {
    this.__nativeContract = nativeContract;
    this.__apiPromise = apiPromise;
  }
  /**
   * mint
   *
   */
  mint(__options: GasLimitAndRequiredValue) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'mint',
      [],
      __options
    );
  }

  /**
   * rmrkContractAddress
   *
   */
  rmrkContractAddress(__options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'rmrkContractAddress',
      [],
      __options
    );
  }

  /**
   * catalogContractAddress
   *
   */
  catalogContractAddress(__options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'catalogContractAddress',
      [],
      __options
    );
  }

  /**
   * mintPrice
   *
   */
  mintPrice(__options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'mintPrice',
      [],
      __options
    );
  }

  /**
   * setRmrkContractAddress
   *
   * @param { ArgumentTypes.AccountId } newContractAddress,
   */
  setRmrkContractAddress(newContractAddress: ArgumentTypes.AccountId, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'setRmrkContractAddress',
      [newContractAddress],
      __options
    );
  }

  /**
   * setCatalogContractAddress
   *
   * @param { ArgumentTypes.AccountId } newContractAddress,
   */
  setCatalogContractAddress(newContractAddress: ArgumentTypes.AccountId, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'setCatalogContractAddress',
      [newContractAddress],
      __options
    );
  }

  /**
   * setMintPrice
   *
   * @param { (string | number | BN) } newMintPrice,
   */
  setMintPrice(newMintPrice: string | number | BN, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'setMintPrice',
      [newMintPrice],
      __options
    );
  }
}
