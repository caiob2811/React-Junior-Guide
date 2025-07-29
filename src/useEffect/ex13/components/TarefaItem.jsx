export default function TarefaItem({id, onDelete, onEdit}) {

    return (
        <>
        <button onClick={() => onEdit(id)} style={{marginLeft:"5px"}}>Editar</button>
        <button onClick={() => onDelete(id)} style={{marginLeft:"5px"}}>Remover</button>
        </>

    )
}