import styles from '@styles/pages/Home.module.scss';
import { RiDashboard3Line, RiFlashlightFill, RiTempColdLine } from 'react-icons/ri';

function Home() {
  return (
    <section className={`${styles.home} section`} id="home">
      <div className={`shape shape__big ${styles.shapeBig}`}></div>
      <div className={`shape shape__small ${styles.shapeSmall}`}></div>

      <div className={`${styles.home__container} container grid`}>
        <div className={styles.home__data}>
          <h1 className={styles.home__title} data-aos="fade-down" data-aos-duration="2100" data-aos-delay="400">
            Choose The Best Car
          </h1>

          <h2 className={styles.home__subtitle} data-aos="fade-down" data-aos-duration="2100" data-aos-delay="500">Porsche Mission E</h2>
          <h3 className={styles.home__elec} data-aos="fade-down" data-aos-duration="2100" data-aos-delay="600">
            <RiFlashlightFill />
            Eletric car
          </h3>
        </div>

        <img src="assets/img/home.png" alt="home" className={styles.home__img} data-aos="fade-down" data-aos-duration="2100" data-aos-delay="800" />
        <div className={styles.home__car}>
          <div className={styles.home__carData} data-aos="fade-up" data-aos-duration="2100" data-aos-delay="900">
            <div className={styles.home__carIcon}>
              <RiTempColdLine />
            </div>

            <h2 className={styles.home__carNumber}>24°</h2>
            <h3 className={styles.home__carName}>Temperature</h3>
          </div>

          <div className={styles.home__carData} data-aos="fade-up" data-aos-duration="2100" data-aos-delay="1000">
            <div className={styles.home__carIcon}>
              <RiDashboard3Line />
            </div>

            <h2 className={styles.home__carNumber}>873</h2>
            <h3 className={styles.home__carName}>MILEAGE</h3>
          </div>

          <div className={styles.home__carData} data-aos="fade-up" data-aos-duration="2100" data-aos-delay="1100">
            <div className={styles.home__carIcon}>
              <RiFlashlightFill />
            </div>

            <h2 className={styles.home__carNumber}>94%</h2>
            <h3 className={styles.home__carName}>BATTERY</h3>
          </div>
        </div>

        <a href="#" className={styles.home__button} data-aos="fade-up" data-aos-duration="2100" data-aos-delay="1200">
          START
        </a>
      </div>
    </section>
  )
}

export { Home };