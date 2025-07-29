import { useState } from "react";
import BoasVindasSobrenome from "./BoasVindasSobrenome";
import FormSobrenome from "./FormSobrenome";
import { SobrenomeContext } from "../..";

export default function AppContextEx2 () {

    const [sobrenome, setSobrenome] = useState("")

    return (
        <SobrenomeContext.Provider value={{sobrenome, setSobrenome}}>
        <FormSobrenome/>
        <BoasVindasSobrenome/>
        </SobrenomeContext.Provider>
    )
}