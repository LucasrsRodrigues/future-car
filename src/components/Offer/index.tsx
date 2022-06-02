import styles from '@styles/pages/Offer.module.scss'

function Offer() {
  return (
    <section className={`${styles.offer} section`}>
      <div className={`${styles.offer__container} container grid`}>
        <img src="assets/img/offer-bg.png" alt="" className={styles.offer__bg} />

        <div className={styles.offer__data}>
          <h2 className={`section__title ${styles.offer__title}`}>
            Do You Want To Receive <br /> Special Offers?
          </h2>

          <p className={styles.offer__description}>
            Be the first to receive all the information about our
            products and new cars by email by subscribing to our
            mailing list.
          </p>

          <a href="# " className="button">
            Subscribe Now
          </a>
        </div>

        <img src="assets/img/offer.png" alt="" className={styles.offer__img} />
      </div>
    </section>
  )
}

export { Offer }