import styles from '@styles/pages/Popular.module.scss';
import { RiChargingPile2Line, RiDashboard3Line, RiFundsBoxLine, RiShoppingBag2Line } from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";


import "swiper/css/pagination";
const carsGroup = [
  { id: 0, title: 'Porsche', subtitle: 'Turbo S', img: 'assets/img/popular1.png', sec: '3.7 Sec', km: '356 Km/h', type: 'Electric', price: 'R$ 175.900', },
  { id: 1, title: 'Porsche', subtitle: 'Taycan', img: 'assets/img/popular2.png', sec: '3.7 Sec', km: '356 Km/h', type: 'Electric', price: 'R$ 114.900', },
  { id: 2, title: 'Porsche', subtitle: 'Turbo S Cross', img: 'assets/img/popular3.png', sec: '3.7 Sec', km: '356 Km/h', type: 'Electric', price: 'R$ 150.900', },
  { id: 3, title: 'Porsche', subtitle: 'Boxster 718', img: 'assets/img/popular4.png', sec: '3.7 Sec', km: '356 Km/h', type: 'Electric', price: 'R$ 125.900', },
  { id: 4, title: 'Porsche', subtitle: 'Cayman', img: 'assets/img/popular5.png', sec: '3.7 Sec', km: '356 Km/h', type: 'Electric', price: 'R$ 128.900', },
];


function Popular() {
  return (
    <section className={`${styles.popular} section`} id="popular">
      <h2 className="section__title">
        Choose Your Electric Car <br /> Of The Porsche Brand
      </h2>

      <div className={`${styles.popular__container} container`}>
        <Swiper
          loop={true}
          spaceBetween={24}
          slidesPerView='auto'
          grabCursor={true}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.76": {
              slidesPerView: 3,
            },
            "@1.24": {
              spaceBetween: 48,
            },
          }}
        >
          {carsGroup.map(car => (
            <SwiperSlide className={styles.popular__card} key={car.id}>
              <div className={`shape shape__smaller ${styles.shapeSmall}`}></div>

              <h1 className={styles.popular__title}>{car.title}</h1>
              <h3 className={styles.popular__subtitle}>{car.subtitle}</h3>

              <img src={car.img} alt="" className={styles.popular__img} />

              <div className={styles.popular__data}>
                <div className={styles.popular__dataGroup}> {car.sec}
                  <RiDashboard3Line />
                </div>
                <div className={styles.popular__dataGroup}>
                  <RiFundsBoxLine /> {car.km}
                </div>
                <div className={styles.popular__dataGroup}>
                  <RiChargingPile2Line /> {car.type}
                </div>
              </div>

              <h3 className={styles.popular__price}>{car.price}</h3>

              <button className={`button ${styles.popular__button}`}>
                <RiShoppingBag2Line />
              </button>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </section>
  )
}

export { Popular }