import * as React from 'react'

import SpaceHeader from '../commonComponents/SpaceHeader'
import * as mainContentStyles from '../../styles/main_content.module.css'
import { useEffect, useRef } from 'react'
import Footer from '../commonComponents/Footer'

import * as styles from '../../styles/organizator_content.module.css'

import Pawel from '../../images/Pawel.jpg'
import Anna from '../../images/Anna.jpg'
import Hubert from '../../images/HACKATHON.png'
import Marta from '../../images/Marta.jpg'
import Konrad from '../../images/Konrad.jpg'
import Maciej from '../../images/Maciej.jpg'
import Tomasz from '../../images/Tomasz.jpg'
import { useIntersection } from '../commonComponents/useIntersection'

export default function OrganizatorContent(props) {
  const { contentScrolled, setContentScrolled } = props

  useEffect(() => {
    if (!contentScrolled) {
      setContentScrolled(true)
    }
  }, [contentScrolled, setContentScrolled])

  const initial_offset = '-48px'

  const ref1 = useRef()
  const inViewport1 = useIntersection(ref1, initial_offset) // Trigger if 200px is visible from the element

  const ref2 = useRef()
  const inViewport2 = useIntersection(ref2, initial_offset) // Trigger if 200px is visible from the element

  const ref3 = useRef()
  const inViewport3 = useIntersection(ref3, initial_offset) // Trigger if 200px is visible from the element

  const ref4 = useRef()
  const inViewport4 = useIntersection(ref4, initial_offset) // Trigger if 200px is visible from the element

  const ref5 = useRef()
  const inViewport5 = useIntersection(ref5, initial_offset) // Trigger if 200px is visible from the element

  const ref6 = useRef()
  const inViewport6 = useIntersection(ref6, initial_offset) // Trigger if 200px is visible from the element

  const ref7 = useRef()
  const inViewport7 = useIntersection(ref7, initial_offset) // Trigger if 200px is visible from the element

  return (
    <main
      className={`${mainContentStyles['main_content']} ${
        contentScrolled ? mainContentStyles['content_scrolled'] : ''
      }`}
    >
      <div style={{ height: '10vh' }}></div>
      <SpaceHeader header="ORGANIZATORZY" />

      <article className={styles['people']}>
        <img
          ref={ref1}
          className={`${styles['picture']} ${styles['picture_odd']} ${
            inViewport1 ? styles['visible'] : ''
          }`}
          src={Pawel}
          alt={'Paweł Zaręba'}
        />
        <div
          className={`${styles['organizator_info_container']} ${
            styles['organizator_info_container_odd']
          } ${inViewport1 ? styles['visible'] : ''}`}
        >
          <h2 className={styles['organizator_info_container_name']}>
            Paweł Zaręba
          </h2>
          <h2>Koordynator Projektu</h2>
          <a href="mailto:pawel.zareba@best.krakow.pl">
            <h2>pawel.zareba@best.krakow.pl</h2>
          </a>
        </div>

        <img
          ref={ref2}
          className={`${styles['picture']} ${styles['picture_even']} ${
            inViewport2 ? styles['visible'] : ''
          }`}
          src={Anna}
          alt={'Anna Ślęzak'}
        />
        <div
          className={`${styles['organizator_info_container']} ${
            styles['organizator_info_container_even']
          } ${inViewport2 ? styles['visible'] : ''}`}
        >
          <h2 className={styles['organizator_info_container_name']}>
            Anna Ślęzak
          </h2>
          <h2>Koordynator ds. Kontaktu z firmami</h2>
          <a href="mailto:anna.slezak@best.krakow.pl">
            <h2>anna.slezak@best.krakow.pl</h2>
          </a>
        </div>

        <img
          ref={ref3}
          className={`${styles['picture']} ${styles['picture_odd']} ${
            inViewport3 ? styles['visible'] : ''
          }`}
          src={Hubert}
          alt={'Hubert Sujka'}
        />
        <div
          className={`${styles['organizator_info_container']} ${
            styles['organizator_info_container_odd']
          } ${inViewport3 ? styles['visible'] : ''}`}
        >
          <h2 className={styles['organizator_info_container_name']}>
            Hubert Sujka
          </h2>
          <h2>Koordynator ds. Promocji</h2>
          <a href="mailto:hubert.sujka@best.krakow.pl">
            <h2>hubert.sujka@best.krakow.pl</h2>
          </a>
        </div>

        <img
          ref={ref4}
          className={`${styles['picture']} ${styles['picture_even']} ${
            inViewport4 ? styles['visible'] : ''
          }`}
          src={Marta}
          alt={'Marta Chojnacka'}
        />
        <div
          className={`${styles['organizator_info_container']} ${
            styles['organizator_info_container_even']
          } ${inViewport4 ? styles['visible'] : ''}`}
        >
          <h2 className={styles['organizator_info_container_name']}>
            Marta Chojnacka
          </h2>
          <h2>Koordynator ds. Logistyki</h2>
          <a href="mailto:marta.chojnacka@best.krakow.pl">
            <h2>marta.chojnacka@best.krakow.pl</h2>
          </a>
        </div>

        <img
          ref={ref5}
          className={`${styles['picture']} ${styles['picture_odd']} ${
            inViewport5 ? styles['visible'] : ''
          }`}
          src={Konrad}
          alt={'Konrad Krzemiński'}
        />
        <div
          className={`${styles['organizator_info_container']} ${
            styles['organizator_info_container_odd']
          } ${inViewport5 ? styles['visible'] : ''}`}
        >
          <h2 className={styles['organizator_info_container_name']}>
            Konrad Krzemiński
          </h2>
          <h2>Koordynator ds. Merytoryki</h2>
          <a href="mailto:konrad.krzeminski@best.krakow.pl">
            <h2>konrad.krzeminski@best.krakow.pl</h2>
          </a>
        </div>

        <img
          ref={ref6}
          className={`${styles['picture']} ${styles['picture_even']} ${
            inViewport6 ? styles['visible'] : ''
          }`}
          src={Maciej}
          alt={'Maciej Piotrowski'}
        />
        <div
          className={`${styles['organizator_info_container']} ${
            styles['organizator_info_container_even']
          } ${inViewport6 ? styles['visible'] : ''}`}
        >
          <h2 className={styles['organizator_info_container_name']}>
            Maciej Piotrowski
          </h2>
          <h2>Koordynator ds. Merytoryki</h2>
          <a href="mailto:maciej.piotrowski@best.krakow.pl">
            <h2>maciej.piotrowski@best.krakow.pl</h2>
          </a>
        </div>

        <img
          ref={ref7}
          className={`${styles['picture']} ${styles['picture_odd']} ${
            inViewport7 ? styles['visible'] : ''
          }`}
          src={Tomasz}
          alt={'Tomasz Poręba'}
        />
        <div
          className={`${styles['organizator_info_container']} ${
            styles['organizator_info_container_odd']
          } ${inViewport7 ? styles['visible'] : ''}`}
        >
          <h2 className={styles['organizator_info_container_name']}>
            Tomasz Poręba
          </h2>
          <h2>Koordynator ds. Zasobów ludzkich</h2>
          <a href="mailto:tomasz.poreba@best.krakow.pl">
            <h2>tomasz.poreba@best.krakow.pl</h2>
          </a>
        </div>
      </article>

      <Footer />
    </main>
  )
}
