import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={`${styles.contacts__container}  container`}>
      <div className={`${styles.contacts__block}  paper`}>
        <div className={`${styles.contacts__title}  title`}>Контакты</div>
        <div className={styles.call_center}>
          <span className={styles.label}>Единный call-центр: </span>
          <a className={styles.phone} href="tel:+998712007777">
            +998 71 200 77 77
          </a>
          .
        </div>
        <div className={styles.contact}>
          Вы можете написать нам
          <a className={styles.botLink} href="zuzu.uz">
            @ZuzuPizzaSupport_bot
          </a>{" "}
          также вы можете звонить по номеру
          <a className={styles.phone} href="tel:+998712005400">
            {"   "} +998712005400
          </a>
          .
        </div>
      </div>
    </div>
  );
}
