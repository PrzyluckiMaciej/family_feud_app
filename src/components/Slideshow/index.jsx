import styles from "./styles.module.css";
import Slide from "../Slide";
import { useEffect, useState } from "react";
const colors = ["#0088FE", "#00C49F", "#FFBB28"];

function Slideshow() {
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("questionList");
    if (data != null) {
      setSlides(JSON.parse(data));
    }
  }, []);

  return (
    <div className={styles.slideshow}>
      <div
        className={styles.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((item, index) => (
          <Slide question={item} className={styles.slide} key={index} />
        ))}
      </div>
      <div className={styles.slideshowDots}>
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`${styles.slideshowDot} ${
              index === idx ? styles.active : null
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Slideshow;
