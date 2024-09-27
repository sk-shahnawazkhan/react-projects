import React, { useState } from "react";
import styles from "./Theme.module.css";

function ThemeSelection() {
  const defaultHeader = styles.lightHeader;
  const defaultSection = styles.lightSection;
  const [themeHeader, setThemeHeader] = useState(defaultHeader);
  const [themeSection, setThemeSection] = useState(defaultSection);
  const [themeName, setThemeName] = useState("light");

  function handleChange(event) {
    const theme = event.target.value;
    setThemeName(theme);
    if (theme === "light") {
      setThemeHeader(styles.lightHeader);
      setThemeSection(styles.lightSection);
    } else if (theme === "turquoise") {
      setThemeHeader(styles.turquoiseHeader);
      setThemeSection(styles.turquoiseSection);
    } else if (theme === "plum") {
      setThemeHeader(styles.plumHeader);
      setThemeSection(styles.plumSection);
    } else if (theme === "bisque") {
      setThemeHeader(styles.bisqueHeader);
      setThemeSection(styles.bisqueSection);
    } else {
      setThemeHeader(styles.darkHeader);
      setThemeSection(styles.darkSection);
    }
  }

  return (
    <>
      <header className={themeHeader}>
        <input
          type="radio"
          id="light"
          name="theme"
          value="light"
          onChange={handleChange}
          defaultChecked
        />
        <label className={styles.label} htmlFor="light">
          Light
        </label>

        <input
          type="radio"
          id="plum"
          name="theme"
          value="plum"
          onChange={handleChange}
        />
        <label htmlFor="plum">Plum</label>
        <input
          type="radio"
          id="turquoise"
          name="theme"
          value="turquoise"
          onChange={handleChange}
        />
        <label htmlFor="turquoise">Turquoise</label>
        <input
          type="radio"
          id="bisque"
          name="theme"
          value="bisque"
          onChange={handleChange}
        />
        <label htmlFor="bisque">Bisque</label>
        <input
          type="radio"
          id="dark"
          name="theme"
          value="dark"
          onChange={handleChange}
        />
        <label htmlFor="dark">Dark</label>
      </header>
      <main>
        <section className={themeSection}>
          <h1>
            <span style={{ textTransform: "capitalize" }}>{themeName}</span>{" "}
            theme Applied
          </h1>
          <p></p>
        </section>
      </main>
    </>
  );
}

export default ThemeSelection;
