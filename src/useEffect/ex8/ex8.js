import { useEffect, useState } from "react";

export default function Ex8f() {
  const [posts, setPosts] = useState([]);
  const [carregado, setCarregado] = useState(false);
  const [texto, setTexto] = useState("")

  const mostrarPosts = () => {
    if(!carregado) {
        setCarregado(true)
    } else {
        setTexto("Não foi possível carregar os posts")
    }
}

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = (await fetch("https://jsonplaceholder.typicode.com/posts"));
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao carregar os posts", error);
        
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <h2>Posts: </h2>
      <button onClick={()=> mostrarPosts()}>
       Mostrar posts
     </button>

     <p>{texto}</p>
      
      {carregado && (
        <div>
          <ul>
            {posts.splice(0,3).map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
