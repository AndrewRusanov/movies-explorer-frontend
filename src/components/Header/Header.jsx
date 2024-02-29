import { Link, NavLink } from "react-router-dom";
import logo from "../../images/header__logo.svg";
import profileImg from "../../images/header__profile.svg";
import styles from "./Header.module.css";

const Header = ({ loggedIn, setLoggedIn }) => {
  return (
    <header className={styles.header__container}>
      <div className={styles.header__wrapper}>
        <img src={logo} alt="Логитип проекта" className={styles.header__logo} />
        {loggedIn && (
          <nav className={styles.movies}>
            <NavLink className={styles.movies__link}>Фильмы</NavLink>
            <NavLink className={styles.movies__link}>
              Сохранённые фильмы
            </NavLink>
          </nav>
        )}

        <div className={styles.buttons__container}>
          {loggedIn ? (
            <Link to="/profile" className={styles.account__text}>
              <button type="button" className={styles.account}>
                <span className={styles.account__text}>Аккаунт</span>
                <div className={styles.account__circle}>
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
