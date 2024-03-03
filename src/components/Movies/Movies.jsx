import { moviesCardList } from "../../utils/constants";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import styles from "./Movies.module.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

const Movies = () => {
  return (
    <section className={styles.movies__container}>
      <div className={styles.movies__wrapper}>
        <SearchForm />
        <FilterCheckbox />
        <MoviesCardList data={moviesCardList} />
      </div>
    </section>
  );
};

export default Movies;
