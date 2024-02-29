import styles from "./AboutProject.module.css";

const AboutProject = () => {
  return (
    <section className={styles.aboutProject__container}>
      <div className={styles.aboutProject__wrapper}>
        <h2 className={styles.aboutProject__title}>О проекте</h2>
        <div className={styles.about__container}>
          <div className={styles.about__block}>
            <h3 className={styles.about__subtitle}>
              Дипломный проект включал 5 этапов
            </h3>
            <p className={styles.about__caption}>
              Составление плана, работу над бэкэндом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className={styles.about__block}>
            <h3 className={styles.about__subtitle}>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className={styles.about__caption}>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className={styles.timeBar}>
          <div className={styles.timeBar__cell}>
            <h4 className={styles.timeBar__title_back}>1 неделя</h4>
            <span className={styles.timeBar__subtitle_back}>Back-end</span>
          </div>
          <div className={styles.timeBar__cell}>
            <h4 className={styles.timeBar__title_front}>4 недели</h4>
            <span className={styles.timeBar__subtitle_front}>Front-end</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
