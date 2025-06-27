import { useState } from "react";
import Header from "../../components/header/Header";
import Select from "../../components/Select";

function MapaColaborativo() {
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [setFoto] = useState(null);

  const estados = [
    { value: "SP", label: "São Paulo" },
    { value: "RJ", label: "Rio de Janeiro" },
  ];

  const cidades = [
    { value: "São Paulo", label: "São Paulo" },
    { value: "Rio de Janeiro", label: "Rio de Janeiro" },
  ];

  return (
    <>
      <Header />

      <div className="container">
        <Select
          label="Estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          options={estados}
        />
        <Select
          label="Nome da Cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          options={cidades}
        />

        <div className="foto-area">
          <label htmlFor="fotoInput" className="foto-label">
            <div className="foto-icone">📷</div>
            <span>Adicionar Foto</span>
          </label>
          <input
            type="file"
            id="fotoInput"
            accept="image/*"
            onChange={(e) => setFoto(e.target.files[0])}
            className="foto-input"
          />
        </div>

        <div className="form-group">
          <button className="localizacao-btn">
            Marcar Localização <span className="icone-mapa">📍</span>
          </button>
        </div>

        <button className="btn-publicar">Publicar</button>
      </div>
    </>
  );
}

export default MapaColaborativo;
