import { useState } from "react";
import "./ex2.css";

export default function Ex2() {
  const [ativo, setAtivo] = useState(false);

  return (
    <div className={ativo ? "vermelho" : "azul"}>
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? "Mudar cor para azul" : "Mudar para vermelho"}
      </button>
    </div>
  );
}
