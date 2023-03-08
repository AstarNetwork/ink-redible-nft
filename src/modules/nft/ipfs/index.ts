import * as isIPFS from 'is-ipfs';

const ipfsProviderApiUrl = 'https://nftstorage.link';

export const containsCID = (ipfsUrl?: string | null) => {
  if (typeof ipfsUrl !== 'string') {
    throw new Error('url is not string');
  }
  const splitUrl = ipfsUrl.split(/\/|\?/);
  for (const split of splitUrl) {
    if (isIPFS.cid(split)) {
      return {
        containsCid: true,
        cid: split,
      };
    }
    const splitOnDot = split.split('.')[0];
    if (isIPFS.cid(splitOnDot)) {
      return {
        containsCid: true,
        cid: splitOnDot,
      };
    }
  }

  return {
    containsCid: false,
    cid: '',
  };
};

const convertToDesiredGateway = (ipfsUrl?: string | null, gatewayPrefixProvider?: string) => {
  const results = containsCID(ipfsUrl);
  if (!ipfsUrl || results.containsCid !== true) {
    throw new Error('url does not contain CID');
  }

  const splitUrl = ipfsUrl.split(results.cid);
  //case 1 - the ipfs://cid path
  if (ipfsUrl.includes(`ipfs://${results.cid}`)) {
    return `${gatewayPrefixProvider}/ipfs/${results.cid}${splitUrl[1]}`;
  }

  //case 2 - the /ipfs/cid path (this should cover ipfs://ipfs/cid as well
  if (ipfsUrl.includes(`/ipfs/${results.cid}`)) {
    return `${gatewayPrefixProvider}/ipfs/${results.cid}${splitUrl[1]}`;
  }

  //case 3 - the /ipns/cid path
  if (ipfsUrl.includes(`/ipns/${results.cid}`)) {
    return `${gatewayPrefixProvider}/ipns/${results.cid}${splitUrl[1]}`;
  }

  if (!ipfsUrl.includes('ipfs') && ipfsUrl === results.cid) {
    return `${gatewayPrefixProvider}/ipfs/${results.cid}${splitUrl[1]}`;
  }

  //this is the fallback if no supported patterns are provided
  throw new Error(`unsupported URL pattern: "${ipfsUrl}"`);
};

export const sanitizeIpfsUrl = (ipfsUrl?: string | null) => {
  if (!ipfsUrl || typeof ipfsUrl !== 'string') return '';

  if (ipfsUrl.startsWith('http')) {
    return ipfsUrl.replace('http://', 'https://');
  }

  if (containsCID(ipfsUrl).containsCid) {
    return convertToDesiredGateway(ipfsUrl, ipfsProviderApiUrl);
  }

  return '';
};
