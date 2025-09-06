import CoffeeLogo from "@/src/assets/images/coffee_logo.png";
import Image from "next/image";
import BoxGradient from "../box-gradient";
import Icon from "../icons";
import styles from "./style.module.css";

function SearchResultItem() {
  return (
    <div className={styles.searchResultItem}>
      <Image src={CoffeeLogo} alt="Coffee logo" />
      <div>
        <p>Starbuck Nguyễn Tri Phương</p>
        <p>25 Đường 3/2, Phường 10, Quận 3</p>
      </div>
    </div>
  );
}

export default function SearchInput() {
  return (
    <div className={styles.wrapper}>
      <BoxGradient className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.inputSearch}
          aria-label="Tìm kiếm"
          placeholder="Tìm kiếm"
        />
        <div className={styles.line} />
        <Icon.Search />
      </BoxGradient>
      <BoxGradient className={styles.searchResult}>
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
      </BoxGradient>
    </div>
  );
}
