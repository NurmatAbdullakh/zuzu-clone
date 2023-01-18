import { ArrowRight } from "../../utils/icons";
import styles from "./BranchCard.module.scss";

export default function BranchCard({ name, address, to_time, from_time }) {
  return (
    <div className={styles.branches__card}>
      <div className={styles.top}>
        <div className={styles.title}>
          <div className={styles.txt}>{name}</div>
          <div className={styles.icon}>
            <ArrowRight />
          </div>
        </div>
        <div className={styles.subtitle}>{address}</div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.txt}>Часы работы</div>
        <div className={styles.info}>
          Ежедневно: {from_time}-{to_time}
        </div>
      </div>
    </div>
  );
}
