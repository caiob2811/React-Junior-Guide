import { useState } from "react";
import { LanguageContext } from "../..";
import LanguageSwitcher from "./LanguageSwitcher";
import Saudacao from "./Saudacao";

export default function AppContextEx5 () {

    const [language, setLanguage] = useState("pt")

    return (
        <>
            <LanguageContext.Provider value={{language, setLanguage}}>
                <h1>Context de idioma</h1>
                <LanguageSwitcher/>
                <Saudacao/>
            </LanguageContext.Provider>
        </>
    )
}