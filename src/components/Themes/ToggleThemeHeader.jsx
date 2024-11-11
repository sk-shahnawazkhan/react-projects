import React from "react";
import styles from "./Theme.module.css";

function ToggleThemeHeader({ handleClick, themeLight }) {
  return (
    <header className={themeLight ? styles.lightHeader : styles.darkHeader}>
      <button className={styles.button} onClick={handleClick}>
        {themeLight ? "Switch to Dark" : "Back to Light"} Theme
      </button>
    </header>
  );
}

export default ToggleThemeHeader;
