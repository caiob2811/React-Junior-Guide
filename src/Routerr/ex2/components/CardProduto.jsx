import { Link } from "react-router-dom";

export default function CardProduto ({produtos}) {
    return (
        <div>
            <ul>
                {produtos.map((produto) => (
                    <li key={produto.id} style={{listStyleType:"none"}}>
                        <p>Nome: {produto.nome}</p>
                        <div>
                            <img src={produto.img} alt={produto.nome}/>
                        </div>
                        <p>Descrição: {produto.descricao}</p>
                        <p>Categoria: {produto.categoria}</p>
                        <Link to={`/produtos/${produto.id}`} style={{textDecorationLine:"none"}}>Ver detalhes</Link>
                        <br/>
                        <br/>
                    </li>
                ))}
            </ul>
        </div>
    )
}