import { useEffect, useState } from "react";

export default function Ex9Ef() {
  const [posts, setPosts] = useState([]);
  const [visivel, setVisivel] = useState(3);
 
  useEffect(() => {
    async function Api() {
      try {
        const response = (await fetch("https://jsonplaceholder.typicode.com/posts"));
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }
    Api();
  }, []);

  const addPosts = () => {
        setVisivel((prev) => prev + 3)
  };

  return (
    <>
      <h3>Carregar post de 3 em 3</h3>
        <div>
          <ul>
            {posts.slice(0, visivel).map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      
      {visivel < posts.length ? (
       
         <button onClick={() => addPosts()}>
            Carregar mais
        </button>) : (
            <h2>Todos os posts foram carregados com sucesso</h2>
        )}
    
    </>
  );
}
