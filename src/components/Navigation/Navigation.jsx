import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = ({ isMenuOpened, setIsMenuOpened }) => {
  return (
    <section
      className={`${styles.overlay} ${
        isMenuOpened ? styles.overlay_opened : ""
      }`}
    >
      <div className={styles.navigation}>
        <button onClick={() => setIsMenuOpened(false)}>
          <img alt="Кнопка закрытия меню" />
        </button>
        <nav>
          <ul>
            <li>
              <NavLink>Главная</NavLink>
            </li>
            <li>
              <NavLink>Фильмы</NavLink>
            </li>
            <li>
              <NavLink>Сохранённые фильмы</NavLink>
            </li>
          </ul>
        </nav>
        <Link to="/profile" className={styles.account__text}>
          <button type="button" className={styles.account}>
            <span className={styles.account__text}>Аккаунт</span>
            <div className={styles.account__circle}>
              <img alt="Изображение аватара" />
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Navigation;
