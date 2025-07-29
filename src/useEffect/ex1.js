import { useEffect, useState } from "react"

export default function Ex1 () {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log("O componente foi montado ou contador mudou:", contador)
    },[contador])

    return (
        <>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </>
    )
}