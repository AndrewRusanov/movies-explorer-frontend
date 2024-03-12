import { useEffect, useState } from 'react';
import { moviesCardList } from '../../utils/constants';
import styles from './Movies.module.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => getAllMovies(), []);

  const getAllMovies = () => {
    const token = localStorage.getItem('jwt');
    const movies = JSON.parse(localStorage.getItem('movies') || '[]');
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
    if (movies.length === 0 || savedMovies.length === 0) {
      setIsLoading(true);
      Promise.all([moviesApi.getMovies(), mainApi.getUserMovies(token)])
        .then(([movies, savedMovies]) => {
          movies.forEach((movie) => {
            if (savedMovies) {
              const isSelected = savedMovies.filter(
                (item) => item.movieId === movie.id
              );
              movie.isLiked = isSelected.length > 0;
              if (isSelected.length > 0) {
                movie._id = isSelected[0]._id;
              }
            } else {
              movie.isLiked = false;
            }
          });
          localStorage.setItem('movies', JSON.stringify(movies));
          localStorage.setItem(
            'savedMovies',
            JSON.stringify(movies.filter((movie) => movie.isLiked))
          );
          setSavedMovies(
            JSON.parse(localStorage.getItem('savedMovies') || '[]')
          );
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(`Ошибка получения данных о фильмах - ${error}`);
        });
    } else {
      setSavedMovies(JSON.parse(localStorage.getItem('savedMovies') || '[]'));
    }
  };

  // const filter = (query, shorts, path) => {
  //   setIsLoading(true);
  //   if (path === '/movies') {
  //     const movies = JSON.parse(localStorage.getItem('movies'));
  //     const filtered = 
  //   }
  // }

  return (
    <main className={styles.movies__container}>
      <section className={styles.movies__wrapper}>
        <SearchForm />
        <MoviesCardList moviesList={moviesCardList} />
      </section>
    </main>
  );
};

export default Movies;
