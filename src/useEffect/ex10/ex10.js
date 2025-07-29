import { useEffect, useState } from "react";

export default function Ex10EF() {
  const [comentarios, setComentarios] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [msgErro, setMsgErro] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function FetchComments() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        if (!res.ok) {
          throw new Error("Erro ao buscar comentários");
        }
        const data = await res.json();
        setComentarios(data);
      } catch (error) {
        console.error("Não foi possível mostrar os comentários", error);
        setMsgErro("Não foi possível carregar os comentários");
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }
    FetchComments();
  }, []);

  const limparFilter = () => {
    //console.log("limpar")
    setFiltro("");
  };

  const comentariosFiltrados = comentarios.filter((comentario) =>
      comentario.name.toLowerCase().includes(filtro.toLowerCase())
    );

  return (
    <>
      <h2> Filtrar por título</h2>
      <label htmlFor="título">Filtrar por nome:</label>
      <input
        name="titulo"
        onChange={(e) => setFiltro(e.target.value)}
        style={{ marginLeft: "5px" }}
        value={filtro}
        placeholder="Digite o nome do título"
      />

      <button style={{ marginLeft: "5px" }} onClick={() => limparFilter()}>
        Limpar
      </button>

      {isLoading && <p>Carregando comentários...</p>}

      {hasError && <p style={{ color: "red" }}>{msgErro}</p>}

      {!isLoading && !hasError && (
        <div>
          {comentariosFiltrados.length > 0 ? (
            <ul>
              {comentariosFiltrados.map((comentario) => (
                <li key={comentario.id} style={{ listStyleType: "none" }}>
                  <span>{comentario.id} - </span>
                  <span> Nome: {comentario.name}</span>
                  <p>Email: {comentario.email}</p>
                  <p>Comentário: {comentario.body}</p>
                  <br />
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum comentário com esse filtro</p>
          )}
        </div>
      )}
    </>
  );
}
