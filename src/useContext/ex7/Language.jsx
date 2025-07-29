import { useContext } from "react"
import { LanguageC} from "../.."

export default function Language () {
     const {language, setLanguage} = useContext(LanguageC)

     const mudarSaudacao = () => {
        setLanguage(language === "pt" ? "en" : "pt")
     }

    return (
        <button style={{marginLeft:"5px"}} onClick={mudarSaudacao}>
            {language === "pt" ? "Mudar para inglês" : "Switch to portuguese"}
        </button>
    )
}