import avatar from "../../../images/aboutStudent__avatar.png";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.aboutMe__container}>
      <div className={styles.aboutMe__wrapper}>
        <h2 className={styles.aboutMe__title}>Студент</h2>
        <div className={styles.portfolio}>
          <div className={styles.prtfolio__container}>
            <div className={styles.prtfolio__wrapper}>
              <h3 className={styles.prtfolio__name}>Андрей</h3>
              <h4 className={styles.prtfolio__about}>
                Фронтенд-разработчик, 21 год
              </h4>
              <p className={styles.prtfolio__description}>
                Я живу в Белгороде, учусь в БГТУ им. В. Г. Шухова по направлению
                "Автоматизация технологических процессов и производств". Недавно
                начал кодить. С 2023 года работаю в группе компаний "Технологии
                надёжности". Занимаюсь разработкой корпоративных сервисов по
                контролю персонала и автоматизации пропускных пунктов, а также
                разрабаткой системы автоматизации процесса поиска нового
                персонала.
              </p>
            </div>
            <a
              className={styles.prtfolio__link}
              href="https://github.com/AndrewRusanov"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </div>
          <img
            className={styles.prtfolio__avatar}
            src={avatar}
            alt="Изображение пользователя"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
