export default function TarefaForm(
 { onAdd,
  form,
  setForm,
  onEditSave,
  isEditing}
) {
  return (
    <>
      <label htmlFor="Titulo">Título: </label>
      <input
        type="text"
        value={form.title}
        placeholder="Digite a tarefa"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        name="title"
      />
      <br />
      <br />

      <label htmlFor="concluido">Concluído: </label>
      <input
        type="text"
        value={form.completed}
        placeholder="True or false"
         onChange={(e) => setForm({ ...form, completed: e.target.value })}
        name="completed"
      />

      <button onClick={isEditing ? onEditSave : onAdd}>
        {isEditing ? "Salvar edição" : "Adicionar tarefa"}
      </button>
    </>
  );
}
