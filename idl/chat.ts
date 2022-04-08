export type Brianxyz = {
  version: "0.1.0";
  name: "brianxyz";
  instructions: [
    {
      name: "initialize";
      accounts: [
        {
          name: "voteAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "voteSuperMan";
      accounts: [
        {
          name: "voteAccount";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "voteIronMan";
      accounts: [
        {
          name: "voteAccount";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "voteAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "superMan";
            type: "u64";
          },
          {
            name: "ironMan";
            type: "u64";
          },
          {
            name: "bump";
            type: "u8";
          }
        ];
      };
    }
  ];
};

export const IDL: Brianxyz = {
  version: "0.1.0",
  name: "brianxyz",
  instructions: [
    {
      name: "initialize",
      accounts: [
        {
          name: "voteAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "voteSuperMan",
      accounts: [
        {
          name: "voteAccount",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "voteIronMan",
      accounts: [
        {
          name: "voteAccount",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "voteAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "superMan",
            type: "u64",
          },
          {
            name: "ironMan",
            type: "u64",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
  ],
};
