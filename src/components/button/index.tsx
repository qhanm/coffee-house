import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

type TButtonProps = {
  children: string | React.ReactElement;
  type?: "primary" | "outline";
};

export default function Button(props: TButtonProps) {
  const { children, type = "primary" } = props;
  return (
    <button
      className={classNames(
        styles.button,
        type === "primary" && styles.primary,
        type === "outline" && styles.outline
      )}
    >
      {children}
    </button>
  );
}
