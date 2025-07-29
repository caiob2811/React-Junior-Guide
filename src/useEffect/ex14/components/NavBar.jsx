import {Link} from "react-router-dom"

export default function NavBar () {
    return (
        <nav style={{marginBottom:"20px"}}>
       {/*  <Link to={"/"} style={{marginRight: "20px"}}>Home</Link> */}
        <Link to={"/usuarios"}>Lista de usuários </Link>

        {/* <Link to={"/usuarios/:id"}>Detalhes do usuário</Link> */}
        </nav>
    )
}