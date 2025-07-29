import { useState } from "react";
import "./ex5.css";
import produtos from "./produtos.js";

export default function Ex5() {
  const [p, setProdutos] = useState(produtos);
  const [detalhes, setDetalhes] = useState(false);

  const filtrarProdutosCom100 = () => {
    const novosProdutos = produtos.filter((elemento) => elemento.preco > 100);
    setProdutos(novosProdutos);
  };

  const verDetalhes = () => {
    setDetalhes(!detalhes);
  };

  return (
    <>
      {p.map((e, i) => (
        <div className="card" key={i}>
          <h3>{e.nome}</h3>
          <p>Preço: R$ {e.preco.toFixed(2)}</p>
          {detalhes && <p>{e.detalhes}</p>}
        </div>
      ))}

      <button onClick={verDetalhes}>Ver detalhes</button>
      <br />
      <br />
      <button onClick={filtrarProdutosCom100}>
        Filtrar produtos acima de R$100
      </button>
    </>
  );
}
