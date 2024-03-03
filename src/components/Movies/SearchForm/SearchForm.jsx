import styles from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <form className={styles.search__form}>
      <input type="text" placeholder="Фильм" className={styles.search__input} />
      <button type="button" className={styles.search__search}>
        Найти
      </button>
    </form>
  );
};

export default SearchForm;
