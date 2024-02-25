import linkImg from "../../../images/portfolio__linkImage.svg";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Потрфолио</h3>
        <div className={styles.links}>
          <a
            className={styles.link}
            href="https://github.com/AndrewRusanov/how-to-learn"
            rel="noreferrer"
            target="_blank"
          >
            <p className={styles.link__text}>Статичный сайт</p>
            <img
              className={styles.link__image}
              src={linkImg}
              alt="Изображение стрелки"
            />
          </a>
          <a
            className={styles.link}
            href="https://github.com/AndrewRusanov/russian-travel"
            rel="noreferrer"
            target="_blank"
          >
            <p className={styles.link__text}>Адаптивный сайт</p>
            <img
              className={styles.link__image}
              src={linkImg}
              alt="Изображение стрелки"
            />
          </a>
          <a
            className={styles.link}
            href="https://github.com/AndrewRusanov/react-mesto-api-full-gha"
            rel="noreferrer"
            target="_blank"
          >
            <p className={styles.link__text}>Одностраничное приложение</p>
            <img
              className={styles.link__image}
              src={linkImg}
              alt="Изображение стрелки"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
