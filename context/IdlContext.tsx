import { createContext, useContext, ReactNode, useState } from "react";

interface accountType {
  name: string;
  isMut: boolean;
  isSigner: boolean;
}

interface argsType {
  name: string;
  type: string;
}
type ix = {
  name: string;
  accounts: Array<accountType>;
  args: Array<argsType>;
};

type typeObj = {
  kind: string;
  fields: Array<any>;
};

type account = {
  name: string;
  type: typeObj;
};

type Field = {
  name: string;
  type: string;
};

interface IDLType {
  version: string;
  name: string;
  instructions: Array<ix>;
  accounts: Array<Field>;
}

type authContextType = {
  idl: IDLType;
  update: (data: object) => void;
  programId: string;
  setProgramId: (id: string) => void;
};

const authContextDefaultValues: authContextType = {
  idl: {
    version: "",
    name: "",
    instructions: [],
    accounts: [],
  },
  update: () => {},
  programId: "",
  setProgramId: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [idl, setIdl] = useState<IDLType>({
    version: "",
    name: "",
    instructions: [],
    accounts: [],
  });

  const [programId, setProgramId] = useState<string>("");

  const update = (data: IDLType) => {
    setIdl(data);
  };

  const setProgramIdFunction = (id: string) => {
    setProgramId(id);
  };

  const value = {
    idl: idl,
    update: update,
    programId: programId,
    setProgramId: setProgramIdFunction,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
