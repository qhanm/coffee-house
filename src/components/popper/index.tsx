import classNames from "classnames";
import React from "react";
import styles from "./style.module.css";
import Icon from "@/src/components/icons";

type TProps = {
  children: React.ReactNode;
  content: React.ReactNode | string;
  className?: string;
};

export default function Popper({ children, className, content }: TProps) {
  return (
    <div className={classNames(styles.popper, className)}>
      <div className={styles.title}>
        {children} <Icon.Arrow className={styles.iconArrow} />
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}
