import classNames from "classnames";
import React from "react";
import styles from "./style.module.css";

type TProps = {
  className?: string;
  children: React.ReactNode;
};
export default function BoxGradient({ className, children }: TProps) {
  return (
    <div className={classNames(styles.wrapper, className)}>{children}</div>
  );
}
