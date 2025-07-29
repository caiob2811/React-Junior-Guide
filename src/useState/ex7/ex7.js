import { useState } from "react";

export default function Ex7() {

    const [form, setForm] = useState({
        nome: "",
        preco: "",
        produto: "",
        descricao: ""
    })

    const [produtos, setProdutos] = useState([])

    const [editIndex, setEditIndex] = useState(null)

    const handleKeyDown = (event) => {
        if( event.key === "Enter") {
            addProdutos()
        }
    }

    const addProdutos = () => {
        if(!form.nome || !form.preco || !form.produto || !form.descricao) return alert ("Digite algo!")
        setProdutos([...produtos, form])
        setForm({
            nome: "",
            preco: "",
            produto: "",
            descricao: ""
        })
    }

    const removerProdutos = (index) => {
        const removeProduto = produtos.filter((_, i) => i !== index)
        setProdutos(removeProduto)
    }

    const editarProdutos = (index) => {
        setForm(produtos[index])
        setEditIndex(index)
    }

    const salvarEdicao = () => {
       const editarLista = [...produtos]
       editarLista[editIndex] = form
       setProdutos(editarLista)
       setForm({nome: "", preco: "", produto: "", descricao: ""})
       setEditIndex(null)
    }

    const cancelarEdicao = () => {
        setForm({
            nome: "",
            preco: "",
            produto: "",
            descricao: ""
        })
        setEditIndex(null)
    }

  return (
    <>
    <h2>Cadastro de produtos</h2>
    <div>
        <label htmlFor="nome">Nome:</label>
        <br />
        <input name="nome" 
        value={form.nome} 
        onChange={(e) => setForm({...form, nome: e.target.value})}
        onKeyDown={handleKeyDown} />
        <br />
        <br />

        <label htmlFor="preco">Preço:</label>
        <br />
        <input name="preco" 
        value={form.preco}
        type="number"
        onChange={(e) => setForm({...form, preco: e.target.value})}
        onKeyDown={handleKeyDown} />
        <br />
        <br />

        <label htmlFor="produto">Produto:</label>
        <br />
        <input name="produto" 
        value={form.produto}
        onChange={(e) => setForm({...form, produto: e.target.value})}
        onKeyDown={handleKeyDown} />
        <br />
        <br />

        <label htmlFor="descricao">Descrição:</label>
        <br />
        <input name="descricao" 
        value={form.descricao}
        onChange={(e) => setForm({...form, descricao: e.target.value})}
        onKeyDown={handleKeyDown} />
        <br />
        <br />

        { editIndex === null ? 
        (<button onClick={addProdutos} style={{marginBottom: "20px"}}>Cadastrar produto</button>)
        : (
        <>    
        <button onClick={salvarEdicao}>
            Salvar Edição
        </button>

        <button  onClick={cancelarEdicao} style={{marginLeft: "10px"}}>
            Cancelar Edição
        </button>
        </>
    )
        }

        {editIndex !== null &&(
        <p style={{ color: "orange" }}>
            Você está editando o produto {editIndex + 1}
        </p>
        )}

        <ul style={{marginRight: "100px"}}>
            {produtos.map((element, index) => {
                return(
                    <li key={index} style={{listStyleType:"none"}}>
                        Pedido: {index + 1}
                        <br />
                        Nome: {element.nome},
                        <br />
                        Preço: R$ {element.preco},
                        <br />
                        Produto:{element.produto},
                        <br />
                        Descrição: {element.descricao}
                        <br />
                        <br />
                        <button onClick={() => removerProdutos(index)}>Remover Produto</button>
                        <button onClick={()=> editarProdutos(index)} style={{marginLeft: "10px"}}>Editar</button>
                        <br />
                        <br />
                    </li>
                )
            })}
        </ul>
    </div>
    </>
  )

  
    
}
