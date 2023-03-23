import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';
import axios from 'axios';
import { inject, injectable } from 'inversify';
import { unequipSlot } from 'src/modules/nft';
import { sanitizeIpfsUrl } from 'src/modules/nft/ipfs';
import { equipSlot, hex2ascii } from 'src/modules/nft/read-token';
import Contract from 'src/modules/nft/rmrk-contract/types/contracts/rmrk_contract';
import { IdBuilder } from 'src/modules/nft/rmrk-contract/types/types-arguments/rmrk_contract';
import { PartType } from 'src/modules/nft/rmrk-contract/types/types-returns/rmrk_contract';
import { IApi } from 'src/v2/integration';
import { Metadata, Part, TokenAsset } from 'src/v2/models';
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
    // return await queryParentInventories(ownerAddress);
    // return [
    //   {
    //     contractAddress: 'Wcg8cuKcJgQGm15tZ5F14JXuWehm1Q67K92jfbTpKPrPm6S',
    //     tokenId: 1,
    //   },
    //   {
    //     contractAddress: 'Wcg8cuKcJgQGm15tZ5F14JXuWehm1Q67K92jfbTpKPrPm6S',
    //     tokenId: 2,
    //   },
    //   {
    //     contractAddress: 'adDDmXkrVUhcFNy74zJm9CohrvDCbBixhvLCzrrmzo5HG3U',
    //     tokenId: 1,
    //   },
    //   {
    //     contractAddress: 'adDDmXkrVUhcFNy74zJm9CohrvDCbBixhvLCzrrmzo5HG3U',
    //     tokenId: 2,
    //   },
    //   {
    //     contractAddress: 'XMAfed8ZvqDUQzoy8NuU715vhKs6rRckSYwSWuqQsM8ZWGv',
    //     tokenId: 5,
    //   },
    //   {
    //     contractAddress: 'bMsPywwU4m9F9ZZ48cSffEyGeYJ66A5N3PGDv76Yogpp7zX',
    //     tokenId: 5,
    //   },
    // ];

    // local
    return [
      {
        contractAddress: '5EqxxiwyjqfS6UUHnZbh6n7at6hYX4i4nFrQ5NvXet2bo7hS',
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

  public async getTokenAssets(
    contractAddress: string,
    callerAddress: string,
    tokenId: number
  ): Promise<TokenAsset[]> {
    const result: TokenAsset[] = [];
    const api = await this.api.getApi();

    const contract = new Contract(contractAddress, callerAddress, api);
    const id = { u64: tokenId };
    const acceptedTokenAssets = (await contract.query.getAcceptedTokenAssets(id)).value.unwrap();
    const assetIds = acceptedTokenAssets.unwrap();

    for (const assetId of assetIds) {
      const asset = await contract.query['multiAsset::getAsset'](assetId);
      const assetValue = asset.value.unwrap();
      if (assetValue) {
        const uiAsset = {
          equippableGroupId: assetValue?.equippableGroupId,
          assetUri: sanitizeIpfsUrl(hex2ascii(assetValue?.assetUri?.toString() ?? '')),
          parts: [],
          id: assetId,
          contractAddress,
        } as TokenAsset;

        const partsToAdd: Part[] = [];
        for (const partId of assetValue.partIds) {
          const part = await contract.query['base::getPart'](partId);
          const partValue = part.value.unwrap();
          if (partValue) {
            const partToAdd = {
              id: partId,
              partType: partValue.partType,
              z: partValue.z,
              isEquippableByAll: partValue.isEquippableByAll,
              partUri: sanitizeIpfsUrl(hex2ascii(partValue.partUri.toString() ?? '')),
              equippable: partValue.equippable,
            } as Part;

            // Equipment
            if (partToAdd.partType === PartType.slot) {
              const equipment = await contract.query.getEquipment(id, partToAdd.id);
              const equipmentValue = equipment.value.ok ? equipment.value.unwrap() : null;
              if (equipmentValue?.childNft[0] && equipmentValue?.childNft[1]?.u64) {
                partToAdd.children = await this.getTokenAssets(
                  equipmentValue?.childNft[0].toString(),
                  callerAddress,
                  equipmentValue.childNft[1].u64
                );

                // Add child url to parent to make rendering easier. Take first child for now.
                if (partToAdd.children.length > 0) {
                  partToAdd.partUri = partToAdd.children[0].assetUri;
                }
              }
            }

            partsToAdd.push(partToAdd);
          }
        }

        const filteredAndSortedParts = partsToAdd.sort((x, y) => (x?.z ?? 0) - (y?.z ?? 0));
        uiAsset.parts.push(...filteredAndSortedParts);

        result.push(uiAsset);
      }
    }

    return result;
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
