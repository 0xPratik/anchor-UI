import React from "react";
// import ConnectElements from "react-connect-elements";
import TestCard from "./TestCard";
import { useAuth } from "../../context/IdlContext";
// type Props = {};

const TestConnect = (props) => {
  const { idl } = useAuth();
  console.log("I am coming from IDL", idl);

  return (
    <div className={`p-4 columns-3 gap-x-8 w-full font-inter  `}>
      {/* This is going to generate N number of Instructions Columns */}
      {idl.instructions.map((ix, i) => {
        return (
          <TestCard
            key={i}
            ixName={ix.name}
            ixAccounts={ix.accounts}
            ixArgs={ix.args}
          />
        );
      })}
    </div>
  );
};

export default TestConnect;
