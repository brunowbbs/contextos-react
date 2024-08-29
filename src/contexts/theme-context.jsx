import { createContext, useState } from "react";

//1. CRIAR O CONTEXTO
export const ThemeContext = createContext();

//2. CRIAR O PROVIDER
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
