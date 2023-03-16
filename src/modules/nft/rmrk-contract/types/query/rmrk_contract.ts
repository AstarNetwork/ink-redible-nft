/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/rmrk_contract';
import type * as ReturnTypes from '../types-returns/rmrk_contract';
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
   * approve
   *
   * @param { ArgumentTypes.AccountId } operator,
   * @param { ArgumentTypes.Id | null } id,
   * @param { boolean } approved,
   * @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
   */
  approve(
    operator: ArgumentTypes.AccountId,
    id: ArgumentTypes.Id | null,
    approved: boolean,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::approve',
      [operator, id, approved],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(18, 'rmrk_contract'));
      }
    );
  }

  /**
   * allowance
   *
   * @param { ArgumentTypes.AccountId } owner,
   * @param { ArgumentTypes.AccountId } operator,
   * @param { ArgumentTypes.Id | null } id,
   * @returns { Result<boolean, ReturnTypes.LangError> }
   */
  allowance(
    owner: ArgumentTypes.AccountId,
    operator: ArgumentTypes.AccountId,
    id: ArgumentTypes.Id | null,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::allowance',
      [owner, operator, id],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(21, 'rmrk_contract'));
      }
    );
  }

  /**
   * transfer
   *
   * @param { ArgumentTypes.AccountId } to,
   * @param { ArgumentTypes.Id } id,
   * @param { Array<(number | string | BN)> } data,
   * @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
   */
  transfer(
    to: ArgumentTypes.AccountId,
    id: ArgumentTypes.Id,
    data: Array<number | string | BN>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::transfer',
      [to, id, data],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(18, 'rmrk_contract'));
      }
    );
  }

  /**
   * collectionId
   *
   * @returns { Result<ReturnTypes.Id, ReturnTypes.LangError> }
   */
  collectionId(
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Id, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::collectionId',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(22, 'rmrk_contract'));
      }
    );
  }

  /**
   * totalSupply
   *
   * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
   */
  totalSupply(
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::totalSupply',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(23, 'rmrk_contract'));
      }
    );
  }

  /**
   * ownerOf
   *
   * @param { ArgumentTypes.Id } id,
   * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
   */
  ownerOf(
    id: ArgumentTypes.Id,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::ownerOf',
      [id],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(24, 'rmrk_contract'));
      }
    );
  }

  /**
   * balanceOf
   *
   * @param { ArgumentTypes.AccountId } owner,
   * @returns { Result<number, ReturnTypes.LangError> }
   */
  balanceOf(
    owner: ArgumentTypes.AccountId,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::balanceOf',
      [owner],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(26, 'rmrk_contract'));
      }
    );
  }

  /**
   * revokeRole
   *
   * @param { (number | string | BN) } role,
   * @param { ArgumentTypes.AccountId } account,
   * @returns { Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError> }
   */
  revokeRole(
    role: number | string | BN,
    account: ArgumentTypes.AccountId,
    __options?: GasLimit
  ): Promise<
    QueryReturnType<Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError>>
  > {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'accessControl::revokeRole',
      [role, account],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(27, 'rmrk_contract'));
      }
    );
  }

  /**
   * hasRole
   *
   * @param { (number | string | BN) } role,
   * @param { ArgumentTypes.AccountId } address,
   * @returns { Result<boolean, ReturnTypes.LangError> }
   */
  hasRole(
    role: number | string | BN,
    address: ArgumentTypes.AccountId,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'accessControl::hasRole',
      [role, address],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(21, 'rmrk_contract'));
      }
    );
  }

  /**
   * grantRole
   *
   * @param { (number | string | BN) } role,
   * @param { ArgumentTypes.AccountId } account,
   * @returns { Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError> }
   */
  grantRole(
    role: number | string | BN,
    account: ArgumentTypes.AccountId,
    __options?: GasLimit
  ): Promise<
    QueryReturnType<Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError>>
  > {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'accessControl::grantRole',
      [role, account],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(27, 'rmrk_contract'));
      }
    );
  }

  /**
   * renounceRole
   *
   * @param { (number | string | BN) } role,
   * @param { ArgumentTypes.AccountId } account,
   * @returns { Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError> }
   */
  renounceRole(
    role: number | string | BN,
    account: ArgumentTypes.AccountId,
    __options?: GasLimit
  ): Promise<
    QueryReturnType<Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError>>
  > {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'accessControl::renounceRole',
      [role, account],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(27, 'rmrk_contract'));
      }
    );
  }

  /**
   * getRoleAdmin
   *
   * @param { (number | string | BN) } role,
   * @returns { Result<number, ReturnTypes.LangError> }
   */
  getRoleAdmin(
    role: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'accessControl::getRoleAdmin',
      [role],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(26, 'rmrk_contract'));
      }
    );
  }

  /**
   * getAttribute
   *
   * @param { ArgumentTypes.Id } id,
   * @param { Array<(number | string | BN)> } key,
   * @returns { Result<Array<number> | null, ReturnTypes.LangError> }
   */
  getAttribute(
    id: ArgumentTypes.Id,
    key: Array<number | BN> | string,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Array<number> | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34Metadata::getAttribute',
      [id, key],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(30, 'rmrk_contract'));
      }
    );
  }

  /**
   * tokenByIndex
   *
   * @param { (string | number | BN) } index,
   * @returns { Result<Result<ReturnTypes.Id, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
   */
  tokenByIndex(
    index: string | number | BN,
    __options?: GasLimit
  ): Promise<
    QueryReturnType<Result<Result<ReturnTypes.Id, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>
  > {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34Enumerable::tokenByIndex',
      [index],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(32, 'rmrk_contract'));
      }
    );
  }

  /**
   * ownersTokenByIndex
   *
   * @param { ArgumentTypes.AccountId } owner,
   * @param { (string | number | BN) } index,
   * @returns { Result<Result<ReturnTypes.Id, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
   */
  ownersTokenByIndex(
    owner: ArgumentTypes.AccountId,
    index: string | number | BN,
    __options?: GasLimit
  ): Promise<
    QueryReturnType<Result<Result<ReturnTypes.Id, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>
  > {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34Enumerable::ownersTokenByIndex',
      [owner, index],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(32, 'rmrk_contract'));
      }
    );
  }

  /**
   * mintingLazy::tokenUri
   *
   * @param { (number | string | BN) } tokenId,
   * @returns { Result<Result<string, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  'mintingLazy::tokenUri'(
    tokenId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<string, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'mintingLazy::tokenUri',
      [tokenId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(34, 'rmrk_contract'));
      }
    );
  }

  /**
   * mintingLazy::maxSupply
   *
   * @returns { Result<number, ReturnTypes.LangError> }
   */
  'mintingLazy::maxSupply'(
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'mintingLazy::maxSupply',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(40, 'rmrk_contract'));
      }
    );
  }

  /**
   * mintingLazy::mintMany
   *
   * @param { (number | string | BN) } mintAmount,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  'mintingLazy::mintMany'(
    mintAmount: number | string | BN,
    __options?: GasLimitAndRequiredValue
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'mintingLazy::mintMany',
      [mintAmount],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * mintingLazy::mint
   *
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  'mintingLazy::mint'(
    __options?: GasLimitAndRequiredValue
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'mintingLazy::mint',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * price
   *
   * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
   */
  price(
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'mintingLazy::price',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(23, 'rmrk_contract'));
      }
    );
  }

  /**
   * minting::mintMany
   *
   * @param { ArgumentTypes.AccountId } to,
   * @param { (number | string | BN) } mintAmount,
   * @returns { Result<Result<[ReturnTypes.Id, ReturnTypes.Id], ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  'minting::mintMany'(
    to: ArgumentTypes.AccountId,
    mintAmount: number | string | BN,
    __options?: GasLimit
  ): Promise<
    QueryReturnType<
      Result<Result<[ReturnTypes.Id, ReturnTypes.Id], ReturnTypes.Error>, ReturnTypes.LangError>
    >
  > {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'minting::mintMany',
      [to, mintAmount],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(43, 'rmrk_contract'));
      }
    );
  }

  /**
   * minting::maxSupply
   *
   * @returns { Result<number, ReturnTypes.LangError> }
   */
  'minting::maxSupply'(
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'minting::maxSupply',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(40, 'rmrk_contract'));
      }
    );
  }

  /**
   * minting::tokenUri
   *
   * @param { (number | string | BN) } tokenId,
   * @returns { Result<Result<string, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  'minting::tokenUri'(
    tokenId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<string, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'minting::tokenUri',
      [tokenId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(34, 'rmrk_contract'));
      }
    );
  }

  /**
   * assignMetadata
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { Array<(number | string | BN)> } metadata,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  assignMetadata(
    tokenId: ArgumentTypes.Id,
    metadata: Array<number | string | BN>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'minting::assignMetadata',
      [tokenId, metadata],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * minting::mint
   *
   * @param { ArgumentTypes.AccountId } to,
   * @returns { Result<Result<ReturnTypes.Id, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  'minting::mint'(
    to: ArgumentTypes.AccountId,
    __options?: GasLimit
  ): Promise<
    QueryReturnType<Result<Result<ReturnTypes.Id, ReturnTypes.Error>, ReturnTypes.LangError>>
  > {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'minting::mint',
      [to],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(46, 'rmrk_contract'));
      }
    );
  }

  /**
   * addChild
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  addChild(
    parentTokenId: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::addChild',
      [parentTokenId, childNft],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * acceptChild
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  acceptChild(
    parentTokenId: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::acceptChild',
      [parentTokenId, childNft],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * getAcceptedChildren
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @returns { Result<Array<[ReturnTypes.AccountId, ReturnTypes.Id]>, ReturnTypes.LangError> }
   */
  getAcceptedChildren(
    parentTokenId: ArgumentTypes.Id,
    __options?: GasLimit
  ): Promise<
    QueryReturnType<Result<Array<[ReturnTypes.AccountId, ReturnTypes.Id]>, ReturnTypes.LangError>>
  > {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::getAcceptedChildren',
      [parentTokenId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(48, 'rmrk_contract'));
      }
    );
  }

  /**
   * childrenBalance
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @returns { Result<Result<[number, number], ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  childrenBalance(
    parentTokenId: ArgumentTypes.Id,
    __options?: GasLimit
  ): Promise<
    QueryReturnType<Result<Result<[number, number], ReturnTypes.Error>, ReturnTypes.LangError>>
  > {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::childrenBalance',
      [parentTokenId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(49, 'rmrk_contract'));
      }
    );
  }

  /**
   * removeChild
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  removeChild(
    parentTokenId: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::removeChild',
      [parentTokenId, childNft],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * rejectChild
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  rejectChild(
    parentTokenId: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::rejectChild',
      [parentTokenId, childNft],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * transferChild
   *
   * @param { ArgumentTypes.Id } from,
   * @param { ArgumentTypes.Id } to,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  transferChild(
    from: ArgumentTypes.Id,
    to: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::transferChild',
      [from, to, childNft],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * getPendingChildren
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @returns { Result<Array<[ReturnTypes.AccountId, ReturnTypes.Id]>, ReturnTypes.LangError> }
   */
  getPendingChildren(
    parentTokenId: ArgumentTypes.Id,
    __options?: GasLimit
  ): Promise<
    QueryReturnType<Result<Array<[ReturnTypes.AccountId, ReturnTypes.Id]>, ReturnTypes.LangError>>
  > {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::getPendingChildren',
      [parentTokenId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(48, 'rmrk_contract'));
      }
    );
  }

  /**
   * getAssetUri
   *
   * @param { (number | string | BN) } assetId,
   * @returns { Result<Array<number> | null, ReturnTypes.LangError> }
   */
  getAssetUri(
    assetId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Array<number> | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::getAssetUri',
      [assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(30, 'rmrk_contract'));
      }
    );
  }

  /**
   * totalTokenAssets
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @returns { Result<Result<[number, number], ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  totalTokenAssets(
    tokenId: ArgumentTypes.Id,
    __options?: GasLimit
  ): Promise<
    QueryReturnType<Result<Result<[number, number], ReturnTypes.Error>, ReturnTypes.LangError>>
  > {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::totalTokenAssets',
      [tokenId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(49, 'rmrk_contract'));
      }
    );
  }

  /**
   * getAcceptedTokenAssets
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @returns { Result<Result<Array<number>, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  getAcceptedTokenAssets(
    tokenId: ArgumentTypes.Id,
    __options?: GasLimit
  ): Promise<
    QueryReturnType<Result<Result<Array<number>, ReturnTypes.Error>, ReturnTypes.LangError>>
  > {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::getAcceptedTokenAssets',
      [tokenId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(52, 'rmrk_contract'));
      }
    );
  }

  /**
   * setPriority
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { Array<(number | string | BN)> } priorities,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  setPriority(
    tokenId: ArgumentTypes.Id,
    priorities: Array<number | string | BN>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::setPriority',
      [tokenId, priorities],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * addAssetEntry
   *
   * @param { (number | string | BN) } id,
   * @param { (number | string | BN) } equippableGroupId,
   * @param { Array<(number | string | BN)> } assetUri,
   * @param { Array<(number | string | BN)> } partIds,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  addAssetEntry(
    id: number | string | BN,
    equippableGroupId: number | string | BN,
    assetUri: Array<number | string | BN>,
    partIds: Array<number | string | BN>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::addAssetEntry',
      [id, equippableGroupId, assetUri, partIds],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * addAssetToToken
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   * @param { (number | string | BN) | null } replacesAssetWithId,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  addAssetToToken(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    replacesAssetWithId: (number | string | BN) | null,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::addAssetToToken',
      [tokenId, assetId, replacesAssetWithId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * acceptAsset
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  acceptAsset(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::acceptAsset',
      [tokenId, assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * getPendingTokenAssets
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @returns { Result<Result<Array<number>, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  getPendingTokenAssets(
    tokenId: ArgumentTypes.Id,
    __options?: GasLimit
  ): Promise<
    QueryReturnType<Result<Result<Array<number>, ReturnTypes.Error>, ReturnTypes.LangError>>
  > {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::getPendingTokenAssets',
      [tokenId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(52, 'rmrk_contract'));
      }
    );
  }

  /**
   * rejectAsset
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  rejectAsset(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::rejectAsset',
      [tokenId, assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * totalAssets
   *
   * @returns { Result<number, ReturnTypes.LangError> }
   */
  totalAssets(
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::totalAssets',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(26, 'rmrk_contract'));
      }
    );
  }

  /**
   * removeAsset
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  removeAsset(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::removeAsset',
      [tokenId, assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * multiAsset::getAsset
   *
   * @param { (number | string | BN) } assetId,
   * @returns { Result<ReturnTypes.Asset | null, ReturnTypes.LangError> }
   */
  'multiAsset::getAsset'(
    assetId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Asset | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::getAsset',
      [assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(55, 'rmrk_contract'));
      }
    );
  }

  /**
   * base::getPart
   *
   * @param { (number | string | BN) } partId,
   * @returns { Result<ReturnTypes.Part | null, ReturnTypes.LangError> }
   */
  'base::getPart'(
    partId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Part | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::getPart',
      [partId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(58, 'rmrk_contract'));
      }
    );
  }

  /**
   * ensureEquippable
   *
   * @param { (number | string | BN) } partId,
   * @param { ArgumentTypes.AccountId } targetAddress,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  ensureEquippable(
    partId: number | string | BN,
    targetAddress: ArgumentTypes.AccountId,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::ensureEquippable',
      [partId, targetAddress],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * getPartsCount
   *
   * @returns { Result<number, ReturnTypes.LangError> }
   */
  getPartsCount(
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::getPartsCount',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(26, 'rmrk_contract'));
      }
    );
  }

  /**
   * setupBase
   *
   * @param { Array<(number | string | BN)> } baseMetadata,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  setupBase(
    baseMetadata: Array<number | string | BN>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::setupBase',
      [baseMetadata],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * isEquippableByAll
   *
   * @param { (number | string | BN) } partId,
   * @returns { Result<boolean, ReturnTypes.LangError> }
   */
  isEquippableByAll(
    partId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::isEquippableByAll',
      [partId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(21, 'rmrk_contract'));
      }
    );
  }

  /**
   * addEquippableAddresses
   *
   * @param { (number | string | BN) } partId,
   * @param { Array<ArgumentTypes.AccountId> } equippableAddress,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  addEquippableAddresses(
    partId: number | string | BN,
    equippableAddress: Array<ArgumentTypes.AccountId>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::addEquippableAddresses',
      [partId, equippableAddress],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * resetEquippableAddresses
   *
   * @param { (number | string | BN) } partId,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  resetEquippableAddresses(
    partId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::resetEquippableAddresses',
      [partId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * getBaseMetadata
   *
   * @returns { Result<string, ReturnTypes.LangError> }
   */
  getBaseMetadata(
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<string, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::getBaseMetadata',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * addPartList
   *
   * @param { Array<ArgumentTypes.Part> } parts,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  addPartList(
    parts: Array<ArgumentTypes.Part>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::addPartList',
      [parts],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * setEquippableByAll
   *
   * @param { (number | string | BN) } partId,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  setEquippableByAll(
    partId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::setEquippableByAll',
      [partId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * getEquipment
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } slotPartId,
   * @returns { Result<ReturnTypes.Equipment | null, ReturnTypes.LangError> }
   */
  getEquipment(
    tokenId: ArgumentTypes.Id,
    slotPartId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Equipment | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'equippable::getEquipment',
      [tokenId, slotPartId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(64, 'rmrk_contract'));
      }
    );
  }

  /**
   * setValidParentForEquippableGroup
   *
   * @param { (number | string | BN) } equippableGroupId,
   * @param { ArgumentTypes.AccountId } parentAddress,
   * @param { (number | string | BN) } partId,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  setValidParentForEquippableGroup(
    equippableGroupId: number | string | BN,
    parentAddress: ArgumentTypes.AccountId,
    partId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'equippable::setValidParentForEquippableGroup',
      [equippableGroupId, parentAddress, partId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * getAssetAndEquippableData
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   * @returns { Result<Result<ReturnTypes.Asset, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  getAssetAndEquippableData(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    __options?: GasLimit
  ): Promise<
    QueryReturnType<Result<Result<ReturnTypes.Asset, ReturnTypes.Error>, ReturnTypes.LangError>>
  > {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'equippable::getAssetAndEquippableData',
      [tokenId, assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(67, 'rmrk_contract'));
      }
    );
  }

  /**
   * unequip
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } slotPartId,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  unequip(
    tokenId: ArgumentTypes.Id,
    slotPartId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'equippable::unequip',
      [tokenId, slotPartId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * equip
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   * @param { (number | string | BN) } slotPartId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @param { (number | string | BN) } childAssetId,
   * @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  equip(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    slotPartId: number | string | BN,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    childAssetId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'equippable::equip',
      [tokenId, assetId, slotPartId, childNft, childAssetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(41, 'rmrk_contract'));
      }
    );
  }

  /**
   * query::getPart
   *
   * @param { ArgumentTypes.AccountId } collectionId,
   * @param { (number | string | BN) } partId,
   * @returns { Result<ReturnTypes.Part | null, ReturnTypes.LangError> }
   */
  'query::getPart'(
    collectionId: ArgumentTypes.AccountId,
    partId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Part | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'query::getPart',
      [collectionId, partId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(58, 'rmrk_contract'));
      }
    );
  }

  /**
   * query::getAsset
   *
   * @param { ArgumentTypes.AccountId } collectionId,
   * @param { (number | string | BN) } assetId,
   * @returns { Result<ReturnTypes.Asset | null, ReturnTypes.LangError> }
   */
  'query::getAsset'(
    collectionId: ArgumentTypes.AccountId,
    assetId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Asset | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'query::getAsset',
      [collectionId, assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(55, 'rmrk_contract'));
      }
    );
  }

  /**
   * getParts
   *
   * @param { ArgumentTypes.AccountId } collectionId,
   * @param { Array<(number | string | BN)> } partIds,
   * @returns { Result<Array<ReturnTypes.Part>, ReturnTypes.LangError> }
   */
  getParts(
    collectionId: ArgumentTypes.AccountId,
    partIds: Array<number | string | BN>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Array<ReturnTypes.Part>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'query::getParts',
      [collectionId, partIds],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(69, 'rmrk_contract'));
      }
    );
  }

  /**
   * getToken
   *
   * @param { ArgumentTypes.AccountId } collectionId,
   * @param { (number | string | BN) } idU64,
   * @returns { Result<ReturnTypes.Token, ReturnTypes.LangError> }
   */
  getToken(
    collectionId: ArgumentTypes.AccountId,
    idU64: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Token, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'query::getToken',
      [collectionId, idU64],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(70, 'rmrk_contract'));
      }
    );
  }

  /**
   * getAssets
   *
   * @param { ArgumentTypes.AccountId } collectionId,
   * @param { Array<(number | string | BN)> } assetIds,
   * @returns { Result<Array<ReturnTypes.Asset>, ReturnTypes.LangError> }
   */
  getAssets(
    collectionId: ArgumentTypes.AccountId,
    assetIds: Array<number | string | BN>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Array<ReturnTypes.Asset>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'query::getAssets',
      [collectionId, assetIds],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(74, 'rmrk_contract'));
      }
    );
  }
}
