import CoffeeImage from "@/src/assets/images/coffee_item_banner.png";
import Image from "next/image";
import styles from "./style.module.css";

export default function CakeItem() {
  return (
    <div className={styles.wrapper}>
      <Image src={CoffeeImage} alt="coffee image" width={232} height={155} />
      <div className={styles.content}>
        <p className={styles.name}>The Coffee House</p>
        <span className={styles.decs}>234 CMT8, Phường 3, Quận 10</span>
      </div>
    </div>
  );
}
