import { useContext } from "react";
import { FormContext } from "../../../../contexts/form-context";
import { ThemeContext } from "../../../../contexts/theme-context";

export default function Form() {
  const { nome, setNome } = useContext(FormContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <form
      style={{
        background: theme === "light" ? "#fff" : "#555",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1
        style={{
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        FORMULARIO DE LOGIN - {nome}
      </h1>

      <input
        style={{
          background: theme === "light" ? "#000" : "#fff",
        }}
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
    </form>
  );
}
