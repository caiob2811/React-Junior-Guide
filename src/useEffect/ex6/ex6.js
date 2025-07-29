import { useEffect, useState } from "react"

export default function Ex6Ef () {

    const [largura, setLargura] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setLargura(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
   }, [])

    return (
        <>
           <h2>Largura atual da tela: {largura}px</h2>
        </>
    )
}
