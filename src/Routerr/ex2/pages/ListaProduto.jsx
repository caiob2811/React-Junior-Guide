import { useEffect, useState } from "react";
import CardProduto from "../components/CardProduto";
import FormularioProduto from "../components/FormularioProduto";
import { Link } from "react-router-dom";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ListaProduto({ produtos, adicionarProduto }) {
  
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadingTime = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(loadingTime);
  }, []);

   let arrayCategorias = Array.from(new Set(produtos.map((p) => p.categoria)))

   const contadorPorCategoria = produtos.reduce((a,produto) => {

    const categoria = produto.categoria

    if(a[categoria]) {
        a[categoria] += 1
    } else {
        a[categoria] = 1
    }

    return a

   },{})

  return (
    <div>
        <nav style={{display:"flex"}}>
        <h3>Produtos</h3> 
        <Link to={"/carrinho"} style={{display:"flex", alignItems:"center", marginLeft:"5px", textDecorationLine:"none", color:"black"}}>
           <FontAwesomeIcon icon={faCartShopping}/>
        </Link>
        </nav>

      {isLoading && <p style={{ color: "green" }}>Carregando...</p>}
      {!isLoading && hasError && <p style={{ color: "red" }}>Erro...</p>}

      {!isLoading && !hasError && (
        <div>
        {Object.entries(contadorPorCategoria).sort((a, b) => b[1] - a[1])
        .map(([categoria, count]) => (
            <Link  to={`/categoria/${categoria}`} style={{marginRight: "10px", textDecorationLine:"none"}}>
                {categoria} ({count})
            </Link>
        ))}
          <FormularioProduto adicionarProduto={adicionarProduto} />
          <CardProduto produtos={produtos} />
        </div>
      )}
    </div>
  );
}
