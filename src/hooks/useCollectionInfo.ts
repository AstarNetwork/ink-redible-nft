import { watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useNetworkInfo } from './useNetworkInfo';

export const useCollectionInfo = () => {
  const { currentNetworkName } = useNetworkInfo();
  // const { result, loading, error, refetch } = useQuery(
  //   gql`
  //     query CommentsByContract {
  //       posts(
  //         where: {
  //           rootPost: {
  //             space: { id_eq: "11453" }
  //             hidden_not_eq: true
  //             tagsOriginal_containsInsensitive: "${currentNetworkName.value}"
  //           }
  //         }
  //       ) {
  //         id
  //         image
  //         title
  //         canonical
  //         body
  //       }
  //     }
  //   `
  // );

  const { result, loading, error, refetch } = useQuery(
    gql`
      query CommentsByContract($networkName: String!) {
        posts(
          where: {
            rootPost: {
              space: { id_eq: "11453" }
              hidden_not_eq: true
              tagsOriginal_containsInsensitive: $networkName
            }
          }
        ) {
          id
          image
          title
          canonical
          body
        }
      }
    `,
    { variables: { $networkName: 'Astar' } }
  );

  watch(
    currentNetworkName,
    () => {
      console.log(currentNetworkName.value);
      // if (currentNetworkName.value) {
      //   refetch({ variables: { $networkName: currentNetworkName.value } });
      // }
    },
    { immediate: true }
  );

  return { result, loading, error };
};
