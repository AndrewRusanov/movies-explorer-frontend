import { useEffect, useState } from "react";
import styles from "./Register.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/header__logo.svg";
import { emailRegex } from "../../utils/constants";
import { mainApi } from "../../utils/MainApi";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

const Register = ({ setLoggedIn }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    mainApi
      .register(values.name, values.password, values.email)
      .then(() => {
        setLoggedIn(true);
        console.log("Пользователь зарегистрирован");
        setTimeout(() => {
          navigate("/movies", { replace: true });
        }, 1000);
      })
      .catch((error) => {
        console.log("Пользователь не зарегистрирован");
        console.log(error);
        setLoggedIn(false);
      });
  };

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <main className={styles.register__container}>
      <section className={styles.register__wrapper}>
        <form className={styles.form__container}>
          <Link to="/" className={styles.register__logo}>
            <img src={logo} alt="Логотип проекта" />
          </Link>
          <h1 className={styles.register__title}>Добро пожаловать!</h1>
          <div className={styles.label__container}>
            <label className={styles.register__label}>
              <span className={styles.label__text}>Имя</span>
              <input
                name="name"
                className={`${styles.register__input} ${
                  errors.name && styles.register__input_error
                }`}
                onChange={handleChange}
                value={values.name || ""}
                type="text"
                required
                minLength={2}
                maxLength={30}
                pattern="/^[A-Za-zА-Яа-яЁё /s -]+$/v"
              />
              <span className={styles.register__error}>
                {errors.name || ""}
              </span>
            </label>
            <label className={styles.register__label}>
              <span className={styles.label__text}>E-mail</span>
              <input
                name="email"
                className={`${styles.register__input} ${
                  errors.email && styles.register__input_error
                }`}
                onChange={handleChange}
                value={values.email || ""}
                type="email"
                required
              />
              <span className={styles.register__error}>
                {errors.email || ""}
              </span>
            </label>
            <label className={styles.register__label}>
              <span className={styles.label__text}>Пароль</span>
              <input
                name="password"
                className={`${styles.register__input} ${
                  errors.password && styles.register__input_error
                }`}
                onChange={handleChange}
                value={values.password || ""}
                type="password"
                required
                minLength={8}
              />
              <span className={styles.register__error}>
                {errors.password || ""}
              </span>
            </label>
          </div>
          <div className={styles.navigation__container}>
            <button
              type="submit"
              disabled={!isValid}
              className={styles.register__button}
              onClick={(e) => {
                handleSubmit(e);
              }}
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
        </form>
      </section>
    </main>
  );
};

export default Register;
