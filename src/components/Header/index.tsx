import styles from '@styles/components/Header.module.scss';
import { useState } from 'react';
import { RiCloseLine, RiEyeCloseLine, RiMenuLine, RiSteeringLine } from "react-icons/ri";

function Header() {
  const [showMenu, setShowMenu] = useState(false);



  return (
    <header className={styles.header} id="header">
      <div className={`${styles.nav} container`}>
        <a href="#" className={styles.nav__logo}>
          <RiSteeringLine />
          Elecar
        </a>

        <div className={`${styles.nav__menu} ${showMenu ? styles.showMenu : ''}`} id="nav-menu">
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a href="#home" className={styles.nav__link}>Home</a>
            </li>
            <li className={styles.nav__item}>
              <a href="#about" className={styles.nav__link}>About</a>
            </li>
            <li className={styles.nav__item}>
              <a href="#popular" className={styles.nav__link}>Popular</a>
            </li>
            <li className={styles.nav__item}>
              <a href="#featured" className={styles.nav__link}>Featured</a>
            </li>
          </ul>

          <div className={styles.nav__close} id="navClose" onClick={() => setShowMenu(false)}>
            <RiCloseLine />
          </div>
        </div>
        {/* Toggle button */}
        <div className={styles.nav__toggle} id="nav-toggle" onClick={() => setShowMenu(true)}>
          <RiMenuLine />
        </div>
      </div>
    </header>
  )
}

export { Header }