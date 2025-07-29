import { useRef } from "react"

export default function Ex1 () {

    const inputRef = useRef(null)
    const tempoInicialRef = useRef(null)

    const handleClick = () => { 
        inputRef.current.focus()
    }

    const tempo = () => {
        if(tempoInicialRef.current === null) {
            tempoInicialRef.current = Date.now()
        } else {
            const agora = Date.now()
            const diferenca = (agora - tempoInicialRef.current) / 1000
            alert(`Tempo decorrido: ${diferenca} segundos`)
            tempoInicialRef.current = null
        }
    }
   
    return (
        <>
        <input ref={inputRef} type="text"/>
        <button onClick={handleClick}>Focar</button>
        <button onClick={tempo}>Contar Tempo</button>
        </>
    )
}