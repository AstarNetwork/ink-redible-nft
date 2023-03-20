// import { SAMPLE_WALLET_ADDRESS } from './../modules/nft/index';
import { $api } from 'src/boot/api';
import { providerEndpoints } from 'src/config/chainEndpoints';
import { ref, watch, computed } from 'vue';

import { useNetworkInfo } from 'src/hooks/useNetworkInfo';
import { ChildDetail, fetchChildDetails } from 'src/modules/nft';
import { useAccount } from './useAccount';

const initialChildDetail = {
  description: '',
  image: '',
  name: '',
};

export const useChildNft = (parentAddress: string, childAddress: string, partTokenId: string) => {
  const { currentNetworkIdx } = useNetworkInfo();
  const { currentAccount } = useAccount();
  const isFetching = ref<boolean>(true);
  const childDetail = ref<ChildDetail>(initialChildDetail);

  const baseContractAddress = computed<string>(
    () => String(providerEndpoints[Number(currentNetworkIdx.value)].baseContractAddress![0]) || ''
  );

  // const partsAddress = computed<string>(() =>
  //   String(providerEndpoints[Number(currentNetworkIdx.value)].baseContractAddress[0])
  // );
  // const partsAddress = '';

  const setChildDetail = async (): Promise<void> => {
    try {
      isFetching.value = true;
      const { description, image, name } = await fetchChildDetails({
        api: $api!,
        baseContractAddress: parentAddress,
        partsAddress: childAddress,
        walletAddress: currentAccount.value,
        partTokenId,
      });
      childDetail.value = {
        description,
        image,
        name,
      };
    } catch (error) {
      console.error(error);
    } finally {
      isFetching.value = false;
    }
  };

  watch([baseContractAddress], setChildDetail, { immediate: true });

  return {
    isFetching,
    childDetail,
  };
};
