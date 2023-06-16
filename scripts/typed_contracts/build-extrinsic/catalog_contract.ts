/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@727-ventures/typechain-types';
import { buildSubmittableExtrinsic } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/catalog_contract';
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
	 * addEquippableAddresses
	 *
	 * @param { (number | string | BN) } partId,
	 * @param { Array<ArgumentTypes.AccountId> } equippableAddress,
	*/
	"addEquippableAddresses" (
		partId: (number | string | BN),
		equippableAddress: Array<ArgumentTypes.AccountId>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "catalog::addEquippableAddresses", [partId, equippableAddress], __options);
	}

	/**
	 * getPart
	 *
	 * @param { (number | string | BN) } partId,
	*/
	"getPart" (
		partId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "catalog::getPart", [partId], __options);
	}

	/**
	 * isEquippableByAll
	 *
	 * @param { (number | string | BN) } partId,
	*/
	"isEquippableByAll" (
		partId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "catalog::isEquippableByAll", [partId], __options);
	}

	/**
	 * resetEquippableAddresses
	 *
	 * @param { (number | string | BN) } partId,
	*/
	"resetEquippableAddresses" (
		partId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "catalog::resetEquippableAddresses", [partId], __options);
	}

	/**
	 * addPartList
	 *
	 * @param { Array<ArgumentTypes.Part> } parts,
	*/
	"addPartList" (
		parts: Array<ArgumentTypes.Part>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "catalog::addPartList", [parts], __options);
	}

	/**
	 * getPartsCount
	 *
	*/
	"getPartsCount" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "catalog::getPartsCount", [], __options);
	}

	/**
	 * ensureEquippable
	 *
	 * @param { (number | string | BN) } partId,
	 * @param { ArgumentTypes.AccountId } targetAddress,
	*/
	"ensureEquippable" (
		partId: (number | string | BN),
		targetAddress: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "catalog::ensureEquippable", [partId, targetAddress], __options);
	}

	/**
	 * setEquippableByAll
	 *
	 * @param { (number | string | BN) } partId,
	*/
	"setEquippableByAll" (
		partId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "catalog::setEquippableByAll", [partId], __options);
	}

	/**
	 * getCatalogMetadata
	 *
	*/
	"getCatalogMetadata" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "catalog::getCatalogMetadata", [], __options);
	}

	/**
	 * setupCatalog
	 *
	 * @param { Array<(number | string | BN)> } catalogMetadata,
	*/
	"setupCatalog" (
		catalogMetadata: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "catalog::setupCatalog", [catalogMetadata], __options);
	}

}