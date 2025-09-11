import CakeItem from "../CakeItem";
import styles from "./style.module.css";

export default function CakeItems() {
  return (
    <div className={styles.wrapper}>
      <CakeItem />
      <CakeItem />
      <CakeItem />
      <CakeItem />
      <CakeItem />
      <CakeItem />
    </div>
  );
}
