// import type { ReturnNumber } from '@727-ventures/typechain-types';
import type BN from 'bn.js';

export type Asset = {
  equippableGroupId: number;
  assetUri: Array<number>;
  partIds: Array<number>;
};

export interface Id {
  u8?: number | string | BN;
  u16?: number | string | BN;
  u32?: number | string | BN;
  u64?: number | string | BN;
  u128?: number | string | BN;
  bytes?: Array<any>;
}

export class IdBuilder {
  static U8(value: number | string | BN): Id {
    return {
      u8: value,
    };
  }
  static U16(value: number | string | BN): Id {
    return {
      u16: value,
    };
  }
  static U32(value: number | string | BN): Id {
    return {
      u32: value,
    };
  }
  static U64(value: number | string | BN): Id {
    return {
      u64: value,
    };
  }
  static U128(value: string | number | BN): Id {
    return {
      u128: value,
    };
  }
  static Bytes(value: Array<number | string | BN>): Id {
    return {
      bytes: value,
    };
  }
}
