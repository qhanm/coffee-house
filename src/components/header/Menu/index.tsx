import classNames from "classnames";
import Popper from "../../popper";
import styles from "./style.module.css";

export default function Menu() {
  return (
    <ul className={styles.menu}>
      <li className={classNames(styles.active)}>Trang chủ</li>
      <li className={classNames()}>
        <Popper
          content={
            <ul className={classNames(styles.subMenu)}>
              <li>
                <span>Hà Nôi</span>
                <span>99 Địa điểm</span>
              </li>
              <li>
                <span>Sài Gòn</span>
                <span>99 Địa điểm</span>
              </li>
              <li>
                <span>Hải Phòng</span>
                <span>99 Địa điểm</span>
              </li>
              <li>Xem thêm</li>
            </ul>
          }
        >
          <span>Khu vực </span>
        </Popper>
      </li>
      <li>Top 100</li>
    </ul>
  );
}
