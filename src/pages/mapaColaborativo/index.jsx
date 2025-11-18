import React, { useState } from 'react';
import Header from "../../components/header/Header";
import * as api from "../../services/api";
import styles from './mapaColaborativo.module.css';
import Button from "../../components/button";
import Select from "../../components/Select";

function MapaColaborativo() {
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [nome, setNome] = useState('');
  const [localizacao, setLocalizacao] = useState(''); // Corrigido

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

  const handlePublicar = async (e) => {
    e.preventDefault();

    console.log("a")
    if (!nome.trim() || !estado || !cidade) {
      alert("Preencha todos os campos.");
      return;
    }

    const novaPlanta = {
      nome: nome,
      estado: estado,
      cidade: cidade,
      nomePublicacao: nome,
      localizacao: localizacao 
    };

    try {
        const res = await fetch(`${API_URL}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(planta),
      });
      console.log("b")
    } catch (erro) {
    console.log("alguma coisa")
  }}

  return (
    <>
      <Header />

      <div className={styles.header}>
        <button className={styles.backBtn} onClick={() => window.history.back()}>
          ←
        </button>
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

        <Select
          options={estados}
          value={estado}
          onChange={(e) => {
            setEstado(e.target.value);
            setCidade("");
          }}
        />

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
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
          />
          <span className={styles.pinIcon}>📍</span>
        </div>

        <button
          texto="Publicar"
          tipo="publicar"
          onClick={handlePublicar}
          style={{backgroundColor: "#d4a12a",
                  color: "white",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  cursor: "pointer",
                  marginTop: "10px",
                  transition: "backgroundColor 0.3s"}}>
          Publicar
        </button>

      </div>
    </>
  );
}

export default MapaColaborativo;
