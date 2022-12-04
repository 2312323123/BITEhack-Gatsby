import * as React from 'react'
import HACKATHON from '../../images/HACKATHON.png'
import BITEhack_logo from '../../images/Logo1.png'
import * as styles from '../../styles/landing_page.module.css'

export default function LandingPage() {
  return (
    <header className={styles['header']}>
      <img className={styles['HACKATHON']} src={HACKATHON} alt="HACKATHON" />
      <img
        className={styles['BITEhack_logo']}
        src={BITEhack_logo}
        alt="BITEhack logo image"
      />
      <div className={styles['header_button_container']}>
        <div className={styles['header_button']}>ZAPISZ SIĘ</div>
      </div>
    </header>
  )
}
