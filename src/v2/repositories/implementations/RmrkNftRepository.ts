import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';
import { inject, injectable } from 'inversify';
import { unequipSlot } from 'src/modules/nft';
import { equipSlot } from 'src/modules/nft/read-token';
import { IApi } from 'src/v2/integration';
import { IRmrkNftRepository, UnequipCallParam } from 'src/v2/repositories/IRmrkNftRepository';
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
}
