import { inject, injectable } from 'inversify';
import { IdBasePart, ParentInventory, queryParentInventories } from 'src/modules/nft';
import { Guard } from 'src/v2/common';
import { IEventAggregator } from 'src/v2/messaging';
import {
  EquipCallParam,
  IRmrkNftRepository,
  UnequipCallParam,
  GetParentNftsParam,
} from 'src/v2/repositories/IRmrkNftRepository';
import { IWalletService } from 'src/v2/services';
import { IRmrkNftService } from 'src/v2/services/IRmrkNftService';
import { Symbols } from 'src/v2/symbols';

@injectable()
export class RmrkNftService implements IRmrkNftService {
  private readonly wallet: IWalletService;

  constructor(
    @inject(Symbols.RmrkNftRepository) private rmrkNftRepository: IRmrkNftRepository,
    @inject(Symbols.WalletFactory) walletFactory: () => IWalletService,
    @inject(Symbols.EventAggregator) readonly eventAggregator: IEventAggregator
  ) {
    this.wallet = walletFactory();
  }

  public async equip(param: EquipCallParam): Promise<void> {
    Guard.ThrowIfUndefined('param', param);

    try {
      const transaction = await this.rmrkNftRepository.getEquipCallData(param);
      await this.wallet.signAndSend(transaction, param.senderAddress);
    } catch (error) {
      console.error(error);
    }
  }
  public async unequip(param: UnequipCallParam): Promise<void> {
    Guard.ThrowIfUndefined('param', param);

    try {
      const transaction = await this.rmrkNftRepository.getUnequipCallData(param);
      await this.wallet.signAndSend(transaction, param.senderAddress);
    } catch (error) {
      console.error(error);
    }
  }

  public async fetchParentInventories(walletAddress: string): Promise<ParentInventory[]> {
    Guard.ThrowIfUndefined('walletAddress', walletAddress);
    try {
      const inventories = await queryParentInventories(walletAddress);
      return inventories;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  public async fetchParentNfts(param: GetParentNftsParam): Promise<IdBasePart[]> {
    Guard.ThrowIfUndefined('param', param);
    const parentNfts = await this.rmrkNftRepository.getParentNfts(param);
    return parentNfts;
  }
}
