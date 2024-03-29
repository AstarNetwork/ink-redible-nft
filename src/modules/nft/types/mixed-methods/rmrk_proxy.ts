/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@727-ventures/typechain-types';
import { txSignAndSend } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/rmrk_proxy';
import type * as ReturnTypes from '../types-returns/rmrk_proxy';
import type BN from 'bn.js';
//@ts-ignore
import { ReturnNumber } from '@727-ventures/typechain-types';
import { getTypeDescription } from './../shared/utils';
// @ts-ignore
import type { EventRecord } from '@polkadot/api/submittable';
import { decodeEvents } from '../shared/utils';

export default class Methods {
  private __nativeContract: ContractPromise;
  private __keyringPair: KeyringPair;
  private __callerAddress: string;
  private __apiPromise: ApiPromise;

  constructor(apiPromise: ApiPromise, nativeContract: ContractPromise, keyringPair: KeyringPair) {
    this.__apiPromise = apiPromise;
    this.__nativeContract = nativeContract;
    this.__keyringPair = keyringPair;
    this.__callerAddress = keyringPair.address;
  }

  /**
   * mint
   *
   * @returns { void }
   */
  mint(__options: GasLimitAndRequiredValue) {
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
   * @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
   */
  rmrkContractAddress(
    __options: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.AccountId, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'rmrkContractAddress',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(13, 'rmrk_proxy'));
      }
    );
  }

  /**
   * catalogContractAddress
   *
   * @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
   */
  catalogContractAddress(
    __options: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.AccountId, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'catalogContractAddress',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(13, 'rmrk_proxy'));
      }
    );
  }

  /**
   * mintPrice
   *
   * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
   */
  mintPrice(
    __options: GasLimit
  ): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'mintPrice',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(14, 'rmrk_proxy'));
      }
    );
  }

  /**
   * setRmrkContractAddress
   *
   * @param { ArgumentTypes.AccountId } newContractAddress,
   * @returns { void }
   */
  setRmrkContractAddress(newContractAddress: ArgumentTypes.AccountId, __options: GasLimit) {
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
   * @returns { void }
   */
  setCatalogContractAddress(newContractAddress: ArgumentTypes.AccountId, __options: GasLimit) {
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
   * @returns { void }
   */
  setMintPrice(newMintPrice: string | number | BN, __options: GasLimit) {
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
