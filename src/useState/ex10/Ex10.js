import { useState } from "react";
import "./ex10.css";

import pessoas from "./pessoas";

export default function Ex10() {

  const [detalhes, setDetalhes] = useState(
    Array(pessoas.length).fill(false)
  );

  const verDetalhes = (index) => {
    const novaLista = [...detalhes]
   novaLista[index] = !novaLista[index]
    setDetalhes(novaLista)
  };

  return (
    <div className="container">
      {pessoas.map((pessoa, i) => {
        return (
          <div className="card" key={i}>
            <p>Nome: {pessoa.nome}</p>
            <button onClick={() => verDetalhes(i)}>
               {detalhes[i] ? "Ocultar detalhes" : "Mostrar detalhes"}
            </button>

           {detalhes[i] &&(
            <div className="detalhes">
                <p>Idade {pessoa.idade}</p>
                 <p>Cidade {pessoa.cidade}</p>
            </div>
            )} 
          </div>
        );
      })}
    </div>
  );
}
