import styles from '@styles/pages/About.module.scss';

function About() {
  return (
    <section className={`${styles.about} section`} id="about" >
      <div className={`${styles.about__container} container grid`}>
        <div className={styles.about__group}>
          <img src="assets/img/about.png" alt="" className={styles.about__img} />

          <div className={styles.about__card}>
            <h3 className={styles.about__cardTitle}>2.500+</h3>
            <p className={styles.about__cardDescription}>
              Superchanges placed along popular routes
            </p>
          </div>
        </div>

        <div className={styles.about__data}>
          <h2 className={`${styles.about__title} section__title`}>
            Machines With <br /> Future Technoogy
          </h2>

          <p className={styles.about__description}>
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>

          <a href="#" className={styles.button}>Know more</a>
        </div>
      </div>
    </section >
  )
}


export { About };