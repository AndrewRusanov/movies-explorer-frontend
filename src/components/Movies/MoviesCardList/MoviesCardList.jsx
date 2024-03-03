import { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import styles from "./MoviesCardList.module.css";
import { useLocation } from "react-router-dom";

const MoviesCardList = ({ data }) => {
  const moviesPerRow = 4; //For desktop
  const [visibleMovies, setVisibleMovies] = useState(16);
  const pathName = useLocation();

  const handleLoadMoreMovies = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + moviesPerRow);
  };

  return (
    <section className={styles.cardList__container}>
      <div className={styles.cardList__wrapper}>
        {data.slice(0, visibleMovies).map((item) => {
          return <MoviesCard title={item.title} duration={item.duration} />;
        })}
      </div>
      {visibleMovies < data.length && pathName !== "/saved-movies" && (
        <button
          type="button"
          onClick={handleLoadMoreMovies}
          className={styles.cardList__button}
        >
          Ещё
        </button>
      )}
    </section>
  );
};
export default MoviesCardList;
