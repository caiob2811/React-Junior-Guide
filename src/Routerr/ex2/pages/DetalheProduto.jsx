import { useState, useEffect } from "react";
import {Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function DetalheProduto({produtos, adicionarAoCarrinho}) {
  const { id } = useParams();

  const navigate = useNavigate();

  const [produtosSelecionado, setProdutoSelecionados] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const detalhes = produtos.find((p) => p.id === parseInt(id))
      if(detalhes)  setProdutoSelecionados(detalhes) 
      if(!detalhes) return navigate("/produtos-diversificados")
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [id, navigate, produtos]);

  const comprar = (produtosSelecionado) => {
    if(produtosSelecionado.estoque > 0) {
        toast.success(`Você comprou ${produtosSelecionado.nome} por R$${produtosSelecionado.preco}`)
    } else {
        toast.error("Não foi possível realizar a compra")
    }
  }

  return (
    <div>
      {isLoading ? (
        <p>Carregando detalhes...</p>
      ) : hasError ? (
        <p>Erro ao carregar detalhes, tente novamente...</p>
      ) : (
        <>
          <div>
            <h2>Detalhes dos produto</h2>
            <img src={produtosSelecionado.img} alt={produtosSelecionado.nome} />
            <p>Nome: {produtosSelecionado.nome}</p>
            <p>Preço: {produtosSelecionado.preco.toFixed(2)}</p>
            <p>Estoque: {produtosSelecionado.estoque > 0 ? "Disponível" : "Indisponível" }</p>
            <button onClick={() => comprar(produtosSelecionado)} disabled={produtosSelecionado.estoque === 0}>Comprar</button>
            <br/>
            <br/>
            <Link to={"/carrinho"} onClick={()=> adicionarAoCarrinho(produtosSelecionado)} style={{textDecorationLine:"none"}}>Adicionar ao carrinho</Link>
            <br/>
            <br/>
          </div>
          <button onClick={() => navigate(-1)}>Voltar</button>
        </>
      )}
      <ToastContainer/>
    </div>
  );
}
