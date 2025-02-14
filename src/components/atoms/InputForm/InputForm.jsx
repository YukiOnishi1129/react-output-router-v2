import styles from "./style.module.css";

export const InputForm = ({ inputValue, placeholder, onChange, onKeyDown }) => (
  <input
    className={styles.input}
    type="text"
    placeholder={placeholder}
    value={inputValue}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);
