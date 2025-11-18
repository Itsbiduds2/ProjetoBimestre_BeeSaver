import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import styles from './Jardim.module.css';
import * as api from '../../services/api';
import SearchBar from '../../components/searchBar/SearchBar';
import PlantaCard from '../../components/plantaCard';

const Jardim = () => {
 
  return (
    <>
      <Header />
      
      <div className={styles.container}>
        <header className={styles.header}>
          <button className={styles.backBtn} onClick={() => window.history.back()}>←</button>
          <h1 className={styles.title}>Jardim</h1>
        </header>

        <SearchBar value={search} onChange={setSearch} />

        <button className={styles.meuJardimBtn}>meu jardim</button>

        <h2 className={styles.subtitulo}>Plantas</h2>

       

      </div>
    </>
  );
};

export default Jardim;
