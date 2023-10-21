import * as React from 'react'
import SpaceHeader from './SpaceHeader'
import SpaceParagraph from './SpaceParagraph'
import * as styles from '../../styles/categories.module.css'

export default function Categories() {
  return (
    <>
      <SpaceHeader header="KATEGORIE" />
      <section className={styles['categories_container']}>
        <div className={styles['category']}>
          <h2 className={styles['category_header']}>KLASYCZNA</h2>
          <SpaceParagraph
            paragraph="Przed Tobą i Twoją
        drużyną możliwość 
        programowania w 
        dowolnym języku i 
        przy użyciu 
        dowolnej 
        technologii. W 
        czasie trwania 
        BITEhacka Waszym 
        zadaniem będzie 
        twórcze 
        rozwiązanie 
        zadanego 
        problemu, poprzez 
        nadanie swoim 
        pomysłom 
        odpowiedniego 
        kształtu."
          />
        </div>

        <div className={styles['category']}>
          <h2 className={styles['category_header']}>ROBOTYCZNA</h2>
          <SpaceParagraph
            paragraph="Twoim zadaniem
        oraz Twojej 
        drużyny będzie 
        zbudowanie i 
        zaprogramowanie 
        od podstaw 
        działającego 
        robota, a to 
        wszystko przy 
        kompleksowym 
        wsparciu 
        mentorów. Używać 
        będziecie platformy 
        programistycznej, 
        dodatkowych 
        narzędzi, a także 
        innych niezbędnych
        komponentów."
          />
        </div>

        <div className={styles['category']}>
          <h2 className={styles['category_header']}>AI</h2>
          <SpaceParagraph
            paragraph="Wraz z zespołem
        stworzycie 
        kompletne 
        rozwiązanie 
        informatyczne, 
        procesu lub obiekt 
        dynamiczny, przy 
        pomocy 
        najnowszych 
        technologii 
        opierających się na 
        sztucznej 
        inteligencji. Wasze 
        rozwiązanie musi 
        spełniać założenia 
        określone w 
        temacie kategorii, 
        ogłoszone w chwili 
        rozpoczęcia 
        wydarzenia."
          />
        </div>
      </section>
    </>
  )
}
