import { Link } from "react-router-dom";

export default function CardUsuario({ usuarios }) {
  return (
    <div>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id} style={{ listStyleType: "none" }}>
            <span>{usuario.id} - </span>
            <span>Nome: {usuario.name}</span>
            <p>Email: {usuario.email}</p>
            <p>Cidade: {usuario.address.city}</p>

            <Link to={`/usuarios/${usuario.id}`}>Ver detalhes</Link>

            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
