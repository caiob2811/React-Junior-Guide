import { useContext } from "react";
import { SobrenomeContext } from "../..";

export default function BoasVindasSobrenome () {

    const {sobrenome} = useContext(SobrenomeContext)

    return (
        <>
        {sobrenome && <p>Bem vindo Sr./Sra. {sobrenome}!</p>}
        </>
    )
}