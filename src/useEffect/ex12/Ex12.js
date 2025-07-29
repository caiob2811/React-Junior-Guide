import { useState, useEffect } from "react"
import TaskItem from "./TaskItem"

export default function Ex12Ef () {

    const [tarefas, setTarefas] = useState([])
    const [filtro, setFiltro] = useState("todos")
    const [lista, setLista] = useState(10)

    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        async function ApiTasks () {
            try {
                const api = await fetch("https://jsonplaceholder.typicode.com/todos")
                if(!api.ok) {
                    throw new Error("Erro ao carregar dados")
                }
                const data = await api.json()
                setTarefas(data)
            } catch (error) {
                console.error("Erro:", error)
                setHasError("Erro ao buscar tarefas")
            } finally {
                const loadingTime = setTimeout(() => {
                    setIsLoading(false)
                }, 1000);
                return () => clearTimeout(loadingTime)
            }
        }
        ApiTasks()
    }, [])


    const checkFiltros = tarefas.filter((tarefa) => {
        if(filtro === "concluida") return tarefa.completed
        if(filtro === "naoConcluida") return !tarefa.completed
        return true
    })

    const carregarMais = () => {
        setLista((prev) => prev + 3)
    }

    return (
        <div style={{backgroundColor:"lightblue"}}>
            <h2>Tarefas</h2>
            <span>Filtros:</span>
            <button onClick={() => setFiltro("todos")} style={{marginLeft:"5px"}}>Todos</button>
            <button onClick={() => setFiltro("concluida")} style={{marginLeft:"5px"}}>Concluidas</button>
            <button onClick={() => setFiltro("naoConcluida")} style={{marginLeft:"5px"}}>Não concluidas</button>
            <br/>
            <br/>
            {isLoading && <p>Carregando...</p>}
                {!isLoading && !hasError && (
                    <ul>
                        {checkFiltros.slice(0, lista).map((tarefa) => (
                            <li key={tarefa.id} style={{listStyleType:"none"}}>
                                <TaskItem
                                    title={tarefa.title}
                                    completed={tarefa.completed}
                                />
                            </li>
                        ))}
                    </ul>
                )}

                {!isLoading && !hasError && lista < checkFiltros.length && (
                        <button onClick={carregarMais} style={{marginTop:"10px"}}>Carregar mais</button>
                )}
        </div>
        
    )
}