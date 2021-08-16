import React from 'react';
import ComponenteFuncional from './components/ComponenteFuncional';
import ComponenteDeClase from './components/ComponenteDeClase'

function App() {
  return (
    <React.Fragment>
      <h1>Componente Funcional</h1>
      <ComponenteFuncional numero1={10} numero2={5} />
      <br />
      <h1>Componente de Clase</h1>
      <ComponenteDeClase numero1={32} numero2={21} />
    </React.Fragment>
  );
}

export default App;
