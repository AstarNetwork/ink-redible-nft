// inputs
//  - root path with containing images and metadata (rootPath)
//  - number of tokens to mint
//  - number of equippable slots
//  - contract address
//  - deployed images cid (the same images from images path)
// ... specified in configuration.json
// outputs
//  - json metadata
//  - deployed contract
//  - tokens minted and assets created

// HOW TO BUILD COLLECTION
// 1. Deploy assets folder (deploy folder, not files) to IPFS and update collectionImagesUri in the collection configuration.json
// 2. Deploy collection.json to IPFS and update collectionMetadataUri in the collection configuration.json.
// 3. Run build collection script (WARNING! baseUri configuration parameter should be empty).
//    This step will generate NFTs metadata only (see newly create metadata folder).
// 4. Deploy metadata folder (deploy folder, not files) to IPFS and update baseUri baseUri in the collection configuration.json
// 5. Run build collection script once again to deploy contracts
//    - Three contracts will be deployed: collection, catalog and proxy.
//      Collection is main contract and it will hold all tokens.
//      Catalog contains parts that can be used as assets for tokens.
//      Proxy is a contract that allows users to mint tokens.

// How to allow equipping to base (i.e. there are 2 RMRK contracts, one with base parts and another with equippables)
// 1. On base NFT catalog contract call base::addEquippableAddresses for equippable part and provide equippable contract address.

import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import fs from 'fs';
import path from 'path';
import { CollectionConfiguration, Metadata } from 'base';
import { deployProxyContract, deployRmrkContract } from './deploy_contracts';
import {
  executeCalls,
  getCall,
  getContract,
  getSigner,
  ALICE_URI,
} from './common_api';
import { loadConfiguration } from './build_common';
import { buildCatalog, IBasePart } from './build_catalog';

/**
 * Builds a RMRK NFT collection.
 * @param basePath Path to the folder with deployment configuration, assets and metadata.
 * @returns collection contract address
 */
export const buildCollection = async (
  basePath: string,
): Promise<string> => {
  const MAX_CALL_SIZE = 50; // Max length of array passed to a contract call.
  let calls: SubmittableExtrinsic<'promise', ISubmittableResult>[] = [];

  await cryptoWaitReady();
  const signer = getSigner(ALICE_URI);
  console.log(ALICE_URI);

  // Load collection configuration.
  const configuration = loadConfiguration(basePath);
  console.debug(configuration);

  let contractAddress = configuration.contractAddress;
  // Deploy a new RMRK contract
  if (configuration.baseUri && !configuration.contractAddress) {
    contractAddress = await deployRmrkContract(
      signer,
      configuration.name,
      configuration.symbol,
      configuration.baseUri,
      BigInt(configuration.maxSupply),
      BigInt(configuration.pricePerMint),
      configuration.collectionMetadataUri,
      configuration.royaltyReceiverAddress,
      configuration.royalty
    );

    console.log(
      `** Contract for collection ${configuration.name} has been deployed at address ${contractAddress}`
    );
  }

  // Build catalog. A lot of magic happens inside.
  const { contractAddress: catalogAddress, catalog } = await buildCatalog(
    basePath
  );

  // Deploy RMRK proxy contract
  const proxyContractAddress = await deployProxyContract(
    contractAddress,
    catalogAddress,
    BigInt(configuration.pricePerMint),
    signer
  );
  console.log(
    `** Proxy contract for ${configuration.name} has been deployed at address ${proxyContractAddress}`
  );

  // Write toke metadata. Each token has one json file with metadata.
  if (!configuration.baseUri) {
    writeTokenMetadata(basePath, catalog, configuration);
    return;
  }

  // Get RMRK contract instance.
  const contract = await getContract(contractAddress);
  
  // Create assets
  const assetsCount = catalog.length - configuration.numberOfEquippableSlots;
  const equippableSlots: number[] = [];
  for (let i = assetsCount; i < catalog.length; i++) {
    equippableSlots.push(i);
  }

  for (let i = 0; i < assetsCount; i++) {
    calls.push(
      await getCall(
        contract,
        'multiAsset::addAssetEntry',
        signer,
        catalogAddress, // Catalog address
        (i + 1).toString(), // Asset id
        '0', // Equippable group id
        catalog[i].partUri, // Asset uri
        [i, ...equippableSlots] // Fixed and equippable slots
      )
    );
  }

  // Execute add asset entry calls
  console.log(`Executing addAssetEntry calls. Number of calls ${calls.length}`);
  await executeCalls(calls, signer);
  console.log('Batch call executed.');
  calls = [];

  console.log('Script completed');
  return contractAddress;
};

const writeTokenMetadata = (
  basePath: string,
  parts: IBasePart[],
  configuration: CollectionConfiguration
): void => {
  const fixedPartsCount = parts.filter((x) => x.partType === 'Fixed').length;
  const metadataPath = `${basePath}metadata/`;

  // We will reuse base parts. Every fixedPartsCount th token will have the same base part.
  for (let i = 0; i < configuration.maxSupply; i++) {
    const part = parts[i % fixedPartsCount];

    const meta = {
      name: `${configuration.name} #${i + 1}`,
      description: 'A great one',
      image: part.partUri,
      properties: {
        type: {
          type: 'string',
          value: path.parse(part.partUri).name,
        },
      },
    } as Metadata;

    fs.writeFileSync(
      `${metadataPath}${i + 1}.json`,
      JSON.stringify(meta, null, 4),
      'utf-8'
    );
  }

  console.log('Tokens metadata have been created.');
};

const run = async (): Promise<void> => {
  if (process.argv.length < 3) {
    console.log('Missing collection path argument. Usage: npm run build-collection <path>');
  } else {
    // Build collection
    await buildCollection(process.argv[2]);
  }

  process.exit(0);
};

run();
