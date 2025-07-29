export default function Produto({produto, comprarProduto}) {

    return (
        <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", width: "250px" }}>
            <img src={produto.imgUrl} alt={produto.nome} style={{ width: "100%", height: "auto" }}/>
            <div>
            <p>Nome: {produto.nome}</p>
            <p>Preço: {produto.preco.toFixed(2)}</p>
            <p>Descrição: {produto.descrição}</p>
            
            {produto.emEstoque && (
                <button onClick={() => comprarProduto(produto)}>Comprar</button>
            )}
            
            </div>
        </div>
    )
}