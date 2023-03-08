import { gql, GraphQLClient } from 'graphql-request';
import { ParentInventory } from 'src/modules/nft';

interface OwnerByIdQuery {
  ownerById?: {
    ownedTokens: { id: string }[];
  };
}

const graphQlServer = 'https://squid.subsquid.io/sqd-nft-viewer/v/v1/graphql';

export const queryParentInventories = async (walletAddress: string): Promise<ParentInventory[]> => {
  try {
    const graphQLClient = new GraphQLClient(graphQlServer);
    const query = gql`
      query InventoryQuery($id: String!) {
        ownerById(id: $id) {
          ownedTokens {
            id
          }
        }
      }
    `;
    const variable = { id: walletAddress };
    const data = (await graphQLClient.request(query, variable)) as OwnerByIdQuery;
    if (!data) {
      new Error(`something went wrong when fetching inventory data of ${walletAddress}`);
    }
    return data.ownerById ? data.ownerById.ownedTokens : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
