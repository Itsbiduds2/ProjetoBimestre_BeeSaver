import React, { useEffect, useState } from "react";
import PlantaCard from "../../components/plantaCard";
import Header from "../../components/header/Header"
import SearchBar from "../../components/searchBar/SearchBar";
import * as api from "../../services/api";
import styles from './Jardim.module.css';

function Jardim() {
  const [plantas, setPlantas] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    async function carregar() {
      const dados = await api.getPlantas();
      setPlantas(dados);
    }
    carregar();
  }, []);

  const plantasFiltradas = plantas.filter((p) =>
    p.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

   const [planta, setPlanta] = useState([]);

  function handleEdit(planta) {
    alert("Editar planta: " + planta.nome);
  }

  function handleDelete(id) {
    alert("Excluir planta ID: " + id);
  }
  return (
    <>
      <Header/>
        <div className={styles.header}>
              <button className={styles.backBtn} onClick={() => window.history.back()}>
                ←
              </button>
              <h1 className={styles.title}>Jardim</h1>
      </div>
      <SearchBar value={pesquisa} onChange={setPesquisa} />

      {plantasFiltradas.length > 0 ? (
        plantasFiltradas.map((planta) => (
          <PlantaCard
            key={planta.id}
            planta={planta}
            onEdit={() =>
              api.updatePlanta(planta.id, { nome: prompt("Novo nome:") })
            }
            onDelete={() => api.deletePlanta(planta.id)}
          />
        ))
      ) : (
        <p>Nenhuma planta encontrada</p>
      )}
    </>
  );
}

export default Jardim;
