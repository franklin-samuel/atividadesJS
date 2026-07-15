import { useState } from 'react';

function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <p>{numero}</p>
      <button onClick={() => setNumero(numero + 1)}>+1</button>
    </div>
  );
}

export default Contador;
