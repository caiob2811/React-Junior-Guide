import { useState } from "react"

export default function ListaDeTarefas () {

    const [lista, setLista] = useState([])
    const [tarefa, setTarefa] = useState("")


    function addLista () {
        if(!tarefa.trim()) return alert("Digite uma tarefa")
        setLista([...lista, tarefa])
        setTarefa("")
    }

    return (
        <>
            <input type="text"
            placeholder="Digite uma tarefa"
            name="tarefa"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            />
            <button onClick={() => addLista()}>Adicionar</button>

            <ul>
                {lista.map((list, i) => {
                    return(
                        <li key={i}>
                            {list}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}