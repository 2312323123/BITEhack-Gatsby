import * as React from 'react'
import * as styles from '../../styles/footer.module.css'
// import logo from '../../images/logo_best.png'
import logo from '../../images/logo_best_white.png'

export default function Footer() {
  return (
    <>
      <footer className={styles['footer']}>
        <div>
          <p className={styles['footer_primary']}>Organizator</p>
          <img className={styles['footer_logo']} src={logo} />
        </div>
        <div className={styles['footer_center']}>
          <p className={styles['footer_primary']}>
            Stowarzyszenie Studentów BEST AGH Kraków
          </p>
          <p className={styles['footer_secondary']}>I DS Alfa Blok 1</p>
          <p className={styles['footer_secondary']}>ul. Reymonta 17/E14</p>
          <p className={styles['footer_secondary']}>30-059 Kraków</p>
          <a
            className={styles['footer_link']}
            href="https://www.newsite.best.krakow.pl/"
          >
            www.BEST.krakow.pl
          </a>
        </div>
        <div>
          <p className={styles['footer_primary']}>Koordynator Projektu</p>
          <p className={styles['footer_secondary']}>Paweł Zaręba</p>
          <a
            className={styles['footer_link']}
            href="mailto:pawel.zareba@best.krakow.pl"
          >
            pawel.zareba@best.krakow.pl
          </a>
        </div>
      </footer>
    </>
  )
}
