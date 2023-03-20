import { gql, GraphQLClient } from 'graphql-request';
import { ParentInventory } from 'src/modules/nft';
import { ContractInventory } from 'src/v2/repositories';

interface OwnerByIdQuery {
  ownerById?: {
    tokens: Token[];
  };
}

interface Token {
  id: string;
}

const graphQlServer = 'https://squid.subsquid.io/sqd-nft-viewer/v/v1/graphql';

export const queryParentInventories = async (
  walletAddress: string
): Promise<ContractInventory[]> => {
  try {
    const graphQLClient = new GraphQLClient(graphQlServer);
    const query = gql`
      query InventoryQuery($id: String!) {
        ownerById(id: $id) {
          id
          tokens {
            id
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
    for (const token in data.ownerById?.tokens) {
      const t = token as unknown as Token;
      if (t) {
        const splitted = t.id.split('-');
        result.push({ contractAddress: splitted[0], tokenId: parseInt(splitted[1]) });
      }
    }

    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
};
