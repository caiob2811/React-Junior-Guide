import { useEffect, useState } from "react"

export default function Ex7f () {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        async function fetchUsuarios () {
            try {
                const responseApi = await fetch("https://jsonplaceholder.typicode.com/users")
                const dados = await responseApi.json()
                setUsuarios(dados)
            } catch (error) {
                console.error("Erro ao mostrar dados da api", error)
            }
        }
        fetchUsuarios()
    }, [])

    return (
        <div>
            <h2>Usuários:</h2>
           <ul>
            {usuarios.splice(0,3).map((usuario) => (
                <li key={usuario.id} style={{listStyleType: 'none'}}>
                    <p>Nome de usuário: {usuario.username},</p>
                    <p>Nome completo: {usuario.name},</p>
                    <p> E-mail: {usuario.email},</p>
                </li>
            ))}
           </ul>
        </div>
    )
}

