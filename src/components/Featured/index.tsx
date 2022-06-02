import styles from '@styles/pages/Featured.module.scss';
import { useEffect, useState } from 'react';
import { RiShoppingBag2Line } from 'react-icons/ri';
import { AnimatePresence, motion } from 'framer-motion';

const FeaturedGroup = [
  { id: 0, title: 'Tesla', subtitle: 'Model X', img: 'assets/img/featured1.png', price: 'R$ 98.900', type: 'tesla' },
  { id: 1, title: 'Tesla', subtitle: 'Model 3', img: 'assets/img/featured2.png', price: 'R$ 45.900', type: 'tesla' },
  { id: 2, title: 'Audi', subtitle: 'E-tron', img: 'assets/img/featured3.png', price: 'R$ 175.900', type: 'audi' },
  { id: 3, title: 'Porsche', subtitle: 'Boxster 987', img: 'assets/img/featured4.png', price: 'R$ 175.900', type: 'porsche' },
  { id: 4, title: 'Porsche', subtitle: 'Panamera', img: 'assets/img/featured5.png', price: 'R$ 126.900', type: 'porsche' }
];

interface FeaturedProps {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  price: string;
  type: string;
}

function Featured() {
  const [featured, setFeatured] = useState(FeaturedGroup);
  const [filtered, setFiltered] = useState<FeaturedProps[]>([]);
  const [activeOption, setOptionActive] = useState('all');


  useEffect(() => {
    if (activeOption === 'all') {
      setFiltered(featured);
      return;
    }

    const filterede = featured.filter(feature => feature.type.includes(activeOption));

    setFiltered(filterede);
  }, [activeOption, featured]);


  return (
    <section className={`${styles.featured} section`} id="featured">
      <h2 className="section__title">
        Featured Luxury Cars
      </h2>

      <div className={`${styles.featured__container} container`}>

        <ul className={styles.featured__filters} data-aos="fade-down" data-aos-duration="2500" data-aos-delay="600">

          <li>
            <button className={`${styles.featured__item} ${activeOption === 'all' ? styles.active : ''}`} onClick={() => { setOptionActive('all') }}>
              <span>All</span>
            </button>
          </li>
          <li>
            <button className={`${styles.featured__item} ${activeOption === 'tesla' ? styles.active : ''}`} onClick={() => { setOptionActive('tesla') }}>
              <img src="assets/img/logo3.png" alt="tesla" />
            </button>
          </li>
          <li>
            <button className={`${styles.featured__item} ${activeOption === 'audi' ? styles.active : ''}`} onClick={() => { setOptionActive('audi') }}>
              <img src="assets/img/logo2.png" alt="audi" />
            </button>
          </li>
          <li>
            <button className={`${styles.featured__item} ${activeOption === 'porsche' ? styles.active : ''}`} onClick={() => { setOptionActive('porsche') }}>
              <img src="assets/img/logo1.png" alt="porsche" />
            </button>
          </li>

        </ul>

        <motion.div
          className={`${styles.featured__content} grid`}
          layout
        >
          <AnimatePresence>
            {filtered.map(feature => (
              <motion.article
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                layout
                key={feature.id}
                className={styles.featured__card}
              >
                <div className={`shape shape__smaller ${styles.shapeSmall}`}></div>

                <h1 className={styles.featured__title}>{feature.title}</h1>
                <h3 className={styles.featured__subtitle}>{feature.subtitle}</h3>

                <img src={feature.img} alt="" className={styles.featured__img} />

                <h3 className={styles.featured__price}>{feature.price}</h3>

                <button className={`button ${styles.featured__button}`}>
                  <RiShoppingBag2Line />
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export { Featured }