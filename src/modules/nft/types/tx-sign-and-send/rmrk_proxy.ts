/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import { txSignAndSend } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/rmrk_proxy';
import type BN from 'bn.js';
// @ts-ignore
import type { EventRecord } from '@polkadot/api/submittable';
import { decodeEvents } from '../shared/utils';

export default class Methods {
  private __nativeContract: ContractPromise;
  private __keyringPair: KeyringPair;
  private __apiPromise: ApiPromise;

  constructor(apiPromise: ApiPromise, nativeContract: ContractPromise, keyringPair: KeyringPair) {
    this.__apiPromise = apiPromise;
    this.__nativeContract = nativeContract;
    this.__keyringPair = keyringPair;
  }

  /**
   * mint
   *
   */
  mint(__options?: GasLimitAndRequiredValue) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'mint',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_proxy');
      },
      [],
      __options
    );
  }

  /**
   * rmrkContractAddress
   *
   */
  rmrkContractAddress(__options?: GasLimit) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'rmrkContractAddress',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_proxy');
      },
      [],
      __options
    );
  }

  /**
   * catalogContractAddress
   *
   */
  catalogContractAddress(__options?: GasLimit) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'catalogContractAddress',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_proxy');
      },
      [],
      __options
    );
  }

  /**
   * mintPrice
   *
   */
  mintPrice(__options?: GasLimit) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'mintPrice',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_proxy');
      },
      [],
      __options
    );
  }

  /**
   * setRmrkContractAddress
   *
   * @param { ArgumentTypes.AccountId } newContractAddress,
   */
  setRmrkContractAddress(newContractAddress: ArgumentTypes.AccountId, __options?: GasLimit) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'setRmrkContractAddress',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_proxy');
      },
      [newContractAddress],
      __options
    );
  }

  /**
   * setCatalogContractAddress
   *
   * @param { ArgumentTypes.AccountId } newContractAddress,
   */
  setCatalogContractAddress(newContractAddress: ArgumentTypes.AccountId, __options?: GasLimit) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'setCatalogContractAddress',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_proxy');
      },
      [newContractAddress],
      __options
    );
  }

  /**
   * setMintPrice
   *
   * @param { (string | number | BN) } newMintPrice,
   */
  setMintPrice(newMintPrice: string | number | BN, __options?: GasLimit) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'setMintPrice',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_proxy');
      },
      [newMintPrice],
      __options
    );
  }
}
