import Header from "../../components/header/Header";
import React, { useState } from 'react';
import styles from './MapaColaborativo.module.css';
import Button from "../../components/button";
import Select from "../../components/select";

function MapaColaborativo() {
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [nome, setNome] = useState(''); // Novo estado

  const estados = [
    { value: "", label: "Estado" },
    { value: "sp", label: "São Paulo" },
    { value: "rj", label: "Rio de Janeiro" },
  ];

  const cidadesPorEstado = {
    sp: [
      { value: "", label: "Nome da Cidade" },
      { value: "spCapital", label: "São Paulo" },
      { value: "campinas", label: "Campinas" },
    ],
    rj: [
      { value: "", label: "Nome da Cidade" },
      { value: "rjCapital", label: "Rio de Janeiro" },
      { value: "niteroi", label: "Niterói" },
    ],
  };

  return (
    <>
      <Header />

      <div className={styles.header}>
        <button className={styles.backBtn}>←</button>
        <h1 className={styles.title}>Mapa Colaborativo</h1>
      </div>

      <div className={styles.container}>

        <input
          type="text"
          className={styles.nomeInput} 
          placeholder="Nome da Publicação"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />

        <Select
          options={estados}
          value={estado}
          onChange={(e) => {
            setEstado(e.target.value);
            setCidade("");
          }}
        />
        <br />

        <Select
          options={cidadesPorEstado[estado] || [{ value: "", label: "Nome da Cidade" }]}
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        <div className={styles.fotoBox}>
          <label className={styles.fotoLabel}>
            <input type="file" className={styles.inputFile} />
            <div className={styles.fotoContent}>
              <span className={styles.plus}>+</span>
              <p>Adicionar Foto</p>
            </div>
          </label>
        </div>

        <div className={styles.locationBox}>
          <input
            type="text"
            className={styles.locationInput}
            placeholder="Marcar Localização"
          />
          <span className={styles.pinIcon}>📍</span>
        </div>

        <Button texto="Publicar" tipo="publicar" />
      </div>
    </>
  );
}

export default MapaColaborativo;
