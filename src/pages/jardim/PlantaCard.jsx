// src/pages/jardim/PlantaCard.jsx
import React from 'react';
import styles from './PlantaCard.module.css';
import fotoCard from "../../assets/foto-card.jpg";

const PlantaCard = ({ planta, onEdit, onDelete }) => {
  const nome = planta?.nome || 'Nenhuma';

  return (
    <div className={styles.card}>
      <img src={fotoCard} alt={`Foto ${nome}`} className={styles.imagem} />
      <div className={styles.cardBody}>
        <span className={styles.nome}>{nome}</span>
        <div className={styles.actions}>
          <button className={styles.editBtn} onClick={onEdit} aria-label="Editar planta">Editar</button>
          <button className={styles.deleteBtn} onClick={onDelete} aria-label="Excluir planta">Excluir</button>
        </div>
      </div>
    </div>
  );
};

export default PlantaCard;
