import type BN from 'bn.js';

export type AccountId = string | number[]

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export interface Id {
	u8 ? : (number | string | BN),
	u16 ? : (number | string | BN),
	u32 ? : (number | string | BN),
	u64 ? : (number | string | BN),
	u128 ? : (string | number | BN),
	bytes ? : Array<(number | string | BN)>
}

export class IdBuilder {
	static U8(value: (number | string | BN)): Id {
		return {
			u8: value,
		};
	}
	static U16(value: (number | string | BN)): Id {
		return {
			u16: value,
		};
	}
	static U32(value: (number | string | BN)): Id {
		return {
			u32: value,
		};
	}
	static U64(value: (number | string | BN)): Id {
		return {
			u64: value,
		};
	}
	static U128(value: (string | number | BN)): Id {
		return {
			u128: value,
		};
	}
	static Bytes(value: Array<(number | string | BN)>): Id {
		return {
			bytes: value,
		};
	}
}

export interface ProxyError {
	addTokenAssetError ? : null,
	badMintValue ? : null,
	mintingError ? : null,
	noAssetsDefined ? : null,
	ownableError ? : OwnableError,
	ownershipTransferError ? : null,
	reentrancyError ? : ReentrancyGuardError,
	tooManyAssetsDefined ? : null
}

export class ProxyErrorBuilder {
	static AddTokenAssetError(): ProxyError {
		return {
			addTokenAssetError: null,
		};
	}
	static BadMintValue(): ProxyError {
		return {
			badMintValue: null,
		};
	}
	static MintingError(): ProxyError {
		return {
			mintingError: null,
		};
	}
	static NoAssetsDefined(): ProxyError {
		return {
			noAssetsDefined: null,
		};
	}
	static OwnableError(value: OwnableError): ProxyError {
		return {
			ownableError: value,
		};
	}
	static OwnershipTransferError(): ProxyError {
		return {
			ownershipTransferError: null,
		};
	}
	static ReentrancyError(value: ReentrancyGuardError): ProxyError {
		return {
			reentrancyError: value,
		};
	}
	static TooManyAssetsDefined(): ProxyError {
		return {
			tooManyAssetsDefined: null,
		};
	}
}

export enum OwnableError {
	callerIsNotOwner = 'CallerIsNotOwner',
	newOwnerIsZero = 'NewOwnerIsZero'
}

export enum ReentrancyGuardError {
	reentrantCall = 'ReentrantCall'
}

