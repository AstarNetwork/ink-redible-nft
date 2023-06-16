/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@727-ventures/typechain-types';
import { buildSubmittableExtrinsic } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/rmrk_example_equippable_lazy';
import type BN from 'bn.js';
import type { ApiPromise } from '@polkadot/api';



export default class Methods {
	private __nativeContract : ContractPromise;
	private __apiPromise: ApiPromise;

	constructor(
		nativeContract : ContractPromise,
		apiPromise: ApiPromise,
	) {
		this.__nativeContract = nativeContract;
		this.__apiPromise = apiPromise;
	}
	/**
	 * totalSupply
	 *
	*/
	"totalSupply" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34::totalSupply", [], __options);
	}

	/**
	 * approve
	 *
	 * @param { ArgumentTypes.AccountId } operator,
	 * @param { ArgumentTypes.Id | null } id,
	 * @param { boolean } approved,
	*/
	"approve" (
		operator: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id | null,
		approved: boolean,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34::approve", [operator, id, approved], __options);
	}

	/**
	 * transfer
	 *
	 * @param { ArgumentTypes.AccountId } to,
	 * @param { ArgumentTypes.Id } id,
	 * @param { Array<(number | string | BN)> } data,
	*/
	"transfer" (
		to: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id,
		data: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34::transfer", [to, id, data], __options);
	}

	/**
	 * collectionId
	 *
	*/
	"collectionId" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34::collectionId", [], __options);
	}

	/**
	 * balanceOf
	 *
	 * @param { ArgumentTypes.AccountId } owner,
	*/
	"balanceOf" (
		owner: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34::balanceOf", [owner], __options);
	}

	/**
	 * ownerOf
	 *
	 * @param { ArgumentTypes.Id } id,
	*/
	"ownerOf" (
		id: ArgumentTypes.Id,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34::ownerOf", [id], __options);
	}

	/**
	 * allowance
	 *
	 * @param { ArgumentTypes.AccountId } owner,
	 * @param { ArgumentTypes.AccountId } operator,
	 * @param { ArgumentTypes.Id | null } id,
	*/
	"allowance" (
		owner: ArgumentTypes.AccountId,
		operator: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id | null,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34::allowance", [owner, operator, id], __options);
	}

	/**
	 * grantRole
	 *
	 * @param { (number | string | BN) } role,
	 * @param { ArgumentTypes.AccountId } account,
	*/
	"grantRole" (
		role: (number | string | BN),
		account: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "accessControl::grantRole", [role, account], __options);
	}

	/**
	 * revokeRole
	 *
	 * @param { (number | string | BN) } role,
	 * @param { ArgumentTypes.AccountId } account,
	*/
	"revokeRole" (
		role: (number | string | BN),
		account: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "accessControl::revokeRole", [role, account], __options);
	}

	/**
	 * renounceRole
	 *
	 * @param { (number | string | BN) } role,
	 * @param { ArgumentTypes.AccountId } account,
	*/
	"renounceRole" (
		role: (number | string | BN),
		account: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "accessControl::renounceRole", [role, account], __options);
	}

	/**
	 * getRoleAdmin
	 *
	 * @param { (number | string | BN) } role,
	*/
	"getRoleAdmin" (
		role: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "accessControl::getRoleAdmin", [role], __options);
	}

	/**
	 * hasRole
	 *
	 * @param { (number | string | BN) } role,
	 * @param { ArgumentTypes.AccountId } address,
	*/
	"hasRole" (
		role: (number | string | BN),
		address: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "accessControl::hasRole", [role, address], __options);
	}

	/**
	 * getAttribute
	 *
	 * @param { ArgumentTypes.Id } id,
	 * @param { Array<(number | string | BN)> } key,
	*/
	"getAttribute" (
		id: ArgumentTypes.Id,
		key: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34Metadata::getAttribute", [id, key], __options);
	}

	/**
	 * tokenByIndex
	 *
	 * @param { (string | number | BN) } index,
	*/
	"tokenByIndex" (
		index: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34Enumerable::tokenByIndex", [index], __options);
	}

	/**
	 * ownersTokenByIndex
	 *
	 * @param { ArgumentTypes.AccountId } owner,
	 * @param { (string | number | BN) } index,
	*/
	"ownersTokenByIndex" (
		owner: ArgumentTypes.AccountId,
		index: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34Enumerable::ownersTokenByIndex", [owner, index], __options);
	}

	/**
	 * tokenUri
	 *
	 * @param { (number | string | BN) } tokenId,
	*/
	"tokenUri" (
		tokenId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "mintingLazy::tokenUri", [tokenId], __options);
	}

	/**
	 * maxSupply
	 *
	*/
	"maxSupply" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "mintingLazy::maxSupply", [], __options);
	}

	/**
	 * mintMany
	 *
	 * @param { (number | string | BN) } mintAmount,
	*/
	"mintMany" (
		mintAmount: (number | string | BN),
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "mintingLazy::mintMany", [mintAmount], __options);
	}

	/**
	 * price
	 *
	*/
	"price" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "mintingLazy::price", [], __options);
	}

	/**
	 * mint
	 *
	*/
	"mint" (
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "mintingLazy::mint", [], __options);
	}

	/**
	 * addChild
	 *
	 * @param { ArgumentTypes.Id } parentTokenId,
	 * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	*/
	"addChild" (
		parentTokenId: ArgumentTypes.Id,
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "nesting::addChild", [parentTokenId, childNft], __options);
	}

	/**
	 * childrenBalance
	 *
	 * @param { ArgumentTypes.Id } parentTokenId,
	*/
	"childrenBalance" (
		parentTokenId: ArgumentTypes.Id,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "nesting::childrenBalance", [parentTokenId], __options);
	}

	/**
	 * removeChild
	 *
	 * @param { ArgumentTypes.Id } parentTokenId,
	 * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	*/
	"removeChild" (
		parentTokenId: ArgumentTypes.Id,
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "nesting::removeChild", [parentTokenId, childNft], __options);
	}

	/**
	 * rejectChild
	 *
	 * @param { ArgumentTypes.Id } parentTokenId,
	 * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	*/
	"rejectChild" (
		parentTokenId: ArgumentTypes.Id,
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "nesting::rejectChild", [parentTokenId, childNft], __options);
	}

	/**
	 * transferChild
	 *
	 * @param { ArgumentTypes.Id } from,
	 * @param { ArgumentTypes.Id } to,
	 * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	*/
	"transferChild" (
		from: ArgumentTypes.Id,
		to: ArgumentTypes.Id,
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "nesting::transferChild", [from, to, childNft], __options);
	}

	/**
	 * acceptChild
	 *
	 * @param { ArgumentTypes.Id } parentTokenId,
	 * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	*/
	"acceptChild" (
		parentTokenId: ArgumentTypes.Id,
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "nesting::acceptChild", [parentTokenId, childNft], __options);
	}

	/**
	 * nesting::getParentOfChild
	 *
	 * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	*/
	"nesting::getParentOfChild" (
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "nesting::getParentOfChild", [childNft], __options);
	}

	/**
	 * getAcceptedChildren
	 *
	 * @param { ArgumentTypes.Id } parentTokenId,
	*/
	"getAcceptedChildren" (
		parentTokenId: ArgumentTypes.Id,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "nesting::getAcceptedChildren", [parentTokenId], __options);
	}

	/**
	 * getPendingChildren
	 *
	 * @param { ArgumentTypes.Id } parentTokenId,
	*/
	"getPendingChildren" (
		parentTokenId: ArgumentTypes.Id,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "nesting::getPendingChildren", [parentTokenId], __options);
	}

	/**
	 * getAssetUri
	 *
	 * @param { (number | string | BN) } assetId,
	*/
	"getAssetUri" (
		assetId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "multiAsset::getAssetUri", [assetId], __options);
	}

	/**
	 * getAcceptedTokenAssets
	 *
	 * @param { ArgumentTypes.Id } tokenId,
	*/
	"getAcceptedTokenAssets" (
		tokenId: ArgumentTypes.Id,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "multiAsset::getAcceptedTokenAssets", [tokenId], __options);
	}

	/**
	 * totalTokenAssets
	 *
	 * @param { ArgumentTypes.Id } tokenId,
	*/
	"totalTokenAssets" (
		tokenId: ArgumentTypes.Id,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "multiAsset::totalTokenAssets", [tokenId], __options);
	}

	/**
	 * setPriority
	 *
	 * @param { ArgumentTypes.Id } tokenId,
	 * @param { Array<(number | string | BN)> } priorities,
	*/
	"setPriority" (
		tokenId: ArgumentTypes.Id,
		priorities: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "multiAsset::setPriority", [tokenId, priorities], __options);
	}

	/**
	 * getPendingTokenAssets
	 *
	 * @param { ArgumentTypes.Id } tokenId,
	*/
	"getPendingTokenAssets" (
		tokenId: ArgumentTypes.Id,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "multiAsset::getPendingTokenAssets", [tokenId], __options);
	}

	/**
	 * removeAsset
	 *
	 * @param { ArgumentTypes.Id } tokenId,
	 * @param { (number | string | BN) } assetId,
	*/
	"removeAsset" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "multiAsset::removeAsset", [tokenId, assetId], __options);
	}

	/**
	 * addAssetToToken
	 *
	 * @param { ArgumentTypes.Id } tokenId,
	 * @param { (number | string | BN) } assetId,
	 * @param { (number | string | BN) | null } replacesAssetWithId,
	*/
	"addAssetToToken" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		replacesAssetWithId: (number | string | BN) | null,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "multiAsset::addAssetToToken", [tokenId, assetId, replacesAssetWithId], __options);
	}

	/**
	 * totalAssets
	 *
	*/
	"totalAssets" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "multiAsset::totalAssets", [], __options);
	}

	/**
	 * multiAsset::getAsset
	 *
	 * @param { (number | string | BN) } assetId,
	*/
	"multiAsset::getAsset" (
		assetId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "multiAsset::getAsset", [assetId], __options);
	}

	/**
	 * rejectAsset
	 *
	 * @param { ArgumentTypes.Id } tokenId,
	 * @param { (number | string | BN) } assetId,
	*/
	"rejectAsset" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "multiAsset::rejectAsset", [tokenId, assetId], __options);
	}

	/**
	 * acceptAsset
	 *
	 * @param { ArgumentTypes.Id } tokenId,
	 * @param { (number | string | BN) } assetId,
	*/
	"acceptAsset" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "multiAsset::acceptAsset", [tokenId, assetId], __options);
	}

	/**
	 * addAssetEntry
	 *
	 * @param { ArgumentTypes.AccountId | null } catalogAddress,
	 * @param { (number | string | BN) } id,
	 * @param { (number | string | BN) } equippableGroupId,
	 * @param { Array<(number | string | BN)> } assetUri,
	 * @param { Array<(number | string | BN)> } partIds,
	*/
	"addAssetEntry" (
		catalogAddress: ArgumentTypes.AccountId | null,
		id: (number | string | BN),
		equippableGroupId: (number | string | BN),
		assetUri: Array<(number | string | BN)>,
		partIds: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "multiAsset::addAssetEntry", [catalogAddress, id, equippableGroupId, assetUri, partIds], __options);
	}

	/**
	 * getAssetCatalogAddress
	 *
	 * @param { (number | string | BN) } assetId,
	*/
	"getAssetCatalogAddress" (
		assetId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "multiAsset::getAssetCatalogAddress", [assetId], __options);
	}

	/**
	 * getEquipment
	 *
	 * @param { ArgumentTypes.Id } tokenId,
	 * @param { (number | string | BN) } slotPartId,
	*/
	"getEquipment" (
		tokenId: ArgumentTypes.Id,
		slotPartId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "equippable::getEquipment", [tokenId, slotPartId], __options);
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
	"equip" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		slotPartId: (number | string | BN),
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		childAssetId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "equippable::equip", [tokenId, assetId, slotPartId, childNft, childAssetId], __options);
	}

	/**
	 * setValidParentForEquippableGroup
	 *
	 * @param { (number | string | BN) } equippableGroupId,
	 * @param { ArgumentTypes.AccountId } parentAddress,
	 * @param { (number | string | BN) } partId,
	*/
	"setValidParentForEquippableGroup" (
		equippableGroupId: (number | string | BN),
		parentAddress: ArgumentTypes.AccountId,
		partId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "equippable::setValidParentForEquippableGroup", [equippableGroupId, parentAddress, partId], __options);
	}

	/**
	 * unequip
	 *
	 * @param { ArgumentTypes.Id } tokenId,
	 * @param { (number | string | BN) } slotPartId,
	*/
	"unequip" (
		tokenId: ArgumentTypes.Id,
		slotPartId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "equippable::unequip", [tokenId, slotPartId], __options);
	}

	/**
	 * getAssetAndEquippableData
	 *
	 * @param { ArgumentTypes.Id } tokenId,
	 * @param { (number | string | BN) } assetId,
	*/
	"getAssetAndEquippableData" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "equippable::getAssetAndEquippableData", [tokenId, assetId], __options);
	}

	/**
	 * query::getParentOfChild
	 *
	 * @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	*/
	"query::getParentOfChild" (
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "query::getParentOfChild", [childNft], __options);
	}

	/**
	 * query::getAsset
	 *
	 * @param { (number | string | BN) } assetId,
	*/
	"query::getAsset" (
		assetId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "query::getAsset", [assetId], __options);
	}

	/**
	 * getAssets
	 *
	 * @param { Array<(number | string | BN)> } assetIds,
	*/
	"getAssets" (
		assetIds: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "query::getAssets", [assetIds], __options);
	}

	/**
	 * getToken
	 *
	 * @param { ArgumentTypes.Id } id,
	*/
	"getToken" (
		id: ArgumentTypes.Id,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "query::getToken", [id], __options);
	}

	/**
	 * addManyChildren
	 *
	 * @param { ArgumentTypes.AccountId } childContract,
	 * @param { Array<[ArgumentTypes.Id, ArgumentTypes.Id]> } parentChildPair,
	*/
	"addManyChildren" (
		childContract: ArgumentTypes.AccountId,
		parentChildPair: Array<[ArgumentTypes.Id, ArgumentTypes.Id]>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "batchCalls::addManyChildren", [childContract, parentChildPair], __options);
	}

	/**
	 * transferMany
	 *
	 * @param { Array<[ArgumentTypes.Id, ArgumentTypes.AccountId]> } tokenToDestination,
	*/
	"transferMany" (
		tokenToDestination: Array<[ArgumentTypes.Id, ArgumentTypes.AccountId]>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "batchCalls::transferMany", [tokenToDestination], __options);
	}

	/**
	 * addAssetToManyTokens
	 *
	 * @param { Array<ArgumentTypes.Id> } tokens,
	 * @param { (number | string | BN) } assetId,
	*/
	"addAssetToManyTokens" (
		tokens: Array<ArgumentTypes.Id>,
		assetId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "batchCalls::addAssetToManyTokens", [tokens, assetId], __options);
	}

}