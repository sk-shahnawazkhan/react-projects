import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import styles from "./ImageSearch.module.css";

const ImageSearch = () => {
  const [imageTitle, setImageTitle] = useState("");
  const [images, setImages] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function getImages() {
      const res = await fetch(
        `https://api.unsplash.com/photos?client_id=${apiKey}&per_page=33`
      );
      const data = await res.json();
      setImages(data);
    }
    getImages();
  }, []);

  // https://api.unsplash.com/photos?client_id=${apiKey}&per_page=33
  // https://api.unsplash.com/search/photos?query=dubai&client_id=${apiKey}

  // const renderImages = images.map((item) => {
  //   return <img src={item.urls.small} alt="" width="100px" height="100px" />;
  // });

  async function handleSearch() {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${imageTitle}&client_id=${apiKey}&per_page=33`
    );
    const data = await res.json();
    setImages(data.results);
  }

  function handleChange(event) {
    setImageTitle(event.target.value);
  }

  return (
    <>
      <Header title="Search Your Image" />
      <div className={styles.container}>
        <div className={styles.searchBox}>
          <input
            type="text"
            className={styles.textInput}
            name="imageTitle"
            placeholder="Search images"
            onChange={handleChange}
            value={imageTitle}
            id="imageTitle"
          />
          <button className={styles.button} onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className={styles.photosContainer}>
          {images.length > 0 &&
            images.map((item) => {
              return (
                <div className={styles.item} key={item.id}>
                  <img
                    src={item.urls.regular}
                    alt={item.alt_description}
                    title={item.alt_description}
                    width="100%"
                    height="330px"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ImageSearch;
