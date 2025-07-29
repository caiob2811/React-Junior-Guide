import { useRef, useState} from "react";

export default function Ex9() {

    const [count, setCount] = useState(0)

    const countRef = useRef(null)

    const incrementar = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const resetar = () => {
        countRef.current = count
        setCount(0)
    }

    const voltar = () => {
       let v = count 
       v = countRef.current
       setCount(v)

       countRef.current = null
    }

  return (
    <>
      <h2>Contador: {count}</h2>
      <p>Valor anterior: {countRef.current}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={resetar}>Resetar</button>
      <button onClick={voltar} disabled={countRef.current === null}>Voltar</button>

    </>
  );
}
