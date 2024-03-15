import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import styles from './MoviesCardList.module.css';
import { useLocation } from 'react-router-dom';

const MoviesCardList = ({ handleLikeMovie, movies, savedMoviesList }) => {
  const { pathname } = useLocation();
  const [countMovies, setCountMovies] = useState(0);

  function shownCount() {
    const display = window.innerWidth;
    if (display > 1279) {
      setCountMovies(16);
    } else if (display > 767) {
      setCountMovies(8);
    } else {
      setCountMovies(5);
    }
  }

  useEffect(() => {
    shownCount();
  }, [movies]);

  const resizeAction = () => {
    setTimeout(() => {
      shownCount();
    }, 500);
  };

  useEffect(() => {
    shownCount();
    window.addEventListener('resize', resizeAction);
    return () => {
      document.removeEventListener('resize', resizeAction);
    };
  }, []);

  function showMore() {
    const display = window.innerWidth;
    if (display > 1279) {
      setCountMovies(countMovies + 4);
    } else if (display > 767) {
      setCountMovies(countMovies + 2);
    } else {
      setCountMovies(countMovies + 2);
    }
  }

  return (
    <section className={styles.cardList__container}>
      {pathname === '/saved-movies' ? (
        <ul className={styles.cardList__wrapper}>
          {savedMoviesList.map(
            movie => (
              <MoviesCard movie={movie} handleLikeMovie={handleLikeMovie} />
            ),
            16
          )}
        </ul>
      ) : (
        <>
          <ul className={styles.cardList__wrapper}>
            {movies.slice(0, countMovies).map(movie => (
              <MoviesCard movie={movie} handleLikeMovie={handleLikeMovie} />
            ))}
          </ul>
          {movies.length > countMovies ? (
            <button onClick={showMore} className={styles.cardList__button}>
              Ещё
            </button>
          ) : (
            <></>
          )}
        </>
      )}
    </section>
  );
};
export default MoviesCardList;
