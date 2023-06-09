import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';
import axios from 'axios';
import { inject, injectable } from 'inversify';
import { sanitizeIpfsUrl } from 'src/modules/nft/ipfs';
import Contract from 'src/modules/nft/types/contracts/rmrk_example_equippable_lazy';
import Catalog from 'src/modules/nft/types/contracts/catalog_contract';
import Proxy from 'src/modules/nft/types/contracts/rmrk_proxy';
import { IdBuilder } from 'src/modules/nft/types/types-arguments/rmrk_example_equippable_lazy';
import { PartType } from 'src/modules/nft/types/types-returns/catalog_contract';
import { IApi } from 'src/v2/integration';
import { ChildInfo, Metadata, Part, TokenAsset } from 'src/v2/models';
import {
  ContractInventory,
  IRmrkNftRepository,
  UnequipCallParam,
} from 'src/v2/repositories/IRmrkNftRepository';
import { Symbols } from 'src/v2/symbols';
import { EquipCallParam } from './../IRmrkNftRepository';
import { SmartContractRepository } from './SmartContractRepository';
import { ASTAR_NETWORK_IDX } from 'src/config/chain';
import { queryParentInventories } from 'src/modules/nft';

@injectable()
export class RmrkNftRepository extends SmartContractRepository implements IRmrkNftRepository {
  constructor(@inject(Symbols.DefaultApi) private api: IApi) {
    super(api);
  }

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
    const transaction = await this.getContractCall(
      parentContractAddress,
      'equippable::equip',
      senderAddress,
      IdBuilder.U64(tokenId.u64 ?? 0),
      assetId,
      slot,
      [childContractAddress, IdBuilder.U64(childTokenId.u64 ?? 0)],
      childAssetId
    );

