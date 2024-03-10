import { useState } from "react";
import logo from "../../images/header__logo.svg";
import styles from "./Login.module.css";
import { emailRegex } from "../../utils/constants";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  return (
    <main className={styles.login__container}>
      <section className={styles.login__wrapper}>
        <div className={styles.form__container}>
          <Link to="/" className={styles.login__logo}>
            <img src={logo} alt="Логотип проекта" />
          </Link>
          <h1 className={styles.login__title}>Рады видеть!</h1>
          <span className={styles.input__caption}>E-mail</span>
          <input
            required
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
            required
            minLength={8}
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
            onClick={() => {
              setLoggedIn(true);
              navigate("/", { replace: true });
            }}
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
      </section>
    </main>
  );
};

export default Login;
