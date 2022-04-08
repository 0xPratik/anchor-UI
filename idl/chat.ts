export type MplTesting = {
  version: "0.1.0";
  name: "mpl_testing";
  instructions: [
    {
      name: "createNft";
      accounts: [
        {
          name: "masterEdition";
          isMut: true;
          isSigner: false;
        },
        {
          name: "metadataMint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "updateAuth";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mplProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "metadataAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "recieverAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "createMetaData";
      accounts: [
        {
          name: "mplProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "metadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        },
        {
          name: "symbol";
          type: "string";
        },
        {
          name: "uri";
          type: "string";
        },
        {
          name: "sellerFeeBasisPoints";
          type: "u16";
        },
        {
          name: "isMutable";
          type: "bool";
        }
      ];
    }
  ];
};

export const IDL: MplTesting = {
  version: "0.1.0",
  name: "mpl_testing",
  instructions: [
    {
      name: "createNft",
      accounts: [
        {
          name: "masterEdition",
          isMut: true,
          isSigner: false,
        },
        {
          name: "metadataMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "updateAuth",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mplProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "metadataAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "recieverAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "createMetaData",
      accounts: [
        {
          name: "mplProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "metadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "symbol",
          type: "string",
        },
        {
          name: "uri",
          type: "string",
        },
        {
          name: "sellerFeeBasisPoints",
          type: "u16",
        },
        {
          name: "isMutable",
          type: "bool",
        },
      ],
    },
  ],
};
