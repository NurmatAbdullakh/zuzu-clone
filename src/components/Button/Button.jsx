import styles from './Button.module.scss'

export default function Button({ icon, text }) {
    return (
        <button className={styles.button}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.text}>
                {text}
            </div>
        </button>
    )
}
