import type BN from 'bn.js';
import type { ReturnNumber } from '@727-ventures/typechain-types';

export type AccountId = string | number[];

export interface Id {
  u8?: number;
  u16?: number;
  u32?: number;
  u64?: number;
  u128?: ReturnNumber;
  bytes?: Array<number>;
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

export enum LangError {
  couldNotReadInput = 'CouldNotReadInput',
}

export interface PSP34Error {
  custom?: Array<number>;
  selfApprove?: null;
  notApproved?: null;
  tokenExists?: null;
  tokenNotExists?: null;
  safeTransferCheckFailed?: Array<number>;
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
  roleRedundant = 'RoleRedundant',
}

export interface Error {
  rmrk?: RmrkError;
  psp34?: PSP34Error;
  accessControl?: AccessControlError;
  reentrancy?: ReentrancyGuardError;
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
  badConfig = 'BadConfig',
  badMintValue = 'BadMintValue',
  badPriorityLength = 'BadPriorityLength',
  cannotMintZeroTokens = 'CannotMintZeroTokens',
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
  withdrawalFailed = 'WithdrawalFailed',
}

export enum ReentrancyGuardError {
  reentrantCall = 'ReentrantCall',
}

export type Asset = {
  equippableGroupId: number;
  assetUri: Array<number>;
  partIds: Array<number>;
};

export type Part = {
  partType: PartType;
  z: number;
  equippable: Array<AccountId>;
  partUri: Array<number>;
  isEquippableByAll: boolean;
};

export enum PartType {
  none = 'None',
  slot = 'Slot',
  fixed = 'Fixed',
}

export type Equipment = {
  assetId: number;
  childAssetId: number;
  childNft: [AccountId, Id];
};

export type Token = {
  id: number;
  collectionId: AccountId;
  tokenUri: Array<number>;
  assetsPending: Array<number>;
  assetsAccepted: Array<number>;
  childrenPending: Array<[AccountId, number]>;
  childrenAccepted: Array<[AccountId, number]>;
};
