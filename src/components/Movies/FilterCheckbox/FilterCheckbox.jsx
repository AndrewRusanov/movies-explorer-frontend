import styles from './FilterCheckbox.module.css';

const FilterCheckbox = ({ onChangeFilter, shorts }) => {
  return (
    <div className={styles.filter__container}>
      <label className={styles.filter__switch}>
        <input
          type='checkbox'
          className={styles.filter__checkbox}
          onChange={onChangeFilter}
          checked={shorts}
        />
        <span className={styles.filter__slider}></span>
      </label>
      <span className={styles.filter__text}>Короткометражки</span>
    </div>
  );
};

export default FilterCheckbox;
