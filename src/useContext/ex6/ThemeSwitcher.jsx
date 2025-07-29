import { useContext } from "react"
import { ThemeContext2 } from "../.."

export default function ThemeSwitcher2 () {

    const {theme, setTheme} = useContext(ThemeContext2)

    const mudarTema = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <>
        <button onClick={mudarTema} style={{backgroundColor: theme === "light" ? "#fff " : "#000", 
            color: theme === "light" ? "#000" : "#fff"}}>
            {theme === "light" ? "Trocar para escuro" : "Trocar para claro" }
        </button>
        </>
    )
}