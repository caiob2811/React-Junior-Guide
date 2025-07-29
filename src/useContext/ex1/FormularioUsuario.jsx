import { useContext, useState } from "react";
import { UsuarioContext } from "../..";

export default function FormUsuario() {
  const { setNome } = useContext(UsuarioContext);
  const [inputNome, setInputNome] = useState("");

  const salvarNome = () => {
    if (inputNome.trim()) {
      setNome(inputNome);
      setInputNome("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Digite o nome"
        value={inputNome}
        onChange={(e) => setInputNome(e.target.value)}
      />
      <button onClick={salvarNome}>Salvar</button>
    </>
  );
}
