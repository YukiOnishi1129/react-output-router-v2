import styles from "./style.module.css";

export const TextArea = ({
  disabled = false,
  value,
  placeholder,
  onChange,
}) => (
  <textarea
    disabled={disabled}
    className={styles.text}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);
