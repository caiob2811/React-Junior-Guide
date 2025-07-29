import FormUsuario from "./FormularioUsuario";
import BoasVindas from "./BoasVindas";
import { UsuarioContext } from "../..";
import { useState } from "react";

export default function AppContextEx1() {
  const [nome, setNome] = useState("");

  return (
    <UsuarioContext.Provider value={{ nome, setNome }}>
      <FormUsuario />
      <BoasVindas />
    </UsuarioContext.Provider>
  );
}
