import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import closeButtonImage from "../../images/close__button.png";
import profileMan from "../../images/header__profile.svg";
import styles from "./Navigation.module.css";

const Navigation = ({ isMenuOpened, setIsMenuOpened }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section
      className={`${styles.overlay} ${
        isMenuOpened ? styles.overlay_opened : ""
      }`}
    >
      <div className={styles.navigation}>
        <button
          type="button"
          className={styles.navigation__closeBtn}
          onClick={() => setIsMenuOpened(false)}
        >
          <img src={closeButtonImage} alt="Кнопка закрытия меню" />
        </button>
        <nav className={styles.navigation__container}>
          <ul className={styles.navigation__list}>
            <li
              className={`${styles.navigation__link} ${
                location.pathname === "/" && styles.navigation__link_active
              }`}
            >
              <NavLink to="/" className={styles.navigation__link}>
                Главная
              </NavLink>
            </li>
            <li
              className={`${styles.navigation__link} ${
                location.pathname === "/movies" &&
                styles.navigation__link_active
              }`}
            >
              <NavLink to="/movies" className={styles.navigation__link}>
                Фильмы
              </NavLink>
            </li>
            <li
              className={`${styles.navigation__link} ${
                location.pathname === "/saved-movies" &&
                styles.navigation__link_active
              }`}
            >
              <NavLink to="/saved-movies" className={styles.navigation__link}>
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className={styles.account__button}
          onClick={() => {
            navigate("/profile", { replace: true });
            setIsMenuOpened(false);
          }}
        >
          <span className={styles.account__text}>Аккаунт</span>
          <div className={styles.account__circle}>
            <img src={profileMan} alt="Изображение аватара" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Navigation;
