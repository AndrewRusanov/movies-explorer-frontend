import { savedMoviesCardList } from "../../utils/constants";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import styles from "./SavedMovies.module.css";

const SavedMovies = () => {
  return (
    <section className={styles.movies__container}>
      <div className={styles.movies__wrapper}>
        <SearchForm />
        <FilterCheckbox />
        <MoviesCardList moviesList={savedMoviesCardList} />
      </div>
    </section>
  );
};

export default SavedMovies;
