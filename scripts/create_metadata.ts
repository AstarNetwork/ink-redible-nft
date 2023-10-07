import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';
import fs from 'fs';
import path from 'path';
import { loadConfiguration, CollectionConfiguration, Metadata } from './build_common';
import { buildCatalog, IBasePart } from './build_catalog';

export const createMetadata = async (basePath: string): Promise<void> => {
  const MAX_CALL_SIZE = 50; // Max length of array passed to a contract call.
  let calls: SubmittableExtrinsic<'promise', ISubmittableResult>[] = [];

  const configuration = loadConfiguration(basePath);
  const { contractAddress: catalogAddress, catalog } = await buildCatalog(basePath, false);
  writeTokenMetadata(basePath, catalog, configuration);

  console.log(`Metadata have been created. Check ${process.argv[2]}metadata folder.`);
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

    fs.writeFileSync(`${metadataPath}${i + 1}.json`, JSON.stringify(meta, null, 4), 'utf-8');
  }

  console.log('Tokens metadata have been created.');
};

const run = async (): Promise<void> => {
  if (process.argv.length < 3) {
    console.log('Missing collection path argument. Usage: npm run build-collection <path>');
  } else {
    await createMetadata(process.argv[2]);
  }

  process.exit(0);
};

run();
