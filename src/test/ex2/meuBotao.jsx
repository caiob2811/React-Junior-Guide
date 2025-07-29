import { useState } from "react";

export default function MeuBotao() {
  const [clicado, setClicado] = useState(false);

  return (
    <>
      <button onClick={() => setClicado(true)}>Clique aqui</button>
      {clicado && <p>Botão clicado!</p>}
    </>
  );
}
