import { useState } from "react";

export default function Ex4() {
  const [item, setItem] = useState("");
  const [lista, setLista] = useState([]);

  const addItem = () => {
    if (!item.trim()) return alert("Digite algo");
    setLista([...lista, item]);
    setItem("");
  };

  const removeItem = (index) => {
    const novaLista = lista.filter((_, i) => i !== index);
    setLista(novaLista)
  };

  return (
    <>
      <input onChange={(e) => setItem(e.target.value)} value={item} />
      <button onClick={() => addItem("")}>Adicionar item</button>
      <ul>
        {lista.map((element, index) => {
          return (
            <li key={index}>
              {element}{" "}
              <button onClick={() => removeItem(index)}>Remover item </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
