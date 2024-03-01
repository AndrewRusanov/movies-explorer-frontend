import styles from "./Promo.module.css";
import promoImage from "../../../images/promo__image.png";

const Promo = () => {
  const handleScrollToComponent = (id) => {
    const targetComponent = document.getElementById(`${id}`);
    targetComponent.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.promo__container}>
      <div className={styles.promo__wrapper}>
        <div className={styles.promo}>
          <div className={styles.promo__heading}>
            <h1 className={styles.promo__title}>
              Учебный проект студента факультета <br />
              Веб-разработки.
            </h1>
            <p className={styles.promo__subtitle}>
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
          </div>
          <img
            src={promoImage}
            alt="Изображение планеты Web"
            className={styles.promo__image}
          />
        </div>
        <button
          type="button"
          className={styles.promo__learnMore}
          onClick={() => {
            handleScrollToComponent("aboutProject");
          }}
        >
          Узнать больше
        </button>
      </div>
    </section>
  );
};

export default Promo;
