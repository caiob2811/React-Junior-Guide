import { useState } from "react"
import ThemeSwitcher from "./ThemeSwitcher"
import { ThemeContext } from "../.."
import Tela from "./Tela"

export default function AppContextEx4() {

    const [theme, setTheme] = useState("light")

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <ThemeSwitcher/>
            <Tela/>
        </ThemeContext.Provider>
    )
}