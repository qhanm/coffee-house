import Icon from "../icons";
import styles from "./style.module.css";

export default function SearchInput() {
  return (
    <div>
      <div className={styles.inputWrapper}>
        <input type="text" className={styles.inputSearch} />
        <div className={styles.line} />
        <Icon.Search />
      </div>
    </div>
  );
}
