import React from "react";
import styles from "./Theme.module.css";
import ToggleThemeHeader from "./ToggleThemeHeader";

function ToggleTheme() {
  const [themeLight, setThemeLight] = React.useState(true);
  function handleClick() {
    setThemeLight((themeLight) => !themeLight);
  }
  return (
    <>
      <ToggleThemeHeader handleClick={handleClick} themeLight={themeLight} />
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
