import { useRef, useState } from "react";

export default function Ex10() {
  const [tempoVisivel, setTempoVisivel] = useState(0);

  const tempoRef = useRef(0);

  const intervaloRef = useRef(null);

  const iniciar = () => {
    if (intervaloRef.current !== null) return;
    intervaloRef.current = setInterval(() => {
      setTempoVisivel((prevT) => prevT + 1);
    }, 1000);
  };

  const pausar = () => {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
  };

  const resetar = () => {
      clearInterval(intervaloRef.current);
      tempoRef.current = tempoVisivel
    setTempoVisivel(0);
  };

  const duracao = () => {
    alert(`Ultima duração registrada: ${tempoRef.current} segundos`)
  }

  return (
    <>
      <h2>Tempo: {tempoVisivel}</h2>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={resetar}> Resetar</button>
      <button onClick={duracao}>Mostrar última duração</button>
    </>
  );
}
