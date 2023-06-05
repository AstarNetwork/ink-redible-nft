/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/rmrk_proxy';
import type * as ReturnTypes from '../types-returns/rmrk_proxy';
import type BN from 'bn.js';
//@ts-ignore
import { ReturnNumber } from '@727-ventures/typechain-types';
import { getTypeDescription } from './../shared/utils';

export default class Methods {
  private __nativeContract: ContractPromise;
  private __apiPromise: ApiPromise;
  private __callerAddress: string;

  constructor(nativeContract: ContractPromise, nativeApi: ApiPromise, callerAddress: string) {
    this.__nativeContract = nativeContract;
    this.__callerAddress = callerAddress;
    this.__apiPromise = nativeApi;
  }

  /**
   * mint
   *
   * @returns { Result<Result<null, ReturnTypes.ProxyError>, ReturnTypes.LangError> }
   */
  mint(
    __options?: GasLimitAndRequiredValue
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ProxyError>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'mint',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(8, 'rmrk_proxy'));
      }
    );
  }

  /**
   * rmrkContractAddress
   *
   * @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
   */
  rmrkContractAddress(
    __options?: GasLimit
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
    __options?: GasLimit
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
    __options?: GasLimit
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
   * @returns { Result<Result<null, ReturnTypes.ProxyError>, ReturnTypes.LangError> }
   */
  setRmrkContractAddress(
    newContractAddress: ArgumentTypes.AccountId,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ProxyError>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'setRmrkContractAddress',
      [newContractAddress],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(8, 'rmrk_proxy'));
      }
    );
  }

  /**
   * setCatalogContractAddress
   *
   * @param { ArgumentTypes.AccountId } newContractAddress,
   * @returns { Result<Result<null, ReturnTypes.ProxyError>, ReturnTypes.LangError> }
   */
  setCatalogContractAddress(
    newContractAddress: ArgumentTypes.AccountId,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ProxyError>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'setCatalogContractAddress',
      [newContractAddress],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(8, 'rmrk_proxy'));
      }
    );
  }

  /**
   * setMintPrice
   *
   * @param { (string | number | BN) } newMintPrice,
   * @returns { Result<Result<null, ReturnTypes.ProxyError>, ReturnTypes.LangError> }
   */
  setMintPrice(
    newMintPrice: string | number | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ProxyError>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'setMintPrice',
      [newMintPrice],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(8, 'rmrk_proxy'));
      }
    );
  }
}
