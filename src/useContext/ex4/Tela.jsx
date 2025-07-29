import { useContext } from "react"
import { ThemeContext } from "../.."

export default function Tela () {

    const {theme} = useContext(ThemeContext)

    return (
        <div style={{backgroundColor: theme === "light" ? "#fff" : "#000",
            color: theme === "light" ? "#000" : "#fff",
            padding: "2rem",
            marginTop: "20px"
        }}>
        Tema : {theme}
        </div>
    )
}