import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ListaProduto from "./pages/ListaProduto";
import DetalheProduto from "./pages/DetalheProduto";
import { useState } from "react";
import { produtos as listaProdutos } from "./data/produtos";
import ProdutosPorCategoria from "./components/ProdutosPorCategoria";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Carrinho from "./components/Carrinho";

export default function AppR2 () {
    const [carrinho, setCarrinho] = useState([])
    const [produtos, setProdutos] = useState(listaProdutos)

    const adicionarProduto = (produtos) => {
        setProdutos((prevProdutos) => [...prevProdutos, produtos])
    }

    const adicionarAoCarrinho = (produto) => {
        setCarrinho((prev) => [...prev, produto])
        return toast.info(`Você adicionou o(a) ${produto.nome} ao carrinho`)
    }

    const removerDoCarrinho = (id) => {
        const produtoRemovido = carrinho.find((p) => p.id === id);

        if (produtoRemovido) {
            toast.warning(`Você removeu o(a) ${produtoRemovido.nome} do carrinho`);
        }

        setCarrinho((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <>
        <ToastContainer/>
            <BrowserRouter>
             <Routes>
                <Route path="/produtos-diversificados" element={<ListaProduto produtos={produtos} adicionarProduto={adicionarProduto}/>}> </Route>
                <Route path="/produtos/:id" element={<DetalheProduto produtos={produtos} adicionarAoCarrinho={adicionarAoCarrinho} />} />
                <Route path="/categoria/:categoria" element={<ProdutosPorCategoria produtos={produtos}/>}> </Route>
                <Route path="/carrinho" element={<Carrinho carrinho={carrinho} produto={produtos} removerDoCarrinho={removerDoCarrinho} setCarrinho={setCarrinho}/>}> </Route>
             </Routes>
            </BrowserRouter>
            
        </>
    )
}