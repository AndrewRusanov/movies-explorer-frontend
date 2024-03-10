import styles from "./NotFound.module.css";

const NotFound = ({ goBack }) => {
  return (
    <main className={styles.notFound__container}>
      <section className={styles.notFound__wrapper}>
        <h1 className={styles.notFound__title}>404</h1>
        <p className={styles.notFound__subtitle}>Страница не найдена</p>
        <button
          className={styles.notFound__button}
          type="button"
          onClick={goBack}
        >
          Назад
        </button>
      </section>
    </main>
  );
};

export default NotFound;
