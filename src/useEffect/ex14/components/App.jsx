import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "../pages/Home"
import ListaUsuarios from "../pages/ListaUsuarios"
import DetalheUsuario from "../pages/DetalheUsuario"

export default function AppExercise () {
    return (
        <BrowserRouter>
        <NavBar/>
        <Routes>
            {/* <Route path="/" element={<Home/>}></Route> */}
            <Route path="/usuarios" element={<ListaUsuarios />}> </Route>
            <Route path="/usuarios/:id" element={<DetalheUsuario />}> </Route>
        </Routes>
        </BrowserRouter>
    )
}