import { moviesCardList } from "../../utils/constants";
import styles from "./Movies.module.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

const Movies = () => {
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
