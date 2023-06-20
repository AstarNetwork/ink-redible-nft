import { watch, ref } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useNetworkInfo } from './useNetworkInfo';
import axios from 'axios';

export const useCollectionInfo = () => {
  const { currentNetworkName } = useNetworkInfo();

  // useQuery is not working with variables, just sending empty object in request.
  // TODO investigate a bit more.
  // const { result, loading, error, refetch } = useQuery(
  //   gql`
  //     query CommentsByContract {
  //       posts(
  //         where: {
  //           rootPost: {
  //             space: { id_eq: "11453" }
  //             hidden_not_eq: true
  //             tagsOriginal_containsInsensitive: "${
  //               currentNetworkName.value === '' ? 'unknown' : currentNetworkName.value
  //             }"
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
  //   `,
  //   { fetchPolicy: 'no-cache' }
  // );

  // const { result, loading, error, refetch } = useQuery(
  //   gql`
  //     query CommentsByContract($networkName: String!) {
  //       posts(
  //         where: {
  //           rootPost: {
  //             space: { id_eq: "11453" }
  //             hidden_not_eq: true
  //             tagsOriginal_containsInsensitive: $networkName
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
  //   `,
  //   { variables: { $networkName: 'Astar' } }
  // );

  const result = ref<any>([]);
  const loading = ref<boolean>(false);
  const error = ref<any>(null);

  const URL = 'https://squid.subsquid.io/subsocial/graphql';

  const fetchInfo = async (query: string): Promise<void> => {
    error.value = null;
    loading.value = true;
    try {
      const apiResult = await axios.post(URL, {
        query,
      });
      result.value = apiResult.data.data;
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  };

  watch(
    currentNetworkName,
    () => {
      if (currentNetworkName.value !== '') {
        const query = `
          query CommentsByContract {
            posts(
              where: {
                rootPost: {
                  space: { id_eq: "11453" }
                  hidden_not_eq: true
                  tagsOriginal_containsInsensitive: "${currentNetworkName.value}"
                }
              }, orderBy: id_ASC
            ) {
              id
              image
              title
              canonical
              body
            }
          }
        `;
        fetchInfo(query);
      }
    },
    { immediate: true }
  );

  return { result, loading, error };
};
