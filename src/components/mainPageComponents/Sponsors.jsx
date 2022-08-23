import * as React from 'react'
import SpaceHeader from '../commonComponents/SpaceHeader'
import * as styles from '../../styles/sponsors.module.css'

import Pawel from '../../images/picture1.jpg'
import Anna from '../../images/picture2.jpg'
import Marta from '../../images/picture4.jpg'
import Konrad from '../../images/picture5.jpg'
import Maciej from '../../images/picture6.jpg'
import Tomasz from '../../images/picture7.jpg'

export default function Sponsors() {
  return (
    <>
      <SpaceHeader header="SPONSOR GŁÓWNY" />
      <img
        src={Pawel}
        className={styles['main_sponsor_image']}
        alt="main sponsor"
      />
      <div style={{ height: '2.5vh' }}></div>
      <SpaceHeader header="SPONSORZY" />
      <div className={styles['sponsors']}>
        <img src={Anna} className={styles['sponsor_image']} alt="sponsor" />
        <img src={Tomasz} className={styles['sponsor_image']} alt="sponsor" />
        <img src={Marta} className={styles['sponsor_image']} alt="sponsor" />
        <img src={Konrad} className={styles['sponsor_image']} alt="sponsor" />
        <img src={Maciej} className={styles['sponsor_image']} alt="sponsor" />
      </div>
    </>
  )
}
