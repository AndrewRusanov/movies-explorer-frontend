import { NavLink } from "react-router-dom";
import logo from "../../images/header__logo.svg";
import profileImg from "../../images/header__profile.svg";
import styles from "./Header.module.css";

const Header = ({ loggedIn }) => {
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
            <img
              src={profileImg}
              alt="Аккаунт пользователя"
              className={styles.account__image}
            />
          ) : (
            <>
              <NavLink className={styles.auth__link} to="#">
                Регистрация
              </NavLink>
              <button className={styles.login__btn}>Войти</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
