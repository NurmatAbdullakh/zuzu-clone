import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import styles from "./Categories.module.scss";

export default function Categories() {
  const types = useSelector((state) => state.products.categories);

  return (
    <nav className={styles.categories}>
      <div className={`${styles.container} container`}>
        <ul className={styles.items}>
          {types?.map((c) => (
            <li className={styles.item}>
              <Link
                activeClass={styles.active}
                to={c}
                spy={true}
                smooth={true}
                offset={-45}
                duration={100}
                className={styles.link}
                href={"#" + c}
              >
                {c}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
