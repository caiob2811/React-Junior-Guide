import { useContext } from "react"
import { ThemeContext2 } from "../.."

export default function Titulo () {

    const {theme} = useContext(ThemeContext2)

    return (
        <div style={{backgroundColor: theme === "light" ? "#fff" : "#000",
            color: theme === "light" ? "#000" : "#fff",
            padding: "2rem",
            marginTop: "20px"
         }}>

        <p>
            Oi
        </p>

        </div>
    )
}