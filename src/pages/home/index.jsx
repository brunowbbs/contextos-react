import { useContext } from "react";
import Form from "./components/form";
import { FormContext } from "../../contexts/form-context";
import { ThemeContext } from "../../contexts/theme-context";

export default function Home() {
  const { nome } = useContext(FormContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#555",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>
        Pagina inicial - {nome} -{theme}
      </h1>

      <Form />

      <button onClick={() => setTheme("dark")}>TEMA DARK</button>
      <button onClick={() => setTheme("light")}>TEMA LIGHT</button>
    </div>
  );
}
