import { Link, NavLink } from "react-router-dom";
import logo from "../../images/header__logo.svg";
import profileImg from "../../images/header__profile.svg";
import styles from "./Header.module.css";

const Header = ({ loggedIn, setLoggedIn }) => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <img src={logo} alt="Логитип проекта" className={styles.logo} />
        {loggedIn && (
          <nav className={styles.movies__container}>
            <NavLink className={styles.movies__link}>Фильмы</NavLink>
            <NavLink className={styles.movies__link}>
              Сохранённые фильмы
            </NavLink>
          </nav>
        )}

        <div className={styles.btn__container}>
          {loggedIn ? (
            <Link to="/profile" className={styles.header__accountText}>
              <button type="button" className={styles.header__account}>
                <span className={styles.header__accountText}>Аккаунт</span>
                <div className={styles.header__accountCircle}>
                  <img src={profileImg} alt="Изображение аватара" />
                </div>
              </button>
              {/* <img
                src={profileImg}
                alt="Аккаунт пользователя"
                className={styles.account__image}
              /> */}
            </Link>
          ) : (
            <>
              <NavLink className={styles.auth__link} to="/signup">
                Регистрация
              </NavLink>
              <Link to="/signin">
                <button
                  onClick={() => {
                    setLoggedIn(true);
                  }}
                  className={styles.login__btn}
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
