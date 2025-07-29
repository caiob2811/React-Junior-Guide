import { useEffect, useRef, useState } from "react";

export default function Ex11() {
    
    const [mensagem, setMensagem] = useState("")
    const [mensagens, setMensagens] = useState([])

    const inputRef = useRef(null)

    const fimDasMensagensRef = useRef(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    useEffect(() => {
        fimDasMensagensRef.current?.scrollIntoView({behavior: "smooth"})
    }, [mensagem])

    const mandarMensagem = () => {
        if(!mensagem.trim()) return
        setMensagens((prev) => [...prev, mensagem])
        setMensagem("")
    }

  return (
    <div
      style={{
        maxHeight: "300px",
        overflowY: "auto",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <ul>
        {mensagens.map((msg,i) => (
            <li key={i}>
                {msg}
            </li>
        ))}
      </ul>

      <input
        ref={inputRef}
        type="text"
        placeholder="Digite aqui um item"
        name="item"
        onChange={(e) => setMensagem(e.target.value)}
        value={mensagem}
        onKeyDown={(e) => e.key === "Enter" && mandarMensagem()}
      />
      <button onClick={mandarMensagem}>Adicionar</button>
    </div>
  );
}
