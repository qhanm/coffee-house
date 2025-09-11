import BannerHome from "@/src/assets/images/banner_home.webp";
import styles from "./style.module.css";
import SearchInput from "../search-input";
import CakeItems from "./CakeItems";
import CoffeeImage from "@/src/assets/images/coffee.png";
import Image from "next/image";
export default function Banner() {
  return (
    <section
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${BannerHome.src})`,
        backgroundRepeat: "no-repeat",
        width: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "center",
        aspectRatio: 5 / 2,
        zIndex: 1,
        position: "relative",
      }}
    >
      <div className={styles.burl} />.
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <div>
            <div className={styles.leftContentFirst}>
              <span>Đặt</span>
              <Image src={CoffeeImage} alt="Coffee" />
            </div>
            <div className={styles.leftContentSecond}>
              tiên lợi chỉ trong tích tắc!
            </div>
            <div className={styles.leftContentThird}>
              Có 4.288 địa điểm ở TPHCM
            </div>
          </div>
          <SearchInput />
        </div>

        <CakeItems />
      </div>
    </section>
  );
}
