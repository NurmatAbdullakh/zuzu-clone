import { Burger, Cart, Location, Man, ArrowBottom } from "../../utils/icons";
import styles from "./Header.module.scss";
import Logo from "../../image/Logo.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <div className={styles.left}>
          <div className={styles.burger}>
            <Burger />
          </div>
          <Link to="/">
            <img className={styles.image} src={Logo} alt="" />
          </Link>
          <Button icon={<Location />} text="Toshkent" />
        </div>
        <div className={styles.right}>
          <Button icon={<Cart />} text="Корзина" />
          <Button text={<ArrowBottom />} />
          <Button icon={<Man />} text="Войти" />
        </div>
      </div>
    </header>
  );
}
