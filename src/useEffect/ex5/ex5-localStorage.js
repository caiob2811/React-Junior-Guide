import { useEffect, useState } from "react";

export default function Ex5Ef() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

useEffect(() => {
  const tarefasSalvas = localStorage.getItem("minhasTarefas");
  try {
   if(tarefasSalvas) {
    const listaContidas = tarefasSalvas.JSON.parse(tarefasSalvas)
    Array.isArray(listaContidas)
    setTarefas(listaContidas)
   }
  } catch (error) {
    console.error("Erro ao mostrar tarefas",error)
    
  }
}, []);
  
  useEffect(() => {
    localStorage.setItem("minhasTarefas", JSON.stringify(tarefas)) //atualiza e salva
    
  }, [tarefas])

  const addTarefas = () => {
    if(!tarefa.trim()) return
    setTarefas([...tarefas, tarefa])
    setTarefa("")
  }

  return (
    <>
      <input
        type="text"
        placeholder="Digite algo"
        onChange={(e) => setTarefa(e.target.value)}
        value={tarefa}
      />

      <button onClick={addTarefas}>Salvar Tarefas</button>
      {tarefas.length === 0 && <p>Nenhuma Tarefa adicionada</p>}

      <ul>
        {tarefas.map((e,i) => (
            <li key={i}>
                {e}
            </li>
        ))}
      </ul>
    </>
  );
}