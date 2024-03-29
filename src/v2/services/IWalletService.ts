import { SubmittableExtrinsic } from '@polkadot/api/types';
import { EventRecord } from '@polkadot/types/interfaces';
import { ISubmittableResult } from '@polkadot/types/types';

export enum WalletType {
  Polkadot = 'Polkadot',
}

export interface ExtrinsicResult {
  hash: string;
  events: EventRecord[];
}

export interface IWalletService {
  /**
   * Signs and sends transaction. Returns transaction hash.
   * @param extrinsic Extrisnic to sign and send
   * @param senderAddress Signer address
   * @param successMessage Message to show in case of sucessfull transaction
   * @param transactionTip Transation tip.
   */
  signAndSend(
    extrinsic: SubmittableExtrinsic<'promise'>,
    senderAddress: string,
    successMessage?: string,
    transactionTip?: number,
    finalizedCallback?: (result?: ISubmittableResult) => void
  ): Promise<string | ExtrinsicResult | null>;
}
