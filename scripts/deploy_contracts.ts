import { CodeSubmittableResult } from '@polkadot/api-contract/base';
import { CodePromise } from '@polkadot/api-contract';
import { KeyringPair } from '@polkadot/keyring/types';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import { WeightV2 } from '@polkadot/types/interfaces';
import { getApi, getErrorMessage, getSigner } from './common_api';
import { ALICE_URI } from './secret'; // Send as deploy contract call parameter
import Files, { rm } from 'fs';
import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';

export const deployRmrkContract = async (
  signer: KeyringPair,
  name: string,
  symbol: string,
  baseUri: string,
  maxSupply: BigInt,
  pricePerMint: BigInt,
  collectionMetadata: string,
  royaltyReceiver: string,
  royalty: number
): Promise<string | undefined> => {
  console.log(`Deploying RMRK smart contract for ${name}`);
  const api = await getApi();
  const contract = JSON.parse(
    Files.readFileSync('../contract/rmrk_example_equippable_lazy.contract').toString()
  );
  const code = new CodePromise(api, contract, contract.source.wasm);
  
  const tx = code.tx['new']!(
    {
      gasLimit: api.registry.createType('WeightV2', {
        refTime: 2_000_000_000,
        proofSize: 50_000,
      }) as WeightV2,
      storageDepositLimit: null, // TODO dryRun BigInt('3000000000000000000'),
    },
    name,
    symbol,
    baseUri,
    maxSupply,
    pricePerMint,
    collectionMetadata,
    royaltyReceiver,
    royalty
  );

  return await signAndSend(tx, signer); 
};

export const deployCatalogContract = async (
  catalogMetadataUri: string,
  signer: KeyringPair
) => {
  console.log(`Deploying RMRK catalog smart contract`);
  const api = await getApi();
  const contract = JSON.parse(
    Files.readFileSync('../contract/catalog_contract.contract').toString()
  );
  const code = new CodePromise(api, contract, contract.source.wasm);
  const tx = code.tx['new']!(
    {
      gasLimit: api.registry.createType('WeightV2', {
        refTime: 2_000_000_000,
        proofSize: 50_000,
      }) as WeightV2,
      storageDepositLimit: null, // TODO dryRun BigInt('3000000000000000000'),
    },
    catalogMetadataUri
  );

  return await signAndSend(tx, signer);
};

export const deployProxyContract = async (
  rmrkAddress: string,
  catalogAddress: string,
  pricePerMint: bigint,
  signer: KeyringPair
) => {
  console.log(`Deploying RMRK proxy smart contract`);
  const api = await getApi();
  const contract = JSON.parse(
    Files.readFileSync('../contract/rmrk_proxy.contract').toString()
  );
  const code = new CodePromise(api, contract, contract.source.wasm);
  const tx = code.tx['new']!(
    {
      gasLimit: api.registry.createType('WeightV2', {
        refTime: 2_000_000_000,
        proofSize: 50_000,
      }) as WeightV2,
      storageDepositLimit: null, // TODO dryRun BigInt('3000000000000000000'),
    },
    rmrkAddress,
    catalogAddress,
    pricePerMint
  );

  return await signAndSend(tx, signer);
};

const signAndSend = async (
  tx: SubmittableExtrinsic<'promise', ISubmittableResult>,
  signer: KeyringPair
): Promise<string | undefined> => {
  return new Promise(async (resolve, reject) => {
    await tx.signAndSend(signer, (result: CodeSubmittableResult<'promise'>) => {
      if (result.isFinalized && !result.dispatchError) {
        resolve(result.contract.address.toHuman());
      } else if (result.isFinalized && result.dispatchError) {
        const error = getErrorMessage(result.dispatchError);
        console.error(`isFinalized error: ${error}`)
        reject(error);
      } else if (result.isError) {
        reject(result.toHuman());
      }
    });
  });
};

export const deployChunkyContract = async (
  deployer: KeyringPair
): Promise<string> => {
  console.log('Deploying Chunky contract...');
  const contractAddress = await deployRmrkContract(
    deployer,
    'Chunky',
    'CHK',
    'ipfs://base',
    BigInt(100),
    BigInt(1_000_000_000_000_000_000),
    'ipfs://collection',
    deployer.address,
    1
  );

  console.log(`Chunky contract deployed at address ${contractAddress}`);
  return contractAddress;
};

export const deployChunkyPartsContract = async (
  deployer: KeyringPair
): Promise<string> => {
  console.log('Deploying Chunky Parts contract...');
  const contractAddress = await deployRmrkContract(
    deployer,
    'Chunky Parts',
    'CHKP',
    'ipfs://bafybeiajqqqr7dbbtq4w3u5roepwdjhadt42gkt2krugqkyr4jp46ixala',
    BigInt(100),
    BigInt(1_000_000_000_000_000_000),
    'ipfs://collection',
    deployer.address,
    1
  );

  console.log(`Chunky Parts contract deployed at address ${contractAddress}`);
  return contractAddress;
};

const deployContracts = async (): Promise<void> => {
  await cryptoWaitReady();
  const alice = getSigner(ALICE_URI);
  console.log(
    `Deployed Chunky contract with address ${await deployChunkyContract(alice)}`
  );
  console.log(
    `Deployed Chunky parts contract with address ${await deployChunkyPartsContract(
      alice
    )}`
  );
};
