import { useState } from "react";
import { ThemeContext2 } from "../..";
import ThemeSwitcher2 from "./ThemeSwitcher";
import Titulo from "./Titulo";

export default function AppContextEx6 () {

    const [theme, setTheme] = useState("light")

    return (
        <ThemeContext2.Provider value={{theme, setTheme}}>
            <ThemeSwitcher2/>
            <Titulo/>
        </ThemeContext2.Provider>
    )
}