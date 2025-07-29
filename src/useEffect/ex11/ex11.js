import { useState, useEffect } from "react";

export default function Ex11Ef() {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({
    name: "",
    body: "",
  });
  const [edit, setEdit] = useState(null);

  const [msgError, setMsgError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchApi() {
      try {
        const api = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );

        if (!api.ok) {
          throw new Error("Erro ao buscar comentários ");
        }
        const data = await api.json();
        setComments(data);
      } catch (error) {
        console.error("Erro", error);
        setMsgError("Erro ao carregar");
        setHasError(true);
      } finally {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
    fetchApi();
  }, []);

  const addComments = () => {
    const newComment = {...form, id: comments.length + 1}
    setComments([...comments, newComment]);
    setForm({ name: "", body: "" });
  };

  const removeComments = (index) => {
    const remove = comments.filter((_, i) => i !== index);
    setComments(remove);
  };

  const editComments = (id) => {
    const commentsToEdit = comments.find((c) => c = id)
    setForm(commentsToEdit);
    setEdit(id);
  };

  const saveEdition = () => {
    const saveList = [...comments];
    saveList[edit] = form;
    setComments(saveList);
    setForm({ name: "", body: "" });
    setEdit(null);
  };

  const cancelEdition = () => {
    setForm({ name: "", body: "" });
    setEdit(null);
  };

  return (
    <>
      <h2>Crud de comentários</h2>
      <label htmlFor="comentario">Título: </label>
      <input
        type="text"
        placeholder="Digite o título"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        name="name"
        value={form.name}
      />

      <br />
      <br />
      <label htmlFor="comentario">Comentário: </label>
      <input
        type="text"
        placeholder="Digite um comentário"
        onChange={(e) => setForm({ ...form, body: e.target.value })}
        name="body"
        value={form.body}
      />

      {edit === null ? (
        <button onClick={addComments} style={{ marginLeft: "5px" }}>
          Adicionar comentário
        </button>
      ) : (
        <>
          <button onClick={saveEdition} style={{ marginLeft: "5px" }}>
            Salvar edição
          </button>

          <button onClick={cancelEdition} style={{ marginLeft: "5px" }}>
            Cancelar edição
          </button>
        </>
      )}

      {edit !== null && (
        <p style={{color:"orange"}}>Você está editando comentário do número: {edit + 1}</p>
      )}

      {isLoading && <p style={{ color: "green" }}>Carregando...</p>}

      {hasError && <p style={{ color: "red" }}>{msgError}</p>}

      {!isLoading && !hasError && (
        <div>
          <ul>
            {comments.map((comment, index) => (
              <li key={comment.id} style={{ listStyleType: "none" }}>
                <span>{comment.id} - </span>
                <span>{comment.name}</span>
                <p>Comentário: {comment.body}</p>
                <button onClick={() => removeComments(index)}>Remover</button>
                <button
                  onClick={() => editComments(index)}
                  style={{ marginLeft: "5px" }}
                >
                  Editar
                </button>
                <br></br>
                <br />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
