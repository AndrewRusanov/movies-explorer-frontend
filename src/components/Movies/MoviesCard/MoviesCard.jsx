import { MOVIES_URL_ADDRESS } from '../../../utils/constants';
import styles from './MoviesCard.module.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ movie, handleLikeMovie }) => {
  const imageUrl = movie.image.url;
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;
  const movieTrailer = movie.trailerLink;
  const location = useLocation();
  const path = location.pathname;
  const movieLikeButtonClassName = `${styles.card__like} ${
    movie.isLiked ? styles.card__like_active : ''
  }`;

  function likeMovie(e) {
    handleLikeMovie(movie, path);
  }

  return (
    <li className={styles.card}>
      <img
        src={`${MOVIES_URL_ADDRESS}${imageUrl}`}
        alt={movie.nameRU}
        className={styles.card__logo}
      />
      <div className={styles.card__about}>
        <h2 className={styles.card__title}>{movie.nameRU}</h2>
        {location.pathname === '/movies' ? (
          <button
            type='button'
            className={movieLikeButtonClassName}
            onClick={likeMovie}
          ></button>
        ) : (
          <button type='button' className={styles.card__delete}></button>
        )}
      </div>
      <span className={styles.card__duration}>
        {hours}ч {minutes} мин
      </span>
    </li>
  );
};

export default MoviesCard;
