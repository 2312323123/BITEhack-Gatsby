import * as React from 'react'
import BITEhack_logo from '../../images/BITEhack_logo.svg'
import BITEhack_text from '../../images/BITEhack_text.svg'
import * as styles from '../../styles/landing_page.module.css'

export default function LandingPage() {
  return (
    <header className={styles['header']}>
      <aside className={styles['header_panel_1']}>
        <div className={styles['header_panel_text_wrapper']}>
          <p className={styles['header_panel_1_text']}>HACKATHON</p>
        </div>
      </aside>
      <section className={styles['header_panel_2']}>
        <img
          className={styles['header_img_logo']}
          src={BITEhack_logo}
          alt="BITEhack logo image"
        />
        <img
          className={styles['header_img_text']}
          src={BITEhack_text}
          alt="BITEhack logo text"
        />
        <div className={styles['header_button_container']}>
          <div className={styles['header_button']}>ZAPISZ SIĘ</div>
        </div>
      </section>
      <aside className={styles['header_panel_3']}>
        <div className={styles['header_panel_text_wrapper']}>
          <p className={styles['header_panel_3_text']}>14 - 15 STYCZNIA 2023</p>
        </div>
      </aside>
    </header>
  )
}
