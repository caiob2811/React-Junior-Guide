import { useState, useEffect } from "react";
import TarefaForm from "../components/TarefaForm";
import TarefaLista from "../components/TarefaLista";

export default function CrudTarefa() {
  const [tarefas, setTarefas] = useState([]);
  const [form, setForm] = useState({
    title: "",
    completed: "",
  });

  const [edit, setEdit] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function apiTarefas() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar dados");
        }
        const data = await response.json();
        setTarefas(data);
      } catch (error) {
        console.error("Error:", error);
        setHasError(true);
      } finally {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer)
      }
    }
    apiTarefas();
  }, []);

  const onAdd = () => {
    const newTarefa = { ...form, id: tarefas.length + 1 };
    setTarefas([...tarefas, newTarefa]);
    setForm({ title: "", completed: "" });
  };

  const remover = (id) => {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novaLista);
  };

  const onEdit = (id) => {
    const tarefaParaEditar = tarefas.find((t) => t.id === id);
    setForm({
      title: tarefaParaEditar.title,
      completed: tarefaParaEditar.completed,
    });
    setEdit(id);
  };

  const onEditSave = () => {
    const novaLista = tarefas.map((t) =>
      t.id === edit
        ? { ...t, title: form.title, completed: form.completed === "true" }
        : t
    );
    setTarefas(novaLista);
    setForm({
      title: "",
      completed: "",
    });
    setEdit(null);
  };

  return (
    <>
      <TarefaForm
        onAdd={onAdd}
        form={form}
        setForm={setForm}
        onEditSave={onEditSave}
        isEditing={edit !== null}
      />
      {isLoading && <p>Carregando tarefas...</p>}
      {!isLoading && !hasError && (
        <TarefaLista tarefas={tarefas} onDelete={remover} onEdit={onEdit} />
      )}
    </>
  );
}
