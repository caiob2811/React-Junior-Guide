import { useContext } from "react";
import { UsuarioContext } from "../..";

export default function BoasVindas() {
  const { nome } = useContext(UsuarioContext);

  return (
    <>
      {nome && <p>Bem-vindo, {nome}!</p>}
    </>
  );
}
