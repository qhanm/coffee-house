import BannerHome from "@/src/assets/images/banner_home.webp";
import styles from "./style.module.css";
import SearchInput from "../search-input";

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
        // filter: "brighhtness(0.5)",
        position: "relative",
      }}
    >
      <div className={styles.burl} />.
      <SearchInput />
    </section>
  );
}
