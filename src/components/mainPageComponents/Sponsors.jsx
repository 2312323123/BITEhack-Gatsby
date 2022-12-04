import * as React from 'react'
import SpaceHeader from '../commonComponents/SpaceHeader'
import * as styles from '../../styles/sponsors.module.css'

import IBM from '../../images/partners/IBM.svg'
import aptiv from '../../images/partners/aptiv.svg'
import avsystem from '../../images/partners/avsystem.svg'
import Pega from '../../images/partners/Pega.svg'
import Sabre from '../../images/partners/Sabre.svg'
import Unit8 from '../../images/partners/Unit8.svg'

export default function Sponsors() {
  return (
    <>
      <SpaceHeader header="PARTNER GŁÓWNY" />
      <img
        src={IBM}
        className={styles['main_sponsor_image']}
        alt="main partner"
      />
      <div style={{ height: '2.5vh' }}></div>
      <SpaceHeader header="PARTNERZY" />
      <div className={styles['sponsors']}>
        <img src={aptiv} className={styles['sponsor_image']} alt="sponsor" />
        <img src={avsystem} className={styles['sponsor_image']} alt="sponsor" />
        <img src={Pega} className={styles['sponsor_image']} alt="sponsor" />
        <img src={Sabre} className={styles['sponsor_image']} alt="sponsor" />
        <img src={Unit8} className={styles['sponsor_image']} alt="sponsor" />
      </div>
    </>
  )
}
