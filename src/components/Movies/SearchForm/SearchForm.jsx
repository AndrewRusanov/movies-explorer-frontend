import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import styles from './SearchForm.module.css';
import { useLocation } from 'react-router-dom';

const SearchForm = ({ handleSearch, setSavedMovies }) => {
  const [shorts, setShorts] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [placeholderText, setPlaceHolderText] = useState('Фильм');
  const { pathname } = useLocation();

  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  const onChangeFilter = () => {
    setShorts(!shorts);
    handleSearch(inputValue, !shorts, pathname);
    if (pathname === '/movies') {
      localStorage.setItem('shorts', !shorts);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!inputValue) {
      setPlaceHolderText('Нужно ввести ключевое слово');
      return;
    }
    if (pathname === '/movies') {
      localStorage.setItem('query', inputValue);
    }
    handleSearch(inputValue, shorts, pathname);
  };

  useEffect(() => {
    if (pathname === '/movies') {
      const savedInputValue = localStorage.getItem('query');
      const savedShorts = JSON.parse(localStorage.getItem('shorts'));
      if (savedInputValue) {
        setInputValue(savedInputValue);
      }
      if (savedShorts) {
        setShorts(savedShorts);
      }
      if (savedInputValue || savedShorts === true) {
        handleSearch(savedInputValue, savedShorts, pathname);
      }
    } else {
      setShorts(false);
      setInputValue('');
      setSavedMovies(JSON.parse(localStorage.getItem('savedMovies') || '[]'));
    }
  }, [pathname]);

  return (
    <div>
      <form
        className={styles.search__form}
        onSubmit={event => handleSubmit(event)}
      >
        <input
          name='movie'
          type='text'
          placeholder={placeholderText}
          className={styles.search__input}
          onChange={handleChange}
          value={inputValue}
        />
        <button className={styles.search__button}>Найти</button>
      </form>
      <FilterCheckbox onChangeFilter={onChangeFilter} shorts={shorts} />
    </div>
  );
};

export default SearchForm;
