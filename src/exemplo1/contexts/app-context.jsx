import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  function incrementar() {
    setCount(count + 1);
  }

  return (
    <AppContext.Provider value={{ count: count, incrementar }}>
      {children}
    </AppContext.Provider>
  );
};
