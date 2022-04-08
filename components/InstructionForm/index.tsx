import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import { Program } from "@project-serum/anchor";
import { useFormik } from "formik";
import * as anchor from "@project-serum/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import IDL from "../../idl/idl.json";
import { MplTesting } from "../../idl/chat";

interface accountType {
  name: string;
  isMut: boolean;
  isSigner: boolean;
}

interface argsType {
  name: string;
  type: string;
}

interface IxProps {
  ixName: string;
  ixAccounts: Array<accountType>;
  ixArgs: Array<argsType>;
}

const opts = {
  preflightCommitment: "processed" as anchor.web3.ConfirmOptions,
};

function InstructionForm({ ixName, ixAccounts, ixArgs }: IxProps) {
  const [initialValues, setInitialValues] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getInitialValues = () => {
    let initialValues = {};
    const accountsValue = {};
    const argsValue = {};
    ixAccounts.forEach((account) => {
      accountsValue[account.name] = "";
    });
    ixArgs.forEach((arg) => {
      argsValue[arg.name] = "";
    });

    initialValues = {
      accounts: accountsValue,
      args: argsValue,
    };

    return initialValues;
  };

  useEffect(() => {
    const values = getInitialValues();
    setInitialValues(values);
  }, []);

  const wallet = useAnchorWallet();

  function getProvider() {
    const network = "http://127.0.0.1:8899";
    const connection = new anchor.web3.Connection(
      network,
      opts.preflightCommitment
    );
    if (!wallet) {
      return;
    }
    const provider = new anchor.Provider(
      connection,
      wallet,
      opts.preflightCommitment
    );
    console.log("Provider Set");
    return provider;
  }

  const idl = IDL as anchor.Idl;

  const mainFunction = async (values: any) => {
    try {
      if (typeof window !== "undefined") {
        const prov = getProvider();
        console.log("VALUES", values);
        if (!values.programId) {
          return;
        }
        const programId = new anchor.web3.PublicKey(values.programId);
        const program = new anchor.Program(
          idl,
          programId,
          prov
        ) as Program<MplTesting>;
        console.log(values.accounts);
        const tx = program.methods[ixName]().accounts(values.accounts).rpc();
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
        setIsLoading(true);
        const response = await mainFunction(values);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    },
  });
  return (
    <Box
      border="1px"
      w="full"
      h="full"
      borderColor="blackAlpha.500"
      borderRadius={"base"}
      padding={4}
    >
      <Heading fontWeight="bold" pb={4}>
        {ixName}
      </Heading>
      <Text mb={2} fontWeight="bold" color="red.500">
        Accounts
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <FormControl mb={4}>
          <FormLabel htmlFor="programId">ProgramId</FormLabel>
          <Input
            id={`programId`}
            name={`programId`}
            type="text"
            placeholder="programId"
            onChange={formik.handleChange}
          />
        </FormControl>
        {ixAccounts.map((account, i) => {
          return (
            <FormControl key={i} mb={4}>
              <FormLabel htmlFor={account.name}>{account.name}</FormLabel>
              <Input
                id={`accounts.${account.name}`}
                name={`accounts.${account.name}`}
                type="text"
                placeholder="account pubKey"
                onChange={formik.handleChange}
              />
              <FormHelperText>
                {account.isMut && "isMutable"} {account.isSigner && "isSigner"}
              </FormHelperText>
            </FormControl>
          );
        })}
        <Text mb={2} fontWeight={"semibold"} color="yellowgreen">
          Arguments
        </Text>
        {ixArgs.map((arg, i) => {
          return (
            <FormControl key={i}>
              <FormLabel htmlFor={arg.name}>{arg.name}</FormLabel>
              <Input
                id={`args.${arg.name}`}
                name={`args.${arg.name}`}
                type="text"
                placeholder="Argument"
                onChange={formik.handleChange}
              />
              <FormHelperText>{arg.type}</FormHelperText>
            </FormControl>
          );
        })}
        <Button
          isLoading={isLoading}
          colorScheme="purple"
          mt={4}
          w="full"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default InstructionForm;
