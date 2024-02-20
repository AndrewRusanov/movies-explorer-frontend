import styles from "./Promo.module.css";
import promoImage from "../../images/promo__image.png";

const Promo = () => {
  return (
    <section className={styles.container}>
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
        <button type="button" className={styles.learnMore}>
          Узнать больше
        </button>
      </div>
    </section>
  );
};

export default Promo;
