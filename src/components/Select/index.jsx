import styles from './Select.module.css';

function Select({ label, options, value, onChange, tipo }) {
  const estilo =
    tipo === 'cidade'
      ? styles.cidade
      : tipo === 'estado'
      ? styles.estado
      : styles.default;

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <select className={styles.select} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Selecionar...</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
