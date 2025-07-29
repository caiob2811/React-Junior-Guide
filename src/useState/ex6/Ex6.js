import { useState } from "react";

export default function Ex6() {
  const [form, setForm] = useState({
    nome: "",
    preco: "",
    detalhes: "",
  });

  const [produtos, setProdutos] = useState([]);

  const addProdutos = () => {
    if (!form.nome || !form.detalhes || !form.preco) return alert("Digite algo")
    setProdutos([...produtos, form]);
    setForm({
        nome: "",
        preco: "",
        detalhes:""
    });
  };

  const removeProdutos = (index) => {
    const newProdutos = produtos.filter((_, i) => i !== index);
    setProdutos(newProdutos);
  };

  return (
    <>
        <label>Nome:</label>
        <br />
        <input
          name="nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />
        <br />
        <br />
        <label>Preço:</label>
        <br />
        <input
          name="preco"
          value={form.preco}
          type="number"
          onChange={(e) => setForm({ ...form, preco: e.target.value })}
        />
        
        <br />
        <br />
        <label>Detalhes:</label>
        <br />
        
        <input
          name="detalhes"
          value={form.detalhes}
          onChange={(e) => setForm({ ...form, detalhes: e.target.value })}
        />
        <br />
        <br />
        <button onClick={addProdutos}>Cadastrar produto</button>
        <ul>
          {produtos.map((element, i) => {
            return (
              <li key={i}>
                Nome:{element.nome},
                <br />
                Preço: R${element.preco},
                <br />
                Detalhes: {element.detalhes}
                <br />
                <br />
                <button onClick={() => removeProdutos(i)}>Remover</button>
              </li>
            );
          })}
        </ul>
    </>
  );
}
