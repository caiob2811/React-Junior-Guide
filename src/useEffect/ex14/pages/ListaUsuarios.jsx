import { useState, useEffect } from "react";
import CardUsuario from "../components/CardUsuario";

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function apiUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Erro ao carregar");
        }
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Error", error)
        setHasError(true)
      } finally {
        const timer = setTimeout(() => {
            setIsLoading(false)
        },1000)
        return () => clearTimeout(timer)
      }
    }
    apiUsers()
  }, []);




  return (
    <div>
        <h2>Users</h2>
       {isLoading && <p style={{color:"green"}}>Carregando...</p>}
       {isLoading && hasError && <p style={{color:"red"}}>Erro</p>}
       {!isLoading && !hasError && (
        <CardUsuario usuarios={usuarios}
        />
       )}
    </div>
  );
}
