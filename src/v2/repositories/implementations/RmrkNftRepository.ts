import {
  IRmrkNftRepository,
  UnequipCallParam,
  GetParentNftsParam,
} from 'src/v2/repositories/IRmrkNftRepository';
import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';
import { inject, injectable } from 'inversify';
import { IApi } from 'src/v2/integration';
import { Symbols } from 'src/v2/symbols';
import { equipSlot, fetchAllParentNfts } from 'src/modules/nft/read-token';
import { EquipCallParam } from './../IRmrkNftRepository';
import { IdBasePart, unequipSlot } from 'src/modules/nft';

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

  public async getParentNfts({
    mainContractAddress,
    partsContractAddress,
    senderAddress,
  }: GetParentNftsParam): Promise<IdBasePart[]> {
    const api = await this.api.getApi();
    return await fetchAllParentNfts({
      mainContractAddress,
      partsContractAddress,
      senderAddress,
      api,
    });
  }
}
