import { useState } from 'react';

function App() {

 const [mostrar, setMostrar] = useState(true) //controla o estado do texto

  return (

    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar Texto" : "Mostrar Texto"} {/* texto do botão baseado no texto */}
      </button>
      {mostrar && <p>Texto Vísivel</p>}
    </div>
  );
}

export default App;
