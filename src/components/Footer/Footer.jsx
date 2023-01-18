import styles from "./Footer.module.scss";
import logo from "../../image/Logo.png";
import { Facebook, Instagram, Telegram } from "../../utils/icons";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const links = [
    {
      htext: "Филиалы",
      href: "/branches",
    },
    {
      htext: "О нас",
      href: "/about",
    },
    {
      htext: "Контакты",
      href: "/contacts",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`${styles.top} container`}>
        <Link className={styles.logo} to="/">
          <img src={logo} alt="" />
        </Link>
        <nav className={styles.menu}>
          <ul className={styles.list}>
            {links.map((v) => (
              <li className={styles.item}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                  to={v.href}
                >
                  {v.htext}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={`${styles.bottom} container`}>
        <div className={styles.text}>©Zuzu 2005 - 2021 All rights reserved</div>
        <nav className={styles.icons}>
          <Instagram />
          <Facebook />
          <Telegram />
        </nav>
      </div>
    </footer>
  );
}
