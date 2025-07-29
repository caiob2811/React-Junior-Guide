import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaProdutos from "./pages/ListaProdutos";
import DetalheProduto from "./pages/DetalheProduto";

export default function App () {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/produtos" element={<ListaProdutos/> }> </Route>
            <Route path="/produtos/:id" element={<DetalheProduto/> }> </Route>
        </Routes>
        </BrowserRouter>

    )
}