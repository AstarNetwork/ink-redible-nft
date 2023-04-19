import { gql, GraphQLClient } from 'graphql-request';
import { ASTAR_NETWORK_IDX } from 'src/config/chain';
import { endpointKey } from 'src/config/chainEndpoints';
import { ContractInventory } from 'src/v2/repositories';

interface OwnerByIdQuery {
  ownerContractTokens: OwnerContractToken[];
}

interface OwnerContractToken {
  id: string;
  contractToken: ContractToken;
}

interface ContractToken {
  contract: { id: string };
  token: { id: string };
}

const graphQlServerUrls = new Map<number, string>([
  [endpointKey.ASTAR, ''],
  [endpointKey.SHIDEN, ''],
  [endpointKey.SHIBUYA, 'https://squid.subsquid.io/sqd-nft-viewer/v/v1/graphql'],
]);

export const queryParentInventories = async (
  walletAddress: string,
  networkIdx: ASTAR_NETWORK_IDX
): Promise<ContractInventory[]> => {
  try {
    const graphQlServer = graphQlServerUrls.get(networkIdx);
    if (!graphQlServer) {
      return [];
    }

    const graphQLClient = new GraphQLClient(graphQlServer);
    const query = gql`
      query InventoryQuery($id: String!) {
        ownerContractTokens(where: { owner: { id_eq: $id } }) {
          id
          contractToken {
            contract {
              id
            }
            token {
              id
            }
          }
        }
      }
    `;
    const variable = { id: walletAddress };
    const data = await graphQLClient.request<OwnerByIdQuery>(query, variable);
    if (!data) {
      new Error(`something went wrong when fetching inventory data of ${walletAddress}`);
    }

    const result: ContractInventory[] = [];
    for (let i = 0; i < data.ownerContractTokens.length; i++) {
      const token = data.ownerContractTokens[i] as unknown as OwnerContractToken;
      if (token) {
        result.push({
          contractAddress: token.contractToken.contract.id,
          tokenId: parseInt(token.contractToken.token.id),
        });
      }
    }

    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
};
