import { endpointKey } from 'src/config/chainEndpoints';

export interface NftCollection {
  contractAddress: string;
  networkIdx: number;
  mintPrice: bigint;
  subSocialId: string;
}

const collections: NftCollection[] = [
  {
    contractAddress: 'XzoT9sH6zpC19TdkkePiopgXjTHcEgX8qjXXHs4p1HuQ5uR',
    networkIdx: endpointKey.SHIBUYA,
    mintPrice: BigInt(1000000000000000000),
    subSocialId: '0x0000000000',
  },
];

export const getCollection = (
  contractAddress: string,
  networkIdx: number
): NftCollection | undefined => {
  const collection = collections.find(
    (x) => x.contractAddress === contractAddress && x.networkIdx === networkIdx
  );

  return collection;
};
