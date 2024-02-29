import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container} >
      <div className={styles.wrapper} >
        <h3 className={styles.description} >Учебный проект Яндекс.Практикум x BeatFilm.</h3>
        <div className={styles.footer__links} >
          <span className={styles.footer__copyright} >&copy;2024</span>
          <div className={styles.links__container} >
            <a
              className={styles.link}
              href="https://practicum.yandex.ru/"
              rel="noreferrer"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
            <a
              className={styles.link}
              href="https://github.com/AndrewRusanov"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer