import React, { useState, useContext } from "react";
import JSONInput from "react-json-editor-ajrm";
import locale from "./en";
import { useAuth } from "../context/IdlContext";

type Props = {};

const JsonEditor = (props: Props) => {
  const [inputData, setinputData] = useState({
    version: "0.1.0",
    name: "brianxyz",
    instructions: [],
  });
  // const [programId, insetProgramId] = useState<string>("");
  const { idl, update, setProgramId, programId } = useAuth();

  return (
    <div>
      <input
        type="text"
        value={programId}
        onChange={(e) => setProgramId(e.target.value)}
        className="text-[#15f095] w-full bg-black p-2 focus:outline-none placeholder:text-[#15f095]"
        placeholder="Program Id"
      />
      <JSONInput
        onChange={(v: { jsObject: any }) => update(v.jsObject)}
        id="idleditor"
        waitAfterKeyPress={200}
        placeholder={inputData}
        confirmGood={false}
        onKeyPressUpdate={false}
        locale={locale}
        height="100%"
        colors={{
          background: "#000000",
        }}
        style={{
          contentBox: {
            fontSize: "16px",
            fontWeight: "500",
          },
          labels: {
            fontSize: "16px",
          },
        }}
      />
    </div>
  );
};

export default JsonEditor;
