export default {
  amountToken: '{amount} {token}',
  copy: 'Copy',
  connect: 'Connect',
  confirm: 'Confirm',
  subscan: 'Subscan',
  cancel: 'Cancel',
  change: 'Change',
  usd: 'USD',
  'polkadot-js': 'Polkadot.js',
  'polkadot-js-app': 'Polkadot.js App',
  clover: 'Clover',
  mathwallet: 'Math Wallet',
  alert: 'Alert',
  max: 'Max',
  native: 'Native',
  share: 'Share',
  refresh: 'Refresh',
  collection: 'Collection',
  add: 'Add',
  equip: 'Equip',
  unequip: 'Unequip',
  bond: 'Bond',
  addToInventory: 'Add to inventory',
  approve: 'Approve',
  bondDescription:
    'This NFT has not yet been added to the parent NFT\'s inventory. By "Accepting" the NFT to the parent, it will be added to the parent inventory and you will be able to "equip" the child. Please note that it is still under development that the UI is not able to remove the NFT from the inventory at this moment.',
  remove: 'Remove',
  detail: 'Detail',
  parent: 'Parent',
  backToAssets: 'Back to Assets',
  toast: {
    transactionFailed: 'Transaction failed with error: {message}',
    completedHash: 'Completed at block hash #{hash}',
    completedTxHash: 'Completed at transaction hash #{hash}',
    completedMessage: 'You have sent {transferAmt} {symbol} to {toAddress}',
    unableCalculateMsgPayload: 'Unable to calculate the message payload',
    amountMustNotBeZero: 'The amount of token to be transmitted must not be zero',
    copyAddressSuccessfully: 'Copy address success!',
    checkYourTransactions: 'Check your transactions',
    success: 'Success',
    note: 'Note',
    error: 'Error',
    copied: 'Copied',
  },
  links: {
    docs: 'Tutorial',
    aboutInk: 'About ink!',
    aboutAstar: 'About Astar Network',
  },
  common: {
    updateMetadata: 'Update Metadata',
    speed: {
      speed: 'Transaction speed',
      speedTip: 'Transaction speed (Tip)',
      average: 'Average',
      fast: 'Fast',
      superFast: 'Super Fast',
      tipHelp: 'A tip is important to help speed up transactions',
    },
  },
  drawer: {
    endpoint: 'Endpoint',
    viaEndpoint: 'via {value}',
    lightClientWarning: 'Connecting via Light client is in beta. Use at your own risk.',
    shibuyaTakes20mins: 'It might take more than 20 mins to connect to Shibuya via Light client',
    takeLongerTimeToConnect: 'It might take a longer time to load data from chains',
    takeLongerTimeToSend: 'It might take a longer time or fail in sending transactions',
  },
  wallet: {
    connectWallet: 'Connect Wallet',
    select: 'Please select a wallet to connect to this portal',
    math: {
      supportsNetwork: 'Math Wallet supports Shiden network only',
      switchNetwork:
        "Switch your network to 'Shiden' in the Math Wallet extension and refresh this page",
    },
    showBalance: 'Show {token} balance',
  },
  installWallet: {
    getWallet: 'Haven’t got a {value} yet?',
    installWallet:
      "You'll need to install {value} to continue. Once you have it installed, go ahead and refresh this page",
    installExtension: 'Install {value} extension',
    howToConnect: 'Learn how to Connect',
  },
  updateWallet: {
    getUpdatedWallet: 'Haven’t updated {value} yet?',
    updateWallet:
      "You'll need to update {value} to continue. Once you have it updated to the latest version, go ahead and refresh this page",
    updateExtension: 'Update {value} extension',
  },
  assets: {
    transferableBalance: 'Transferable balance',
    hero: {
      rmkable: 'Ink!redible',
      experience: 'NFT technology',
      inAstarWasm: 'on Astar Network',
    },
    attributes: {
      ranking: 'Ranking',
      rarity: 'Rarity',
    },
  },
  child: {
    equippedInventory: 'This NFT is currently equipped.',
    equippedInventoryNotAccepted:
      'This NFT is not bonded to parent yet. Bond the child so you can equip it.',
    unequippedInventory: 'This NFT is currently unequipped and in inventory.',
    parentNotVacant: 'Parent NFT for this item is fully equipped.',
    parentNft: 'Parent NFT #{id}',
  },
  parentPage: {
    modals: {
      acceptChild: 'Bond Child NFT',
      addChildren: 'Add to the inventory',
      addChildrenDescription:
        'This NFTs are equippable with this parents NFT once it is accepted to the inventory.',
      noChildrenToAdd:
        "You don't have any NFTs that can be added to the parent. Mint some tokens first, but please be sure that minted token can be added to this parent.",
    },
  },
  mint: {
    mint: 'Mint',
    storageDeposit: 'Storage deposit',
    storageDepositInfo:
      '* Storage deposit is charged for each call and depends on call length. This is to prevent bloating a chain with unnecessary calls and database entries.',
    gasFee: 'Gas fee',
    dryRunFailed: 'Mint dry run failed, most likely your account balance is insufficient.',
  },
};
