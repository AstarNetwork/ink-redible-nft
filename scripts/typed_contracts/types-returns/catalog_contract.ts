import type BN from 'bn.js';
import type {ReturnNumber} from '@727-ventures/typechain-types';

export type AccountId = string | number[]

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export interface Error {
	rmrk ? : RmrkError,
	psp34 ? : PSP34Error,
	accessControl ? : AccessControlError,
	reentrancy ? : ReentrancyGuardError
}

export class ErrorBuilder {
	static Rmrk(value: RmrkError): Error {
		return {
			rmrk: value,
		};
	}
	static PSP34(value: PSP34Error): Error {
		return {
			psp34: value,
		};
	}
	static AccessControl(value: AccessControlError): Error {
		return {
			accessControl: value,
		};
	}
	static Reentrancy(value: ReentrancyGuardError): Error {
		return {
			reentrancy: value,
		};
	}
}

export enum RmrkError {
	acceptedAssetsMissing = 'AcceptedAssetsMissing',
	addingPendingAsset = 'AddingPendingAsset',
	addingPendingChild = 'AddingPendingChild',
	addressNotEquippable = 'AddressNotEquippable',
	alreadyAddedAsset = 'AlreadyAddedAsset',
	alreadyAddedChild = 'AlreadyAddedChild',
	assetHasNoParts = 'AssetHasNoParts',
	assetIdAlreadyExists = 'AssetIdAlreadyExists',
	assetIdNotFound = 'AssetIdNotFound',
	assetIdNotEquippable = 'AssetIdNotEquippable',
	badConfig = 'BadConfig',
	badMintValue = 'BadMintValue',
	badPriorityLength = 'BadPriorityLength',
	cannotMintZeroTokens = 'CannotMintZeroTokens',
	catalogNotFoundForAsset = 'CatalogNotFoundForAsset',
	childNotFound = 'ChildNotFound',
	uriNotFound = 'UriNotFound',
	collectionIsFull = 'CollectionIsFull',
	invalidAssetId = 'InvalidAssetId',
	invalidParentId = 'InvalidParentId',
	invalidTokenId = 'InvalidTokenId',
	notEquipped = 'NotEquipped',
	notTokenOwner = 'NotTokenOwner',
	partIsNotSlot = 'PartIsNotSlot',
	slotAlreayUsed = 'SlotAlreayUsed',
	targetAssetCannotReceiveSlot = 'TargetAssetCannotReceiveSlot',
	unknownEquippableAsset = 'UnknownEquippableAsset',
	unknownPart = 'UnknownPart',
	unknownPartId = 'UnknownPartId',
	withdrawalFailed = 'WithdrawalFailed'
}

export interface PSP34Error {
	custom ? : Array<number>,
	selfApprove ? : null,
	notApproved ? : null,
	tokenExists ? : null,
	tokenNotExists ? : null,
	safeTransferCheckFailed ? : Array<number>
}

export class PSP34ErrorBuilder {
	static Custom(value: Array<number>): PSP34Error {
		return {
			custom: value,
		};
	}
	static SelfApprove(): PSP34Error {
		return {
			selfApprove: null,
		};
	}
	static NotApproved(): PSP34Error {
		return {
			notApproved: null,
		};
	}
	static TokenExists(): PSP34Error {
		return {
			tokenExists: null,
		};
	}
	static TokenNotExists(): PSP34Error {
		return {
			tokenNotExists: null,
		};
	}
	static SafeTransferCheckFailed(value: Array<number>): PSP34Error {
		return {
			safeTransferCheckFailed: value,
		};
	}
}

export enum AccessControlError {
	invalidCaller = 'InvalidCaller',
	missingRole = 'MissingRole',
	roleRedundant = 'RoleRedundant'
}

export enum ReentrancyGuardError {
	reentrantCall = 'ReentrantCall'
}

export type Part = {
	partType: PartType,
	z: number,
	equippable: Array<AccountId>,
	partUri: Array<number>,
	isEquippableByAll: boolean
}

export enum PartType {
	none = 'None',
	slot = 'Slot',
	fixed = 'Fixed'
}

