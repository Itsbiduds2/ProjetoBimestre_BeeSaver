import styles from './select.module.css';

const Select = ({ options, value, onChange, name, id }) => {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
