import styles from '@styles/components/Footer.module.scss';
import { RiFacebookFill, RiInstagramLine, RiSteeringLine, RiTwitterLine } from 'react-icons/ri';

function Footer() {
  return (
    <footer className={`${styles.footer} section`}>
      <div className={`shape shape__big ${styles.shapeBig}`}></div>
      <div className={`shape shape__small ${styles.shapeSmall}`}></div>

      <div className={`${styles.footer__container} container grid`}>
        <div className={styles.footer__content}>
          <a href="" className={styles.footer__logo}>
            <RiSteeringLine /> Elecar
          </a>
          <p className={styles.footer__description}>
            We offer the best electric cars of <br />
            the most recognized brands in <br />
            the world.
          </p>
        </div>

        <div className={styles.footer__content}>
          <h3 className={styles.footer__title}>Company</h3>
          <div className={styles.footer__links}>
            <ul>
              <li><a href="#" className={styles.footer__link}>About</a></li>
              <li><a href="#" className={styles.footer__link}>Cars</a></li>
              <li><a href="#" className={styles.footer__link}>History</a></li>
              <li><a href="#" className={styles.footer__link}>Shop</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footer__content}>
          <h3 className={styles.footer__title}>Information</h3>
          <div className={styles.footer__links}>
            <ul>
              <li><a href="#" className={styles.footer__link}>Request a quote</a></li>
              <li><a href="#" className={styles.footer__link}>Find a dealer</a></li>
              <li><a href="#" className={styles.footer__link}>Contact us</a></li>
              <li><a href="#" className={styles.footer__link}>Services</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footer__content}>
          <h3 className={styles.footer__title}>Follow us</h3>
          <div className={styles.footer__links}>
            <ul className={styles.footer__social}>
              <li><a href="#" className={styles.footer__social_link} target="_blank"><RiFacebookFill /></a></li>
              <li><a href="#" className={styles.footer__social_link} target="_blank"><RiInstagramLine /></a></li>
              <li><a href="#" className={styles.footer__social_link} target="_blank"><RiTwitterLine /></a></li>
            </ul>
          </div>
        </div>
      </div>

      <span className={styles.footer__copy}>
        &#169; Lucasrs. All rigths reserved
      </span>
    </footer>
  )
}


export { Footer }