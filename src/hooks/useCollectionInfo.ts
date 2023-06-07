import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

// TODO filter by network
export const useCollectionInfo = () => {
  const { result, loading, error } = useQuery(gql`
    query CommentsByContract {
      posts(where: { rootPost: { space: { id_eq: "11453" } } }) {
        id
        image
        title
        canonical
        body
      }
    }
  `);

  return { result, loading, error };
};
