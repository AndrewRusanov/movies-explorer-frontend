import { useState } from "react";
import styles from "./Profile.module.css";
import { useNavigate } from "react-router-dom";

const Profile = ({ setLoggedIn }) => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  return (
    <section className={styles.profile__container}>
      <div className={styles.profile__wrapper}>
        <h1 className={styles.profile__title}>Привет, Виталий!</h1>
        <form className={styles.profile__form}>
          <label className={styles.input__placeholder}>
            Имя
            <input
              type="text"
              disabled={!isEditing}
              className={styles.profile__input}
              value="Виталий"
              onChange={(e) => setIsEditing(true)}
            />
          </label>

          <label className={styles.input__placeholder}>
            E-mail
            <input
              type="text"
              disabled={!isEditing}
              className={styles.profile__input}
              value="pochta@yandex.ru"
              onChange={(e) => setIsEditing(true)}
            />
          </label>
        </form>
        {isEditing ? (
          <button
            type="submit"
            className={styles.profile__submit}
            onClick={(e) => {
              e.preventDefault();
              setIsEditing(false);
            }}
          >
            Сохранить
          </button>
        ) : (
          <>
            <button
              type="button"
              className={styles.profile__edit}
              onClick={(e) => {
                e.preventDefault();
                setIsEditing(true);
              }}
            >
              Редактировать
            </button>
            <button
              type="button"
              className={styles.profile__signOut}
              onClick={() => {
                setLoggedIn(false);
                navigate("/signin");
              }}
            >
              Выйти из аккаунта
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Profile;
