import React from "react";
import Header from "../Header/Header";
import styles from "./GetImage.module.css";

function RenderImage() {
  const [caption, setCaption] = React.useState("Add image Caption here!");
  function handleAddCaption() {
    setCaption(txtAreaCaption.value);
    txtAreaCaption.value = "";
  }
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d"
              alt="Image"
              width={"100%"}
              height={"500px"}
            />
            <figcaption>{caption}</figcaption>
          </figure>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.w100}>
            <textarea name="txtAreaCaption" id="txtAreaCaption"></textarea>
            <button
              className={`${styles.button} ${styles.btnCaption}`}
              onClick={handleAddCaption}
            >
              Add Caption
            </button>
          </div>
          <button className={`${styles.button} ${styles.btnImage}`}>
            Get New Image
          </button>
          <button className={`${styles.button} ${styles.btnDownload}`}>
            Download Image
          </button>
        </div>
      </div>
    </>
  );
}

export default RenderImage;
