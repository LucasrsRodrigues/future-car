import styles from '@styles/pages/Logos.module.scss';

function Logos() {
  return (
    <section className={`${styles.logos} section`}>
      <div className={`${styles.logos__container} container grid`}>
        <div className={styles.logos__content}>
          <img src="assets/img/logo1.png" alt="" className={styles.logos__img} />
        </div>
        <div className={styles.logos__content}>
          <img src="assets/img/logo2.png" alt="" className={styles.logos__img} />
        </div>
        <div className={styles.logos__content}>
          <img src="assets/img/logo3.png" alt="" className={styles.logos__img} />
        </div>
        <div className={styles.logos__content}>
          <img src="assets/img/logo4.png" alt="" className={styles.logos__img} />
        </div>
        <div className={styles.logos__content}>
          <img src="assets/img/logo5.png" alt="" className={styles.logos__img} />
        </div>
        <div className={styles.logos__content}>
          <img src="assets/img/logo6.png" alt="" className={styles.logos__img} />
        </div>
      </div>
    </section>
  )
}

export { Logos };