import { cryptoWaitReady } from '@polkadot/util-crypto';
import { ALICE_URI } from './secret';
import { executeCall, getCatalogContract, getSigner } from './common_api';
import { loadConfiguration } from './build_common';
import { deployCatalogContract } from './deploy_contracts';
import fs from 'fs';
import { Codec } from '@polkadot/types/types';

export interface Catalog {
  contractAddress: string;
  catalog: IBasePart[];
}

export type PartType = 'None' | 'Slot' | 'Fixed';

export interface IBasePart {
  id?: string | number;
  partType: PartType;
  equippable?: string[] | '*';
  partUri?: string;
  metadataUri?: string;
  isEquippableByAll?: boolean;
  z?: number;
}

interface Id extends Codec {
  asBytes: Codec;
}

export const buildCatalog = async (basePath: string): Promise<Catalog> => {
  await cryptoWaitReady();
  const signer = getSigner(ALICE_URI);
  const configuration = loadConfiguration(basePath);

  const contractAddress = await deployCatalogContract(
    configuration.catalogMetadataUri,
    signer
  );
  console.log(
    `** Catalog contract for collection ${configuration.name} has been deployed at address ${contractAddress}`
  );

  // Create catalog.
  const catalog = await createCatalog(
    configuration.numberOfEquippableSlots,
    basePath,
    configuration.collectionImagesUri
  );

  const contract = await getCatalogContract(contractAddress);
  await executeCall(contract, 'catalog::addPartList', signer, catalog);

  return { contractAddress, catalog };
};

/**
 * Creates a NFT catalog from a directory structure.
 * Catalog files are organized in subfolders under imagesPath folder.
 * Files that belongs to the same layer should be stored in the same folder. Folder name should be something like z_something,
 * where z is z index.
 * @param contractAddress NFT contract address
 * @param numberOfSlots Number of equippable slots to create
 * @param assetsPath Path to the folder with images organized in subfolders.
 * @param imagesUri CID of imagesPath folder deployed on IPFS.
 * @returns IBasePart[]
 */
const createCatalog = async (
  numberOfSlots: number,
  basePath: string,
  imagesUri: string
): Promise<IBasePart[]> => {
  const result: IBasePart[] = [];
  const fixedParts: number[] = [];
  const assetsPath = `${basePath}assets`;

  console.log('Creating a catalog');
  // Create fixed parts.
  // TODO see how to exclude hidden files (e.g. .DS_Store)
  const folders = fs
    .readdirSync(assetsPath, { withFileTypes: true })
    .filter((x) => x.isDirectory() && x.name !== '.DS_Store')
    .map((x) => x.name);

  for (let folder of folders) {
    const z = parseInt(folder.split('_')[0]);
    fixedParts.push(z);
    const files = await fs.promises.readdir(`${assetsPath}/${folder}`);
    for (let file of files.filter((x) => x !== '.DS_Store')) {
      result.push({
        partType: 'Fixed',
        partUri: `${imagesUri}/${folder}/${file}`,
        z,
      });
    }
  }

  // Create slots. Assumption, slots z order fills holes between fixed parts z indices.
  let slotsAdded = 0;
  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    if (slotsAdded >= numberOfSlots) {
      break;
    }

    if (fixedParts.indexOf(i) === -1) {
      result.push({
        partType: 'Slot',
        equippable: [],
        z: i,
      });
      slotsAdded++;
    }
  }

  return result;
};

const run = async (): Promise<void> => {
  // Base contract
  const catalogAddress = await buildCatalog('../collections/starduster/');

  console.log('\nBase contract address ', catalogAddress);
  process.exit(0);
};

// run();
