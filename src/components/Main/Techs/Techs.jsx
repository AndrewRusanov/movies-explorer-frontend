import techStack from "../../../utils/techStack";
import styles from "./Techs.module.css";

const Techs = () => {
  return (
    <section className={styles.techs__container}>
      <div className={styles.techs__wrapper}>
        <h2 className={styles.techs__title}>Технологии</h2>
        <div className={styles.tech__container}>
          <h3 className={styles.tech__title}>7 технологий</h3>
          <p className={styles.tech__subtitle}>
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <div className={styles.stack__container}>
            {techStack.map((item) => {
              return <div className={styles.stack}>{item}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Techs;
