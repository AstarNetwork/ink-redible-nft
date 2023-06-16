# RMRK collection building scripts
This folder contains scripts that can be used for RMRK NFT collection building and deployment.
Each collection consists of three smart contracts:
- RMRK contract - main contract holds tokens and enables nesting and equipping other tokens
- Catalog contract - holds info about all parts that can be added to a token.
- Lazy minting contract - enables users to mint tokens.

In `collections` folder you can find samples on how to organize collection files for deployment. More about this topic can be found below in [Collection setup](#collection-setup) chapter.

## Prerequisites
- [Node.js](https://nodejs.org/en) - v18 is recommended
- [Yarn](https://yarnpkg.com/) - npm can be used also (part of Node.js installation)

## Environments setup
Before script execution do the following
- Clone this repo
  ```git clone https://github.com/AstarNetwork/ink-redible-nft.git```
- Change directory
  ```cd scripts```
- Install dependencies with `yarn` or `npm i`
- Update `WSS_ENDPOINT` in [common_api.ts](./common_api.ts) to match endpoint of a chain where you want to deploy your collection (e.g. `wss://rpc.astar.network`)
- Set environment variable with deployer mnemonics. This account will be used for collection deployment
  ```
  export ALICE_KEY='put your account mnemonics here';
  ```
  If you plan to deploy collection to a local node for testing purposes you don't need to set the environment variable since `//Alice` account will be used.

## A collection setup and deployment
1. Create a subfolder under `collections` folder. This folder will contain your collection configurations and assets.
2. Create `assets` and `metadata` sub folders
3. Copy folder with your NFT images to `assets` folder. The folder name must be prefixed with z-order for specific asset. RMRK supports equipping tokens to each other and z order must be specified to know in which order to render multiple NFTs. In the `Starduster` collection sample there is assets folder named `1_body` which means that Stardusters body will be at layer 1, leaving us space to put some other collection behind at layer 0. 
*IMPORTANT. Due to a limitation of the lazy minting contract max number of assets is at this moment limited to 255.*  
4. Upload `assets` folder to IPFS and store IPFS URI somewhere.
5. Define the collection preview image, put it to the collection folder and upload to IPFS
6. Create the collection metadata file named collection.json with the structure below
    ```
    {
      "description": "As old as the universe itself, these Strdusters have transversed the entirety of the galaxy by expelling gas at a freighting force unbeknownst to mankind. What they leave behind is a cloud of strdust, which over time gathers, bonds and transforms into a new Struster. Over the course of their lives and bountiful travels, they are known to not only pick up souvenirs, but also mimic the expressions of the species they encounter.",
      "externalUri": "https://nft.astar.network",
      "name": "Starduster",
      "mediaUri": "ipfs://bafkreiamd2b6vcoue3efetupq32ukekxnbluwiwwzymicqcjcnkuriifga"
    }
    ```
    Update `mediaUri` to match collection preview URI from step 5. Upload the file to IPFS. 

7. Create a file named `configuration.json`, formatting should be like below, just change values according to your needs
    ```
    {
      "contractAddress": "",
      "authorUrl": "https://nft.astar.network",
      "name": "Starduster",
      "description": "As old as the universe itself, these Strdusters have transversed the entirety of the galaxy by expelling gas at a freighting force unbeknownst to mankind. What they leave behind is a cloud of strdust, which over time gathers, bonds and transforms into a new Struster. Over the course of their lives and bountiful travels, they are known to not only pick up souvenirs, but also mimic the expressions of the species they encounter.",
      "symbol": "STD",
      "baseUri": "",
      "collectionMetadataUri": "ipfs://bafkreidwidybo4cx5iwayl2btjh73h4uclanl7pbfufgc6kb7iptsljseu",
      "collectionImagesUri": "ipfs://bafybeihspohvpehtgc2mkpk3jmagoff24kkabsqi4iwamfnaf7rz7r6s3e",
      "maxSupply": 100, 
      "pricePerMint": "1000000000000000000",
      "royaltyReceiverAddress": "XLoLJBQoMPHMLXYhdFobSpH5GujRoUH8d1sUtaEtoBG7zaS",
      "royalty": 1,
      "numberOfEquippableSlots": 4
    }
    ```
    `baseUri` should be empty at this point, `collectionMetadataUri` should match URI from step 6, `collectionImagesUri` should match URI from step 4.
8. Run `yarn create-metadata <path_to_collection>` script to generate NFTs metadata 
    ```
    e.g. yarn create-metadata ./collections/starduster/
    ```
9. Upload `metadata` folder to IPFS and update `baseUri` in `configuration.json`.
10. Run `yarn deploy-collection <path_to_metadata>` to deploy your collection to a blockchain.
    ```
    e.g. yarn deploy-collection  ./collections/starduster/
    ```
11. Repeat steps above for each additional collection you want to deploy
