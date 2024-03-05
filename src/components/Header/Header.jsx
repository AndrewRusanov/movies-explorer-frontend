import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/header__logo.svg";
import profileImg from "../../images/header__profile.svg";
import styles from "./Header.module.css";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";

const Header = ({ loggedIn, setLoggedIn }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header
      className={`${styles.header__container} ${
        location.pathname !== "/" ? styles.header__container_light : ""
      }`}
    >
      <div className={styles.header__wrapper}>
        <NavLink to="/" className={styles.header__logo}>
          <img src={logo} alt="Логитип проекта" />
        </NavLink>
        {loggedIn && (
          <nav className={styles.movies}>
            <NavLink
              to="/movies"
              className={`${styles.movies__link}  ${
                location.pathname !== "/" ? styles.movies__link_light : ""
              } ${
                location.pathname === "/movies" && styles.movies__link_active
              }`}
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={`${styles.movies__link}  ${
                location.pathname !== "/" ? styles.movies__link_light : ""
              } ${
                location.pathname === "/saved-movies" &&
                styles.movies__link_active
              }`}
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
        )}

        <div className={styles.buttons__container}>
          {loggedIn ? (
            <>
              <Link to="/profile" className={styles.account__text}>
                <button
                  type="button"
                  className={`${styles.account} ${
                    location.pathname !== "/" ? styles.account_light : ""
                  }`}
                >
                  <span className={styles.account__text}>Аккаунт</span>
                  <div
                    className={`${styles.account__circle} ${
                      location.pathname !== "/"
                        ? styles.account__circle_light
                        : ""
                    }`}
                  >
                    <img src={profileImg} alt="Изображение аватара" />
                  </div>
                </button>
              </Link>
              <button
                className={styles.burger__button}
                onClick={() => setIsMenuOpened(true)}
              >
                <div
                  className={`${styles.burger__buttonLine} ${
                    location.pathname !== "/" &&
                    styles.burger__buttonLine_logged
                  }`}
                ></div>
                <div
                  className={`${styles.burger__buttonLine} ${
                    location.pathname !== "/" &&
                    styles.burger__buttonLine_logged
                  }`}
                ></div>
                <div
                  className={`${styles.burger__buttonLine} ${
                    location.pathname !== "/" &&
                    styles.burger__buttonLine_logged
                  }`}
                ></div>
              </button>
              {isMenuOpened && (
                <Navigation
                  isMenuOpened={isMenuOpened}
                  setIsMenuOpened={setIsMenuOpened}
                />
              )}
            </>
          ) : (
            <>
              <NavLink className={styles.header__authLink} to="/signup">
                Регистрация
              </NavLink>

              <button
                onClick={() => {
                  setLoggedIn(true);
                  navigate("/signin", { replace: true });
                }}
                className={styles.header__loginBtn}
              >
                Войти
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
