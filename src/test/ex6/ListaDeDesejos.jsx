import { useState } from "react";

export default function ListaDeDesejos() {
  const [desejo, setDesejo] = useState("");
  const [lista, setLista] = useState([]);

  function adicionarDesejo() {
    if (!desejo.trim()) return;
    setLista([...lista, desejo]);
    setDesejo("");
  }

  function removerDesejo(id) {
    const novaLista = lista.filter((_, list) => list !== id);
    setLista(novaLista);
  }

  return (
    <div>
      <input
        placeholder="Adicione um desejo"
        value={desejo}
        onChange={(e) => setDesejo(e.target.value)}
      />
      <button onClick={adicionarDesejo}>Salvar</button>

      <ul>
        {lista.map((item, i) => (
          <>
            <li key={i}>{item}</li>
            <button onClick={() => removerDesejo(i)}>Remover</button>
          </>
        ))}
      </ul>
    </div>
  );
}
