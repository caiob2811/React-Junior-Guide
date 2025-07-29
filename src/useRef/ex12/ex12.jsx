import { useEffect, useRef, useState } from "react";

export default function Ex12() {
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);

  const inputRef = useRef(null);
  const ultimoComentarioRef = useRef(null);


  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    ultimoComentarioRef.current?.scrollIntoView({behavior: "smooth"})
  }, [comentarios])


  const add = () => {
    if(!comentario.trim()) return alert("Digite algo")
    setComentarios((prev) => [...prev, comentario])
    setComentario("")
  }

  const enter = () => {
     if(comentario.toLowerCase() === "limpar") {
        setComentarios([])
        
    } else (
        setComentarios((prev) => [...prev, comentario])
    )
    setComentario("")
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
        <label>Comentário:</label>
        <input 
        ref={inputRef}
        type="text"
        placeholder="Digite um comentário"
        name="comentario"
        onChange={(e) => setComentario(e.target.value)}
        value={comentario}
        style={{marginLeft:"5px"}}
        onKeyDown={(e) => e.key === "Enter" && enter()}
        />

        <button onClick={add}>Adicionar Comentário</button>

        <ul>
            {comentarios.map((c, i) => (
                <li key={i}>
                    <span>- Comentário {i + 1}: </span>
                    <span>{c}</span>
                </li>
            ))}
        </ul>

    </div>
  );
}
