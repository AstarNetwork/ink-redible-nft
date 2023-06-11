import type BN from 'bn.js';

export type AccountId = string | number[];

export enum LangError {
  couldNotReadInput = 'CouldNotReadInput',
}

export interface ProxyError {
  ownableError?: OwnableError;
  reentrancyError?: ReentrancyGuardError;
  mintingError?: null;
  ownershipTransferError?: null;
  addTokenAssetError?: null;
  noAssetsDefined?: null;
  tooManyAssetsDefined?: null;
  badMintValue?: null;
}

export class ProxyErrorBuilder {
  static OwnableError(value: OwnableError): ProxyError {
    return {
      ownableError: value,
    };
  }
  static ReentrancyError(value: ReentrancyGuardError): ProxyError {
    return {
      reentrancyError: value,
    };
  }
  static MintingError(): ProxyError {
    return {
      mintingError: null,
    };
  }
  static OwnershipTransferError(): ProxyError {
    return {
      ownershipTransferError: null,
    };
  }
  static AddTokenAssetError(): ProxyError {
    return {
      addTokenAssetError: null,
    };
  }
  static NoAssetsDefined(): ProxyError {
    return {
      noAssetsDefined: null,
    };
  }
  static TooManyAssetsDefined(): ProxyError {
    return {
      tooManyAssetsDefined: null,
    };
  }
  static BadMintValue(): ProxyError {
    return {
      badMintValue: null,
    };
  }
}

export enum OwnableError {
  callerIsNotOwner = 'CallerIsNotOwner',
  newOwnerIsZero = 'NewOwnerIsZero',
}

export enum ReentrancyGuardError {
  reentrantCall = 'ReentrantCall',
}
