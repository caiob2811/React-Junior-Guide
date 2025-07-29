import { useRef, useState } from "react";

export default function Ex4() {
  const [tempo, setTempo] = useState(0);

  const intervaloRef = useRef(null);

  const iniciar = () => {
    if (intervaloRef.current !== null) return;
    intervaloRef.current = setInterval(() => {
      setTempo((prevTempo) => prevTempo + 1);
    }, 1000);
  };

  const pausar = () => {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
  };

  const resetar = () => {
    clearInterval(intervaloRef.current)
    intervaloRef.current = null;
    setTempo(0);
  };

  return (
    <>
      <h2>Tempo: {tempo}</h2>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={resetar}> Resetar</button>
    </>
  );
}
