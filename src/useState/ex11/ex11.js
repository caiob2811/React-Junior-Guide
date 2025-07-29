import { useState } from "react";
import "./ex11.css";
import livros from "./livros";

export default function Ex11() {
  const [favoritos, setFavoritos] = useState([])
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false)
  

  const favoritar = (id) => {
    if(favoritos.includes(id)) {
      setFavoritos(favoritos.filter((itemId) => itemId !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  const filtrarFavoritos = () => {
    setMostrarFavoritos(!mostrarFavoritos)
  }

  return (
    <>
      {livros.map((livro) => (
        <div className="livro" key={livro.id}>
          <span>📘 {livro.titulo}</span>
          <button onClick={()=> favoritar(livro.id)} style={{marginLeft: "10px"}}>
            {favoritos.includes(livro.id) ? "❤️" : "🤍" }
          </button>
        </div>
      ))}

      <button onClick={filtrarFavoritos} style={{marginTop:"20px"}}>Mostrar favoritos</button>

      {mostrarFavoritos && (
        <div style={{marginTop:"10px"}}> 
          <h3>Livros Favoritos</h3>
          {livros.filter((livro) => favoritos.includes(livro.id)).map((livro) => (  
                <p key={livro.id}>
                    📚 {livro.titulo}
                </p>
            ))}
            {favoritos.length === 0 && <p>Nenhum livro favorito ainda</p> }
        </div>
      )}
    </>
  );
}
