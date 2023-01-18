import styles from "./BranchInfo.module.scss";
import image from "../../image/about_image.jpg";
import { useParams } from "react-router-dom";
import { branches } from "../../mock/branches";

export default function BranchInfo() {
  const { id } = useParams();
  const branchData = branches.find((v) => v.id === id);

  return (
    <div className={`${styles.branch__container} container`}>
      <div className={`${styles.branch__block} paper`}>
        <div className={`${styles.branch__title} title`}>{branchData.name}</div>
        <div className={`${styles.branch_text} text`}>
          «Zuzu Пицца» — это сервис доставки пиццы в Ташкенте. Мы доставляем
          пиццу и другую еду по Ташкенту в пределах Большой кольцевой дороги, а
          так же в районы: Сергели, ТТЗ, Югнакий, Хумаюн. Приготовление пиццы
          занимает в среднем 7-12 минут. При больших заказах общее время выпечки
          пиццы значительно сокращается, так что заказывайте много пицц и
          выпечка займет меньше времени. Время на доставку готовой пиццы до
          двери вашего дома или офиса составляет в среднем 15-30 минут. Таким
          образом, общее время доставки в среднем составляет 30-50 минут. Мы
          доставляем пиццу в специальных термо-сумках и во время доставки пицца
          остается горячей. Наш график работы с 10:00 до 23:00 каждый день, без
          выходных. Если вы хотите заказать доставку пиццы на раннее время, то
          необходимо уточнить у оператора такую возможность.
        </div>
        <img className={styles.image} src={image} alt="" />
        <ul className={styles.info}>
          <li className={styles.item}>
            <span className={styles.label}>Адрес: </span>
            <span className={styles.data}>{branchData.address}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Часы работы: </span>
            <span className={styles.data}>
              {branchData.from}-{branchData.to}
            </span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Номер телефона: </span>
            <span className={styles.data}>+998 71 200 77 77</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
