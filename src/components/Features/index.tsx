import styles from '@styles/pages/Features.module.scss';

function Features() {
  return (
    <section className={`${styles.features} section`}>
      <h2 className="section__title">
        More Features
      </h2>

      <div className={`${styles.features__container} container grid`}>
        <div className={`${styles.features__group}`}>
          <img src="assets/img/features.png" alt="" className={styles.features__img} />

          <div className={`${styles.features__card} ${styles.features_card1}`}>
            <h3 className={styles.features__cardTitle}>800v</h3>
            <p className={styles.features__cardDescription}>Turbo <br /> Chargin</p>
          </div>

          <div className={`${styles.features__card} ${styles.features_card2}`}>
            <h3 className={styles.features__cardTitle}>350</h3>
            <p className={styles.features__cardDescription}>Km <br /> Range</p>
          </div>

          <div className={`${styles.features__card} ${styles.features_card3}`}>
            <h3 className={styles.features__cardTitle}>480</h3>
            <p className={styles.features__cardDescription}>Km <br /> Travel</p>
          </div>
        </div>
      </div>

      <img src="assets/img/map.svg" alt="" className={styles.features__map} />

    </section>
  );
}
export { Features }