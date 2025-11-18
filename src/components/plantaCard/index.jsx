import styles from "./plantaCard.module.css";

function PlantaCard({ planta, onEdit, onDelete }) {
  const nome = planta?.nome || 'Nenhuma';
  return (
    <div className={styles.card}>
      <img src={fotoCard} alt={`Foto ${nome}`} className={styles.imagem} />
      <div className={styles.cardBody}>
        <h3><span className={styles.nome}>{nome}</span></h3>

      {planta.estado && <p>Estado: {planta.estado}</p>}
      {planta.cidade && <p>Cidade: {planta.cidade}</p>}
      {planta.nomePublicacao && <p>Publicação: {planta.nomePublicacao}</p>}
        <div className={styles.actions}>
          <button className={styles.editBtn} onClick={onEdit} aria-label="Editar planta">Editar</button>
          <button className={styles.deleteBtn} onClick={onDelete} aria-label="Excluir planta">Excluir</button>
        </div>
      </div>
    </div>
  );
}

export default PlantaCard;
