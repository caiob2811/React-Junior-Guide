import { useState } from "react";
import { LanguageC, ThemeC } from "../..";
import Language from "./Language";
import SwitcherTheme from "./SwitcherTema";
import TitutoCombinado from "./TituloCombinado";

export default function AppContextEx7() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("pt");

  return (
    <>
    <ThemeC.Provider value={{theme, setTheme}}>
      <LanguageC.Provider value={{language, setLanguage}}>
        <SwitcherTheme />
        <Language />
        <TitutoCombinado/>
      </LanguageC.Provider>
    </ThemeC.Provider>
    </>
  );
}
