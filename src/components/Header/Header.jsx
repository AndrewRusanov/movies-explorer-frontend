import { Link, NavLink } from "react-router-dom";
import logo from "../../images/header__logo.svg";
import profileImg from "../../images/header__profile.svg";
import styles from "./Header.module.css";

const Header = ({ loggedIn, setLoggedIn }) => {
  return (
    <header
      className={`${styles.header__container} ${
        loggedIn ? styles.header__container_light : ""
      }`}
    >
      <div className={styles.header__wrapper}>
        <img src={logo} alt="Логитип проекта" className={styles.header__logo} />
        {loggedIn && (
          <nav className={styles.movies}>
            <NavLink
              to="/movies"
              className={`${styles.movies__link}  ${
                loggedIn ? styles.movies__link_light : ""
              }`}
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={`${styles.movies__link}  ${
                loggedIn ? styles.movies__link_light : ""
              }`}
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
        )}

        <div className={styles.buttons__container}>
          {loggedIn ? (
            <Link to="/profile" className={styles.account__text}>
              <button
                type="button"
                className={`${styles.account} ${
                  loggedIn ? styles.account_light : ""
                }`}
              >
                <span className={styles.account__text}>Аккаунт</span>
                <div
                  className={`${styles.account__circle} ${
                    loggedIn ? styles.account__circle_light : ""
                  }`}
                >
                  <img src={profileImg} alt="Изображение аватара" />
                </div>
              </button>
            </Link>
          ) : (
            <>
              <NavLink className={styles.header__authLink} to="/signup">
                Регистрация
              </NavLink>
              <Link to="/signin">
                <button
                  onClick={() => {
                    setLoggedIn(true);
                  }}
                  className={styles.header__loginBtn}
                >
                  Войти
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
