import techStack from "../../../utils/techStack";
import styles from "./Techs.module.css";

const Techs = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Технологии</h2>
        <div className={styles.techContainer}>
          <h3 className={styles.techTitle}>7 технологий</h3>
          <p className={styles.techSubtitle}>
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <div className={styles.techStack__container}>
            {techStack.map((item) => {
              return <div className={styles.techStack}>{item}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Techs;
