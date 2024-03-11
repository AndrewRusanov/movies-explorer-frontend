import { useEffect } from 'react';
import logo from '../../images/header__logo.svg';
import styles from './Login.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const Login = ({ onLogin, errorText }) => {
  const { values, errors, isValid, handleChange } =
    useFormWithValidation();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(values.email, values.password);
    navigate('/movies', { replace: true });
  };

  return (
    <main className={styles.login__container}>
      <section className={styles.login__wrapper}>
        <form
          className={styles.form__container}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Link to='/' className={styles.login__logo}>
            <img src={logo} alt='Логотип проекта' />
          </Link>
          <h1 className={styles.login__title}>Рады видеть!</h1>
          <div className={styles.label__container}>
            <label className={styles.login__label}>
              <span className={styles.label__text}>E-mail</span>
              <input
                name='email'
                className={`${styles.login__input} ${
                  errors.email && styles.login__input_error
                }`}
                onChange={handleChange}
                value={values.email || ''}
                type='email'
                required
              />
              <span className={styles.login__error}>{errors.email || ''}</span>
            </label>
            <label className={styles.login__label}>
              <span className={styles.label__text}>Пароль</span>
              <input
                name='password'
                className={`${styles.login__input} ${
                  errors.password && styles.login__input_error
                }`}
                onChange={handleChange}
                value={values.password || ''}
                type='password'
                required
                minLength={8}
              />
              <span className={styles.login__error}>
                {errors.password || ''}
              </span>
            </label>
          </div>
          <div className={styles.navigation__container}>
            {errorText ? (
              <p
                className={`${styles.login__error} ${styles.login__error_submit}`}
              >
                {errorText}
              </p>
            ) : null}
            <button
              type='submit'
              disabled={!isValid}
              className={styles.login__button}
            >
              Войти
            </button>
            <p className={styles.login__description}>
              Ещё не зарегистрированы?{' '}
              <NavLink
                to='/signup'
                className={styles.login__description_type_link}
              >
                Регистрация
              </NavLink>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
