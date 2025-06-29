import styles from './PlantaCard.module.css';
import fotoCard from "../../assets/foto-card.jpg";


const PlantaCard = ({ nome }) => {
  return (
    <>
    <div className={styles.card}>
      <img src={fotoCard} alt="Foto PLanta" className={styles.imagem}/>
      <span className={styles.nome}>{nome}</span>
    </div>
    </>
    
  );
};

export default PlantaCard;
