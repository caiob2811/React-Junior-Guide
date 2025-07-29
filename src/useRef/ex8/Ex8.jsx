import { useRef} from "react"

export default function Ex8 () {

    const inputNomeRef = useRef(null)

    const inputEmailRef = useRef(null)

    const handleClick = () => {
        if(inputNomeRef.current && inputEmailRef.current !== null) {
            alert(`Nome: ${inputNomeRef.current.value} Email: ${inputEmailRef.current.value}`)
            inputNomeRef.current.value = ""
            inputEmailRef.current.value = ""
            inputNomeRef.current.focus()
    }
}

    return (
        <>
            <label htmlFor="nome">Nome: </label>
            <input ref={inputNomeRef} type="text"/>
            <br/>
            <br/>
            <label htmlFor="email">Email: </label>
            <input ref={inputEmailRef} type="text" />
            <br/>
            <br/>
            <button onClick={handleClick}>Enviar</button>
        </>
    )
}