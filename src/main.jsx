import { createRoot } from "react-dom/client";
import Home from "./pages/home";
import { FormContextProvider } from "./contexts/form-context";
import { ThemeContextProvider } from "./contexts/theme-context";

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <FormContextProvider>
      <Home />
    </FormContextProvider>
  </ThemeContextProvider>
);
