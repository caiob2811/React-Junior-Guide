import { useState } from "react";

export default function ContadorSimples() {
  const [contagem, setContagem] = useState(0);

  return (
    <>
      <h1>Contagem: {contagem}</h1>
      <button onClick={() => setContagem(contagem + 1)}>Adicionar</button>
      <button onClick={() => setContagem(0)}>Zerar</button>
    </>
  );
}
