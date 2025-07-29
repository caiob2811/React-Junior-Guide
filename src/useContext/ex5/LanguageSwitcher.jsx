import { useContext } from "react"
import { LanguageContext } from "../.."

export default function LanguageSwitcher () {

    const {language, setLanguage} = useContext(LanguageContext)

    const mudarLanguage = () => {
       setLanguage(language === "pt" ? "en" : "pt")
    }

    return (
        <>
            <button onClick={mudarLanguage}>
               {language === "pt" ? "English" : "Português"}
            </button>
        </>
    )
}