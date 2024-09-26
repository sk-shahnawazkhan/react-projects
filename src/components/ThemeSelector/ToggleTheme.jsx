import React from "react";
import styles from "./Theme.module.css";

function ToggleTheme() {
  const [themeLight, setThemeLight] = React.useState(true);
  function handleClick() {
    setThemeLight((themeLight) => !themeLight);
  }
  return (
    <>
      {/* also use style from module css like this */}
      {/* <header className={`${styles.header} ${
          themeLight ? styles.lightHeader : styles.darkHeader
        }`}> */}
      <header
        className={
          themeLight
            ? `${styles.header} ${styles.lightHeader}`
            : styles.themeDarkHeader
        }
      >
        <button className={styles.button} onClick={handleClick}>
          {themeLight ? "Switch to Dark" : "Back to Light"} Theme
        </button>
      </header>
      <main>
        <section
          className={
            themeLight ? styles.themeLightSection : styles.themeDarkSection
          }
        >
          <h1>{themeLight ? "Light" : "Dark"} Theme Applied</h1>
        </section>
      </main>
    </>
  );
}

export default ToggleTheme;
