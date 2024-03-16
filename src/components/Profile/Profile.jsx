import { useContext, useEffect, useState } from 'react';
import styles from './Profile.module.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { mainApi } from '../../utils/MainApi';

const Profile = ({ setCurrentUser, onSignOut }) => {
  const currentUser = useContext(CurrentUserContext);

  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  const { errors, isValid, handleChange } = useFormWithValidation();

  const handleEditUser = async data => {
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
  };

  const handleEmailChange = event => {
    handleChange(event);
    setEmail(event.target.value);
    setIsError(false);
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
              disabled={isError || !isValid}
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
