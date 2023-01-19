import Button from "../Button/Button";
import styles from "./ProductCard.module.scss";

export default function ProductCard({ title, description, price, image }) {
  return (
    <div className={`${styles.products__card} card`}>
      <img className={styles.card__image} src={image} alt="" />
      <div className={styles.card__body}>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__description}>{description}</div>
      </div>
      <div className={styles.card__footer}>
        <div className={styles.card__price}>От {price} сумов</div>
        <div className={styles.card__button}>
          <Button text="Выбрать" />
        </div>
      </div>
    </div>
  );
}
