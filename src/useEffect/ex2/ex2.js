import { useEffect, useState } from "react"

export default function Ex2Ef () {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        document.title = `Você clicou ${contador} vezes`
    }, [contador]) // só roda somente quando o contador mudar
    
    return (
        <>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Clicar</button>
        </>
    )
}