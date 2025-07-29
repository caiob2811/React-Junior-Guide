import { useState } from "react"

export default function Ex8 () {
    const [count, setCount] = useState(0)
    const [texto, setTexto] = useState("")

    const incrementar = () => {
        if(count < 10) {
            setCount(count + 1)
        }
       
       if(count + 1 === 10) {
        setTexto("Valor máximo atingido")
       } else {
        setTexto("")
       }
    }

    const decrementar = () => {
        if(count > 0) {
            setCount(count - 1)
        }

        if(count - 1 === 0) {
            setTexto("Valor mínimo atingido")
         } else {
            setTexto("")
       }
    }

    const resetar = () => {
        setCount(0)
        setTexto("")
        
    }
    
    return (
        <>
        <h1>Contador com limite</h1>
        <div>
            <h3>Contador: {count}</h3>  
            {texto && <p>{texto}</p>} 
    
            <div>
                <button onClick={incrementar} disabled={count >=10}>Incrementar</button>

                <button onClick={decrementar} style={{marginLeft: "10px"}} disabled={count <= 0}>Decrementar</button>

                 <button onClick={resetar} style={{marginLeft: "10px"}}>Resetar</button>
            </div>
    
            
                
             
           
        </div>
        </>
    )
}