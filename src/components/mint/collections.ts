import { endpointKey } from 'src/config/chainEndpoints';

export interface NftCollection {
  name: string;
  contractAddress: string;
  networkIdx: number;
  mintPrice: bigint;
}

// List of collections supported by Astar NFT.
const collections: NftCollection[] = [
  {
    name: 'StrBods',
    contractAddress: 'XzoT9sH6zpC19TdkkePiopgXjTHcEgX8qjXXHs4p1HuQ5uR',
    networkIdx: endpointKey.SHIBUYA,
    mintPrice: BigInt(1000000000000000000),
  },
  {
    name: 'StrEyes',
    contractAddress: 'Z7wghe3ydHU6C5A2t4HBSq13Cph7h254e2Kuhb5s7LZ1jCy',
    networkIdx: endpointKey.SHIBUYA,
    mintPrice: BigInt(1000000000000000000),
  },
  {
    name: 'StrMouths',
    contractAddress: 'aL4gBi1W7HEDD1DUHTaGC418EbasXtsPNuhNnAoCvEAKRAs',
    networkIdx: endpointKey.SHIBUYA,
    mintPrice: BigInt(1000000000000000000),
  },
  {
    name: 'StrCaps',
    contractAddress: 'XnNHN2FijKJWA75cqMJy6brVoW8kBPqDDg47sVT5nbTZjN8',
    networkIdx: endpointKey.SHIBUYA,
    mintPrice: BigInt(1000000000000000000),
  },
  {
    name: 'StrFarts',
    contractAddress: 'Y6BsFuMW3TAnjhq1dcCziu6tGrN733yBLhyiGDWocyAnKvC',
    networkIdx: endpointKey.SHIBUYA,
    mintPrice: BigInt(1000000000000000000),
  },
];

export const getCollection = (
  collectionName: string,
  networkIdx: number
): NftCollection | undefined => {
  if (!collectionName) return undefined;

  const collection = collections.find(
    (x) => x.name.toLowerCase() === collectionName.toLowerCase() && x.networkIdx === networkIdx
  );

  return collection;
};
