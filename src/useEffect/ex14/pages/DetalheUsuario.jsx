import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetalheUsuario() {
  const { id } = useParams();

  const navigate = useNavigate()

  const [usuario, setUsuario] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchUsuarioPorId() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok) {
          throw new Error("Erro na API");
        }
        const data = await response.json();
        setUsuario(data);
      } catch (error) {
        console.error("Error", error);
        setHasError(true);
      } finally {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
    fetchUsuarioPorId();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p style={{ color: "green" }}>Carregando...</p>
      ) : hasError ? (
        <p style={{ color: "red" }}>Erro ao buscar dados...</p>
      ) : (
        <>
        <div>
          <h2>Detalhes do usuário</h2>
          <p>Nome: {usuario.name}</p>
          <p>Email: {usuario.email}</p>
          <p>Tel: {usuario.phone}</p>
          <p>Site: {usuario.website}</p>
          <p>Cidade: {usuario.address.city}</p>
        </div>
        <button onClick={()=> navigate(-1)}>Voltar</button>
        </>
      )}
    </div>
  );
}
