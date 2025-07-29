import { useContext, useState } from "react";
import { LastNameContext, NameContext } from "../..";

export default function FormNomeCompleto() {
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");

  const { setName } = useContext(NameContext)
  const { SetLastName } = useContext(LastNameContext)

    const add = () => {
        if(inputName.trim() && inputLastName.trim()) {
            setName(inputName)
            SetLastName(inputLastName)
            setInputName("")
            setInputLastName("")
        }
    }

  return (
    <>
      <input
        type="text"
        placeholder="Digite o seu nome"
        onChange={(e) => setInputName(e.target.value)}
        value={inputName}
      />

      <input
        type="text"
        placeholder="Digite o seu sobrenome"
        onChange={(e) => setInputLastName(e.target.value)}
        value={inputLastName}
      />

      <button onClick={add}>Clicar</button>
    </>
  );
}
