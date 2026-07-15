import { useState } from 'react';

function Interruptor() {
  const [ligado, setLigado] = useState(false);

  return (
    <div>
      <p>{ligado ? 'Ligado' : 'Desligado'}</p>
      <button onClick={() => setLigado(!ligado)}>Alternar</button>
    </div>
  );
}

export default Interruptor;
