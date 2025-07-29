import { useContext } from "react";
import { LanguageC, ThemeC } from "../..";

export default function SwitcherTheme() {
  const { theme, setTheme } = useContext(ThemeC);

  const { language } = useContext(LanguageC);

  const mudarTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={mudarTheme}>
      {language === "pt"
        ? theme === "light"
          ? "Mudar para escuro"
          : "Mudar para claro"
        : theme === "light"
        ? "Switch to dark"
        : "Switch to light"}
    </button>
  );
}
