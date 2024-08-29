import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [nome, setNome] = useState("");

  return (
    <FormContext.Provider value={{ nome, setNome }}>
      {children}
    </FormContext.Provider>
  );
};
