import { $api } from 'src/boot/api';
import { providerEndpoints } from 'src/config/chainEndpoints';
import { ref, watch, computed } from 'vue';

import { useAccount } from 'src/hooks/useAccount';
import { useNetworkInfo } from 'src/hooks/useNetworkInfo';
import { ChildDetail, fetchChildDetails } from 'src/modules/nft';

const initialChildDetail = {
  description: '',
  image: '',
  name: '',
};

export const useChildNft = (partTokenId: string) => {
  const { currentAccount } = useAccount();
  const { currentNetworkIdx } = useNetworkInfo();

  const isFetching = ref<boolean>(true);
  const childDetail = ref<ChildDetail>(initialChildDetail);

  const baseContractAddress = computed<string>(
    () => String(providerEndpoints[Number(currentNetworkIdx.value)].baseContractAddress![0]) || ''
  );

  const partsAddress = computed<string>(() =>
    String(providerEndpoints[Number(currentNetworkIdx.value)].partsAddress)
  );

  const setChildDetail = async (): Promise<void> => {
    try {
      isFetching.value = true;
      const { description, image, name } = await fetchChildDetails({
        api: $api!,
        baseContractAddress: baseContractAddress.value,
        partsAddress: partsAddress.value,
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

  watch([currentAccount, baseContractAddress, partsAddress], setChildDetail, { immediate: false });

  return {
    isFetching,
    childDetail,
  };
};
