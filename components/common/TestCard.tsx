import React, { useState } from "react";
import TestPopOver from "./TestPopOver";
import { useFormik } from "formik";
import * as anchor from "@project-serum/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { Program } from "@project-serum/anchor";
import { useAuth } from "../../context/IdlContext";
import Image from "next/image";

type Props = {
  ixName: string;
  ixAccounts: Array<accountType>;
  ixArgs: Array<argsType>;
};

interface accountType {
  name: string;
  isMut: boolean;
  isSigner: boolean;
}

interface argsType {
  name: string;
  type: string;
}
type InputBoxforAccountsProps = {
  name: string;
  isMut: boolean;
  isSigner: boolean;
};

type InputBoxForArgsProps = {
  name: string;
  type: string;
};

const InputBoxForArgs = (props: InputBoxForArgsProps) => {
  return (
    <div className={`flex flex-col space-y-1 `}>
      <label className="uppercase font-inter font-medium text-[10px]">
        {props.name}
      </label>
      <div className="relative bg-[#232323]">
        <input
          className="bg-[#232323] text-white font-medium text-sm p-1.5 focus:outline-none"
          type="text"
        />
      </div>
      <div className="flex flex-row space-x-1 mt-1">
        {props.type && (
          <span className="bg-[#252525] font-inter rounded-lg p-1 text-[8px]">
            {props.type}
          </span>
        )}
      </div>
    </div>
  );
};

const InputBoxforAccounts = (props: InputBoxforAccountsProps) => {
  return (
    <div className={`flex flex-col space-y-3  `}>
      <label className="uppercase font-inter font-medium text-[10px]">
        {props.name}
      </label>
      <div className="relative bg-[#232323]">
        <input
          className="bg-[#232323] text-white font-medium text-sm p-1.5 focus:outline-none"
          type="text"
        />
        <TestPopOver />
      </div>
      <div className="flex flex-row space-x-1 mt-1">
        {props.isMut && (
          <span className="bg-[#252525] font-inter rounded-lg p-1 text-[8px]">
            isMutable
          </span>
        )}
        {props.isSigner && (
          <span className="bg-[#252525] font-inter rounded-lg p-1 text-[8px]">
            isSigner
          </span>
        )}
      </div>
    </div>
  );
};

const TestCard = (props: Props) => {
  const [initialValues, setInitialValues] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const { idl, programId } = useAuth();

  console.log("PROGRAM ID FRM TEST", programId);

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
        setIsLoading(true);
        const prov = getProvider();
        console.log("In Main VALUES", values);
        if (!programId) {
          alert("No Program Id Found");
        }
        const IDLany = idl as any;
        const IDL = IDLany as anchor.Idl;

        const programIdpubkey = new anchor.web3.PublicKey(programId);
        const program = new anchor.Program(IDL, programIdpubkey, prov);
        console.log("IX NAME", props.ixName);
        const tx = await program.methods[props.ixName]()
          .accounts(values.accounts)
          .rpc();
        console.log("TX", tx);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      ...initialValues,
    },
    onSubmit: async (values) => {
      try {
        console.log("OnSubmit Values", values);
        mainFunction(values);
      } catch (error) {
        setIsLoading(false);
      }
    },
  });
  return (
    <div className="break-inside-avoid bg-[#1A1A1A] p-3  ">
      <div className=" flex flex-row mb-2">
        <Image
          src="/icons/initialize.svg"
          alt="initialize"
          width={14}
          height={14}
        />
        <p className="text-white text-sm  font-semibold leading-4 font-inter pl-2">
          {props.ixName}
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col space-y-1">
          <h2 className="text-[#EF476F] pb-2">Accounts</h2>
          {props.ixAccounts.map((account, i) => {
            return (
              <div key={i} className={`flex flex-col space-y-3  `}>
                <label className="uppercase font-inter font-medium text-[10px]">
                  {account.name}
                </label>
                <div className="relative bg-[#232323]">
                  <input
                    id={`accounts.${account.name}`}
                    name={`accounts.${account.name}`}
                    onChange={formik.handleChange}
                    className="bg-[#232323] text-white font-medium text-sm p-1.5 focus:outline-none"
                    type="text"
                  />
                  <TestPopOver />
                </div>
                <div className="flex flex-row space-x-1 mt-1">
                  {account.isMut && (
                    <span className="bg-[#252525] font-inter rounded-lg p-1 text-[8px]">
                      isMutable
                    </span>
                  )}
                  {account.isSigner && (
                    <span className="bg-[#252525] font-inter rounded-lg p-1 text-[8px]">
                      isSigner
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col space-y-1">
          {props.ixArgs.length !== 0 && (
            <h2 className="text-[#00F5D4] pb-2">Arguments</h2>
          )}
          {props.ixArgs.map((arg, i) => {
            return (
              <div key={i} className={`flex flex-col space-y-1 `}>
                <label className="uppercase font-inter font-medium text-[10px]">
                  {arg.name}
                </label>
                <div className="relative bg-[#232323]">
                  <input
                    id={`args.${arg.name}`}
                    name={`args.${arg.name}`}
                    className="bg-[#232323] text-white font-medium text-sm p-1.5 focus:outline-none"
                    type="text"
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="flex flex-row space-x-1 mt-1">
                  {arg.type && (
                    <span className="bg-[#252525] font-inter rounded-lg p-1 text-[8px]">
                      {arg.type}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-row space-x-2">
          <button className="px-5 py-3 bg-[#252525] flex flex-row">
            <Image
              src="/icons/stack.svg"
              alt="initialize"
              width={14}
              height={14}
            />

            <p className="text-white text-xs uppercase font-medium leading-4 font-inter">
              Stack
            </p>
          </button>
          <div className="grow"></div>
          <button
            type="submit"
            className="px-5 py-3 bg-[#4773E3] flex flex-row"
          >
            <Image src="/icons/tick.svg" alt="tick" width={14} height={14} />

            <p className="text-white text-xs uppercase font-medium leading-4 font-inter">
              Submit
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestCard;
