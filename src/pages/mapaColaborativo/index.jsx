import Header from "../../components/header/Header";
import React, { useState } from 'react';
import styles from './MapaColaborativo.module.css';
import Button from "../../components/button";

function MapaColaborativo() {
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

  return (
    <>
    
    <Header/>
    <div className={styles.container}>
      <select
        className={styles.select}
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
      >
        <option value="">Estado</option>
        <option value="sp">São Paulo</option>
        <option value="rj">Rio de Janeiro</option>
      </select>

      <select
        className={styles.select}
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      >
        <option value="">Nome da Cidade</option>
        {estado === 'sp' && (
          <>
            <option value="spCapital">São Paulo</option>
            <option value="campinas">Campinas</option>
          </>
        )}
        {estado === 'rj' && (
          <>
            <option value="rjCapital">Rio de Janeiro</option>
            <option value="niteroi">Niterói</option>
          </>
        )}
      </select>

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

      <Button texto="Publicar" tipo="publicar"/>
    </div>

    

    </>
  );
}

export default MapaColaborativo;
