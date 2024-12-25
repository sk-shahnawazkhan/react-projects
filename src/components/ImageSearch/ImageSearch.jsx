import React, { useState } from "react";
import Header from "../Header/Header";
import styles from "./ImageSearch.module.css";

const ImageSearch = () => {
  const [imageName, setImageName] = useState();
  const [images, setImages] = useState([]);

  // React.useEffect(() => {
  fetch(
    "https://api.unsplash.com/photos?client_id=93mldwc8Ed5Xg0HIabGHlR7s034J2gCqhyHM75GaUhE"
  )
    .then((res) => res.json())
    .then((data) => setImages(data));
  // });

  return (
    <>
      <Header title="Image Search App using ReactJS" />
      <div className={styles.container}>
        <div className={styles.searchBox}>
          <input
            type="text"
            className={styles.textInput}
            name="searchImage"
            placeholder="Seacrh images"
            value={imageName}
          />
          <button className={styles.button}>Search</button>
        </div>
        <div>
          {images.map((item) => {
            <img src="item.urls.small" alt="" />;
          })}
        </div>
      </div>
    </>
  );
};

export default ImageSearch;
