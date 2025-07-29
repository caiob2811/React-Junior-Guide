import { useState } from "react";
export default function Ex3() {

 const [texto, setTexto] = useState("")

  return (
    <>
    <input onChange={(e) => setTexto(e.target.value)} value={texto} maxLength={15}/>
    <p>Você digitou {texto.length} caracteres</p>
    <button onClick={() => setTexto("")}>Limpar</button>
    </>
  );
}
