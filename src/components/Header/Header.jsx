import React from "react";
import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <h1>{props.title}</h1>
    </header>
  );
}
