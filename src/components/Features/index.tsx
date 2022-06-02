import styles from '@styles/pages/Features.module.scss';

function Features() {
  return (
    <section className={`${styles.features} section`}>
      <h2 className="section__title">
        More Features
      </h2>

      <div className={`${styles.features__container} container grid`}>
        <div className={`${styles.features__group}`}>
          <img src="assets/img/features.png" alt="" className={styles.features__img} data-aos="fade-down" data-aos-duration="2100" data-aos-delay="500" />

          <div className={`${styles.features__card} ${styles.features_card1}`} data-aos="fade-down" data-aos-duration="2000" data-aos-delay="900">
            <h3 className={styles.features__cardTitle}>800v</h3>
            <p className={styles.features__cardDescription}>Turbo <br /> Chargin</p>
          </div>

          <div className={`${styles.features__card} ${styles.features_card2}`} data-aos="fade-down" data-aos-duration="2000" data-aos-delay="1200">
            <h3 className={styles.features__cardTitle}>350</h3>
            <p className={styles.features__cardDescription}>Km <br /> Range</p>
          </div>

          <div className={`${styles.features__card} ${styles.features_card3}`} data-aos="fade-down" data-aos-duration="2000" data-aos-delay="1500">
            <h3 className={styles.features__cardTitle}>480</h3>
            <p className={styles.features__cardDescription}>Km <br /> Travel</p>
          </div>
        </div>
      </div>

      <img src="assets/img/map.svg" alt="" className={styles.features__map} data-aos="fade-down" data-aos-duration="2500" data-aos-delay="600" />

    </section>
  );
}
export { Features }