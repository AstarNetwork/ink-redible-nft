export const rmrkAbi = {
  source: {
    hash: '0x507d3c28ee04b24df713903c5fd534835123435279120e3519f278eb2b2cfaa7',
    language: 'ink! 4.0.1',
    compiler: 'rustc 1.69.0-nightly',
    build_info: {
      build_mode: 'Release',
      cargo_contract_version: '2.0.1',
      rust_toolchain: 'nightly-aarch64-apple-darwin',
      wasm_opt_settings: {
        keep_debug_symbols: false,
        optimization_passes: 'Z',
      },
    },
  },
  contract: {
    name: 'rmrk_equippable',
    version: '0.6.0',
    authors: ['Stake Technologies <devops@stake.co.jp>'],
  },
  spec: {
    constructors: [
      {
        args: [
          {
            label: 'name',
            type: {
              displayName: ['String'],
              type: 8,
            },
          },
          {
            label: 'symbol',
            type: {
              displayName: ['String'],
              type: 8,
            },
          },
          {
            label: 'base_uri',
            type: {
              displayName: ['String'],
              type: 8,
            },
          },
          {
            label: 'max_supply',
            type: {
              displayName: ['u64'],
              type: 6,
            },
          },
          {
            label: 'price_per_mint',
            type: {
              displayName: ['Balance'],
              type: 7,
            },
          },
          {
            label: 'collection_metadata',
            type: {
              displayName: ['String'],
              type: 8,
            },
          },
          {
            label: '_royalty_receiver',
            type: {
              displayName: ['AccountId'],
              type: 0,
            },
          },
          {
            label: '_royalty',
            type: {
              displayName: ['u8'],
              type: 2,
            },
          },
        ],
        docs: ['Instantiate new RMRK contract'],
        label: 'new',
        payable: false,
        returnType: {
          displayName: ['ink_primitives', 'ConstructorResult'],
          type: 15,
        },
        selector: '0x9bae9d5e',
      },
    ],
    docs: [],
    events: [
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: 'from',
            type: {
              displayName: ['Option'],
              type: 25,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'to',
            type: {
              displayName: ['Option'],
              type: 25,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'id',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
        ],
        docs: [' Event emitted when a token transfer occurs.'],
        label: 'Transfer',
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: 'from',
            type: {
              displayName: ['AccountId'],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'to',
            type: {
              displayName: ['AccountId'],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'id',
            type: {
              displayName: ['Option'],
              type: 17,
            },
          },
          {
            docs: [],
            indexed: false,
            label: 'approved',
            type: {
              displayName: ['bool'],
              type: 14,
            },
          },
        ],
        docs: [' Event emitted when a token approve occurs.'],
        label: 'Approval',
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: 'to',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'collection',
            type: {
              displayName: ['AccountId'],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'child',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
        ],
        docs: [' Event emitted when a new child is added.'],
        label: 'ChildAdded',
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: 'parent',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'collection',
            type: {
              displayName: ['AccountId'],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'child',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
        ],
        docs: [' Event emitted when a child is accepted.'],
        label: 'ChildAccepted',
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: 'parent',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'child_collection',
            type: {
              displayName: ['AccountId'],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'child_token_id',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
        ],
        docs: [' Event emitted when a child is removed.'],
        label: 'ChildRemoved',
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: 'parent',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'child_collection',
            type: {
              displayName: ['AccountId'],
              type: 0,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'child_token_id',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
        ],
        docs: [' Event emitted when a child is rejected.'],
        label: 'ChildRejected',
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: 'asset',
            type: {
              displayName: ['AssetId'],
              type: 5,
            },
          },
        ],
        docs: [' Event emitted when new asset is set for the collection.'],
        label: 'AssetSet',
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: 'token',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'asset',
            type: {
              displayName: ['AssetId'],
              type: 5,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'replaces',
            type: {
              displayName: ['Option'],
              type: 54,
            },
          },
        ],
        docs: [' Event emitted when the asset is added to the token.'],
        label: 'AssetAddedToToken',
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: 'token',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'asset',
            type: {
              displayName: ['AssetId'],
              type: 5,
            },
          },
        ],
        docs: [' Event emitted when the asset is accepted.'],
        label: 'AssetAccepted',
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: 'token',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'asset',
            type: {
              displayName: ['AssetId'],
              type: 5,
            },
          },
        ],
        docs: [' Event emitted when the asset is rejected.'],
        label: 'AssetRejected',
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: 'token',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'asset',
            type: {
              displayName: ['AssetId'],
              type: 5,
            },
          },
        ],
        docs: [' Event emitted when the asset is removed.'],
        label: 'AssetRemoved',
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: 'token',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'priorities',
            type: {
              displayName: ['Vec'],
              type: 12,
            },
          },
        ],
        docs: [' Event emitted when the asset is removed.'],
        label: 'AssetPrioritySet',
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: 'token',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'asset',
            type: {
              displayName: ['AssetId'],
              type: 5,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'child',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'child_asset',
            type: {
              displayName: ['AssetId'],
              type: 5,
            },
          },
        ],
        docs: [' Event emitted when the asset is equipped.'],
        label: 'AssetEquipped',
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: 'token',
            type: {
              displayName: ['Id'],
              type: 11,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'asset',
            type: {
              displayName: ['AssetId'],
              type: 5,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'slot',
            type: {
              displayName: ['SlotId'],
              type: 5,
            },
          },
        ],
        docs: [' Event emitted when the asset is un-equipped.'],
        label: 'AssetUnEquipped',
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: 'group',
            type: {
              displayName: ['EquippableGroupId'],
              type: 5,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'slot',
            type: {
              displayName: ['SlotId'],
              type: 5,
            },
          },
          {
            docs: [],
            indexed: true,
            label: 'parent',
            type: {
              displayName: ['AccountId'],
              type: 0,
            },
          },
        ],
        docs: [
          ' Used to notify listeners that the assets belonging to a `equippableGroupId` have been marked as',
          ' equippable into a given slot and parent',
        ],
        label: 'ParentEquippableGroupSet',
      },
    ],
    lang_error: {
      displayName: ['ink', 'LangError'],
      type: 16,
    },
    messages: [
      {
        args: [
          {
            label: 'operator',
            type: {
              displayName: ['psp34_external', 'ApproveInput1'],
              type: 0,
            },
          },
          {
            label: 'id',
            type: {
              displayName: ['psp34_external', 'ApproveInput2'],
              type: 17,
            },
          },
          {
            label: 'approved',
            type: {
              displayName: ['psp34_external', 'ApproveInput3'],
              type: 14,
            },
          },
        ],
        docs: [
          " Approves `operator` to withdraw the `id` token from the caller's account.",
          ' If `id` is `None` approves or disapproves the operator for all tokens of the caller.',
          '',
          ' On success a `Approval` event is emitted.',
          '',
          ' # Errors',
          '',
          ' Returns `SelfApprove` error if it is self approve.',
          '',
          ' Returns `NotApproved` error if caller is not owner of `id`.',
        ],
        label: 'PSP34::approve',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 18,
        },
        selector: '0x1932a8b0',
      },
      {
        args: [
          {
            label: 'owner',
            type: {
              displayName: ['psp34_external', 'AllowanceInput1'],
              type: 0,
            },
          },
          {
            label: 'operator',
            type: {
              displayName: ['psp34_external', 'AllowanceInput2'],
              type: 0,
            },
          },
          {
            label: 'id',
            type: {
              displayName: ['psp34_external', 'AllowanceInput3'],
              type: 17,
            },
          },
        ],
        docs: [
          ' Returns `true` if the operator is approved by the owner to withdraw `id` token.',
          " If `id` is `None`, returns `true` if the operator is approved to withdraw all owner's tokens.",
        ],
        label: 'PSP34::allowance',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 21,
        },
        selector: '0x4790f55a',
      },
      {
        args: [
          {
            label: 'to',
            type: {
              displayName: ['psp34_external', 'TransferInput1'],
              type: 0,
            },
          },
          {
            label: 'id',
            type: {
              displayName: ['psp34_external', 'TransferInput2'],
              type: 11,
            },
          },
          {
            label: 'data',
            type: {
              displayName: ['psp34_external', 'TransferInput3'],
              type: 8,
            },
          },
        ],
        docs: [
          ' Transfer approved or owned token from caller.',
          '',
          ' On success a `Transfer` event is emitted.',
          '',
          ' # Errors',
          '',
          ' Returns `TokenNotExists` error if `id` does not exist.',
          '',
          " Returns `NotApproved` error if `from` doesn't have allowance for transferring.",
          '',
          " Returns `SafeTransferCheckFailed` error if `to` doesn't accept transfer.",
        ],
        label: 'PSP34::transfer',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 18,
        },
        selector: '0x3128d61b',
      },
      {
        args: [],
        docs: [
          ' Returns the collection `Id` of the NFT token.',
          '',
          ' This can represents the relationship between tokens/contracts/pallets.',
        ],
        label: 'PSP34::collection_id',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 22,
        },
        selector: '0xffa27a5f',
      },
      {
        args: [],
        docs: [' Returns current NFT total supply.'],
        label: 'PSP34::total_supply',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 23,
        },
        selector: '0x628413fe',
      },
      {
        args: [
          {
            label: 'id',
            type: {
              displayName: ['psp34_external', 'OwnerOfInput1'],
              type: 11,
            },
          },
        ],
        docs: [' Returns the owner of the token if any.'],
        label: 'PSP34::owner_of',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 24,
        },
        selector: '0x1168624d',
      },
      {
        args: [
          {
            label: 'owner',
            type: {
              displayName: ['psp34_external', 'BalanceOfInput1'],
              type: 0,
            },
          },
        ],
        docs: [
          ' Returns the balance of the owner.',
          '',
          ' This represents the amount of unique tokens the owner has.',
        ],
        label: 'PSP34::balance_of',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 26,
        },
        selector: '0xcde7e55f',
      },
      {
        args: [
          {
            label: 'role',
            type: {
              displayName: ['accesscontrol_external', 'RevokeRoleInput1'],
              type: 5,
            },
          },
          {
            label: 'account',
            type: {
              displayName: ['accesscontrol_external', 'RevokeRoleInput2'],
              type: 0,
            },
          },
        ],
        docs: [
          ' Revokes `role` from `account`.',
          '',
          ' On success a `RoleRevoked` event is emitted.',
          '',
          ' # Errors',
          '',
          " Returns with `MissingRole` error if caller can't grant the `role` or if `account` doesn't have `role`.",
        ],
        label: 'AccessControl::revoke_role',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 27,
        },
        selector: '0x6e4f0991',
      },
      {
        args: [
          {
            label: 'role',
            type: {
              displayName: ['accesscontrol_external', 'HasRoleInput1'],
              type: 5,
            },
          },
          {
            label: 'address',
            type: {
              displayName: ['accesscontrol_external', 'HasRoleInput2'],
              type: 0,
            },
          },
        ],
        docs: [' Returns `true` if `account` has been granted `role`.'],
        label: 'AccessControl::has_role',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 21,
        },
        selector: '0xc1d9ac18',
      },
      {
        args: [
          {
            label: 'role',
            type: {
              displayName: ['accesscontrol_external', 'GrantRoleInput1'],
              type: 5,
            },
          },
          {
            label: 'account',
            type: {
              displayName: ['accesscontrol_external', 'GrantRoleInput2'],
              type: 0,
            },
          },
        ],
        docs: [
          ' Grants `role` to `account`.',
          '',
          ' On success a `RoleGranted` event is emitted.',
          '',
          ' # Errors',
          '',
          " Returns with `MissingRole` error if caller can't grant the role.",
          ' Returns with `RoleRedundant` error `account` has `role`.',
        ],
        label: 'AccessControl::grant_role',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 27,
        },
        selector: '0x4ac062fd',
      },
      {
        args: [
          {
            label: 'role',
            type: {
              displayName: ['accesscontrol_external', 'RenounceRoleInput1'],
              type: 5,
            },
          },
          {
            label: 'account',
            type: {
              displayName: ['accesscontrol_external', 'RenounceRoleInput2'],
              type: 0,
            },
          },
        ],
        docs: [
          ' Revokes `role` from the calling account.',
          " Roles are often managed via `grant_role` and `revoke_role`: this function's",
          ' purpose is to provide a mechanism for accounts to lose their privileges',
          ' if they are compromised (such as when a trusted device is misplaced).',
          '',
          ' On success a `RoleRevoked` event is emitted.',
          '',
          ' # Errors',
          '',
          ' Returns with `InvalidCaller` error if caller is not `account`.',
          " Returns with `MissingRole` error if `account` doesn't have `role`.",
        ],
        label: 'AccessControl::renounce_role',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 27,
        },
        selector: '0xeaf1248a',
      },
      {
        args: [
          {
            label: 'role',
            type: {
              displayName: ['accesscontrol_external', 'GetRoleAdminInput1'],
              type: 5,
            },
          },
        ],
        docs: [' Returns the admin role that controls `role`. See `grant_role` and `revoke_role`.'],
        label: 'AccessControl::get_role_admin',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 26,
        },
        selector: '0x83da3bb2',
      },
      {
        args: [
          {
            label: 'id',
            type: {
              displayName: ['psp34metadata_external', 'GetAttributeInput1'],
              type: 11,
            },
          },
          {
            label: 'key',
            type: {
              displayName: ['psp34metadata_external', 'GetAttributeInput2'],
              type: 8,
            },
          },
        ],
        docs: [
          ' Returns the attribute of `id` for the given `key`.',
          '',
          ' If `id` is a collection id of the token, it returns attributes for collection.',
        ],
        label: 'PSP34Metadata::get_attribute',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 30,
        },
        selector: '0xf19d48d1',
      },
      {
        args: [
          {
            label: 'index',
            type: {
              displayName: ['psp34enumerable_external', 'TokenByIndexInput1'],
              type: 7,
            },
          },
        ],
        docs: [
          ' Returns a token `Id` at a given `index` of all the tokens stored by the contract.',
          ' Use along with `total_supply` to enumerate all tokens.',
          '',
          ' The start index is zero.',
        ],
        label: 'PSP34Enumerable::token_by_index',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 32,
        },
        selector: '0xcd0340d0',
      },
      {
        args: [
          {
            label: 'owner',
            type: {
              displayName: ['psp34enumerable_external', 'OwnersTokenByIndexInput1'],
              type: 0,
            },
          },
          {
            label: 'index',
            type: {
              displayName: ['psp34enumerable_external', 'OwnersTokenByIndexInput2'],
              type: 7,
            },
          },
        ],
        docs: [
          ' Returns a token `Id` owned by `owner` at a given `index` of its token list.',
          " Use along with `balance_of` to enumerate all of ``owner``'s tokens.",
          '',
          ' The start index is zero.',
        ],
        label: 'PSP34Enumerable::owners_token_by_index',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 32,
        },
        selector: '0x3bcfb511',
      },
      {
        args: [
          {
            label: 'token_id',
            type: {
              displayName: ['mintinglazy_external', 'TokenUriInput1'],
              type: 6,
            },
          },
        ],
        docs: [' Get URI for the token Id.'],
        label: 'MintingLazy::token_uri',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 34,
        },
        selector: '0x6e261b6b',
      },
      {
        args: [],
        docs: [' Get max supply of tokens.'],
        label: 'MintingLazy::max_supply',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 40,
        },
        selector: '0x72dad7d9',
      },
      {
        args: [
          {
            label: 'mint_amount',
            type: {
              displayName: ['mintinglazy_external', 'MintManyInput1'],
              type: 6,
            },
          },
        ],
        docs: [' Purchas many tokens.'],
        label: 'MintingLazy::mint_many',
        mutates: true,
        payable: true,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0x4d3049bb',
      },
      {
        args: [],
        docs: [' Purchase one token.'],
        label: 'MintingLazy::mint',
        mutates: true,
        payable: true,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0x10ca10eb',
      },
      {
        args: [],
        docs: [' Get token mint price.'],
        label: 'MintingLazy::price',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 23,
        },
        selector: '0x65cb6c32',
      },
      {
        args: [
          {
            label: 'to',
            type: {
              displayName: ['minting_external', 'MintManyInput1'],
              type: 0,
            },
          },
          {
            label: 'mint_amount',
            type: {
              displayName: ['minting_external', 'MintManyInput2'],
              type: 6,
            },
          },
        ],
        docs: [' Mint many to specified account.'],
        label: 'Minting::mint_many',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 43,
        },
        selector: '0xeee448dc',
      },
      {
        args: [],
        docs: [' Get max supply of tokens.'],
        label: 'Minting::max_supply',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 40,
        },
        selector: '0xf38e35bf',
      },
      {
        args: [
          {
            label: 'token_id',
            type: {
              displayName: ['minting_external', 'TokenUriInput1'],
              type: 6,
            },
          },
        ],
        docs: [' Get URI for the token Id.'],
        label: 'Minting::token_uri',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 34,
        },
        selector: '0x7136140d',
      },
      {
        args: [
          {
            label: 'token_id',
            type: {
              displayName: ['minting_external', 'AssignMetadataInput1'],
              type: 11,
            },
          },
          {
            label: 'metadata',
            type: {
              displayName: ['minting_external', 'AssignMetadataInput2'],
              type: 8,
            },
          },
        ],
        docs: [' Assign metadata to specified token.'],
        label: 'Minting::assign_metadata',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0x6893d91b',
      },
      {
        args: [
          {
            label: 'to',
            type: {
              displayName: ['minting_external', 'MintInput1'],
              type: 0,
            },
          },
        ],
        docs: [' Mint one or more tokens.'],
        label: 'Minting::mint',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 46,
        },
        selector: '0x0f8c5089',
      },
      {
        args: [
          {
            label: 'parent_token_id',
            type: {
              displayName: ['nesting_external', 'AddChildInput1'],
              type: 11,
            },
          },
          {
            label: 'child_nft',
            type: {
              displayName: ['nesting_external', 'AddChildInput2'],
              type: 10,
            },
          },
        ],
        docs: [
          ' Add a child NFT (from different collection) to the NFT in this collection.',
          ' The status of the added child is `Pending` if caller is not owner of child NFT',
          ' The status of the added child is `Accepted` if caller is is owner of child NFT',
          ' The caller needs not to be the owner of the to_parent_token_id, but',
          ' Caller must be owner of the child NFT,',
          ' in order to perform transfer() ownership of the child nft to to_parent_token_id.',
          '',
          ' # Requirements:',
          ' * `child_contract_address` needs to be added by collecion owner',
          ' * `to_parent_token_id` must exist.',
          ' * `child_token_id` must exist.',
          ' * There cannot be two identical children.',
          '',
          ' # Arguments:',
          ' * `to_parent_token_id`: is the tokenId of the parent NFT. The receiver of child.',
          ' * `child_nft`: (collection_id, token_id) of the child instance.',
          '',
          ' # Result:',
          ' Ownership of child NFT will be transferred to this contract (cross contract call)',
          ' On success emitts `RmrkEvent::ChildAdded`',
          ' On success emitts `RmrkEvent::ChildAccepted` - only if caller is already owner of child NFT',
        ],
        label: 'Nesting::add_child',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0x1d6f5156',
      },
      {
        args: [
          {
            label: 'parent_token_id',
            type: {
              displayName: ['nesting_external', 'AcceptChildInput1'],
              type: 11,
            },
          },
          {
            label: 'child_nft',
            type: {
              displayName: ['nesting_external', 'AcceptChildInput2'],
              type: 10,
            },
          },
        ],
        docs: [
          ' Accept a child NFT (from different collection) to be owned by parent token.',
          '',
          ' # Requirements:',
          ' * The status of the child is `Pending`',
          '',
          ' # Arguments:',
          ' * `parent_token_id`: is the tokenId of the parent NFT.',
          ' * `child_nft`: (collection_id, token_id) of the child instance.',
          '',
          ' # Result:',
          ' Child Nft is moved from pending to accepted',
          ' On success emitts `RmrkEvent::ChildAccepted`',
        ],
        label: 'Nesting::accept_child',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0x3b3e2643',
      },
      {
        args: [
          {
            label: 'parent_token_id',
            type: {
              displayName: ['nesting_external', 'GetAcceptedChildrenInput1'],
              type: 11,
            },
          },
        ],
        docs: [' Get all accepted children for parent token_id'],
        label: 'Nesting::get_accepted_children',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 48,
        },
        selector: '0xf53f1229',
      },
      {
        args: [
          {
            label: 'parent_token_id',
            type: {
              displayName: ['nesting_external', 'ChildrenBalanceInput1'],
              type: 11,
            },
          },
        ],
        docs: [
          ' Read the number of children on the parent token.',
          ' # Arguments:',
          ' * `parent_token_id`: parent tokenId to check',
          '',
          ' # Result:',
          ' Returns the tupple of `(accepted_children, pending_children)` count',
        ],
        label: 'Nesting::children_balance',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 49,
        },
        selector: '0x2348106c',
      },
      {
        args: [
          {
            label: 'parent_token_id',
            type: {
              displayName: ['nesting_external', 'RemoveChildInput1'],
              type: 11,
            },
          },
          {
            label: 'child_nft',
            type: {
              displayName: ['nesting_external', 'RemoveChildInput2'],
              type: 10,
            },
          },
        ],
        docs: [
          ' Remove a child NFT (from different collection) from token_id in this collection.',
          ' The status of added child is `Pending` if caller is not owner of child NFT',
          ' The status of added child is `Accepted` if caller is is owner of child NFT',
          '',
          ' # Requirements:',
          ' * The status of the child is `Accepted`',
          '',
          ' # Arguments:',
          ' * `parent_token_id`: is the tokenId of the parent NFT.',
          ' * `child_nft`: (collection_id, token_id) of the child instance.',
          '',
          ' # Result:',
          ' Ownership of child NFT will be transferred to parent NFT owner (cross contract call)',
          ' On success emitts `RmrkEvent::ChildRemoved`',
        ],
        label: 'Nesting::remove_child',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0x27e7420e',
      },
      {
        args: [
          {
            label: 'parent_token_id',
            type: {
              displayName: ['nesting_external', 'RejectChildInput1'],
              type: 11,
            },
          },
          {
            label: 'child_nft',
            type: {
              displayName: ['nesting_external', 'RejectChildInput2'],
              type: 10,
            },
          },
        ],
        docs: [
          ' Reject a child NFT (from different collection).',
          '',
          ' # Requirements:',
          ' * The status of the child is `Pending`',
          '',
          ' # Arguments:',
          ' * `parent_token_id`: is the tokenId of the parent NFT.',
          ' * `child_nft`: (collection_id, token_id) of the child instance.',
          '',
          ' # Result:',
          ' Child Nft is removed from pending',
          ' On success emitts `RmrkEvent::ChildRejected`',
        ],
        label: 'Nesting::reject_child',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0xdd308ed4',
      },
      {
        args: [
          {
            label: 'from',
            type: {
              displayName: ['nesting_external', 'TransferChildInput1'],
              type: 11,
            },
          },
          {
            label: 'to',
            type: {
              displayName: ['nesting_external', 'TransferChildInput2'],
              type: 11,
            },
          },
          {
            label: 'child_nft',
            type: {
              displayName: ['nesting_external', 'TransferChildInput3'],
              type: 10,
            },
          },
        ],
        docs: [
          ' Transfer the child NFT from one parent to another (in this collection).',
          '',
          ' # Requirements:',
          ' * The status of the child is `Accepted`',
          '',
          ' # Arguments:',
          ' * `current_parent`: current parent tokenId which holds child nft',
          ' * `new_parent`: new parent tokenId which will hold child nft',
          ' * `child_nft`: (collection_id, token_id) of the child instance.',
          '',
          ' # Result:',
          ' Ownership of child NFT will be transferred to this contract (cross contract call)',
          ' On success emitts `RmrkEvent::ChildAdded`',
          ' On success emitts `RmrkEvent::ChildAccepted` - only if caller is already owner of child NFT',
        ],
        label: 'Nesting::transfer_child',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0xdb43324e',
      },
      {
        args: [
          {
            label: 'parent_token_id',
            type: {
              displayName: ['nesting_external', 'GetPendingChildrenInput1'],
              type: 11,
            },
          },
        ],
        docs: [' Get all pending children for parent token_id'],
        label: 'Nesting::get_pending_children',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 48,
        },
        selector: '0x99587ec1',
      },
      {
        args: [
          {
            label: 'asset_id',
            type: {
              displayName: ['multiasset_external', 'GetAssetUriInput1'],
              type: 5,
            },
          },
        ],
        docs: [" Used to retrieve asset's uri"],
        label: 'MultiAsset::get_asset_uri',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 30,
        },
        selector: '0xb677b85c',
      },
      {
        args: [
          {
            label: 'token_id',
            type: {
              displayName: ['multiasset_external', 'TotalTokenAssetsInput1'],
              type: 11,
            },
          },
        ],
        docs: [' Used to retrieve the total number of assets per token'],
        label: 'MultiAsset::total_token_assets',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 49,
        },
        selector: '0x525922a3',
      },
      {
        args: [
          {
            label: 'token_id',
            type: {
              displayName: ['multiasset_external', 'GetAcceptedTokenAssetsInput1'],
              type: 11,
            },
          },
        ],
        docs: [' Fetch all accepted assets for the token_id'],
        label: 'MultiAsset::get_accepted_token_assets',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 52,
        },
        selector: '0x765ef0e3',
      },
      {
        args: [
          {
            label: 'token_id',
            type: {
              displayName: ['multiasset_external', 'SetPriorityInput1'],
              type: 11,
            },
          },
          {
            label: 'priorities',
            type: {
              displayName: ['multiasset_external', 'SetPriorityInput2'],
              type: 12,
            },
          },
        ],
        docs: [
          " Used to specify the priorities for a given token's active assets.",
          " If the length of the priorities array doesn't match the length of the active assets array, the execution",
          '  will be reverted.',
          ' The position of the priority value in the array corresponds the position of the asset in the active',
          '  assets array it will be applied to.',
          ' # Arguments',
          '  * tokenId ID of the token for which the priorities are being set',
          '  * priorities Array of priorities for the assets',
          ' Emits a {AssetPrioritySet} event.',
        ],
        label: 'MultiAsset::set_priority',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0x1fde0ead',
      },
      {
        args: [
          {
            label: 'id',
            type: {
              displayName: ['multiasset_external', 'AddAssetEntryInput1'],
              type: 5,
            },
          },
          {
            label: 'equippable_group_id',
            type: {
              displayName: ['multiasset_external', 'AddAssetEntryInput2'],
              type: 5,
            },
          },
          {
            label: 'asset_uri',
            type: {
              displayName: ['multiasset_external', 'AddAssetEntryInput3'],
              type: 8,
            },
          },
          {
            label: 'part_ids',
            type: {
              displayName: ['multiasset_external', 'AddAssetEntryInput4'],
              type: 12,
            },
          },
        ],
        docs: [
          ' Used to add a asset entry.',
          ' The ID of the asset is automatically assigned to be the next available asset ID.',
          ' # Arguments',
          '  * `asset_uri` Uri for the new asset',
          ' Emits an {AssetSet} event.',
        ],
        label: 'MultiAsset::add_asset_entry',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0x5427f3c0',
      },
      {
        args: [
          {
            label: 'token_id',
            type: {
              displayName: ['multiasset_external', 'AddAssetToTokenInput1'],
              type: 11,
            },
          },
          {
            label: 'asset_id',
            type: {
              displayName: ['multiasset_external', 'AddAssetToTokenInput2'],
              type: 5,
            },
          },
          {
            label: 'replaces_asset_with_id',
            type: {
              displayName: ['multiasset_external', 'AddAssetToTokenInput3'],
              type: 54,
            },
          },
        ],
        docs: [
          ' Used to add an asset to a token.',
          ' If the given asset is already added to the token, the execution will be reverted.',
          ' If the asset ID is invalid, the execution will be reverted.',
          ' If the token already has the maximum amount of pending assets (128), the execution will be',
          ' reverted.',
          ' If the asset is being added by the current root owner of the token, the asset will be automatically',
          ' accepted.',
          ' # Arguments',
          '  * tokenId ID of the token to add the asset to',
          '  * assetId ID of the asset to add to the token',
          "  * replacesAssetWithId ID of the asset to replace from the token's list of active assets",
          ' Emits an {AssetAddedToToken} event.',
        ],
        label: 'MultiAsset::add_asset_to_token',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0xe893e17a',
      },
      {
        args: [
          {
            label: 'token_id',
            type: {
              displayName: ['multiasset_external', 'AcceptAssetInput1'],
              type: 11,
            },
          },
          {
            label: 'asset_id',
            type: {
              displayName: ['multiasset_external', 'AcceptAssetInput2'],
              type: 5,
            },
          },
        ],
        docs: [
          ' Accepts an asset at from the pending array of given token.',
          " Migrates the asset from the token's pending asset array to the token's active asset array.",
          ' Active assets cannot be removed by anyone, but can be replaced by a new asset.',
          ' # Requirements:',
          "  * The caller must own the token or be approved to manage the token's assets",
          '  * `tokenId` must exist.',
          '  * `assetId` must be in the pending_asset list.',
          ' # Arguments',
          '  * tokenId ID of the token for which to accept the pending asset',
          '  * assetId ID of the asset expected to be in the pending_asset list.',
          ' Emits an {AssetAccepted} event.',
        ],
        label: 'MultiAsset::accept_asset',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0xdc2df4e5',
      },
      {
        args: [
          {
            label: 'token_id',
            type: {
              displayName: ['multiasset_external', 'GetPendingTokenAssetsInput1'],
              type: 11,
            },
          },
        ],
        docs: [' Fetch all pending assets for the token_id'],
        label: 'MultiAsset::get_pending_token_assets',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 52,
        },
        selector: '0x802a8006',
      },
      {
        args: [
          {
            label: 'token_id',
            type: {
              displayName: ['multiasset_external', 'RejectAssetInput1'],
              type: 11,
            },
          },
          {
            label: 'asset_id',
            type: {
              displayName: ['multiasset_external', 'RejectAssetInput2'],
              type: 5,
            },
          },
        ],
        docs: [
          ' Rejects an asset from the pending array of given token.',
          " Removes the asset from the token's pending asset array.",
          ' # Requirements:',
          "  * The caller must own the token or be approved to manage the token's assets",
          '  * `tokenId` must exist.',
          '  * `assetId` must be in the pending_asset list.',
          ' # Arguments',
          '  * tokenId ID of the token for which to accept the pending asset',
          '  * assetId ID of the asset expected to be in the pending_asset list.',
          ' Emits a {AssetRejected} event.',
        ],
        label: 'MultiAsset::reject_asset',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0xb3e25a89',
      },
      {
        args: [],
        docs: [
          ' Used to retrieve the total number of assets.',
          ' # Returns',
          '  * u64 The total number of assets',
        ],
        label: 'MultiAsset::total_assets',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 26,
        },
        selector: '0x9b26f6d8',
      },
      {
        args: [
          {
            label: 'token_id',
            type: {
              displayName: ['multiasset_external', 'RemoveAssetInput1'],
              type: 11,
            },
          },
          {
            label: 'asset_id',
            type: {
              displayName: ['multiasset_external', 'RemoveAssetInput2'],
              type: 5,
            },
          },
        ],
        docs: [' Remove the assets for the list of token assets'],
        label: 'MultiAsset::remove_asset',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0xfdbda22c',
      },
      {
        args: [
          {
            label: 'asset_id',
            type: {
              displayName: ['multiasset_external', 'GetAssetInput1'],
              type: 5,
            },
          },
        ],
        docs: [' Used to retrieve asset'],
        label: 'MultiAsset::get_asset',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 55,
        },
        selector: '0x4b8e4838',
      },
      {
        args: [
          {
            label: 'part_id',
            type: {
              displayName: ['base_external', 'GetPartInput1'],
              type: 5,
            },
          },
        ],
        docs: [' Get the part details for the given PartId.'],
        label: 'Base::get_part',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 58,
        },
        selector: '0x4adb5884',
      },
      {
        args: [
          {
            label: 'part_id',
            type: {
              displayName: ['base_external', 'EnsureEquippableInput1'],
              type: 5,
            },
          },
          {
            label: 'target_address',
            type: {
              displayName: ['base_external', 'EnsureEquippableInput2'],
              type: 0,
            },
          },
        ],
        docs: [' Check whether the given address is allowed to equip the desired `PartId`.'],
        label: 'Base::ensure_equippable',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0x00b95e48',
      },
      {
        args: [],
        docs: [' Get the list of all parts.'],
        label: 'Base::get_parts_count',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 26,
        },
        selector: '0x0ae71607',
      },
      {
        args: [
          {
            label: 'base_metadata',
            type: {
              displayName: ['base_external', 'SetupBaseInput1'],
              type: 8,
            },
          },
        ],
        docs: [],
        label: 'Base::setup_base',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0xcd5b2ca6',
      },
      {
        args: [
          {
            label: 'part_id',
            type: {
              displayName: ['base_external', 'IsEquippableByAllInput1'],
              type: 5,
            },
          },
        ],
        docs: [' Checks if the given `PartId` can be equipped by any collection'],
        label: 'Base::is_equippable_by_all',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 21,
        },
        selector: '0xc51b3205',
      },
      {
        args: [
          {
            label: 'part_id',
            type: {
              displayName: ['base_external', 'AddEquippableAddressesInput1'],
              type: 5,
            },
          },
          {
            label: 'equippable_address',
            type: {
              displayName: ['base_external', 'AddEquippableAddressesInput2'],
              type: 13,
            },
          },
        ],
        docs: [' Add collection address(es) that can be used to equip given `PartId`.'],
        label: 'Base::add_equippable_addresses',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0x676b2b0e',
      },
      {
        args: [
          {
            label: 'part_id',
            type: {
              displayName: ['base_external', 'ResetEquippableAddressesInput1'],
              type: 5,
            },
          },
        ],
        docs: [' Remove list of equippable addresses for given Part'],
        label: 'Base::reset_equippable_addresses',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0xa1771d47',
      },
      {
        args: [],
        docs: [],
        label: 'Base::get_base_metadata',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 62,
        },
        selector: '0xef4c0817',
      },
      {
        args: [
          {
            label: 'parts',
            type: {
              displayName: ['base_external', 'AddPartListInput1'],
              type: 63,
            },
          },
        ],
        docs: [' Add one or more parts to the base'],
        label: 'Base::add_part_list',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0xa69bb397',
      },
      {
        args: [
          {
            label: 'part_id',
            type: {
              displayName: ['base_external', 'SetEquippableByAllInput1'],
              type: 5,
            },
          },
        ],
        docs: [
          ' Sets the is_equippable_by_all flag to true, meaning that any collection may be equipped into the `PartId`',
        ],
        label: 'Base::set_equippable_by_all',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0xf02dfddf',
      },
      {
        args: [
          {
            label: 'token_id',
            type: {
              displayName: ['equippable_external', 'GetEquipmentInput1'],
              type: 11,
            },
          },
          {
            label: 'slot_part_id',
            type: {
              displayName: ['equippable_external', 'GetEquipmentInput2'],
              type: 5,
            },
          },
        ],
        docs: [
          ' Used to extend already added Asset with details needed to support equipping.',
          ' These details are not present in MultiAsset trait to avoid dependencies on Equippable trait.',
          ' # Arguments:',
          '  * `asset_id` ID of the asset being extended',
          '  * `equippableGroupId` ID of the equippable group',
          '  * `partIds` An array of IDs of fixed and slot parts to be included in the asset',
          ' Used to get the Equipment object equipped into the specified slot of the desired token.',
          '',
          ' # Arguments:',
          '  * `token_id` ID of the token for which we are retrieving the equipped object',
          '  * `slot_part_id` ID of the `Slot` part that we are checking for equipped objects',
        ],
        label: 'Equippable::get_equipment',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 64,
        },
        selector: '0xce09be8e',
      },
      {
        args: [
          {
            label: 'equippable_group_id',
            type: {
              displayName: ['equippable_external', 'SetValidParentForEquippableGroupInput1'],
              type: 5,
            },
          },
          {
            label: 'parent_address',
            type: {
              displayName: ['equippable_external', 'SetValidParentForEquippableGroupInput2'],
              type: 0,
            },
          },
          {
            label: 'part_id',
            type: {
              displayName: ['equippable_external', 'SetValidParentForEquippableGroupInput3'],
              type: 5,
            },
          },
        ],
        docs: [
          ' Used to declare that the assets belonging to a given `equippableGroupId` are equippable into the `Slot`',
          ' associated with the `partId` of the collection at the specified `parentAddress`',
          ' # Requirements',
          '  * Called on Child Token contract',
          '',
          ' # Arguments:',
          '  * `equippable_group_id` ID of the equippable group',
          '  * `parent_address` Address of the parent into which the equippable group can be equipped into',
          '  * `part_id` ID of the `Slot` that the items belonging to the equippable group can be equipped into',
        ],
        label: 'Equippable::set_valid_parent_for_equippable_group',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0x12f1715b',
      },
      {
        args: [
          {
            label: 'token_id',
            type: {
              displayName: ['equippable_external', 'GetAssetAndEquippableDataInput1'],
              type: 11,
            },
          },
          {
            label: 'asset_id',
            type: {
              displayName: ['equippable_external', 'GetAssetAndEquippableDataInput2'],
              type: 5,
            },
          },
        ],
        docs: [
          ' Used to get the asset and equippable data associated with given `asset_id`.',
          ' # Arguments:',
          '  * tokenId ID of the token for which to retrieve the asset',
          '  * asset_id ID of the asset of which we are retrieving',
          ' # Returns:',
          '    * asset_id metadataURI,',
          '    * EquippableAsset',
        ],
        label: 'Equippable::get_asset_and_equippable_data',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 67,
        },
        selector: '0xeddf27de',
      },
      {
        args: [
          {
            label: 'token_id',
            type: {
              displayName: ['equippable_external', 'UnequipInput1'],
              type: 11,
            },
          },
          {
            label: 'slot_part_id',
            type: {
              displayName: ['equippable_external', 'UnequipInput2'],
              type: 5,
            },
          },
        ],
        docs: [
          ' Used to unequip child from parent token.',
          ' # Requirements',
          '  * This can only be called by the owner of the token or by an account that has been granted permission to',
          '  * Called on Parent token contract',
          '',
          ' # Arguments:',
          '  * `token_id` ID of the token that had an asset unequipped',
          '  * `asset_id` ID of the asset associated with the token we are unequipping from',
          '  * `slot_part_id` ID of the slot we are using to unequip',
          '  * `child_nft` Child NFT tuple (CollectionId, Id)',
          '  * `child_asset_id` ID of the asset associated with the token we are unequipping',
          ' Emits an {ChildAssetUnequipped} event.',
        ],
        label: 'Equippable::unequip',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0x9d5323ba',
      },
      {
        args: [
          {
            label: 'token_id',
            type: {
              displayName: ['equippable_external', 'EquipInput1'],
              type: 11,
            },
          },
          {
            label: 'asset_id',
            type: {
              displayName: ['equippable_external', 'EquipInput2'],
              type: 5,
            },
          },
          {
            label: 'slot_part_id',
            type: {
              displayName: ['equippable_external', 'EquipInput3'],
              type: 5,
            },
          },
          {
            label: 'child_nft',
            type: {
              displayName: ['equippable_external', 'EquipInput4'],
              type: 10,
            },
          },
          {
            label: 'child_asset_id',
            type: {
              displayName: ['equippable_external', 'EquipInput5'],
              type: 5,
            },
          },
        ],
        docs: [
          ' Used to equip a child nft into a token.',
          ' # Requirements',
          '  * Called on Parent token contract',
          '  * If the `Slot` already has an item equipped, the execution will be reverted.',
          "  * If the child can't be used in the given `Slot`, the execution will be reverted.",
          "  * If the base doesn't allow this equip to happen, the execution will be reverted.",
          '    ',
          ' # Arguments:',
          '  * `token_id ID` of the token that had an asset equipped',
          '  * `asset_id ID` of the asset associated with the token we are equipping into',
          '  * `slot_part_id` ID of the slot we are using to equip',
          '  * `child_nft` Child NFT tuple (CollectionId, Id)',
          '  * `child_asset_id` ID of the asset associated with the token we are equipping',
          ' Emits an {ChildAssetEquipped} event.',
        ],
        label: 'Equippable::equip',
        mutates: true,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 41,
        },
        selector: '0x3553c8d4',
      },
      {
        args: [
          {
            label: 'collection_id',
            type: {
              displayName: ['query_external', 'GetPartInput1'],
              type: 0,
            },
          },
          {
            label: 'part_id',
            type: {
              displayName: ['query_external', 'GetPartInput2'],
              type: 5,
            },
          },
        ],
        docs: [],
        label: 'Query::get_part',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 58,
        },
        selector: '0x0b625606',
      },
      {
        args: [
          {
            label: 'collection_id',
            type: {
              displayName: ['query_external', 'GetAssetInput1'],
              type: 0,
            },
          },
          {
            label: 'asset_id',
            type: {
              displayName: ['query_external', 'GetAssetInput2'],
              type: 5,
            },
          },
        ],
        docs: [],
        label: 'Query::get_asset',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 55,
        },
        selector: '0xd5fb8e5f',
      },
      {
        args: [
          {
            label: 'collection_id',
            type: {
              displayName: ['query_external', 'GetPartsInput1'],
              type: 0,
            },
          },
          {
            label: 'part_ids',
            type: {
              displayName: ['query_external', 'GetPartsInput2'],
              type: 12,
            },
          },
        ],
        docs: [],
        label: 'Query::get_parts',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 69,
        },
        selector: '0x86fc6586',
      },
      {
        args: [
          {
            label: 'collection_id',
            type: {
              displayName: ['query_external', 'GetTokenInput1'],
              type: 0,
            },
          },
          {
            label: 'id_u64',
            type: {
              displayName: ['query_external', 'GetTokenInput2'],
              type: 6,
            },
          },
        ],
        docs: [],
        label: 'Query::get_token',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 70,
        },
        selector: '0x308fd612',
      },
      {
        args: [
          {
            label: 'collection_id',
            type: {
              displayName: ['query_external', 'GetAssetsInput1'],
              type: 0,
            },
          },
          {
            label: 'asset_ids',
            type: {
              displayName: ['query_external', 'GetAssetsInput2'],
              type: 12,
            },
          },
        ],
        docs: [],
        label: 'Query::get_assets',
        mutates: false,
        payable: false,
        returnType: {
          displayName: ['ink', 'MessageResult'],
          type: 74,
        },
        selector: '0xeedebbde',
      },
    ],
  },
  storage: {
    root: {
      layout: {
        struct: {
          fields: [
            {
              layout: {
                struct: {
                  fields: [
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: '0x1cc80634',
                              ty: 0,
                            },
                          },
                          root_key: '0x1cc80634',
                        },
                      },
                      name: 'token_owner',
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: '0x7e3fae6b',
                              ty: 3,
                            },
                          },
                          root_key: '0x7e3fae6b',
                        },
                      },
                      name: 'operator_approvals',
                    },
                    {
                      layout: {
                        struct: {
                          fields: [
                            {
                              layout: {
                                root: {
                                  layout: {
                                    enum: {
                                      dispatchKey: '0xca32a240',
                                      name: 'Id',
                                      variants: {
                                        '0': {
                                          fields: [
                                            {
                                              layout: {
                                                leaf: {
                                                  key: '0xca32a240',
                                                  ty: 2,
                                                },
                                              },
                                              name: '0',
                                            },
                                          ],
                                          name: 'U8',
                                        },
                                        '1': {
                                          fields: [
                                            {
                                              layout: {
                                                leaf: {
                                                  key: '0xca32a240',
                                                  ty: 4,
                                                },
                                              },
                                              name: '0',
                                            },
                                          ],
                                          name: 'U16',
                                        },
                                        '2': {
                                          fields: [
                                            {
                                              layout: {
                                                leaf: {
                                                  key: '0xca32a240',
                                                  ty: 5,
                                                },
                                              },
                                              name: '0',
                                            },
                                          ],
                                          name: 'U32',
                                        },
                                        '3': {
                                          fields: [
                                            {
                                              layout: {
                                                leaf: {
                                                  key: '0xca32a240',
                                                  ty: 6,
                                                },
                                              },
                                              name: '0',
                                            },
                                          ],
                                          name: 'U64',
                                        },
                                        '4': {
                                          fields: [
                                            {
                                              layout: {
                                                leaf: {
                                                  key: '0xca32a240',
                                                  ty: 7,
                                                },
                                              },
                                              name: '0',
                                            },
                                          ],
                                          name: 'U128',
                                        },
                                        '5': {
                                          fields: [
                                            {
                                              layout: {
                                                leaf: {
                                                  key: '0xca32a240',
                                                  ty: 8,
                                                },
                                              },
                                              name: '0',
                                            },
                                          ],
                                          name: 'Bytes',
                                        },
                                      },
                                    },
                                  },
                                  root_key: '0xca32a240',
                                },
                              },
                              name: 'enumerable',
                            },
                            {
                              layout: {
                                enum: {
                                  dispatchKey: '0x00000000',
                                  name: 'Option',
                                  variants: {
                                    '0': {
                                      fields: [],
                                      name: 'None',
                                    },
                                    '1': {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: '0x00000000',
                                              ty: 3,
                                            },
                                          },
                                          name: '0',
                                        },
                                      ],
                                      name: 'Some',
                                    },
                                  },
                                },
                              },
                              name: '_reserved',
                            },
                          ],
                          name: 'Balances',
                        },
                      },
                      name: 'balances',
                    },
                    {
                      layout: {
                        enum: {
                          dispatchKey: '0x00000000',
                          name: 'Option',
                          variants: {
                            '0': {
                              fields: [],
                              name: 'None',
                            },
                            '1': {
                              fields: [
                                {
                                  layout: {
                                    leaf: {
                                      key: '0x00000000',
                                      ty: 3,
                                    },
                                  },
                                  name: '0',
                                },
                              ],
                              name: 'Some',
                            },
                          },
                        },
                      },
                      name: '_reserved',
                    },
                  ],
                  name: 'Data',
                },
              },
              name: 'psp34',
            },
            {
              layout: {
                struct: {
                  fields: [
                    {
                      layout: {
                        leaf: {
                          key: '0x00000000',
                          ty: 2,
                        },
                      },
                      name: 'status',
                    },
                    {
                      layout: {
                        enum: {
                          dispatchKey: '0x00000000',
                          name: 'Option',
                          variants: {
                            '0': {
                              fields: [],
                              name: 'None',
                            },
                            '1': {
                              fields: [
                                {
                                  layout: {
                                    leaf: {
                                      key: '0x00000000',
                                      ty: 3,
                                    },
                                  },
                                  name: '0',
                                },
                              ],
                              name: 'Some',
                            },
                          },
                        },
                      },
                      name: '_reserved',
                    },
                  ],
                  name: 'Data',
                },
              },
              name: 'guard',
            },
            {
              layout: {
                struct: {
                  fields: [
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: '0x6a2cd2b4',
                              ty: 5,
                            },
                          },
                          root_key: '0x6a2cd2b4',
                        },
                      },
                      name: 'admin_roles',
                    },
                    {
                      layout: {
                        struct: {
                          fields: [
                            {
                              layout: {
                                root: {
                                  layout: {
                                    leaf: {
                                      key: '0x5d5db175',
                                      ty: 3,
                                    },
                                  },
                                  root_key: '0x5d5db175',
                                },
                              },
                              name: 'members',
                            },
                            {
                              layout: {
                                enum: {
                                  dispatchKey: '0x00000000',
                                  name: 'Option',
                                  variants: {
                                    '0': {
                                      fields: [],
                                      name: 'None',
                                    },
                                    '1': {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: '0x00000000',
                                              ty: 3,
                                            },
                                          },
                                          name: '0',
                                        },
                                      ],
                                      name: 'Some',
                                    },
                                  },
                                },
                              },
                              name: '_reserved',
                            },
                          ],
                          name: 'Members',
                        },
                      },
                      name: 'members',
                    },
                    {
                      layout: {
                        enum: {
                          dispatchKey: '0x00000000',
                          name: 'Option',
                          variants: {
                            '0': {
                              fields: [],
                              name: 'None',
                            },
                            '1': {
                              fields: [
                                {
                                  layout: {
                                    leaf: {
                                      key: '0x00000000',
                                      ty: 3,
                                    },
                                  },
                                  name: '0',
                                },
                              ],
                              name: 'Some',
                            },
                          },
                        },
                      },
                      name: '_reserved',
                    },
                  ],
                  name: 'Data',
                },
              },
              name: 'access',
            },
            {
              layout: {
                struct: {
                  fields: [
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: '0x9b2d2382',
                              ty: 8,
                            },
                          },
                          root_key: '0x9b2d2382',
                        },
                      },
                      name: 'attributes',
                    },
                    {
                      layout: {
                        enum: {
                          dispatchKey: '0x00000000',
                          name: 'Option',
                          variants: {
                            '0': {
                              fields: [],
                              name: 'None',
                            },
                            '1': {
                              fields: [
                                {
                                  layout: {
                                    leaf: {
                                      key: '0x00000000',
                                      ty: 3,
                                    },
                                  },
                                  name: '0',
                                },
                              ],
                              name: 'Some',
                            },
                          },
                        },
                      },
                      name: '_reserved',
                    },
                  ],
                  name: 'Data',
                },
              },
              name: 'metadata',
            },
            {
              layout: {
                struct: {
                  fields: [
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: '0xd4a8482b',
                              ty: 9,
                            },
                          },
                          root_key: '0xd4a8482b',
                        },
                      },
                      name: 'pending_children',
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: '0x613a1d9f',
                              ty: 9,
                            },
                          },
                          root_key: '0x613a1d9f',
                        },
                      },
                      name: 'accepted_children',
                    },
                  ],
                  name: 'NestingData',
                },
              },
              name: 'nesting',
            },
            {
              layout: {
                struct: {
                  fields: [
                    {
                      layout: {
                        root: {
                          layout: {
                            struct: {
                              fields: [
                                {
                                  layout: {
                                    leaf: {
                                      key: '0x7646c5ec',
                                      ty: 5,
                                    },
                                  },
                                  name: 'equippable_group_id',
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: '0x7646c5ec',
                                      ty: 8,
                                    },
                                  },
                                  name: 'asset_uri',
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: '0x7646c5ec',
                                      ty: 12,
                                    },
                                  },
                                  name: 'part_ids',
                                },
                              ],
                              name: 'Asset',
                            },
                          },
                          root_key: '0x7646c5ec',
                        },
                      },
                      name: 'collection_asset_entries',
                    },
                    {
                      layout: {
                        leaf: {
                          key: '0x00000000',
                          ty: 12,
                        },
                      },
                      name: 'collection_asset_ids',
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: '0x044789a8',
                              ty: 12,
                            },
                          },
                          root_key: '0x044789a8',
                        },
                      },
                      name: 'accepted_assets',
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: '0xffa31aae',
                              ty: 12,
                            },
                          },
                          root_key: '0xffa31aae',
                        },
                      },
                      name: 'pending_assets',
                    },
                  ],
                  name: 'MultiAssetData',
                },
              },
              name: 'multiasset',
            },
            {
              layout: {
                struct: {
                  fields: [
                    {
                      layout: {
                        leaf: {
                          key: '0x00000000',
                          ty: 6,
                        },
                      },
                      name: 'last_token_id',
                    },
                    {
                      layout: {
                        leaf: {
                          key: '0x00000000',
                          ty: 6,
                        },
                      },
                      name: 'max_supply',
                    },
                    {
                      layout: {
                        leaf: {
                          key: '0x00000000',
                          ty: 7,
                        },
                      },
                      name: 'price_per_mint',
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: '0x5d58779c',
                              ty: 8,
                            },
                          },
                          root_key: '0x5d58779c',
                        },
                      },
                      name: 'nft_metadata',
                    },
                  ],
                  name: 'MintingData',
                },
              },
              name: 'minting',
            },
            {
              layout: {
                struct: {
                  fields: [
                    {
                      layout: {
                        leaf: {
                          key: '0x00000000',
                          ty: 12,
                        },
                      },
                      name: 'part_ids',
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            struct: {
                              fields: [
                                {
                                  layout: {
                                    enum: {
                                      dispatchKey: '0xed2e280d',
                                      name: 'PartType',
                                      variants: {
                                        '0': {
                                          fields: [],
                                          name: 'None',
                                        },
                                        '1': {
                                          fields: [],
                                          name: 'Slot',
                                        },
                                        '2': {
                                          fields: [],
                                          name: 'Fixed',
                                        },
                                      },
                                    },
                                  },
                                  name: 'part_type',
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: '0xed2e280d',
                                      ty: 2,
                                    },
                                  },
                                  name: 'z',
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: '0xed2e280d',
                                      ty: 13,
                                    },
                                  },
                                  name: 'equippable',
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: '0xed2e280d',
                                      ty: 8,
                                    },
                                  },
                                  name: 'part_uri',
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: '0xed2e280d',
                                      ty: 14,
                                    },
                                  },
                                  name: 'is_equippable_by_all',
                                },
                              ],
                              name: 'Part',
                            },
                          },
                          root_key: '0xed2e280d',
                        },
                      },
                      name: 'parts',
                    },
                    {
                      layout: {
                        leaf: {
                          key: '0x00000000',
                          ty: 5,
                        },
                      },
                      name: 'next_part_id',
                    },
                    {
                      layout: {
                        leaf: {
                          key: '0x00000000',
                          ty: 8,
                        },
                      },
                      name: 'base_uri',
                    },
                  ],
                  name: 'BaseData',
                },
              },
              name: 'base',
            },
            {
              layout: {
                struct: {
                  fields: [
                    {
                      layout: {
                        root: {
                          layout: {
                            struct: {
                              fields: [
                                {
                                  layout: {
                                    leaf: {
                                      key: '0x4cf513d2',
                                      ty: 5,
                                    },
                                  },
                                  name: 'asset_id',
                                },
                                {
                                  layout: {
                                    leaf: {
                                      key: '0x4cf513d2',
                                      ty: 5,
                                    },
                                  },
                                  name: 'child_asset_id',
                                },
                                {
                                  layout: {
                                    struct: {
                                      fields: [
                                        {
                                          layout: {
                                            leaf: {
                                              key: '0x4cf513d2',
                                              ty: 0,
                                            },
                                          },
                                          name: '0',
                                        },
                                        {
                                          layout: {
                                            enum: {
                                              dispatchKey: '0x4cf513d2',
                                              name: 'Id',
                                              variants: {
                                                '0': {
                                                  fields: [
                                                    {
                                                      layout: {
                                                        leaf: {
                                                          key: '0x4cf513d2',
                                                          ty: 2,
                                                        },
                                                      },
                                                      name: '0',
                                                    },
                                                  ],
                                                  name: 'U8',
                                                },
                                                '1': {
                                                  fields: [
                                                    {
                                                      layout: {
                                                        leaf: {
                                                          key: '0x4cf513d2',
                                                          ty: 4,
                                                        },
                                                      },
                                                      name: '0',
                                                    },
                                                  ],
                                                  name: 'U16',
                                                },
                                                '2': {
                                                  fields: [
                                                    {
                                                      layout: {
                                                        leaf: {
                                                          key: '0x4cf513d2',
                                                          ty: 5,
                                                        },
                                                      },
                                                      name: '0',
                                                    },
                                                  ],
                                                  name: 'U32',
                                                },
                                                '3': {
                                                  fields: [
                                                    {
                                                      layout: {
                                                        leaf: {
                                                          key: '0x4cf513d2',
                                                          ty: 6,
                                                        },
                                                      },
                                                      name: '0',
                                                    },
                                                  ],
                                                  name: 'U64',
                                                },
                                                '4': {
                                                  fields: [
                                                    {
                                                      layout: {
                                                        leaf: {
                                                          key: '0x4cf513d2',
                                                          ty: 7,
                                                        },
                                                      },
                                                      name: '0',
                                                    },
                                                  ],
                                                  name: 'U128',
                                                },
                                                '5': {
                                                  fields: [
                                                    {
                                                      layout: {
                                                        leaf: {
                                                          key: '0x4cf513d2',
                                                          ty: 8,
                                                        },
                                                      },
                                                      name: '0',
                                                    },
                                                  ],
                                                  name: 'Bytes',
                                                },
                                              },
                                            },
                                          },
                                          name: '1',
                                        },
                                      ],
                                      name: '(A, B)',
                                    },
                                  },
                                  name: 'child_nft',
                                },
                              ],
                              name: 'Equipment',
                            },
                          },
                          root_key: '0x4cf513d2',
                        },
                      },
                      name: 'equipment',
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: '0x76ee82f9',
                              ty: 5,
                            },
                          },
                          root_key: '0x76ee82f9',
                        },
                      },
                      name: 'valid_parent_slot',
                    },
                  ],
                  name: 'EquippableData',
                },
              },
              name: 'equippable',
            },
          ],
          name: 'Rmrk',
        },
      },
      root_key: '0x00000000',
    },
  },
  types: [
    {
      id: 0,
      type: {
        def: {
          composite: {
            fields: [
              {
                type: 1,
                typeName: '[u8; 32]',
              },
            ],
          },
        },
        path: ['ink_primitives', 'types', 'AccountId'],
      },
    },
    {
      id: 1,
      type: {
        def: {
          array: {
            len: 32,
            type: 2,
          },
        },
      },
    },
    {
      id: 2,
      type: {
        def: {
          primitive: 'u8',
        },
      },
    },
    {
      id: 3,
      type: {
        def: {
          tuple: [],
        },
      },
    },
    {
      id: 4,
      type: {
        def: {
          primitive: 'u16',
        },
      },
    },
    {
      id: 5,
      type: {
        def: {
          primitive: 'u32',
        },
      },
    },
    {
      id: 6,
      type: {
        def: {
          primitive: 'u64',
        },
      },
    },
    {
      id: 7,
      type: {
        def: {
          primitive: 'u128',
        },
      },
    },
    {
      id: 8,
      type: {
        def: {
          sequence: {
            type: 2,
          },
        },
      },
    },
    {
      id: 9,
      type: {
        def: {
          sequence: {
            type: 10,
          },
        },
      },
    },
    {
      id: 10,
      type: {
        def: {
          tuple: [0, 11],
        },
      },
    },
    {
      id: 11,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 2,
                    typeName: 'u8',
                  },
                ],
                index: 0,
                name: 'U8',
              },
              {
                fields: [
                  {
                    type: 4,
                    typeName: 'u16',
                  },
                ],
                index: 1,
                name: 'U16',
              },
              {
                fields: [
                  {
                    type: 5,
                    typeName: 'u32',
                  },
                ],
                index: 2,
                name: 'U32',
              },
              {
                fields: [
                  {
                    type: 6,
                    typeName: 'u64',
                  },
                ],
                index: 3,
                name: 'U64',
              },
              {
                fields: [
                  {
                    type: 7,
                    typeName: 'u128',
                  },
                ],
                index: 4,
                name: 'U128',
              },
              {
                fields: [
                  {
                    type: 8,
                    typeName: 'Vec<u8>',
                  },
                ],
                index: 5,
                name: 'Bytes',
              },
            ],
          },
        },
        path: ['openbrush_contracts', 'traits', 'types', 'Id'],
      },
    },
    {
      id: 12,
      type: {
        def: {
          sequence: {
            type: 5,
          },
        },
      },
    },
    {
      id: 13,
      type: {
        def: {
          sequence: {
            type: 0,
          },
        },
      },
    },
    {
      id: 14,
      type: {
        def: {
          primitive: 'bool',
        },
      },
    },
    {
      id: 15,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 3,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 3,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 16,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 1,
                name: 'CouldNotReadInput',
              },
            ],
          },
        },
        path: ['ink_primitives', 'LangError'],
      },
    },
    {
      id: 17,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: 'None',
              },
              {
                fields: [
                  {
                    type: 11,
                  },
                ],
                index: 1,
                name: 'Some',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 11,
          },
        ],
        path: ['Option'],
      },
    },
    {
      id: 18,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 19,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 19,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 19,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 3,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 20,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 3,
          },
          {
            name: 'E',
            type: 20,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 20,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 8,
                    typeName: 'String',
                  },
                ],
                index: 0,
                name: 'Custom',
              },
              {
                index: 1,
                name: 'SelfApprove',
              },
              {
                index: 2,
                name: 'NotApproved',
              },
              {
                index: 3,
                name: 'TokenExists',
              },
              {
                index: 4,
                name: 'TokenNotExists',
              },
              {
                fields: [
                  {
                    type: 8,
                    typeName: 'String',
                  },
                ],
                index: 5,
                name: 'SafeTransferCheckFailed',
              },
            ],
          },
        },
        path: ['openbrush_contracts', 'traits', 'errors', 'psp34', 'PSP34Error'],
      },
    },
    {
      id: 21,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 14,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 14,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 22,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 11,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 11,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 23,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 7,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 7,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 24,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 25,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 25,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 25,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: 'None',
              },
              {
                fields: [
                  {
                    type: 0,
                  },
                ],
                index: 1,
                name: 'Some',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 0,
          },
        ],
        path: ['Option'],
      },
    },
    {
      id: 26,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 5,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 5,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 27,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 28,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 28,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 28,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 3,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 29,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 3,
          },
          {
            name: 'E',
            type: 29,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 29,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: 'InvalidCaller',
              },
              {
                index: 1,
                name: 'MissingRole',
              },
              {
                index: 2,
                name: 'RoleRedundant',
              },
            ],
          },
        },
        path: ['openbrush_contracts', 'traits', 'errors', 'access_control', 'AccessControlError'],
      },
    },
    {
      id: 30,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 31,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 31,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 31,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: 'None',
              },
              {
                fields: [
                  {
                    type: 8,
                  },
                ],
                index: 1,
                name: 'Some',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 8,
          },
        ],
        path: ['Option'],
      },
    },
    {
      id: 32,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 33,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 33,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 33,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 11,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 20,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 11,
          },
          {
            name: 'E',
            type: 20,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 34,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 35,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 35,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 35,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 36,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 37,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 36,
          },
          {
            name: 'E',
            type: 37,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 36,
      type: {
        def: {
          primitive: 'str',
        },
      },
    },
    {
      id: 37,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 38,
                    typeName: 'RmrkError',
                  },
                ],
                index: 0,
                name: 'Rmrk',
              },
              {
                fields: [
                  {
                    type: 20,
                    typeName: 'PSP34Error',
                  },
                ],
                index: 1,
                name: 'PSP34',
              },
              {
                fields: [
                  {
                    type: 29,
                    typeName: 'AccessControlError',
                  },
                ],
                index: 2,
                name: 'AccessControl',
              },
              {
                fields: [
                  {
                    type: 39,
                    typeName: 'ReentrancyGuardError',
                  },
                ],
                index: 3,
                name: 'Reentrancy',
              },
            ],
          },
        },
        path: ['rmrk_common', 'errors', 'Error'],
      },
    },
    {
      id: 38,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: 'AcceptedAssetsMissing',
              },
              {
                index: 1,
                name: 'AddingPendingAsset',
              },
              {
                index: 2,
                name: 'AddingPendingChild',
              },
              {
                index: 3,
                name: 'AddressNotEquippable',
              },
              {
                index: 4,
                name: 'AlreadyAddedAsset',
              },
              {
                index: 5,
                name: 'AlreadyAddedChild',
              },
              {
                index: 6,
                name: 'AssetHasNoParts',
              },
              {
                index: 7,
                name: 'AssetIdAlreadyExists',
              },
              {
                index: 8,
                name: 'AssetIdNotFound',
              },
              {
                index: 9,
                name: 'BadConfig',
              },
              {
                index: 10,
                name: 'BadMintValue',
              },
              {
                index: 11,
                name: 'BadPriorityLength',
              },
              {
                index: 12,
                name: 'CannotMintZeroTokens',
              },
              {
                index: 13,
                name: 'ChildNotFound',
              },
              {
                index: 14,
                name: 'UriNotFound',
              },
              {
                index: 15,
                name: 'CollectionIsFull',
              },
              {
                index: 16,
                name: 'InvalidAssetId',
              },
              {
                index: 17,
                name: 'InvalidParentId',
              },
              {
                index: 18,
                name: 'InvalidTokenId',
              },
              {
                index: 19,
                name: 'NotEquipped',
              },
              {
                index: 20,
                name: 'NotTokenOwner',
              },
              {
                index: 21,
                name: 'PartIsNotSlot',
              },
              {
                index: 22,
                name: 'SlotAlreayUsed',
              },
              {
                index: 23,
                name: 'TargetAssetCannotReceiveSlot',
              },
              {
                index: 24,
                name: 'UnknownEquippableAsset',
              },
              {
                index: 25,
                name: 'UnknownPart',
              },
              {
                index: 26,
                name: 'UnknownPartId',
              },
              {
                index: 27,
                name: 'WithdrawalFailed',
              },
            ],
          },
        },
        path: ['rmrk_common', 'errors', 'RmrkError'],
      },
    },
    {
      id: 39,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: 'ReentrantCall',
              },
            ],
          },
        },
        path: [
          'openbrush_contracts',
          'traits',
          'errors',
          'reentrancy_guard',
          'ReentrancyGuardError',
        ],
      },
    },
    {
      id: 40,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 6,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 6,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 41,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 42,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 42,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 42,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 3,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 37,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 3,
          },
          {
            name: 'E',
            type: 37,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 43,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 44,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 44,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 44,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 45,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 37,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 45,
          },
          {
            name: 'E',
            type: 37,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 45,
      type: {
        def: {
          tuple: [11, 11],
        },
      },
    },
    {
      id: 46,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 47,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 47,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 47,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 11,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 37,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 11,
          },
          {
            name: 'E',
            type: 37,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 48,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 9,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 9,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 49,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 50,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 50,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 50,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 51,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 37,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 51,
          },
          {
            name: 'E',
            type: 37,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 51,
      type: {
        def: {
          tuple: [6, 6],
        },
      },
    },
    {
      id: 52,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 53,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 53,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 53,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 12,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 37,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 12,
          },
          {
            name: 'E',
            type: 37,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 54,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: 'None',
              },
              {
                fields: [
                  {
                    type: 5,
                  },
                ],
                index: 1,
                name: 'Some',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 5,
          },
        ],
        path: ['Option'],
      },
    },
    {
      id: 55,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 56,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 56,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 56,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: 'None',
              },
              {
                fields: [
                  {
                    type: 57,
                  },
                ],
                index: 1,
                name: 'Some',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 57,
          },
        ],
        path: ['Option'],
      },
    },
    {
      id: 57,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: 'equippable_group_id',
                type: 5,
                typeName: 'EquippableGroupId',
              },
              {
                name: 'asset_uri',
                type: 8,
                typeName: 'String',
              },
              {
                name: 'part_ids',
                type: 12,
                typeName: 'Vec<PartId>',
              },
            ],
          },
        },
        path: ['rmrk_common', 'types', 'Asset'],
      },
    },
    {
      id: 58,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 59,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 59,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 59,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: 'None',
              },
              {
                fields: [
                  {
                    type: 60,
                  },
                ],
                index: 1,
                name: 'Some',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 60,
          },
        ],
        path: ['Option'],
      },
    },
    {
      id: 60,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: 'part_type',
                type: 61,
                typeName: 'PartType',
              },
              {
                name: 'z',
                type: 2,
                typeName: 'u8',
              },
              {
                name: 'equippable',
                type: 13,
                typeName: 'Vec<AccountId>',
              },
              {
                name: 'part_uri',
                type: 8,
                typeName: 'String',
              },
              {
                name: 'is_equippable_by_all',
                type: 14,
                typeName: 'bool',
              },
            ],
          },
        },
        path: ['rmrk_common', 'types', 'Part'],
      },
    },
    {
      id: 61,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: 'None',
              },
              {
                index: 1,
                name: 'Slot',
              },
              {
                index: 2,
                name: 'Fixed',
              },
            ],
          },
        },
        path: ['rmrk_common', 'types', 'PartType'],
      },
    },
    {
      id: 62,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 36,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 36,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 63,
      type: {
        def: {
          sequence: {
            type: 60,
          },
        },
      },
    },
    {
      id: 64,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 65,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 65,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 65,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: 'None',
              },
              {
                fields: [
                  {
                    type: 66,
                  },
                ],
                index: 1,
                name: 'Some',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 66,
          },
        ],
        path: ['Option'],
      },
    },
    {
      id: 66,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: 'asset_id',
                type: 5,
                typeName: 'AssetId',
              },
              {
                name: 'child_asset_id',
                type: 5,
                typeName: 'AssetId',
              },
              {
                name: 'child_nft',
                type: 10,
                typeName: 'ChildNft',
              },
            ],
          },
        },
        path: ['rmrk_common', 'types', 'Equipment'],
      },
    },
    {
      id: 67,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 68,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 68,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 68,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 57,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 37,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 57,
          },
          {
            name: 'E',
            type: 37,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 69,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 63,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 63,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 70,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 71,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 71,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 71,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: 'id',
                type: 6,
                typeName: 'u64',
              },
              {
                name: 'collection_id',
                type: 0,
                typeName: 'CollectionId',
              },
              {
                name: 'token_uri',
                type: 8,
                typeName: 'String',
              },
              {
                name: 'assets_pending',
                type: 12,
                typeName: 'Vec<AssetId>',
              },
              {
                name: 'assets_accepted',
                type: 12,
                typeName: 'Vec<AssetId>',
              },
              {
                name: 'children_pending',
                type: 72,
                typeName: 'Vec<(AccountId, u64)>',
              },
              {
                name: 'children_accepted',
                type: 72,
                typeName: 'Vec<(AccountId, u64)>',
              },
            ],
          },
        },
        path: ['rmrk', 'query', 'Token'],
      },
    },
    {
      id: 72,
      type: {
        def: {
          sequence: {
            type: 73,
          },
        },
      },
    },
    {
      id: 73,
      type: {
        def: {
          tuple: [0, 6],
        },
      },
    },
    {
      id: 74,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 75,
                  },
                ],
                index: 0,
                name: 'Ok',
              },
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 1,
                name: 'Err',
              },
            ],
          },
        },
        params: [
          {
            name: 'T',
            type: 75,
          },
          {
            name: 'E',
            type: 16,
          },
        ],
        path: ['Result'],
      },
    },
    {
      id: 75,
      type: {
        def: {
          sequence: {
            type: 57,
          },
        },
      },
    },
  ],
  version: '4',
};
