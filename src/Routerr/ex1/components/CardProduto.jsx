import { Link } from "react-router-dom";

export default function CardProduto ({produtos}) {
    return (
        <div>
            <ul>
                {produtos.map((produto) => (
                    <li key={produto.id} style={{listStyleType:"none"}}>
                        <p>Nome: {produto.nome}</p>
                        <Link to={`/produtos/${produto.id}`}>Ver detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}