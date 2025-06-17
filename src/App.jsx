//import './App.css'
import Button from './components/Button'
import Select from './components/Select'
import { useState } from 'react';

function App() {

  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const estados = ['SP', 'RJ', 'MG', 'BA'];

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
