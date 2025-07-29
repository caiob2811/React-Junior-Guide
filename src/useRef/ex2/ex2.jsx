import { useRef } from "react"

export default function Ex2 ()  {

    const countRef = useRef(0)

    const incrementar = () => {
        countRef.current += 1
    }

    const resetar = () => {
        countRef.current += 1
    }

    const valorAtual = () => {
        alert(`Valor atual: ${countRef.current}`)
    }

    return (
        <>
        <h2>Exercício com useRef</h2>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={resetar}>Resetar</button>
        <button onClick={valorAtual}>Valor atual</button>
        </>
    )
}