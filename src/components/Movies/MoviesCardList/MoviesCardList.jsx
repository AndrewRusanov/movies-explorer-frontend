import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import styles from "./MoviesCardList.module.css";
import { useLocation } from "react-router-dom";
import { mapWidthToParams } from "../../../utils/constants";

const MoviesCardList = ({ moviesList }) => {
  const { desktop, tablet, mobile } = mapWidthToParams;
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [moviesDetails, setMoviesDetails] = useState(desktop.movies);
  const location = useLocation();
  const screenWidth = window.innerWidth;

  useEffect(() => {
    if (moviesList.length) {
      const result = moviesList.filter(
        (item, index) => index < moviesDetails.total
      );
      setVisibleMovies(result);
    }
  }, [moviesList, moviesDetails.total]);

  useEffect(() => {
    if (location.pathname === "/movies") {
      if (screenWidth >= desktop.width) {
        setMoviesDetails(desktop.movies);
      } else if (screenWidth < desktop.width && screenWidth > tablet.width) {
        setMoviesDetails(tablet.movies);
      } else {
        setMoviesDetails(mobile.movies);
      }
    }
  }, [desktop, tablet, mobile, location.pathname, screenWidth]);

  const handleLoadMoreMovies = () => {
    const start = visibleMovies.length;
    const end = start + moviesDetails.more;
    const additional = moviesList.length - start;

    if (additional > 0) {
      const newMovies = moviesList.slice(start, end);
      setVisibleMovies([...visibleMovies, ...newMovies]);
    }
  };

  return (
    <section className={styles.cardList__container}>
      <ul className={styles.cardList__wrapper}>
        {visibleMovies.map((item) => {
          return <MoviesCard title={item.title} duration={item.duration} />;
        })}
      </ul>
      {visibleMovies.length < moviesList.length &&
        location.pathname !== "/saved-movies" && (
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
