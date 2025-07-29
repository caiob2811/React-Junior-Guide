import "./ex9.css"
import { useState } from "react"

export default function Ex9 () {
    const [temaEscuro, setTemaEscuro] = useState(false)

    const mudarTema = () => {
        setTemaEscuro(!temaEscuro)
    }
    
    return (
        <>
            <div className={temaEscuro ? "escuro" : "claro"}>
                <button onClick={mudarTema}>
                    {temaEscuro ? "Mudar para claro" : "Mudar para escuro"}
                </button>
            </div>
        </>
    )
}