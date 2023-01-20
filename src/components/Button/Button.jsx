import styles from "./Button.module.scss";

export default function Button({ onButtonClick, icon, text }) {
  return (
    <button onClick={onButtonClick} className={styles.button}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>{text}</div>
    </button>
  );
}
