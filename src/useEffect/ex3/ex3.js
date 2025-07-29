import { useEffect, useState } from "react"

export default function Ex3Ef () {
    const [temporizador, setTemporizador] = useState(0)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTemporizador((c) => c + 1)
        },1000)

        return () => clearInterval(intervalo) // limpeza do do efeito colateral
    }, [])

    return (
        <>
            <p>Temporizador: {temporizador}</p>
        </>
    )
}

/* Situação	                 Dependência	               Resultado
Executar só 1x	                []	                          Executa no mount (quando o componente nasce)
Executar sempre que X muda	    [x]	                          Roda toda vez que x mudar
Limpar algo	                 return () => { ... }	          Desfaz o efeito anterior (intervalos, listeners etc) */