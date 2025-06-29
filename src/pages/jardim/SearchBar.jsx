import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <>
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Pesquise por plantas..."
        className={styles.input}
      />
      <span className={styles.icon}>🔍</span>
    </div>
    </>
  );
};

export default SearchBar;
