import { savedMoviesCardList } from "../../utils/constants";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import styles from "./SavedMovies.module.css";

const SavedMovies = () => {
  return (
    <main className={styles.movies__container}>
      <section className={styles.movies__wrapper}>
        <SearchForm />
        <MoviesCardList moviesList={savedMoviesCardList} />
      </section>
    </main>
  );
};

export default SavedMovies;
