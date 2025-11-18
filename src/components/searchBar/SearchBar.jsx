import styles from './SearchBar.module.css';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Pesquise por plantas..."
        className={styles.input}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <span className={styles.icon} role="img" aria-label="buscar">🔍</span>
    </div>
  );
};

export default SearchBar;
