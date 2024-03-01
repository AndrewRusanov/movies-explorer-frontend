import { useState } from "react";
import logo from "../../images/header__logo.svg";
import styles from "./Login.module.css";
import emailRegex from "../../utils/constants";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  return (
    <section className={styles.login__container}>
      <div className={styles.login__wrapper}>
        <div className={styles.form__container}>
          <img
            src={logo}
            alt="Логотип проекта"
            className={styles.login__logo}
          />
          <h1 className={styles.login__title}>Рады видеть!</h1>
          <span className={styles.input__caption}>E-mail</span>
          <input
            type="email"
            pattern={emailRegex}
            className={styles.input}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <span className={styles.input__caption}>Пароль</span>
          <input
            type="password"
            className={`${styles.input} ${
              isError ? styles.input_type_error : ""
            }`}
            value={password}
            onClick={() => setIsError(false)}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className={`${styles.input__caption} ${
              styles.input__Errorcaption
            } ${isError ? styles.input__Errorcaption_type_visible : ""} `}
          >
            Что-то пошло не так...
          </span>
        </div>
        <div className={styles.navigation__container}>
          <button
            type="submit"
            disabled={!email || !password}
            className={styles.login__button}
            onClick={() => navigate("/movies")}
          >
            Войти
          </button>
          <p className={styles.login__description}>
            Ещё не зарегистрированы?{" "}
            <NavLink
              to="/signup"
              className={styles.login__description_type_link}
            >
              Регистрация
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
