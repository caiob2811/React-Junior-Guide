import { useRef, useState } from "react"

export default function Ex5 () {

    const [nome, setNome] = useState("")

    const [nomeSalvo, setNomeSalvo] = useState("")

    const nomeAnteriorRef = useRef("")
  
    const handleClick = () => {
        nomeAnteriorRef.current = nomeSalvo
        setNomeSalvo(nome)
        setNome("")
    }


    return (
        <>
        <input 
        type="text"
        placeholder="Digite o seu nome"
        name="nome"  
        onChange={(e) => setNome(e.target.value)}  
        value={nome}
          
        />

        <button onClick={handleClick}>Salvar</button>

        <p>Nome salvo: {nomeSalvo}</p>
        <p>Nome anterior: {nomeAnteriorRef.current} </p>
        </>
    )
}