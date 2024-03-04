import styles from "./MoviesCard.module.css";
import defaultCardImage from "../../../images/defaultCardImage.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const MoviesCard = ({ title, duration }) => {
  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation();
  console.log("location", location);

  return (
    <div className={styles.card}>
      <img
        src={defaultCardImage}
        alt={`Обложка фильма: ${title}`}
        className={styles.card__logo}
      />
      <div className={styles.card__about}>
        <p className={styles.card__title}>{title}</p>
        {location.pathname === "/movies" ? (
          <button
            type="button"
            className={`${styles.card__like} ${
              isLiked ? styles.card__like_active : ""
            }`}
            onClick={() => {
              setIsLiked(!isLiked);
            }}
          ></button>
        ) : (
          <button type="button" className={styles.card__delete}></button>
        )}
      </div>
      <span className={styles.card__duration}>{duration}</span>
    </div>
  );
};

export default MoviesCard;
