import avatar from "../../../images/aboutStudent__avatar.png";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Студент</h2>
        <div className={styles.portfolio}>
          <div className={styles.textContainer}>
            <div className={styles.textWrapper}>
              <h3 className={styles.name}>Андрей</h3>
              <h4 className={styles.about}>Фронтенд-разработчик, 21 год</h4>
              <p className={styles.description}>
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
              className={styles.ghLink}
              href="https://github.com/AndrewRusanov"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </div>
          <img
            className={styles.avatar}
            src={avatar}
            alt="Изображение пользователя"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
