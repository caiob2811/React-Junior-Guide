import { useState } from "react";
import BoasVindas from "./BoasVindas";
import FormNomeCompleto from "./FormNomeCompleto";
import { LastNameContext, NameContext } from "../..";

export default function AppContextEx3() {
  const [name, setName] = useState("");
  const [lastName, SetLastName] = useState("");

  return (
    <NameContext.Provider value={{ name, setName }}>
      <LastNameContext.Provider value={{lastName, SetLastName}}>
        <FormNomeCompleto />
        <BoasVindas />
      </LastNameContext.Provider>
    </NameContext.Provider>
  );
}
