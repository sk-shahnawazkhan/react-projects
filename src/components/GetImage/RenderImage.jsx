import React from "react";
import Header from "../Header/Header";
import styles from "./GetImage.module.css";

function RenderImage() {
  const [caption, setCaption] = React.useState("Image caption");
  const [imageTitle, setImageTitle] = React.useState("Title");
  const [image, setImage] = React.useState(
    "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d"
  );

  const [allImages, setAllImages] = React.useState([]);

  React.useEffect(() => {
    async function getImages() {
      const res = await fetch(
        "https://api.unsplash.com/photos?client_id=93mldwc8Ed5Xg0HIabGHlR7s034J2gCqhyHM75GaUhE"
      );
      const data = await res.json();
      setAllImages(data);
      console.log("data is something - " + data);
    }
    getImages();
  }, []);

  function getNewImage() {
    const randomNumber = Math.floor(Math.random() * allImages.length);
    let imgUrl = allImages[randomNumber].urls.raw;
    setImage(imgUrl);
  }

  // function downloadImage() {}

  const downloadImage = async () => {
    const originalImage =
      "https://images.unsplash.com/photo-1732692699579-592f37bf4cdf";
    const image = await fetch(originalImage);

    // Split image name
    const fileName = originalImage.split("/").pop();

    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);
    const link = document.createElement("a");
    link.href = imageURL;
    link.setAttribute("download", fileName);
    // link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  function handleAddCaption() {
    setCaption(txtAreaCaption.value);
    txtAreaCaption.value = "";
  }

  function handleChange(event) {
    setImageTitle(event.target.value);
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <figure>
            <img src={image} alt="Image" width={"100%"} height={"500px"} />
            <figcaption>
              <h4>{imageTitle}</h4>
              {caption}
            </figcaption>
          </figure>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.w100}>
            <input
              type="text"
              name="txtImageTitle"
              id="txtImageTitle"
              className={styles.txtImageTitle}
              placeholder="Add Image Title..."
              onChange={handleChange}
            />
            <textarea name="txtAreaCaption" id="txtAreaCaption"></textarea>
            <button
              className={`${styles.button} ${styles.btnCaption}`}
              onClick={handleAddCaption}
            >
              Add Image Caption
            </button>
          </div>
          <button
            className={`${styles.button} ${styles.btnImage}`}
            onClick={getNewImage}
          >
            Get New Image
          </button>
          <button
            className={`${styles.button} ${styles.btnDownload}`}
            onClick={downloadImage}
          >
            Download Image
          </button>
        </div>
      </div>
    </>
  );
}

export default RenderImage;
