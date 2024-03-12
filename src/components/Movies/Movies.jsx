import { useEffect, useState } from 'react';
import styles from './Movies.module.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import searchFilter from '../../utils/searchFilter';
import Preloader from '../Preloader/Preloader';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { pathname } = useNavigate();

  useEffect(() => {
    getAllMovies();
  }, [pathname]);

  const getAllMovies = () => {
    const movies = JSON.parse(localStorage.getItem('movies') || '[]');
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
    if (movies.length === 0 || savedMovies.length === 0) {
      setIsLoading(true);
      Promise.all([moviesApi.getMovies(), mainApi.getUserMovies()])
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
        .catch((err) => {
          console.log(`Ошибка получения данных о фильмах - ${err}`);
        });
    } else {
      setSavedMovies(JSON.parse(localStorage.getItem('savedMovies') || '[]'));
    }
  };

  const filter = (query, shorts, path) => {
    setIsLoading(true);
    if (path === '/movies') {
      const movies = JSON.parse(localStorage.getItem('movies'));
      const filtered = searchFilter(movies, query, shorts);
      console.log('======= Фильтр =========', filtered);
      setMovies(filtered);
    } else {
      const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
      const filteredSaved = searchFilter(savedMovies, query, shorts);
      setSavedMovies(filteredSaved);
    }
    setIsLoading(false);
  };

  const handleLikeMovie = (movie, path) => {
    console.log('Нажал на лайк', movie);
    const prepareMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration.toString(),
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
      movieId: movie.id,
    };

    if (movie.isLiked || path === '/saved-movies') {
      mainApi
        .deleteMovie(movie._id)
        .then(() => {
          changeLocalStorageData(movie, undefined);
        })
        .catch((error) => {
          console.log(`Ошибка - ${error}`);
        });
    } else {
      mainApi
        .saveMovie(prepareMovie)
        .then((movieResp) => {
          console.log('========== movieResp ==========', movieResp);
          changeLocalStorageData(movie, movieResp._id);
        })
        .catch((error) => {
          console.log(`Ошибка - ${error}`);
        });
    }
  };

  function changeLocalStorageData(movie, createdId) {
    const filtredMovies = movies.map((filtredMovie) => {
      if (filtredMovie.id === movie.id) {
        filtredMovie.isLiked = !filtredMovie.isLiked;
        if (createdId) {
          filtredMovie._id = createdId;
        }
      }
      return filtredMovie;
    });

    const allMovies = JSON.parse(localStorage.getItem('movies'));
    const localMovies = allMovies.map((localMovie) => {
      if (localMovie.id === movie.id) {
        localMovie.isLiked = !localMovie.isLiked;
        if (createdId) {
          localMovie._id = createdId;
        }
      }
      return localMovie;
    });

    localStorage.setItem('movies', JSON.stringify(localMovies));
    localStorage.setItem(
      'savedMovies',
      JSON.stringify(localMovies.filter((movieitem) => movieitem.isLiked))
    );
    setMovies(filtredMovies);
    setSavedMovies(localMovies.filter((movieitem) => movieitem.isLiked));
  }

  const handleSearch = (query, shorts, path) => {
    setIsLoading(true);
    filter(query, shorts, path);
    setIsLoading(false);
  };

  return (
    <main className={styles.movies__container}>
      <section className={styles.movies__wrapper}>
        <SearchForm
          handleSearch={handleSearch}
          setSavedMovies={setSavedMovies}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={movies}
            savedMoviesList={savedMovies}
            handleLikeMovie={handleLikeMovie}
          />
        )}
      </section>
    </main>
  );
};

export default Movies;
