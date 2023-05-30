import { ContractCallOutcome } from '@polkadot/api-contract/types';
import { inject, injectable } from 'inversify';
import { ASTAR_NETWORK_IDX } from 'src/config/chain';
import { Guard } from 'src/v2/common';
import { ExtrinsicStatusMessage, IEventAggregator } from 'src/v2/messaging';
import { IRmrkLazyMintRepository } from 'src/v2/repositories/IRmrkLazyMintRepository';
import {
  ContractInventory,
  EquipCallParam,
  IRmrkNftRepository,
  UnequipCallParam,
} from 'src/v2/repositories/IRmrkNftRepository';
import { IWalletService } from 'src/v2/services';
import { DryRunResult, IRmrkNftService } from 'src/v2/services/IRmrkNftService';
import { Symbols } from 'src/v2/symbols';

@injectable()
export class RmrkNftService implements IRmrkNftService {
  private readonly wallet: IWalletService;

  constructor(
    @inject(Symbols.RmrkNftRepository) private rmrkNftRepository: IRmrkNftRepository,
    @inject(Symbols.RmrkLazyMintRepository) private rmrkLazyMintRepository: IRmrkLazyMintRepository,
    @inject(Symbols.WalletFactory) walletFactory: () => IWalletService,
    @inject(Symbols.EventAggregator) readonly eventAggregator: IEventAggregator
  ) {
    this.wallet = walletFactory();
  }

  public async equip(param: EquipCallParam): Promise<void> {
    Guard.ThrowIfUndefined('param', param);

    try {
      const transaction = await this.rmrkNftRepository.getEquipCallData(param);
      await this.wallet.signAndSend(
        transaction,
        param.senderAddress,
        'The child NFT is successfully equipped to parent.'
      );
    } catch (error) {
      const e = error as Error;
      console.error(error);
      this.eventAggregator.publish(new ExtrinsicStatusMessage(false, e.toString()));
    }
  }
  public async unequip(param: UnequipCallParam): Promise<void> {
    Guard.ThrowIfUndefined('param', param);

    try {
      const transaction = await this.rmrkNftRepository.getUnequipCallData(param);
      await this.wallet.signAndSend(
        transaction,
        param.senderAddress,
        'The child NFT is successfully unequipped from parent.'
      );
    } catch (error) {
      const e = error as Error;
      console.error(error);
      this.eventAggregator.publish(new ExtrinsicStatusMessage(false, e.toString()));
    }
  }

  public async acceptChild(
    contractAddress: string,
    tokenId: number,
    childContractAddress: string,
    childTokenId: number,
    senderAddress: string
  ): Promise<void> {
    Guard.ThrowIfUndefined('contractAddress', contractAddress);
    Guard.ThrowIfUndefined('tokenId', tokenId);
    Guard.ThrowIfUndefined('childContractAddress', childContractAddress);
    Guard.ThrowIfUndefined('childTokenId', childTokenId);
    Guard.ThrowIfUndefined('senderAddress', senderAddress);

    try {
      const transaction = await this.rmrkNftRepository.getAcceptChildCallData(
        contractAddress,
        tokenId,
        childContractAddress,
        childTokenId,
        senderAddress
      );
      await this.wallet.signAndSend(
        transaction,
        senderAddress,
        'The child NFT is successfully bonded to parent.'
      );
    } catch (error) {
      const e = error as Error;
      console.error(error);
      this.eventAggregator.publish(new ExtrinsicStatusMessage(false, e.toString()));
    }
  }

  public async getInventory(
    ownerAddress: string,
    networkIdx: ASTAR_NETWORK_IDX
  ): Promise<ContractInventory[]> {
    Guard.ThrowIfUndefined('ownerAddress', ownerAddress);

    return await this.rmrkNftRepository.getInventory(ownerAddress, networkIdx);
  }

  public async mintDryRun(
    contractAddress: string,
    senderAddress: string,
    price: bigint
  ): Promise<DryRunResult> {
    const result = await this.rmrkLazyMintRepository.mintDryRun(
      contractAddress,
      senderAddress,
      price
    );

    // minting price
    const call = await this.rmrkLazyMintRepository.getMintCall(
      contractAddress,
      senderAddress,
      price
    );
    const paymentInfo = await call.paymentInfo(senderAddress);

    return {
      result,
      storageFeeFormatted: result.storageDeposit.toHuman()?.toString() ?? '',
      gasFormatted: paymentInfo.partialFee.toHuman()?.toString() ?? '',
    };
  }
}
