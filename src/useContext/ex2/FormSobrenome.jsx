import { useContext, useState } from "react"
import { SobrenomeContext } from "../.."

export default function FormSobrenome () {

    const {setSobrenome} = useContext(SobrenomeContext)

    const [inputSobrenome, setInput] = useState("")

     const addSobrenome = () => {
        if(inputSobrenome.trim()) {
            setSobrenome(inputSobrenome)
            setInput("")
        }
    }

    return (
        <>
        <input
        type="text"
        placeholder="Digite o sobrenome"
        value={inputSobrenome}
        onChange={(e) => setInput(e.target.value) }
        />

        <button onClick={addSobrenome}>Adicionar</button>
        </>
    )
}