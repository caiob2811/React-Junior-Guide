import { Link, useNavigate, useParams } from "react-router-dom"

export default function ProdutosPorCategoria ({produtos}) {

    const {categoria} = useParams()

    const navigate = useNavigate()

    const filtraPorCategoria = produtos.filter((p) => p.categoria.toLowerCase() === categoria.toLowerCase())

    return (
        <>
        <div>
            <ul>
                 {filtraPorCategoria.length === 0 ? 
                 (<p style={{color: "red"}}>Nenhum produto para a categoria {categoria}</p>
                 ) : (
                filtraPorCategoria.map((filtrar) => (
                    <li key={filtrar.id} style={{listStyleType:"none"}}>
                        <p>Nome: {filtrar.nome}</p>
                        <div>
                        <img src={filtrar.img} alt={filtrar.nome}/>
                        </div>
                        <p>Descrição: {filtrar.descricao}</p>
                        <p>Categoria: {filtrar.categoria}</p>
                        <Link to={`/produtos/${filtrar.id}`} style={{textDecorationLine:"none"}}>Ver detalhes</Link>
                        <br/>
                        <br/>
                        <button onClick={() => navigate(-1)}>Voltar para produtos</button>
                        <br/>
                        <br/>
                    </li>
                 ))
                )}
            </ul>
        </div>
        </>
    )
}