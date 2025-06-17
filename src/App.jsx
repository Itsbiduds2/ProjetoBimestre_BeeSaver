//import './App.css'
import Button from './components/Button'
import Select from './components/Select'
import { useState } from 'react';

function App() {

  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];
  

  return (
    <>
      <Button texto={"Orquideas"} tipo={"categoria"}/>      
      
      <br />

      <Select
        label="Estado"
        options={estados}
        value={estadoSelecionado}
        onChange={setEstadoSelecionado}
      />
    </>
  )
}

export default App
