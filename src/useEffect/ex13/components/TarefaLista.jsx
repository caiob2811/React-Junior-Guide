import "../pages/CrudTarefa"
import TarefaItem from "./TarefaItem"

export default function TarefaLista ({tarefas, onDelete, onEdit}) {
    return (
        <>
        <div>
            <ul>
                {tarefas.map((tarefa) => (
                    <li key={tarefa.id} style={{listStyleType:"none"}}>
                        <span>[{tarefa.completed ? "✅" : "❌"}] - </span>
                        <span>{tarefa.title}</span>
                        <TarefaItem id={tarefa.id} onDelete={onDelete} onEdit={onEdit} />
                    </li>
                ))}
            </ul>

        </div>
        </>
    )
}