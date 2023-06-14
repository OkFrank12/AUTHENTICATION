import React, { PropsWithChildren, createContext, useState } from "react";
import { iGlobal } from "../Utils/Interface";

export const GlobalContext = createContext({} as iGlobal);

export const GlobalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [actualName, setActualName] = useState<string>("");
  const [actualEmail, setActualEmail] = useState<string>("");
  const [actualPhone, setActualPhone] = useState<string>("");
  const [actualPassword, setActualPassword] = useState<string>("");
  const [actualConfirm, setActualConfirm] = useState<string>("");
  return (
    <GlobalContext.Provider
      value={{
        actualName,
        setActualName,
        actualEmail,
        setActualEmail,
        actualPassword,
        setActualPassword,
        actualPhone,
        setActualPhone,
        actualConfirm,
        setActualConfirm,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
