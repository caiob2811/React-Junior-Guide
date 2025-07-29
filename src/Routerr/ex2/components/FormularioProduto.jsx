import { useState } from "react";

export default function FormularioProduto({ adicionarProduto }) {
  const [form, setForm] = useState({
    nome: "",
    preco: "",
    descricao: "",
    categoria: "",
    estoque: "",
    img: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const novoFormulario = {
      id: Date.now(),
      nome: form.nome,
      preco: parseFloat(form.preco),
      descricao: form.descricao,
      categoria: form.categoria,
      estoque: parseInt(form.estoque),
      img: form.img,
    };

    adicionarProduto(novoFormulario);

    setForm({
      nome: "",
      preco: "",
      descricao: "",
      categoria: "",
      estoque: "",
      img: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onSubmit} style={{ marginBottom: "20px", marginTop:"20px" }}>
      <input
        type="text"
        placeholder="Digite o nome do produto"
        style={{ marginLeft: "5px" }}
        name="nome"
        onChange={handleChange}
        value={form.nome}
        required
      />

      <input
        type="number"
        placeholder="Digite o preço do produto"
        style={{ marginLeft: "5px" }}
        name="preco"
        step={0.01}
        onChange={handleChange}
        value={form.preco}
        required
      />

      <input
        type="text"
        placeholder="Digite a descricao do produto"
        style={{ marginLeft: "5px" }}
        name="descricao"
        onChange={handleChange}
        value={form.descricao}
        required
      />

      <input
        type="text"
        placeholder="Digite a categoria do produto"
        style={{ marginLeft: "5px" }}
        name="categoria"
        onChange={handleChange}
        value={form.categoria}
        required
      />

      <input
        type="number"
        placeholder="Digite o estoque do produto"
        style={{ marginLeft: "5px" }}
        name="estoque"
        onChange={handleChange}
        value={form.estoque}
        required
      />

      <input
        type="text"
        placeholder="Digite a url do produto"
        style={{ marginLeft: "5px" }}
        name="img"
        onChange={handleChange}
        value={form.img}
        required
      />

      <button type="submit" style={{ marginLeft: "5px" }} disabled={!form.nome || !form.preco || !form.img}>Adicionar</button>
    </form>
  );
}
