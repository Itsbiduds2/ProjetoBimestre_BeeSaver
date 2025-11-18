import styles from "./plantaCard.module.css";

function PlantaCard({ planta, onEdit, onDelete }) {
  return (
    <div className={styles.card}>
      <h3>{planta.nome}</h3>

      {planta.estado && <p>Estado: {planta.estado}</p>}
      {planta.cidade && <p>Cidade: {planta.cidade}</p>}
      {planta.nomePublicacao && <p>Publicação: {planta.nomePublicacao}</p>}

      <div className={styles.btns}>
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Excluir</button>
      </div>
    </div>
  );
}

export default PlantaCard;
