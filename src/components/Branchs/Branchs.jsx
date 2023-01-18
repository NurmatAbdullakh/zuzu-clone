import { Link } from "react-router-dom";
import { branches } from "../../mock/branches";
import BranchCard from "../BranchCard/BranchCard";
import styles from "./Branchs.module.scss";

export default function Branches() {
  return (
    <div className={`${styles.branches_container} container`}>
      <div className={`${styles.branches_block} paper`}>
        <div className={`${styles.branches_title} title`}>Филиалы</div>
        <div className={styles.branches__items}>
          {branches.map((v, i, a) => (
            <Link to={v.id}>
              <BranchCard
                key={v.id}
                name={v.name}
                address={v.address}
                to_time={v.to}
                from_time={v.from}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
