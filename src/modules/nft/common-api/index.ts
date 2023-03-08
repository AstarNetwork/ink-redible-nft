import { ApiPromise } from '@polkadot/api';
import { WeightV2 } from '@polkadot/types/interfaces';
import { ApiBase } from '@polkadot/api/base';
import { Abi, ContractPromise } from '@polkadot/api-contract';
import { rmrkAbi } from '../abi/rmrk';

const PROOF_SIZE = 531_072; // 5_242_880;
const REF_TIME = 9_480_453_976; // 500_000_000_000;

export const getContract = async ({
  api,
  address,
}: {
  api: ApiPromise;
  address: string;
}): Promise<ContractPromise> => {
  const abi = new Abi(rmrkAbi, api.registry.getChainProperties());

  return new ContractPromise(api, abi, address);
};

export const getGasLimit = (api: ApiPromise | ApiBase<'promise'>, max = true): WeightV2 => {
  return api.registry.createType('WeightV2', {
    refTime: max ? 500_000_000_000 : REF_TIME,
    proofSize: max ? 5_242_880 : PROOF_SIZE,
  }) as WeightV2;
};
