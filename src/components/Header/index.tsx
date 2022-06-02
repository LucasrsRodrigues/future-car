import styles from '@styles/components/Header.module.scss';
import { useEffect, useState } from 'react';
import { RiCloseLine, RiEyeCloseLine, RiMenuLine, RiSteeringLine } from "react-icons/ri";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const [scrollY, setScrollY] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  function handleSetActiveLink(link: string) {
    setActiveLink(link);
    setShowMenu(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 50) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    })
  }, []);




  return (
    <header className={`${styles.header} ${scrollY ? styles.scroll : ''}`} id="header">
      <div className={`${styles.nav} container`}>
        <a href="#" className={styles.nav__logo}>
          <RiSteeringLine />
          Elecar
        </a>

        <div className={`${styles.nav__menu} ${showMenu ? styles.showMenu : ''}`} id="nav-menu">
          <ul className={styles.nav__list}>
            <li className={styles.nav__item} onClick={() => handleSetActiveLink('home')}>
              <a href="#home" className={`${styles.nav__link} ${activeLink === 'home' ? styles.active : ''}`}>Home</a>
            </li>
            <li className={styles.nav__item} onClick={() => handleSetActiveLink('about')}>
              <a href="#about" className={`${styles.nav__link} ${activeLink === 'about' ? styles.active : ''}`}>About</a>
            </li>
            <li className={styles.nav__item} onClick={() => handleSetActiveLink('popular')}>
              <a href="#popular" className={`${styles.nav__link} ${activeLink === 'popular' ? styles.active : ''}`}>Popular</a>
            </li>
            <li className={styles.nav__item} onClick={() => handleSetActiveLink('featured')}>
              <a href="#featured" className={`${styles.nav__link} ${activeLink === 'featured' ? styles.active : ''}`}>Featured</a>
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