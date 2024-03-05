import { useState } from "react";
import styles from "./Register.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/header__logo.svg";
import { emailRegex } from "../../utils/constants";

const Register = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  return (
    <section className={styles.register__container}>
      <div className={styles.register__wrapper}>
        <form className={styles.form__container}>
          <Link to="/" className={styles.register__logo}>
            <img src={logo} alt="Логотип проекта" />
          </Link>
          <h1 className={styles.register__title}>Добро пожаловать!</h1>
          <span className={styles.input__caption}>Имя</span>
          <input
            type="text"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className={styles.input__caption}>E-mail</span>
          <input
            type="email"
            className={styles.input}
            pattern={emailRegex}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        </form>
        <div className={styles.navigation__container}>
          <button
            type="submit"
            disabled={!username || !email || !password}
            className={styles.register__button}
            onClick={() => navigate("/signin")}
          >
            Зарегистрироваться
          </button>
          <p className={styles.register__description}>
            Уже зарегистрированы?{" "}
            <NavLink
              to="/signin"
              className={styles.register__description_type_link}
            >
              Войти
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
