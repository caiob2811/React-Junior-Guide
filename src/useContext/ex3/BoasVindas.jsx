import { useContext } from "react"
import { LastNameContext, NameContext } from "../.."

export default function BoasVindas () {

    const {name} = useContext(NameContext)
    
    const {lastName} = useContext(LastNameContext)

    return (
        <>
        {name && lastName && <p>Olá, {name} {lastName}</p>}
        </>
    )
}