import { useContext } from "react"
import { ThemeContext } from "../.."

export default function ThemeSwitcher() {

    const {theme, setTheme} = useContext(ThemeContext)
   
    const mudarTema = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <>
          <button onClick={mudarTema}>Mudar tema</button>
        </>
    )
}