import styles from "./About.module.scss";
import image from "../../image/about_image.jpg";

export default function About() {
  return (
    <div className={`${styles.about__container} container`}>
      <div className={`${styles.about__block} paper`}>
        <img className={styles.image} src={image} alt="" />
        <div className={`${styles.about__title} title`}>О нас</div>
        <div className={`${styles.about_text} text`}>
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
      </div>
    </div>
  );
}
