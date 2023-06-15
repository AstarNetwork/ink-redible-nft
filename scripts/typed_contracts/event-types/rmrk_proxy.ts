import type {ReturnNumber} from "@727-ventures/typechain-types";
import type * as ReturnTypes from '../types-returns/rmrk_proxy';

export interface TokenMinted {
	id: ReturnTypes.Id;
	price: ReturnNumber | null;
}

