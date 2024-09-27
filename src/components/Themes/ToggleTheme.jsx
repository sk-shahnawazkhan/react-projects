import React from "react";
import styles from "./Theme.module.css";

function ToggleTheme() {
  const [themeLight, setThemeLight] = React.useState(true);
  function handleClick() {
    setThemeLight((themeLight) => !themeLight);
  }
  return (
    <>
      <header className={themeLight ? styles.lightHeader : styles.darkHeader}>
        <button className={styles.button} onClick={handleClick}>
          {themeLight ? "Switch to Dark" : "Back to Light"} Theme
        </button>
      </header>
      <main>
        <section
          className={themeLight ? styles.lightSection : styles.darkSection}
        >
          <h1>{themeLight ? "Light" : "Dark"} theme Applied</h1>
        </section>
      </main>
    </>
  );
}

export default ToggleTheme;
