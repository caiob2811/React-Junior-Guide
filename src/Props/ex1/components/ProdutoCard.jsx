export default function ProdutoCard({ nome, preco, descricao, img }) {
  return (
    <>
    
    <div style={{display: "flex", justifyContent: "start" , alignItems: "center"}}>
        <img src={img} alt={nome} />
        <div style={{ marginLeft: "10px"}}>
        <p style={{marginLeft: "10px"}}> Nome: {nome} </p>
        <p style={{marginLeft: "10px"}}> Preço: R$ {preco} </p>
        <p style={{marginLeft: "10px"}}> Descrição: {descricao} </p>
        </div>
    </div>
    </>
  );
}
