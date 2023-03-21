import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';
import axios from 'axios';
import { inject, injectable } from 'inversify';
import { unequipSlot } from 'src/modules/nft';
import { sanitizeIpfsUrl } from 'src/modules/nft/ipfs';
import { equipSlot, hex2ascii } from 'src/modules/nft/read-token';
import Contract from 'src/modules/nft/rmrk-contract/types/contracts/rmrk_contract';
import { IdBuilder } from 'src/modules/nft/rmrk-contract/types/types-arguments/rmrk_contract';
import { IApi } from 'src/v2/integration';
import { Metadata } from 'src/v2/models';
import {
  ContractInventory,
  IRmrkNftRepository,
  UnequipCallParam,
} from 'src/v2/repositories/IRmrkNftRepository';
import { Symbols } from 'src/v2/symbols';
import { EquipCallParam } from './../IRmrkNftRepository';

@injectable()
export class RmrkNftRepository implements IRmrkNftRepository {
  constructor(@inject(Symbols.DefaultApi) private api: IApi) {}

  public async getEquipCallData({
    parentContractAddress,
    childContractAddress,
    tokenId,
    assetId,
    slot,
    childTokenId,
    childAssetId,
    senderAddress,
  }: EquipCallParam): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>> {
    const api = await this.api.getApi();
    const transaction = await equipSlot({
      parentContractAddress,
      tokenId,
      assetId,
      slot,
      childContractAddress,
      childTokenId,
      childAssetId,
      api,
      senderAddress,
    });
    return transaction;
  }

  public async getUnequipCallData({
    contractAddress,
    tokenId,
    slotId,
    senderAddress,
  }: UnequipCallParam): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>> {
    const api = await this.api.getApi();
    const transaction = await unequipSlot({
      contractAddress,
      tokenId,
      slotId,
      senderAddress,
      api,
    });
    return transaction;
  }

  public async getInventory(ownerAddress: string): Promise<ContractInventory[]> {
    return [
      {
        contractAddress: 'Wcg8cuKcJgQGm15tZ5F14JXuWehm1Q67K92jfbTpKPrPm6S',
        tokenId: 1,
      },
      {
        contractAddress: 'Wcg8cuKcJgQGm15tZ5F14JXuWehm1Q67K92jfbTpKPrPm6S',
        tokenId: 2,
      },
      {
        contractAddress: 'adDDmXkrVUhcFNy74zJm9CohrvDCbBixhvLCzrrmzo5HG3U',
        tokenId: 1,
      },
      {
        contractAddress: 'adDDmXkrVUhcFNy74zJm9CohrvDCbBixhvLCzrrmzo5HG3U',
        tokenId: 2,
      },
      {
        contractAddress: 'XMAfed8ZvqDUQzoy8NuU715vhKs6rRckSYwSWuqQsM8ZWGv',
        tokenId: 5,
      },
      {
        contractAddress: 'bMsPywwU4m9F9ZZ48cSffEyGeYJ66A5N3PGDv76Yogpp7zX',
        tokenId: 5,
      },
    ];
  }

  public async getCollectionMetadata(
    contractAddress: string,
    callerAddress: string
  ): Promise<Metadata | undefined> {
    return await this.getMetadata(contractAddress, callerAddress, 'collection_metadata');
  }

  public async getTokenMetadata(
    contractAddress: string,
    callerAddress: string,
    tokenId: number
  ): Promise<Metadata | undefined> {
    return await this.getMetadata(contractAddress, callerAddress, 'baseUri', tokenId);
  }

  private async getMetadata(
    contractAddress: string,
    callerAddress: string,
    metadataKey: string,
    tokenId?: number
  ): Promise<Metadata | undefined> {
    const api = await this.api.getApi();
    const contract = new Contract(contractAddress, callerAddress, api);
    const collectionId = await (await contract.query.collectionId()).value.unwrap();
    const id = IdBuilder.Bytes(collectionId.bytes ?? ['']);
    const collectionMetadataUri = await contract.query.getAttribute(id, metadataKey);

    if (collectionMetadataUri && collectionMetadataUri.value.ok) {
      const metadataUri = hex2ascii(collectionMetadataUri.value.unwrap()?.toString() ?? '');
      const response = await axios.get<Metadata>(
        sanitizeIpfsUrl(metadataUri + (tokenId ? `/${tokenId}.json` : ''))
      );

      // I messed up a collection img on Starduster metadata and I can't fix it because deployed wrong contract version :(
      // TODO fix with new contract deployment.
      if (
        contractAddress === 'Wcg8cuKcJgQGm15tZ5F14JXuWehm1Q67K92jfbTpKPrPm6S' &&
        metadataKey === 'collection_metadata'
      ) {
        response.data.mediaUri =
          'ipfs://bafkreibd4o62fa2a66k5taavb2ce72uzlernucen7eosv5v7achnd2kiha';
      }

      return response.data;
    }

    return undefined;
  }
}
