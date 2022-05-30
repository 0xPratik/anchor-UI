import classNames from "classnames";
import React, { useState } from "react";
import { useAuth } from "../context/IdlContext";
import * as anchor from "@project-serum/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Image from "next/image";

type Props = {};

const Onchain = (props: Props) => {
  const { idl, programId } = useAuth();
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const [accountAddress, setAccountAddress] = useState("");

  const accounts: any = idl.accounts;
  const [activeAccount, setactiveAccount] = useState(0);

  const opts = {
    preflightCommitment: "processed" as anchor.web3.ConfirmOptions,
  };

  function getProvider() {
    // const network = "http://127.0.0.1:8899";
    // const connection = new anchor.web3.Connection(
    //   network,
    //   opts.preflightCommitment
    // );

    if (!wallet) {
      return;
    }
    const provider = new anchor.AnchorProvider(
      connection,
      wallet,
      opts.preflightCommitment
    );
    console.log("Provider Set");
    return provider;
  }

  const mainFunction = async (values: any) => {
    try {
      if (typeof window !== "undefined") {
        const prov = getProvider();
        console.log("In Main VALUES", values);
        if (!programId) {
          alert("No Program Id Found");
        }
        const IDLany = idl as any;
        const IDL = IDLany as anchor.Idl;

        const programIdpubkey = new anchor.web3.PublicKey(programId);
        const program = new anchor.Program(IDL, programIdpubkey, prov);
        console.log("Account to Get Data From", accounts[activeAccount]);
        console.log(accountAddress);
        if (!accountAddress) {
          alert("Please Provide the Account Address");
        }

        console.log(accounts);

        const accountPubkey = new anchor.web3.PublicKey(accountAddress);
        const account_data = await program.account[accounts[0]].fetch(
          accountPubkey
        );
        console.log("Account Data", account_data);
      }
    } catch (error) {
      console.log("On Chain Data Error", error);
    }
  };

  return (
    <div className="text-white basis-1/2">
      <div className="flex flex-row">
        <div className="px-5 py-3 bg-[#FFE485] flex flex-row space-x-2">
          <Image
            src="/icons/onchain.svg"
            alt="onchain"
            width={14}
            height={14}
          />

          <p className="text-black text-xs uppercase font-medium leading-4 font-inter">
            On-chain data
          </p>
        </div>
        <div className="grow"></div>
        <div>
          <button className="flex flex-row py-3 px-1 space-x-3">
            {" "}
            <Image
              src="/icons/refresh.svg"
              alt="refersh"
              width={14}
              height={14}
            />
            <p className=" text-xs font-medium leading-4 font-inter">Refresh</p>
          </button>
        </div>
      </div>
      <div>
        <div>
          <ul className="divide-y divide-[#2B2B2B]">
            <li>
              <div className="h-[2.375rem] flex flex-row ">
                <div className=" px-3 flex items-center text-left grow font-inter font-medium  text-xs overflow-x-auto overflow-y-auto">
                  <div className="flex flex-row">
                    {accounts
                      ? accounts.map((account, key) => (
                          <div
                            key={key}
                            onClick={() => setactiveAccount(key)}
                            className={classNames(
                              `uppercase mx-1 py-2 px-2 cursor-pointer ${
                                activeAccount == key
                                  ? "border-b-[0.22rem] border-[#4A83EE]"
                                  : ""
                              } `
                            )}
                          >
                            <span className="font-medium">{account.name}</span>
                          </div>
                        ))
                      : "No Data"}
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="h-[2.375rem] flex flex-row ">
                <div className="w-[2.375rem] flex items-center justify-center bg-[#232323]">
                  {activeAccount}
                </div>
                <div className=" px-3 flex items-center text-left grow font-inter font-medium leading-3 text-xs">
                  <span className="uppercase">Address</span> :
                  <input
                    onChange={(e) => {
                      setAccountAddress(e.target.value);
                    }}
                    className="bg-black py-1 focus:outline-none ml-1  text-white w-full"
                  />
                </div>
                <button
                  onClick={mainFunction}
                  className="flex items-center justify-center right-0"
                >
                  <Image
                    src="/icons/downarrow.svg"
                    alt="downarrow"
                    width={15}
                    height={15}
                  />
                </button>
              </div>
            </li>
            <li>
              <div className="h-[2.375rem] flex flex-row ">
                <div className="w-[2.375rem] flex items-center justify-center">
                  <Image
                    src="/icons/add.svg"
                    alt="add"
                    width={14}
                    height={14}
                  />
                </div>
                <div className=" px-3 flex items-center text-left grow font-inter font-medium leading-3 text-xs">
                  <p className="font-inter font-medium text-[#636363] text-xs leading-4">
                    No on-chain data to show yet.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Onchain;
