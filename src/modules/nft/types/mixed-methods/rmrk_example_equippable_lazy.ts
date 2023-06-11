/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@727-ventures/typechain-types';
import { txSignAndSend } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/rmrk_example_equippable_lazy';
import type * as ReturnTypes from '../types-returns/rmrk_example_equippable_lazy';
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
   * totalSupply
   *
   * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
   */
  totalSupply(
    __options: GasLimit
  ): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::totalSupply',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(16, 'rmrk_example_equippable_lazy'));
      }
    );
  }

  /**
   * approve
   *
   * @param { ArgumentTypes.AccountId } operator,
   * @param { ArgumentTypes.Id | null } id,
   * @param { boolean } approved,
   * @returns { void }
   */
  approve(
    operator: ArgumentTypes.AccountId,
    id: ArgumentTypes.Id | null,
    approved: boolean,
    __options: GasLimit
  ) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'psp34::approve',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [operator, id, approved],
      __options
    );
  }

  /**
   * transfer
   *
   * @param { ArgumentTypes.AccountId } to,
   * @param { ArgumentTypes.Id } id,
   * @param { Array<(number | string | BN)> } data,
   * @returns { void }
   */
  transfer(
    to: ArgumentTypes.AccountId,
    id: ArgumentTypes.Id,
    data: Array<number | string | BN>,
    __options: GasLimit
  ) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'psp34::transfer',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [to, id, data],
      __options
    );
  }

  /**
   * collectionId
   *
   * @returns { Result<ReturnTypes.Id, ReturnTypes.LangError> }
   */
  collectionId(
    __options: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Id, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::collectionId',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(22, 'rmrk_example_equippable_lazy'));
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
    __options: GasLimit
  ): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::balanceOf',
      [owner],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(23, 'rmrk_example_equippable_lazy'));
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
    __options: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::ownerOf',
      [id],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(24, 'rmrk_example_equippable_lazy'));
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
    __options: GasLimit
  ): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34::allowance',
      [owner, operator, id],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(26, 'rmrk_example_equippable_lazy'));
      }
    );
  }

  /**
   * grantRole
   *
   * @param { (number | string | BN) } role,
   * @param { ArgumentTypes.AccountId } account,
   * @returns { void }
   */
  grantRole(role: number | string | BN, account: ArgumentTypes.AccountId, __options: GasLimit) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'accessControl::grantRole',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [role, account],
      __options
    );
  }

  /**
   * revokeRole
   *
   * @param { (number | string | BN) } role,
   * @param { ArgumentTypes.AccountId } account,
   * @returns { void }
   */
  revokeRole(role: number | string | BN, account: ArgumentTypes.AccountId, __options: GasLimit) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'accessControl::revokeRole',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [role, account],
      __options
    );
  }

  /**
   * renounceRole
   *
   * @param { (number | string | BN) } role,
   * @param { ArgumentTypes.AccountId } account,
   * @returns { void }
   */
  renounceRole(role: number | string | BN, account: ArgumentTypes.AccountId, __options: GasLimit) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'accessControl::renounceRole',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [role, account],
      __options
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
    __options: GasLimit
  ): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'accessControl::getRoleAdmin',
      [role],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(23, 'rmrk_example_equippable_lazy'));
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
    __options: GasLimit
  ): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'accessControl::hasRole',
      [role, address],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(26, 'rmrk_example_equippable_lazy'));
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
    key: Array<number | string | BN>,
    __options: GasLimit
  ): Promise<QueryReturnType<Result<Array<number> | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'psp34Metadata::getAttribute',
      [id, key],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(30, 'rmrk_example_equippable_lazy'));
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
    __options: GasLimit
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
        return handleReturnType(result, getTypeDescription(32, 'rmrk_example_equippable_lazy'));
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
    __options: GasLimit
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
        return handleReturnType(result, getTypeDescription(32, 'rmrk_example_equippable_lazy'));
      }
    );
  }

  /**
   * tokenUri
   *
   * @param { (number | string | BN) } tokenId,
   * @returns { Result<Result<string, ReturnTypes.Error>, ReturnTypes.LangError> }
   */
  tokenUri(
    tokenId: number | string | BN,
    __options: GasLimit
  ): Promise<QueryReturnType<Result<Result<string, ReturnTypes.Error>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'mintingLazy::tokenUri',
      [tokenId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(34, 'rmrk_example_equippable_lazy'));
      }
    );
  }

  /**
   * maxSupply
   *
   * @returns { Result<number | null, ReturnTypes.LangError> }
   */
  maxSupply(
    __options: GasLimit
  ): Promise<QueryReturnType<Result<number | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'mintingLazy::maxSupply',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(40, 'rmrk_example_equippable_lazy'));
      }
    );
  }

  /**
   * mintMany
   *
   * @param { (number | string | BN) } mintAmount,
   * @returns { void }
   */
  mintMany(mintAmount: number | string | BN, __options: GasLimitAndRequiredValue) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'mintingLazy::mintMany',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [mintAmount],
      __options
    );
  }

  /**
   * price
   *
   * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
   */
  price(
    __options: GasLimit
  ): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'mintingLazy::price',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(16, 'rmrk_example_equippable_lazy'));
      }
    );
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
      'mintingLazy::mint',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [],
      __options
    );
  }

  /**
   * addChild
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { void }
   */
  addChild(
    parentTokenId: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options: GasLimit
  ) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'nesting::addChild',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [parentTokenId, childNft],
      __options
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
    __options: GasLimit
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
        return handleReturnType(result, getTypeDescription(43, 'rmrk_example_equippable_lazy'));
      }
    );
  }

  /**
   * removeChild
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { void }
   */
  removeChild(
    parentTokenId: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options: GasLimit
  ) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'nesting::removeChild',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [parentTokenId, childNft],
      __options
    );
  }

  /**
   * rejectChild
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { void }
   */
  rejectChild(
    parentTokenId: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options: GasLimit
  ) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'nesting::rejectChild',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [parentTokenId, childNft],
      __options
    );
  }

  /**
   * transferChild
   *
   * @param { ArgumentTypes.Id } from,
   * @param { ArgumentTypes.Id } to,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { void }
   */
  transferChild(
    from: ArgumentTypes.Id,
    to: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options: GasLimit
  ) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'nesting::transferChild',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [from, to, childNft],
      __options
    );
  }

  /**
   * acceptChild
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { void }
   */
  acceptChild(
    parentTokenId: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options: GasLimit
  ) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'nesting::acceptChild',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [parentTokenId, childNft],
      __options
    );
  }

  /**
   * nesting::getParentOfChild
   *
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { Result<ReturnTypes.Id | null, ReturnTypes.LangError> }
   */
  'nesting::getParentOfChild'(
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Id | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'nesting::getParentOfChild',
      [childNft],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(46, 'rmrk_example_equippable_lazy'));
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
    __options: GasLimit
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
        return handleReturnType(result, getTypeDescription(47, 'rmrk_example_equippable_lazy'));
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
    __options: GasLimit
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
        return handleReturnType(result, getTypeDescription(47, 'rmrk_example_equippable_lazy'));
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
    __options: GasLimit
  ): Promise<QueryReturnType<Result<Array<number> | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::getAssetUri',
      [assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(30, 'rmrk_example_equippable_lazy'));
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
    __options: GasLimit
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
        return handleReturnType(result, getTypeDescription(48, 'rmrk_example_equippable_lazy'));
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
    __options: GasLimit
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
        return handleReturnType(result, getTypeDescription(43, 'rmrk_example_equippable_lazy'));
      }
    );
  }

  /**
   * setPriority
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { Array<(number | string | BN)> } priorities,
   * @returns { void }
   */
  setPriority(
    tokenId: ArgumentTypes.Id,
    priorities: Array<number | string | BN>,
    __options: GasLimit
  ) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'multiAsset::setPriority',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [tokenId, priorities],
      __options
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
    __options: GasLimit
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
        return handleReturnType(result, getTypeDescription(48, 'rmrk_example_equippable_lazy'));
      }
    );
  }

  /**
   * removeAsset
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   * @returns { void }
   */
  removeAsset(tokenId: ArgumentTypes.Id, assetId: number | string | BN, __options: GasLimit) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'multiAsset::removeAsset',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [tokenId, assetId],
      __options
    );
  }

  /**
   * addAssetToToken
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   * @param { (number | string | BN) | null } replacesAssetWithId,
   * @returns { void }
   */
  addAssetToToken(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    replacesAssetWithId: (number | string | BN) | null,
    __options: GasLimit
  ) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'multiAsset::addAssetToToken',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [tokenId, assetId, replacesAssetWithId],
      __options
    );
  }

  /**
   * totalAssets
   *
   * @returns { Result<number, ReturnTypes.LangError> }
   */
  totalAssets(
    __options: GasLimit
  ): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::totalAssets',
      [],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(23, 'rmrk_example_equippable_lazy'));
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
    __options: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Asset | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::getAsset',
      [assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(51, 'rmrk_example_equippable_lazy'));
      }
    );
  }

  /**
   * rejectAsset
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   * @returns { void }
   */
  rejectAsset(tokenId: ArgumentTypes.Id, assetId: number | string | BN, __options: GasLimit) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'multiAsset::rejectAsset',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [tokenId, assetId],
      __options
    );
  }

  /**
   * acceptAsset
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   * @returns { void }
   */
  acceptAsset(tokenId: ArgumentTypes.Id, assetId: number | string | BN, __options: GasLimit) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'multiAsset::acceptAsset',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [tokenId, assetId],
      __options
    );
  }

  /**
   * addAssetEntry
   *
   * @param { ArgumentTypes.AccountId | null } catalogAddress,
   * @param { (number | string | BN) } id,
   * @param { (number | string | BN) } equippableGroupId,
   * @param { Array<(number | string | BN)> } assetUri,
   * @param { Array<(number | string | BN)> } partIds,
   * @returns { void }
   */
  addAssetEntry(
    catalogAddress: ArgumentTypes.AccountId | null,
    id: number | string | BN,
    equippableGroupId: number | string | BN,
    assetUri: Array<number | string | BN>,
    partIds: Array<number | string | BN>,
    __options: GasLimit
  ) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'multiAsset::addAssetEntry',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [catalogAddress, id, equippableGroupId, assetUri, partIds],
      __options
    );
  }

  /**
   * getAssetCatalogAddress
   *
   * @param { (number | string | BN) } assetId,
   * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
   */
  getAssetCatalogAddress(
    assetId: number | string | BN,
    __options: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'multiAsset::getAssetCatalogAddress',
      [assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(24, 'rmrk_example_equippable_lazy'));
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
    __options: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Equipment | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'equippable::getEquipment',
      [tokenId, slotPartId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(54, 'rmrk_example_equippable_lazy'));
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
   * @returns { void }
   */
  equip(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    slotPartId: number | string | BN,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    childAssetId: number | string | BN,
    __options: GasLimit
  ) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'equippable::equip',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [tokenId, assetId, slotPartId, childNft, childAssetId],
      __options
    );
  }

  /**
   * setValidParentForEquippableGroup
   *
   * @param { (number | string | BN) } equippableGroupId,
   * @param { ArgumentTypes.AccountId } parentAddress,
   * @param { (number | string | BN) } partId,
   * @returns { void }
   */
  setValidParentForEquippableGroup(
    equippableGroupId: number | string | BN,
    parentAddress: ArgumentTypes.AccountId,
    partId: number | string | BN,
    __options: GasLimit
  ) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'equippable::setValidParentForEquippableGroup',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [equippableGroupId, parentAddress, partId],
      __options
    );
  }

  /**
   * unequip
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } slotPartId,
   * @returns { void }
   */
  unequip(tokenId: ArgumentTypes.Id, slotPartId: number | string | BN, __options: GasLimit) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'equippable::unequip',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [tokenId, slotPartId],
      __options
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
    __options: GasLimit
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
        return handleReturnType(result, getTypeDescription(57, 'rmrk_example_equippable_lazy'));
      }
    );
  }

  /**
   * query::getParentOfChild
   *
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   * @returns { Result<ReturnTypes.Id | null, ReturnTypes.LangError> }
   */
  'query::getParentOfChild'(
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Id | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'query::getParentOfChild',
      [childNft],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(46, 'rmrk_example_equippable_lazy'));
      }
    );
  }

  /**
   * query::getAsset
   *
   * @param { (number | string | BN) } assetId,
   * @returns { Result<ReturnTypes.Asset | null, ReturnTypes.LangError> }
   */
  'query::getAsset'(
    assetId: number | string | BN,
    __options: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Asset | null, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'query::getAsset',
      [assetId],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(51, 'rmrk_example_equippable_lazy'));
      }
    );
  }

  /**
   * getAssets
   *
   * @param { Array<(number | string | BN)> } assetIds,
   * @returns { Result<Array<ReturnTypes.Asset>, ReturnTypes.LangError> }
   */
  getAssets(
    assetIds: Array<number | string | BN>,
    __options: GasLimit
  ): Promise<QueryReturnType<Result<Array<ReturnTypes.Asset>, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'query::getAssets',
      [assetIds],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(59, 'rmrk_example_equippable_lazy'));
      }
    );
  }

  /**
   * getToken
   *
   * @param { ArgumentTypes.Id } id,
   * @returns { Result<ReturnTypes.Token, ReturnTypes.LangError> }
   */
  getToken(
    id: ArgumentTypes.Id,
    __options: GasLimit
  ): Promise<QueryReturnType<Result<ReturnTypes.Token, ReturnTypes.LangError>>> {
    return queryOkJSON(
      this.__apiPromise,
      this.__nativeContract,
      this.__callerAddress,
      'query::getToken',
      [id],
      __options,
      (result) => {
        return handleReturnType(result, getTypeDescription(61, 'rmrk_example_equippable_lazy'));
      }
    );
  }

  /**
   * addManyChildren
   *
   * @param { ArgumentTypes.AccountId } childContract,
   * @param { Array<[ArgumentTypes.Id, ArgumentTypes.Id]> } parentChildPair,
   * @returns { void }
   */
  addManyChildren(
    childContract: ArgumentTypes.AccountId,
    parentChildPair: Array<[ArgumentTypes.Id, ArgumentTypes.Id]>,
    __options: GasLimit
  ) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'batchCalls::addManyChildren',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [childContract, parentChildPair],
      __options
    );
  }

  /**
   * transferMany
   *
   * @param { Array<[ArgumentTypes.Id, ArgumentTypes.AccountId]> } tokenToDestination,
   * @returns { void }
   */
  transferMany(
    tokenToDestination: Array<[ArgumentTypes.Id, ArgumentTypes.AccountId]>,
    __options: GasLimit
  ) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'batchCalls::transferMany',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [tokenToDestination],
      __options
    );
  }

  /**
   * addAssetToManyTokens
   *
   * @param { Array<ArgumentTypes.Id> } tokens,
   * @param { (number | string | BN) } assetId,
   * @returns { void }
   */
  addAssetToManyTokens(
    tokens: Array<ArgumentTypes.Id>,
    assetId: number | string | BN,
    __options: GasLimit
  ) {
    return txSignAndSend(
      this.__apiPromise,
      this.__nativeContract,
      this.__keyringPair,
      'batchCalls::addAssetToManyTokens',
      (events: EventRecord) => {
        return decodeEvents(events, this.__nativeContract, 'rmrk_example_equippable_lazy');
      },
      [tokens, assetId],
      __options
    );
  }
}
