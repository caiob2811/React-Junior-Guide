import { useRef} from "react"

export default function Ex6 () {

    const contadorRef = useRef(0)

    const contarClique = () => {
       contadorRef.current += 1
    }

    const mostrarCliques = () => {
       alert(`Você clicou ${contadorRef.current} vezes`)
    }

    return (
        <>
        <button onClick={(contarClique)}>Clique aqui</button>

        <button onClick={mostrarCliques}>Mostrar cliques</button>
        
        </>
    )
}

