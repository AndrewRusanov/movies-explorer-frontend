import styles from "./MoviesCard.module.css";
import defaultCardImage from "../../../images/defaultCardImage.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const MoviesCard = ({ title, duration }) => {
  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation();

  return (
    <li className={styles.card}>
      <img
        src={defaultCardImage}
        alt={`Обложка фильма: ${title}`}
        className={styles.card__logo}
      />
      <div className={styles.card__about}>
        <h2 className={styles.card__title}>{title}</h2>
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
    </li>
  );
};

export default MoviesCard;