    return transaction;
  }

  public async getUnequipCallData({
    contractAddress,
    tokenId,
    slotId,
    senderAddress,
  }: UnequipCallParam): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>> {
    const api = await this.api.getApi();
    const transaction = await this.getContractCall(
      contractAddress,
      'equippable::unequip',
      senderAddress,
      { u64: tokenId },
      slotId
    );

    return transaction;
  }

  public async getAcceptChildCallData(
    contractAddress: string,
    tokenId: number,
    childContractAddress: string,
    childTokenId: number,
    senderAddress: string
  ): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>> {
    const api = await this.api.getApi();
    const transaction = await this.getContractCall(
      contractAddress,
      'nesting::acceptChild',
      senderAddress,
      { u64: tokenId },
      [childContractAddress, { u64: childTokenId }]
    );

    return transaction;
  }

  public async getAddChildCallData(
    contractAddress: string,
    tokenId: number,
    childContractAddress: string,
    childTokenId: number,
    senderAddress: string
  ): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>> {
    const api = await this.api.getApi();
    const transaction = await this.getContractCall(
      contractAddress,
      'nesting::addChild',
      senderAddress,
      { u64: tokenId },
      [childContractAddress, { u64: childTokenId }]
    );

    return transaction;
  }

  public async getInventory(
    ownerAddress: string,
    networkIdx: ASTAR_NETWORK_IDX
  ): Promise<ContractInventory[]> {
    return await queryParentInventories(ownerAddress, networkIdx);

    // for local test only
    // return [
    //   {
    //     contractAddress: 'W31sRs7oHgzYTLa2xoVR8yU6dXC3GnUBBMQo2HoCY4Fneyq',
    //     tokenId: 5,
    //   },
    //   {
    //     contractAddress: 'bLnHkdnmesecS8rJ9gW7tXcWGijcZtii5Vg1nj1rZytBsbb',
    //     tokenId: 6,
    //   },
    //   {
    //     contractAddress: 'bLnHkdnmesecS8rJ9gW7tXcWGijcZtii5Vg1nj1rZytBsbb',
    //     tokenId: 7,
    //   },
    //   {
    //     contractAddress: 'bLnHkdnmesecS8rJ9gW7tXcWGijcZtii5Vg1nj1rZytBsbb',
    //     tokenId: 8,
    //   },
    //   {
    //     contractAddress: 'bLnHkdnmesecS8rJ9gW7tXcWGijcZtii5Vg1nj1rZytBsbb',
    //     tokenId: 9,
    //   },
    // ];

    // return Array.from({ length: 100 }, (_, index) => index + 1).map((x) => {
    //   return {
    //     contractAddress: 'YvXaB6p4wDH3LviBWHnqycaErdfKZxMvrxSb8U42hC7ZfB8',
    //     tokenId: x,
    //   } as ContractInventory;
    // });
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

  public async getChildren(
    contractAddress: string,
    callerAddress: string,
    tokenId: number
  ): Promise<ChildInfo[]> {
    const api = await this.api.getApi();
    const contract = new Contract(contractAddress, callerAddress, api);

    const acceptedChildren = await (
      await contract.query.getAcceptedChildren({ u64: tokenId })
    ).value.unwrap();
    const result = acceptedChildren.map((x) => {
      return {
        contractAddress: x[0].toString(),
        tokenId: x[1].u64?.toString(),
        isAccepted: true,
      } as ChildInfo;
    });

    const pendingChildren = await (
      await contract.query.getPendingChildren({ u64: tokenId })
    ).value.unwrap();
    result.push(
      ...pendingChildren.map((x) => {
        return {
          contractAddress: x[0].toString(),
          tokenId: x[1].u64?.toString(),
          isAccepted: false,
        } as ChildInfo;
      })
    );

    return result;
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
          assetUri: sanitizeIpfsUrl(this.hex2ascii(assetValue?.assetUri?.toString() ?? '')),
          parts: [],
          id: assetId,
          tokenId: tokenId.toString(),
          contractAddress,
        } as TokenAsset;

        const partsToAdd: Part[] = [];
        const catalogAddressQuery = await contract.query.getAssetCatalogAddress(assetId);
        const catalogAddress = catalogAddressQuery.value.unwrap();
        if (!catalogAddress) {
          throw 'Catalog address is undefined';
        }

        const catalog = new Catalog(catalogAddress.toString(), callerAddress, api);
        for (const partId of assetValue.partIds) {
          const part = await catalog.query['getPart'](partId);
          const partValue = part.value.unwrap();
          if (partValue) {
            const partToAdd = {
              id: partId,
              partType: partValue.partType,
              z: partValue.z,
              isEquippableByAll: partValue.isEquippableByAll,
              partUri: sanitizeIpfsUrl(this.hex2ascii(partValue.partUri.toString() ?? '')),
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

  public async getMintPrice(contractAddress: string, callerAddress: string): Promise<bigint> {
    const api = await this.api.getApi();
    const contract = new Proxy(contractAddress, callerAddress, api);
    const mintPrice = await contract.query.mintPrice();

    return BigInt(mintPrice.value.unwrap().toHuman());
  }

  public async getAllowance(
    contractAddress: string,
    callerAddress: string,
    operatorContractAddress: string,
    tokenId: number
  ): Promise<boolean> {
    const api = await this.api.getApi();
    const contract = new Contract(contractAddress, callerAddress, api);

    const id = { u64: tokenId };
    const result = await contract.query.allowance(callerAddress, operatorContractAddress, id);

    return result.value.ok ?? false;
  }

  public async getApproveCall(
    contractAddress: string,
    callerAddress: string,
    operatorContractAddress: string,
    tokenId: number,
    approved: boolean
  ): Promise<SubmittableExtrinsic<'promise', ISubmittableResult>> {
    const api = await this.api.getApi();
    const transaction = await this.getContractCall(
      contractAddress,
      'psp34::approve',
      callerAddress,
      operatorContractAddress,
      { u64: tokenId },
      approved
    );

    return transaction;
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
      const metadataUri = this.hex2ascii(collectionMetadataUri.value.unwrap()?.toString() ?? '');
      const response = await axios.get<Metadata>(
        sanitizeIpfsUrl(metadataUri + (tokenId ? `/${tokenId}.json` : ''))
      );

      return response.data;
    }

    return undefined;
  }

  private hex2ascii(hex: string): string {
    if (!hex) {
      return '';
    }

    let result = '';
    hex = hex.replace('0x', '');
    for (let i = 0; i < hex.length; i += 2) {
      result += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return result;
  }
}
