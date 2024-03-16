import { useContext, useEffect, useState } from 'react';
import styles from './Profile.module.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { mainApi } from '../../utils/MainApi';

const Profile = ({ setCurrentUser, onSignOut }) => {
  const currentUser = useContext(CurrentUserContext);

  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorNameMessage, setErrorNameMessage] = useState('');
  const [errorEmailMessage, setErrorEmailMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [disabledButton, setDisabledButton] = useState(true);

  const { errors, isValid, handleChange } = useFormWithValidation();

  useEffect(() => {
    setDisabledButton(currentUser.name === name && currentUser.email === email);
  }, [name, email, currentUser.name, currentUser.email]);

  const handleEditUser = async data => {
    setDisabledButton(true);
    const token = localStorage.getItem('jwt');
    try {
      const profileUserData = await mainApi.editUserInfo(data, token);
      if (
        profileUserData &&
        (profileUserData.name === currentUser.name ||
          profileUserData.email === currentUser.email)
      ) {
        await setCurrentUser({
          name: profileUserData.name,
          email: profileUserData.email,
        });
      }
      setDisabledButton(false);
      setSuccessMessage('Профиль успешно изменён');
      setIsEditing(false);
    } catch (error) {
      setSuccessMessage('');
      setIsError(true);
    }
  };

  const handleNameChange = event => {
    handleChange(event);
    setName(event.target.value);
    setIsError(false);
    if (event.target.value === currentUser.name) {
      setErrorNameMessage('Имя совпадает с текущим');
      setDisabledButton(false);
    } else {
      setErrorNameMessage('');
      setDisabledButton(true);
    }
  };

  const handleEmailChange = event => {
    handleChange(event);
    setEmail(event.target.value);
    setIsError(false);
    if (event.target.value === currentUser.email) {
      setErrorEmailMessage('E-mail совпадает с текущим');
      setDisabledButton(false);
    } else {
      setErrorEmailMessage('');
      setDisabledButton(true);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleEditUser({ name, email });
  };

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser.name, currentUser.email]);

  return (
    <main className={styles.profile__container}>
      <section className={styles.profile__wrapper}>
        <h1 className={styles.profile__title}>Привет, {currentUser.name}!</h1>
        <form className={styles.profile__form}>
          <label className={styles.input__placeholder}>
            Имя
            <input
              name='name'
              type='text'
              disabled={!isEditing}
              className={styles.profile__input}
              placeholder='Имя'
              value={name}
              minLength={2}
              maxLength={30}
              required
              pattern='^[A-Za-zА-Яа-яЁё\s]+$'
              onChange={handleNameChange}
            />
          </label>
          <span className={styles.profile__error}>
            {!isValid ? errors.name : ''}
          </span>
          <span className={styles.profile__error}>{errorNameMessage}</span>

          <label className={styles.input__placeholder}>
            E-mail
            <input
              name='email'
              type='email'
              required
              placeholder='E-mail'
              disabled={!isEditing}
              className={styles.profile__input}
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <span className={styles.profile__error}>
            {!isValid ? errors.email : ''}
          </span>
          <span className={styles.profile__error}>{errorEmailMessage}</span>
        </form>
        {isError ? (
          <span className={styles.profile__error}>
            При обновлении профиля произошла ошибка.
          </span>
        ) : (
          <span
            className={`${styles.profile__error} ${styles.profile__success} `}
          >
            {successMessage}
          </span>
        )}
        {isEditing || isError ? (
          <>
            <button
              type='submit'
              disabled={disabledButton}
              className={styles.profile__submit}
              onClick={e => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              Сохранить
            </button>
          </>
        ) : (
          <>
            <button
              type='button'
              className={styles.profile__edit}
              onClick={e => {
                e.preventDefault();
                setIsEditing(true);
              }}
            >
              Редактировать
            </button>
            <button
              type='button'
              className={styles.profile__signOut}
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>
          </>
        )}
      </section>
    </main>
  );
};

export default Profile;
