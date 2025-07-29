import { useState } from "react";

export default function FormularioMensagem() {
  const [mensagemInput, setMensagemInput] = useState("");
  const [mensagemFinal, setMensagemFinal] = useState("");

  const handleSubmit = () => {
    setMensagemFinal(mensagemInput);
    setMensagemInput("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite sua mensagem"
        value={mensagemInput}
        onChange={(e) => setMensagemInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Enviar</button>

      {mensagemFinal && <p>Mensagem enviada: {mensagemFinal}</p>}
    </div>
  );
}
