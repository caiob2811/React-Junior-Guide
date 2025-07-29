import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { produtos } from "../produtos";

export default function DetalheProduto() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const encontrado = produtos.find((p) => p.id === parseInt(id))
        encontrado ? setProdutoSelecionado(encontrado) : setHasError(true)
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p>Carregando...</p>
      ) : hasError ? (
        <p>Erro ao buscar dados...</p>
      ) : (
        <>
          <div>
            <h2>Detalhes do produto</h2>
            <p>Nome: {produtoSelecionado.nome}</p>
            <p>Preço: {produtoSelecionado.preco.toFixed(2)} </p>
            <p>Descriçao: {produtoSelecionado.descricao} </p>
          </div>
          <button onClick={() => navigate(-1)}>Voltar</button>
        </>
      )}
    </div>
  );
}
