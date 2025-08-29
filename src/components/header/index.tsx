import Logo from "@/src/assets/images/logo.png";
import Image from "next/image";
import Button from "../button";
import Menu from "./Menu";
import styles from "./style.module.css";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.container}>
        <Image src={Logo} width={40} height={40} alt="Logo coffee house" />
        <div className={styles.rightContent}>
          <nav>
            <Menu />
          </nav>

          <Button type="outline">Đăng bài</Button>
        </div>
      </div>
    </header>
  );
}
