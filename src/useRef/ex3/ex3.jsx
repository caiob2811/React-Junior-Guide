import { useEffect, useRef, useState } from "react";

export default function Ex3() {
  const [count, setCount] = useState(0);

  const renderCount = useRef(0); // guarda quantos renders aconteceram

  useEffect(() => {
    renderCount.current += 1; // incrementa a cada render
  });

  return (
    <>
      <p>Contador: {count}</p>
      <p>Este componente renderizou: {renderCount.current} vezes</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Incrementar</button>
    </>
  );
}
