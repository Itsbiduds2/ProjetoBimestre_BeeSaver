import styles from './PlantaCard.module.css';

const PlantaCard = ({ nome }) => {
  return (
    <>
    <div className={styles.card}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/320px-Sunflower_sky_backdrop.jpg"
        alt="planta"
        className={styles.imagem}
      />
      <span className={styles.nome}>{nome}</span>
    </div>
    </>
    
  );
};

export default PlantaCard;
