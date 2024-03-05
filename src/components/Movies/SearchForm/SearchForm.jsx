import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import styles from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <form>
      <div className={styles.search__form}>
        <input
          type="text"
          placeholder="Фильм"
          className={styles.search__input}
        />
        <button type="button" className={styles.search__button}>
          Найти
        </button>
      </div>
      <FilterCheckbox />
    </form>
  );
};

export default SearchForm;
