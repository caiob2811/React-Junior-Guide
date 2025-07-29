import { useState } from "react";
import CardProduto from "../components/CardProduto";
import { produtos } from "../produtos";

export default function ListaProdutos() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const timer = setTimeout(() => {
    setIsLoading(false) 
    return () => clearTimeout(timer)
  }, 1000)


  return (
    <div>
      <h2>Produtos</h2>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && hasError && <p>Erro ao buscar</p>}

      {!isLoading && !hasError && (
        <>
          <CardProduto produtos={produtos} />
        </>
      )}
    </div>
  );
}
