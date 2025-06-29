import Header from '../../components/header/Header';
import styles from './Jardim.module.css';
import PlantaCard from './PlantaCard';
import SearchBar from './SearchBar';

const Jardim = () => {
  const plantas = [1, 2, 3, 4]; 

  return (
    <>

    <Header/>
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backBtn}>←</button>
        <h1 className={styles.title}>Jardim</h1>
      </header>

      <SearchBar />

      <button className={styles.meuJardimBtn}>meu jardim</button>

      <h2 className={styles.subtitulo}>Plantas</h2>

      <div className={styles.lista}>
        {plantas.map((_, idx) => (
          <PlantaCard key={idx} nome="Nenhuma" />
        ))}
      </div>
    </div>
    </>
  );
};

export default Jardim;
