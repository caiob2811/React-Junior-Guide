import { useNavigate } from "react-router-dom";
import { produtos } from "../data/produtos";
import { ToastContainer, toast } from 'react-toastify';

export default function Carrinho({ carrinho, removerDoCarrinho, setCarrinho }) {
  const navigate = useNavigate();

  const valorTotalCarrinho = carrinho.reduce((a, produto) => {
    return a + parseFloat(produto.preco);
  }, 0);

  const finalizarCompra = () => {
    toast.success(`Compra finalizada com sucesso, no valor de R$${valorTotalCarrinho}`);
    setCarrinho([]);
    navigate("/produtos-diversificados")
    
  };

  return (
    <>
      <div>
        <h2>Carrinho</h2>
        <ul>
          {carrinho.map((produto) => (
            <li key={produto.id} style={{ listStyleType: "none" }}>
              <p>Nome: {produto.nome}</p>
              <div>
                <img src={produto.img} alt={produto.nome} />
              </div>
              <p>Preço: {produto.preco}</p>
              <button onClick={() => removerDoCarrinho(produto.id)}>
                Remover
              </button>
              <br />
              <br />
            </li>
          ))}
        </ul>
      </div>
      <br />
      <br />
      <p>Valor total: {valorTotalCarrinho}</p>
      <button onClick={() => navigate(-2)}>Voltar</button>
      <button onClick={finalizarCompra}>Finalizar Compra</button>
       <ToastContainer/>
    </>
    
  );
}
