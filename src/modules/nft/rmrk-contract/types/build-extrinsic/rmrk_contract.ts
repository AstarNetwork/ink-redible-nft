/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@727-ventures/typechain-types';
import { buildSubmittableExtrinsic } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/rmrk_contract';
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
   * approve
   *
   * @param { ArgumentTypes.AccountId } operator,
   * @param { ArgumentTypes.Id | null } id,
   * @param { boolean } approved,
   */
  approve(
    operator: ArgumentTypes.AccountId,
    id: ArgumentTypes.Id | null,
    approved: boolean,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'psp34::approve',
      [operator, id, approved],
      __options
    );
  }

  /**
   * ownerOf
   *
   * @param { ArgumentTypes.Id } id,
   */
  ownerOf(id: ArgumentTypes.Id, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'psp34::ownerOf',
      [id],
      __options
    );
  }

  /**
   * allowance
   *
   * @param { ArgumentTypes.AccountId } owner,
   * @param { ArgumentTypes.AccountId } operator,
   * @param { ArgumentTypes.Id | null } id,
   */
  allowance(
    owner: ArgumentTypes.AccountId,
    operator: ArgumentTypes.AccountId,
    id: ArgumentTypes.Id | null,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'psp34::allowance',
      [owner, operator, id],
      __options
    );
  }

  /**
   * balanceOf
   *
   * @param { ArgumentTypes.AccountId } owner,
   */
  balanceOf(owner: ArgumentTypes.AccountId, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'psp34::balanceOf',
      [owner],
      __options
    );
  }

  /**
   * transfer
   *
   * @param { ArgumentTypes.AccountId } to,
   * @param { ArgumentTypes.Id } id,
   * @param { Array<(number | string | BN)> } data,
   */
  transfer(
    to: ArgumentTypes.AccountId,
    id: ArgumentTypes.Id,
    data: Array<number | string | BN>,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'psp34::transfer',
      [to, id, data],
      __options
    );
  }

  /**
   * totalSupply
   *
   */
  totalSupply(__options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'psp34::totalSupply',
      [],
      __options
    );
  }

  /**
   * collectionId
   *
   */
  collectionId(__options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'psp34::collectionId',
      [],
      __options
    );
  }

  /**
   * grantRole
   *
   * @param { (number | string | BN) } role,
   * @param { ArgumentTypes.AccountId } account,
   */
  grantRole(role: number | string | BN, account: ArgumentTypes.AccountId, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'accessControl::grantRole',
      [role, account],
      __options
    );
  }

  /**
   * revokeRole
   *
   * @param { (number | string | BN) } role,
   * @param { ArgumentTypes.AccountId } account,
   */
  revokeRole(role: number | string | BN, account: ArgumentTypes.AccountId, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'accessControl::revokeRole',
      [role, account],
      __options
    );
  }

  /**
   * renounceRole
   *
   * @param { (number | string | BN) } role,
   * @param { ArgumentTypes.AccountId } account,
   */
  renounceRole(role: number | string | BN, account: ArgumentTypes.AccountId, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'accessControl::renounceRole',
      [role, account],
      __options
    );
  }

  /**
   * hasRole
   *
   * @param { (number | string | BN) } role,
   * @param { ArgumentTypes.AccountId } address,
   */
  hasRole(role: number | string | BN, address: ArgumentTypes.AccountId, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'accessControl::hasRole',
      [role, address],
      __options
    );
  }

  /**
   * getRoleAdmin
   *
   * @param { (number | string | BN) } role,
   */
  getRoleAdmin(role: number | string | BN, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'accessControl::getRoleAdmin',
      [role],
      __options
    );
  }

  /**
   * getAttribute
   *
   * @param { ArgumentTypes.Id } id,
   * @param { Array<(number | string | BN)> } key,
   */
  getAttribute(id: ArgumentTypes.Id, key: Array<number | string | BN>, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'psp34Metadata::getAttribute',
      [id, key],
      __options
    );
  }

  /**
   * ownersTokenByIndex
   *
   * @param { ArgumentTypes.AccountId } owner,
   * @param { (string | number | BN) } index,
   */
  ownersTokenByIndex(
    owner: ArgumentTypes.AccountId,
    index: string | number | BN,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'psp34Enumerable::ownersTokenByIndex',
      [owner, index],
      __options
    );
  }

  /**
   * tokenByIndex
   *
   * @param { (string | number | BN) } index,
   */
  tokenByIndex(index: string | number | BN, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'psp34Enumerable::tokenByIndex',
      [index],
      __options
    );
  }

  /**
   * mintingLazy::maxSupply
   *
   */
  'mintingLazy::maxSupply'(__options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'mintingLazy::maxSupply',
      [],
      __options
    );
  }

  /**
   * mintingLazy::tokenUri
   *
   * @param { (number | string | BN) } tokenId,
   */
  'mintingLazy::tokenUri'(tokenId: number | string | BN, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'mintingLazy::tokenUri',
      [tokenId],
      __options
    );
  }

  /**
   * mintingLazy::mintMany
   *
   * @param { (number | string | BN) } mintAmount,
   */
  'mintingLazy::mintMany'(mintAmount: number | string | BN, __options: GasLimitAndRequiredValue) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'mintingLazy::mintMany',
      [mintAmount],
      __options
    );
  }

  /**
   * price
   *
   */
  price(__options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'mintingLazy::price',
      [],
      __options
    );
  }

  /**
   * mintingLazy::mint
   *
   */
  'mintingLazy::mint'(__options: GasLimitAndRequiredValue) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'mintingLazy::mint',
      [],
      __options
    );
  }

  /**
   * assignMetadata
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { Array<(number | string | BN)> } metadata,
   */
  assignMetadata(
    tokenId: ArgumentTypes.Id,
    metadata: Array<number | string | BN>,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'minting::assignMetadata',
      [tokenId, metadata],
      __options
    );
  }

  /**
   * minting::maxSupply
   *
   */
  'minting::maxSupply'(__options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'minting::maxSupply',
      [],
      __options
    );
  }

  /**
   * minting::mint
   *
   * @param { ArgumentTypes.AccountId } to,
   */
  'minting::mint'(to: ArgumentTypes.AccountId, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'minting::mint',
      [to],
      __options
    );
  }

  /**
   * minting::tokenUri
   *
   * @param { (number | string | BN) } tokenId,
   */
  'minting::tokenUri'(tokenId: number | string | BN, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'minting::tokenUri',
      [tokenId],
      __options
    );
  }

  /**
   * minting::mintMany
   *
   * @param { ArgumentTypes.AccountId } to,
   * @param { (number | string | BN) } mintAmount,
   */
  'minting::mintMany'(
    to: ArgumentTypes.AccountId,
    mintAmount: number | string | BN,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'minting::mintMany',
      [to, mintAmount],
      __options
    );
  }

  /**
   * transferChild
   *
   * @param { ArgumentTypes.Id } from,
   * @param { ArgumentTypes.Id } to,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   */
  transferChild(
    from: ArgumentTypes.Id,
    to: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'nesting::transferChild',
      [from, to, childNft],
      __options
    );
  }

  /**
   * addChild
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   */
  addChild(
    parentTokenId: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'nesting::addChild',
      [parentTokenId, childNft],
      __options
    );
  }

  /**
   * getAcceptedChildren
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   */
  getAcceptedChildren(parentTokenId: ArgumentTypes.Id, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'nesting::getAcceptedChildren',
      [parentTokenId],
      __options
    );
  }

  /**
   * acceptChild
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   */
  acceptChild(
    parentTokenId: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'nesting::acceptChild',
      [parentTokenId, childNft],
      __options
    );
  }

  /**
   * childrenBalance
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   */
  childrenBalance(parentTokenId: ArgumentTypes.Id, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'nesting::childrenBalance',
      [parentTokenId],
      __options
    );
  }

  /**
   * removeChild
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   */
  removeChild(
    parentTokenId: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'nesting::removeChild',
      [parentTokenId, childNft],
      __options
    );
  }

  /**
   * getPendingChildren
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   */
  getPendingChildren(parentTokenId: ArgumentTypes.Id, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'nesting::getPendingChildren',
      [parentTokenId],
      __options
    );
  }

  /**
   * rejectChild
   *
   * @param { ArgumentTypes.Id } parentTokenId,
   * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
   */
  rejectChild(
    parentTokenId: ArgumentTypes.Id,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'nesting::rejectChild',
      [parentTokenId, childNft],
      __options
    );
  }

  /**
   * getAssetUri
   *
   * @param { (number | string | BN) } assetId,
   */
  getAssetUri(assetId: number | string | BN, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'multiAsset::getAssetUri',
      [assetId],
      __options
    );
  }

  /**
   * totalTokenAssets
   *
   * @param { ArgumentTypes.Id } tokenId,
   */
  totalTokenAssets(tokenId: ArgumentTypes.Id, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'multiAsset::totalTokenAssets',
      [tokenId],
      __options
    );
  }

  /**
   * addAssetToToken
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   * @param { (number | string | BN) | null } replacesAssetWithId,
   */
  addAssetToToken(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    replacesAssetWithId: (number | string | BN) | null,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'multiAsset::addAssetToToken',
      [tokenId, assetId, replacesAssetWithId],
      __options
    );
  }

  /**
   * getPendingTokenAssets
   *
   * @param { ArgumentTypes.Id } tokenId,
   */
  getPendingTokenAssets(tokenId: ArgumentTypes.Id, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'multiAsset::getPendingTokenAssets',
      [tokenId],
      __options
    );
  }

  /**
   * totalAssets
   *
   */
  totalAssets(__options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'multiAsset::totalAssets',
      [],
      __options
    );
  }

  /**
   * rejectAsset
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   */
  rejectAsset(tokenId: ArgumentTypes.Id, assetId: number | string | BN, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'multiAsset::rejectAsset',
      [tokenId, assetId],
      __options
    );
  }

  /**
   * setPriority
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { Array<(number | string | BN)> } priorities,
   */
  setPriority(
    tokenId: ArgumentTypes.Id,
    priorities: Array<number | string | BN>,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'multiAsset::setPriority',
      [tokenId, priorities],
      __options
    );
  }

  /**
   * acceptAsset
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   */
  acceptAsset(tokenId: ArgumentTypes.Id, assetId: number | string | BN, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'multiAsset::acceptAsset',
      [tokenId, assetId],
      __options
    );
  }

  /**
   * getAcceptedTokenAssets
   *
   * @param { ArgumentTypes.Id } tokenId,
   */
  getAcceptedTokenAssets(tokenId: ArgumentTypes.Id, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'multiAsset::getAcceptedTokenAssets',
      [tokenId],
      __options
    );
  }

  /**
   * removeAsset
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   */
  removeAsset(tokenId: ArgumentTypes.Id, assetId: number | string | BN, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'multiAsset::removeAsset',
      [tokenId, assetId],
      __options
    );
  }

  /**
   * multiAsset::getAsset
   *
   * @param { (number | string | BN) } assetId,
   */
  'multiAsset::getAsset'(assetId: number | string | BN, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'multiAsset::getAsset',
      [assetId],
      __options
    );
  }

  /**
   * addAssetEntry
   *
   * @param { (number | string | BN) } id,
   * @param { (number | string | BN) } equippableGroupId,
   * @param { Array<(number | string | BN)> } assetUri,
   * @param { Array<(number | string | BN)> } partIds,
   */
  addAssetEntry(
    id: number | string | BN,
    equippableGroupId: number | string | BN,
    assetUri: Array<number | string | BN>,
    partIds: Array<number | string | BN>,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'multiAsset::addAssetEntry',
      [id, equippableGroupId, assetUri, partIds],
      __options
    );
  }

  /**
   * setupBase
   *
   * @param { Array<(number | string | BN)> } baseMetadata,
   */
  setupBase(baseMetadata: Array<number | string | BN>, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'base::setupBase',
      [baseMetadata],
      __options
    );
  }

  /**
   * addEquippableAddresses
   *
   * @param { (number | string | BN) } partId,
   * @param { Array<ArgumentTypes.AccountId> } equippableAddress,
   */
  addEquippableAddresses(
    partId: number | string | BN,
    equippableAddress: Array<ArgumentTypes.AccountId>,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'base::addEquippableAddresses',
      [partId, equippableAddress],
      __options
    );
  }

  /**
   * isEquippableByAll
   *
   * @param { (number | string | BN) } partId,
   */
  isEquippableByAll(partId: number | string | BN, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'base::isEquippableByAll',
      [partId],
      __options
    );
  }

  /**
   * addPartList
   *
   * @param { Array<ArgumentTypes.Part> } parts,
   */
  addPartList(parts: Array<ArgumentTypes.Part>, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'base::addPartList',
      [parts],
      __options
    );
  }

  /**
   * getBaseMetadata
   *
   */
  getBaseMetadata(__options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'base::getBaseMetadata',
      [],
      __options
    );
  }

  /**
   * ensureEquippable
   *
   * @param { (number | string | BN) } partId,
   * @param { ArgumentTypes.AccountId } targetAddress,
   */
  ensureEquippable(
    partId: number | string | BN,
    targetAddress: ArgumentTypes.AccountId,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'base::ensureEquippable',
      [partId, targetAddress],
      __options
    );
  }

  /**
   * getPartsCount
   *
   */
  getPartsCount(__options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'base::getPartsCount',
      [],
      __options
    );
  }

  /**
   * base::getPart
   *
   * @param { (number | string | BN) } partId,
   */
  'base::getPart'(partId: number | string | BN, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'base::getPart',
      [partId],
      __options
    );
  }

  /**
   * resetEquippableAddresses
   *
   * @param { (number | string | BN) } partId,
   */
  resetEquippableAddresses(partId: number | string | BN, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'base::resetEquippableAddresses',
      [partId],
      __options
    );
  }

  /**
   * setEquippableByAll
   *
   * @param { (number | string | BN) } partId,
   */
  setEquippableByAll(partId: number | string | BN, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'base::setEquippableByAll',
      [partId],
      __options
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
   */
  equip(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    slotPartId: number | string | BN,
    childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
    childAssetId: number | string | BN,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'equippable::equip',
      [tokenId, assetId, slotPartId, childNft, childAssetId],
      __options
    );
  }

  /**
   * getAssetAndEquippableData
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } assetId,
   */
  getAssetAndEquippableData(
    tokenId: ArgumentTypes.Id,
    assetId: number | string | BN,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'equippable::getAssetAndEquippableData',
      [tokenId, assetId],
      __options
    );
  }

  /**
   * setValidParentForEquippableGroup
   *
   * @param { (number | string | BN) } equippableGroupId,
   * @param { ArgumentTypes.AccountId } parentAddress,
   * @param { (number | string | BN) } partId,
   */
  setValidParentForEquippableGroup(
    equippableGroupId: number | string | BN,
    parentAddress: ArgumentTypes.AccountId,
    partId: number | string | BN,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'equippable::setValidParentForEquippableGroup',
      [equippableGroupId, parentAddress, partId],
      __options
    );
  }

  /**
   * getEquipment
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } slotPartId,
   */
  getEquipment(tokenId: ArgumentTypes.Id, slotPartId: number | string | BN, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'equippable::getEquipment',
      [tokenId, slotPartId],
      __options
    );
  }

  /**
   * unequip
   *
   * @param { ArgumentTypes.Id } tokenId,
   * @param { (number | string | BN) } slotPartId,
   */
  unequip(tokenId: ArgumentTypes.Id, slotPartId: number | string | BN, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'equippable::unequip',
      [tokenId, slotPartId],
      __options
    );
  }

  /**
   * getParts
   *
   * @param { ArgumentTypes.AccountId } collectionId,
   * @param { Array<(number | string | BN)> } partIds,
   */
  getParts(
    collectionId: ArgumentTypes.AccountId,
    partIds: Array<number | string | BN>,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'query::getParts',
      [collectionId, partIds],
      __options
    );
  }

  /**
   * query::getAsset
   *
   * @param { ArgumentTypes.AccountId } collectionId,
   * @param { (number | string | BN) } assetId,
   */
  'query::getAsset'(
    collectionId: ArgumentTypes.AccountId,
    assetId: number | string | BN,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'query::getAsset',
      [collectionId, assetId],
      __options
    );
  }

  /**
   * query::getPart
   *
   * @param { ArgumentTypes.AccountId } collectionId,
   * @param { (number | string | BN) } partId,
   */
  'query::getPart'(
    collectionId: ArgumentTypes.AccountId,
    partId: number | string | BN,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'query::getPart',
      [collectionId, partId],
      __options
    );
  }

  /**
   * getToken
   *
   * @param { ArgumentTypes.AccountId } collectionId,
   * @param { (number | string | BN) } idU64,
   */
  getToken(
    collectionId: ArgumentTypes.AccountId,
    idU64: number | string | BN,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'query::getToken',
      [collectionId, idU64],
      __options
    );
  }

  /**
   * getAssets
   *
   * @param { ArgumentTypes.AccountId } collectionId,
   * @param { Array<(number | string | BN)> } assetIds,
   */
  getAssets(
    collectionId: ArgumentTypes.AccountId,
    assetIds: Array<number | string | BN>,
    __options: GasLimit
  ) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'query::getAssets',
      [collectionId, assetIds],
      __options
    );
  }

  /**
   * withdraw
   *
   */
  withdraw(__options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'utils::withdraw',
      [],
      __options
    );
  }

  /**
   * setBaseUri
   *
   * @param { string } uri,
   */
  setBaseUri(uri: string, __options: GasLimit) {
    return buildSubmittableExtrinsic(
      this.__apiPromise,
      this.__nativeContract,
      'utils::setBaseUri',
      [uri],
      __options
    );
  }
}
