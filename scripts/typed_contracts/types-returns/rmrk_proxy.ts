import type BN from 'bn.js';
import type {ReturnNumber} from '@727-ventures/typechain-types';

export type AccountId = string | number[]

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export interface Id {
	u8 ? : number,
	u16 ? : number,
	u32 ? : number,
	u64 ? : number,
	u128 ? : ReturnNumber,
	bytes ? : Array<number>
}

export class IdBuilder {
	static U8(value: number): Id {
		return {
			u8: value,
		};
	}
	static U16(value: number): Id {
		return {
			u16: value,
		};
	}
	static U32(value: number): Id {
		return {
			u32: value,
		};
	}
	static U64(value: number): Id {
		return {
			u64: value,
		};
	}
	static U128(value: ReturnNumber): Id {
		return {
			u128: value,
		};
	}
	static Bytes(value: Array<number>): Id {
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

