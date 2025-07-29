import { useEffect, useState } from "react"

export default function Ex4Ef () {
    const [texto, setTexto] = useState("")

    useEffect(() => {
     const valorSalvo = localStorage.getItem("meuTexto") //pega o que foi salvo
     if(valorSalvo) setTexto(valorSalvo)
    },[])

    useEffect(() => {
        localStorage.setItem("meuTexto", texto) //atualiza e salva
    }, [texto])
    
    return (
        <>
            <input type="text"
            placeholder="Digite algo"
            onChange={(e) => setTexto(e.target.value)}
            value={texto}
            />
        </>
    )
}