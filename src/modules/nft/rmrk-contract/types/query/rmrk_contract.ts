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
   * balanceOf
   *
   * @param { ArgumentTypes.AccountId } owner,
   * @returns { number }
   */
  balanceOf(
    owner: ArgumentTypes.AccountId,
    __options?: GasLimit
  ): Promise<QueryReturnType<number>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::balanceOf',
      [owner],
      __options
    );
  }

  /**
   * collectionId
   *
   * @returns { ReturnTypes.Id }
   */
  collectionId(__options?: GasLimit): Promise<QueryReturnType<ReturnTypes.Id>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::collectionId',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(1, 'rmrk_contract'));
      }
    );
  }

  /**
   * approve
   *
   * @param { ArgumentTypes.AccountId } operator,
   * @param { ArgumentTypes.Id | null } id,
   * @param { boolean } approved,
   * @returns { Result<null, ReturnTypes.PSP34Error> }
   */
  approve(
    operator: ArgumentTypes.AccountId,
    id: ArgumentTypes.Id | null,
    approved: boolean,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.PSP34Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::approve',
      [operator, id, approved],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(51, 'rmrk_contract'));
      }
    );
  }

  /**
   * allowance
   *
   * @param { ArgumentTypes.AccountId } owner,
   * @param { ArgumentTypes.AccountId } operator,
   * @param { ArgumentTypes.Id | null } id,
   * @returns { boolean }
   */
  allowance(
    owner: ArgumentTypes.AccountId,
    operator: ArgumentTypes.AccountId,
    id: ArgumentTypes.Id | null,
    __options?: GasLimit
  ): Promise<QueryReturnType<boolean>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::allowance',
      [owner, operator, id],
      __options
    );
  }

  /**
   * transfer
   *
   * @param { ArgumentTypes.AccountId } to,
   * @param { ArgumentTypes.Id } id,
   * @param { Array<(number | string | BN)> } data,
   * @returns { Result<null, ReturnTypes.PSP34Error> }
   */
  transfer(
    to: ArgumentTypes.AccountId,
    id: ArgumentTypes.Id,
    data: Array<number | string | BN>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.PSP34Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::transfer',
      [to, id, data],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(51, 'rmrk_contract'));
      }
    );
  }

  /**
   * totalSupply
   *
   * @returns { ReturnNumber }
   */
  totalSupply(__options?: GasLimit): Promise<QueryReturnType<ReturnNumber>> {
    return queryJSON<ReturnNumber>(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::totalSupply',
      [],
      __options,
      (result) => {
        return new ReturnNumber(result as number | string);
      }
    );
  }

  /**
   * ownerOf
   *
   * @param { ArgumentTypes.Id } id,
   * @returns { ReturnTypes.AccountId | null }
   */
  ownerOf(
    id: ArgumentTypes.Id,
    __options?: GasLimit
  ): Promise<QueryReturnType<ReturnTypes.AccountId | null>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::ownerOf',
      [id],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(19, 'rmrk_contract'));
      }
    );
  }

  /**
   * grantRole
   *
   * @param { (number | string | BN) } role,
   * @param { ArgumentTypes.AccountId } account,
   * @returns { Result<null, ReturnTypes.AccessControlError> }
   */
  grantRole(
    role: number | string | BN,
    account: ArgumentTypes.AccountId,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.AccessControlError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'accessControl::grantRole',
      [role, account],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(53, 'rmrk_contract'));
      }
    );
  }

  /**
   * getRoleAdmin
   *
   * @param { (number | string | BN) } role,
   * @returns { number }
   */
  getRoleAdmin(role: number | string | BN, __options?: GasLimit): Promise<QueryReturnType<number>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'accessControl::getRoleAdmin',
      [role],
      __options
    );
  }

  /**
   * revokeRole
   *
   * @param { (number | string | BN) } role,
   * @param { ArgumentTypes.AccountId } account,
   * @returns { Result<null, ReturnTypes.AccessControlError> }
   */
  revokeRole(
    role: number | string | BN,
    account: ArgumentTypes.AccountId,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.AccessControlError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'accessControl::revokeRole',
      [role, account],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(53, 'rmrk_contract'));
      }
    );
  }

  /**
   * renounceRole
   *
   * @param { (number | string | BN) } role,
   * @param { ArgumentTypes.AccountId } account,
   * @returns { Result<null, ReturnTypes.AccessControlError> }
   */
  renounceRole(
    role: number | string | BN,
    account: ArgumentTypes.AccountId,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.AccessControlError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'accessControl::renounceRole',
      [role, account],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(53, 'rmrk_contract'));
      }
    );
  }

  /**
   * hasRole
   *
   * @param { (number | string | BN) } role,
   * @param { ArgumentTypes.AccountId } address,
   * @returns { boolean }
   */
  hasRole(
    role: number | string | BN,
    address: ArgumentTypes.AccountId,
    __options?: GasLimit
  ): Promise<QueryReturnType<boolean>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'accessControl::hasRole',
      [role, address],
      __options
    );
  }

  /**
   * getAttribute
   *
   * @param { ArgumentTypes.Id } id,
   * @param { Array<(number | string | BN)> } key,
   * @returns { Array<number> | null }
   */
  getAttribute(
    id: ArgumentTypes.Id,
    key: Array<number | string | BN>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Array<number> | null>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34Metadata::getAttribute',
      [id, key],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(55, 'rmrk_contract'));
      }
    );
  }

  /**
   * tokenByIndex
   *
   * @param { (string | number | BN) } index,
   * @returns { Result<ReturnTypes.Id, ReturnTypes.PSP34Error> }
   */
  tokenByIndex(
    index: string | number | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Id, ReturnTypes.PSP34Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34Enumerable::tokenByIndex',
      [index],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(56, 'rmrk_contract'));
      }
    );
  }

  /**
   * ownersTokenByIndex
   *
   * @param { ArgumentTypes.AccountId } owner,
   * @param { (string | number | BN) } index,
   * @returns { Result<ReturnTypes.Id, ReturnTypes.PSP34Error> }
   */
  ownersTokenByIndex(
    owner: ArgumentTypes.AccountId,
    index: string | number | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Id, ReturnTypes.PSP34Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34Enumerable::ownersTokenByIndex',
      [owner, index],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(56, 'rmrk_contract'));
      }
    );
  }

  /**
   * maxSupply
   *
   * @returns { number }
   */
  maxSupply(__options?: GasLimit): Promise<QueryReturnType<number>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'mintingLazy::maxSupply',
      [],
      __options
    );
  }

  /**
   * price
   *
   * @returns { ReturnNumber }
   */
  price(__options?: GasLimit): Promise<QueryReturnType<ReturnNumber>> {
    return queryJSON<ReturnNumber>(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'mintingLazy::price',
      [],
      __options,
      (result) => {
        return new ReturnNumber(result as number | string);
      }
    );
  }

  /**
   * tokenUri
   *
   * @param { (number | string | BN) } tokenId,
   * @returns { Result<string, ReturnTypes.Error> }
   */
  tokenUri(
    tokenId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<string, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'mintingLazy::tokenUri',
      [tokenId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(57, 'rmrk_contract'));
      }
    );
  }

  /**
   * mint
   *
   * @returns { Result<null, ReturnTypes.Error> }
   */
  mint(
    __options?: GasLimitAndRequiredValue
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'mintingLazy::mint',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * mintMany
   *
   * @param { (number | string | BN) } mintAmount,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  mintMany(
    mintAmount: number | string | BN,
    __options?: GasLimitAndRequiredValue
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'mintingLazy::mintMany',
      [mintAmount],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * addChild
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  addChild(
    parentTokenId: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::addChild',
      [parentTokenId, childNft],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * childrenBalance
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @returns { Result<[number, number], ReturnTypes.Error> }
   */
  childrenBalance(
    parentTokenId: ArgumentTypes.Id,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<[number, number], ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::childrenBalance',
      [parentTokenId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(63, 'rmrk_contract'));
      }
    );
  }

  /**
   * transferChild
   *
   * @param { ArgumentTypes.Id } from,
   * @param { ArgumentTypes.Id } to,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  transferChild(
    from: ArgumentTypes.Id,
    to: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::transferChild',
      [from, to, childNft],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * rejectChild
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  rejectChild(
    parentTokenId: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::rejectChild',
      [parentTokenId, childNft],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * acceptChild
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  acceptChild(
    parentTokenId: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::acceptChild',
      [parentTokenId, childNft],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * removeChild
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  removeChild(
    parentTokenId: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::removeChild',
      [parentTokenId, childNft],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * getPendingChildren
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @returns { Array<[ReturnTypes.AccountId, ReturnTypes.Id]> }
   */
  getPendingChildren(
    parentTokenId: ArgumentTypes.Id,
    __options?: GasLimit
  ): Promise<QueryReturnType<Array<[ReturnTypes.AccountId, ReturnTypes.Id]>>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::getPendingChildren',
      [parentTokenId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(34, 'rmrk_contract'));
      }
    );
  }

  /**
   * getAcceptedChildren
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @returns { Array<[ReturnTypes.AccountId, ReturnTypes.Id]> }
   */
  getAcceptedChildren(
    parentTokenId: ArgumentTypes.Id,
    __options?: GasLimit
  ): Promise<QueryReturnType<Array<[ReturnTypes.AccountId, ReturnTypes.Id]>>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::getAcceptedChildren',
      [parentTokenId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(34, 'rmrk_contract'));
      }
    );
  }

  /**
   * addAssetToToken
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   * @param { (number | string | BN) | null } replacesAssetWithId,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  addAssetToToken(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    replacesAssetWithId: (number | string | BN) | null,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::addAssetToToken',
      [tokenId, assetId, replacesAssetWithId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * getAcceptedTokenAssets
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @returns { Result<Array<number>, ReturnTypes.Error> }
   */
  getAcceptedTokenAssets(
    tokenId: ArgumentTypes.Id,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Array<number>, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::getAcceptedTokenAssets',
      [tokenId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(66, 'rmrk_contract'));
      }
    );
  }

  /**
   * removeAsset
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  removeAsset(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::removeAsset',
      [tokenId, assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * acceptAsset
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  acceptAsset(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::acceptAsset',
      [tokenId, assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * multiAsset::getAsset
   *
   * @param { (number | string | BN) } assetId,
   * @returns { ReturnTypes.Asset | null }
   */
  'multiAsset::getAsset'(
    assetId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<ReturnTypes.Asset | null>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::getAsset',
      [assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(67, 'rmrk_contract'));
      }
    );
  }

  /**
   * totalAssets
   *
   * @returns { number }
   */
  totalAssets(__options?: GasLimit): Promise<QueryReturnType<number>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::totalAssets',
      [],
      __options
    );
  }

  /**
   * totalTokenAssets
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @returns { Result<[number, number], ReturnTypes.Error> }
   */
  totalTokenAssets(
    tokenId: ArgumentTypes.Id,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<[number, number], ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::totalTokenAssets',
      [tokenId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(63, 'rmrk_contract'));
      }
    );
  }

  /**
   * rejectAsset
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  rejectAsset(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::rejectAsset',
      [tokenId, assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
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
   * @returns { Result<null, ReturnTypes.Error> }
   */
  addAssetEntry(
    id: number | string | BN,
    equippableGroupId: number | string | BN,
    assetUri: Array<number | string | BN>,
    partIds: Array<number | string | BN>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::addAssetEntry',
      [id, equippableGroupId, assetUri, partIds],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * getPendingTokenAssets
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @returns { Result<Array<number>, ReturnTypes.Error> }
   */
  getPendingTokenAssets(
    tokenId: ArgumentTypes.Id,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<Array<number>, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::getPendingTokenAssets',
      [tokenId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(66, 'rmrk_contract'));
      }
    );
  }

  /**
   * setPriority
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { Array<(number | string | BN)> } priorities,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  setPriority(
    tokenId: ArgumentTypes.Id,
    priorities: Array<number | string | BN>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::setPriority',
      [tokenId, priorities],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * getAssetUri
   *
   * @param { (number | string | BN) } assetId,
   * @returns { Array<number> | null }
   */
  getAssetUri(
    assetId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Array<number> | null>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::getAssetUri',
      [assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(55, 'rmrk_contract'));
      }
    );
  }

  /**
   * getBaseMetadata
   *
   * @returns { string }
   */
  getBaseMetadata(__options?: GasLimit): Promise<QueryReturnType<string>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::getBaseMetadata',
      [],
      __options
    );
  }

  /**
   * getPartsCount
   *
   * @returns { number }
   */
  getPartsCount(__options?: GasLimit): Promise<QueryReturnType<number>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::getPartsCount',
      [],
      __options
    );
  }

  /**
   * addEquippableAddresses
   *
   * @param { (number | string | BN) } partId,
   * @param { Array<ArgumentTypes.AccountId> } equippableAddress,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  addEquippableAddresses(
    partId: number | string | BN,
    equippableAddress: Array<ArgumentTypes.AccountId>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::addEquippableAddresses',
      [partId, equippableAddress],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * isEquippableByAll
   *
   * @param { (number | string | BN) } partId,
   * @returns { boolean }
   */
  isEquippableByAll(
    partId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<boolean>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::isEquippableByAll',
      [partId],
      __options
    );
  }

  /**
   * resetEquippableAddresses
   *
   * @param { (number | string | BN) } partId,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  resetEquippableAddresses(
    partId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::resetEquippableAddresses',
      [partId],
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
   * @returns { Result<null, ReturnTypes.Error> }
   */
  addPartList(
    parts: Array<ArgumentTypes.Part>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::addPartList',
      [parts],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * setEquippableByAll
   *
   * @param { (number | string | BN) } partId,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  setEquippableByAll(
    partId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::setEquippableByAll',
      [partId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * setupBase
   *
   * @param { Array<(number | string | BN)> } baseMetadata,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  setupBase(
    baseMetadata: Array<number | string | BN>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::setupBase',
      [baseMetadata],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * base::getPart
   *
   * @param { (number | string | BN) } partId,
   * @returns { ReturnTypes.Part | null }
   */
  'base::getPart'(
    partId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<ReturnTypes.Part | null>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::getPart',
      [partId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(69, 'rmrk_contract'));
      }
    );
  }

  /**
   * ensureEquippable
   *
   * @param { (number | string | BN) } partId,
   * @param { ArgumentTypes.AccountId } targetAddress,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  ensureEquippable(
    partId: number | string | BN,
    targetAddress: ArgumentTypes.AccountId,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'base::ensureEquippable',
      [partId, targetAddress],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * unequip
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } slotPartId,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  unequip(
    tokenId: ArgumentTypes.Id,
    slotPartId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'equippable::unequip',
      [tokenId, slotPartId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
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
   * @returns { Result<null, ReturnTypes.Error> }
   */
  equip(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    slotPartId: number | string | BN,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    childAssetId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'equippable::equip',
      [tokenId, assetId, slotPartId, childNft, childAssetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * setValidParentForEquippableGroup
   *
   * @param { (number | string | BN) } equippableGroupId,
   * @param { ArgumentTypes.AccountId } parentAddress,
   * @param { (number | string | BN) } partId,
   * @returns { Result<null, ReturnTypes.Error> }
   */
  setValidParentForEquippableGroup(
    equippableGroupId: number | string | BN,
    parentAddress: ArgumentTypes.AccountId,
    partId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<null, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'equippable::setValidParentForEquippableGroup',
      [equippableGroupId, parentAddress, partId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(62, 'rmrk_contract'));
      }
    );
  }

  /**
   * getEquipment
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } slotPartId,
   * @returns { ReturnTypes.Equipment | null }
   */
  getEquipment(
    tokenId: ArgumentTypes.Id,
    slotPartId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<ReturnTypes.Equipment | null>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'equippable::getEquipment',
      [tokenId, slotPartId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(70, 'rmrk_contract'));
      }
    );
  }

  /**
   * getAssetAndEquippableData
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   * @returns { Result<ReturnTypes.Asset, ReturnTypes.Error> }
   */
  getAssetAndEquippableData(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Asset, ReturnTypes.Error>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'equippable::getAssetAndEquippableData',
      [tokenId, assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(71, 'rmrk_contract'));
      }
    );
  }

  /**
   * query::getAsset
   *
   * @param { ArgumentTypes.AccountId } collectionId,
   * @param { (number | string | BN) } assetId,
   * @returns { ReturnTypes.Asset | null }
   */
  'query::getAsset'(
    collectionId: ArgumentTypes.AccountId,
    assetId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<ReturnTypes.Asset | null>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'query::getAsset',
      [collectionId, assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(67, 'rmrk_contract'));
      }
    );
  }

  /**
   * getParts
   *
   * @param { ArgumentTypes.AccountId } collectionId,
   * @param { Array<(number | string | BN)> } partIds,
   * @returns { Array<ReturnTypes.Part> }
   */
  getParts(
    collectionId: ArgumentTypes.AccountId,
    partIds: Array<number | string | BN>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Array<ReturnTypes.Part>>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'query::getParts',
      [collectionId, partIds],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(68, 'rmrk_contract'));
      }
    );
  }

  /**
   * getAssets
   *
   * @param { ArgumentTypes.AccountId } collectionId,
   * @param { Array<(number | string | BN)> } assetIds,
   * @returns { Array<ReturnTypes.Asset> }
   */
  getAssets(
    collectionId: ArgumentTypes.AccountId,
    assetIds: Array<number | string | BN>,
    __options?: GasLimit
  ): Promise<QueryReturnType<Array<ReturnTypes.Asset>>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'query::getAssets',
      [collectionId, assetIds],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(72, 'rmrk_contract'));
      }
    );
  }

  /**
   * query::getPart
   *
   * @param { ArgumentTypes.AccountId } collectionId,
   * @param { (number | string | BN) } partId,
   * @returns { ReturnTypes.Part | null }
   */
  'query::getPart'(
    collectionId: ArgumentTypes.AccountId,
    partId: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<ReturnTypes.Part | null>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'query::getPart',
      [collectionId, partId],
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
   * @returns { ReturnTypes.Token }
   */
  getToken(
    collectionId: ArgumentTypes.AccountId,
    idU64: number | string | BN,
    __options?: GasLimit
  ): Promise<QueryReturnType<ReturnTypes.Token>> {
    return queryJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'query::getToken',
      [collectionId, idU64],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(73, 'rmrk_contract'));
      }
    );
  }
}
