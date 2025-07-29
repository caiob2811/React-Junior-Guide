import { useContext } from "react"
import { LanguageContext } from "../.."

export default function Saudacao () {

    const {language} = useContext(LanguageContext)

    return (
        <>
            {language === "pt" ? 
            (<p>Olá, bem vindo</p>) : (<p>Hello, welcome</p>)
            }
        </>
    )
}