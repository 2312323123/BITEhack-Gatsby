import * as React from 'react'
import SpaceHeader from '../commonComponents/SpaceHeader'
import * as styles from '../../styles/main_content.module.css'

import { useEffect } from 'react'
import SpaceParagraph from '../commonComponents/SpaceParagraph'
// import Footer from '../commonComponents/Footer'
import LandingPage from './LandingPage'
import Categories from '../commonComponents/Categories'
import Sponsors from './Sponsors'
import Footer from '../commonComponents/Footer'
// import Categories from '../commonComponents/Categories'
// import Sponsors from './Sponsors'

export default function MainContent(props) {
  const { contentScrolled, setContentScrolled } = props

  useEffect(() => {
    if (!contentScrolled) {
      setContentScrolled(true)
    }
  }, [contentScrolled, setContentScrolled])

  return (
    <main
      id="opis"
      className={`${styles['main_content']} ${
        contentScrolled ? styles['content_scrolled'] : ''
      }`}
    >
      <LandingPage />

      <div style={{ height: '5vh' }}></div>
      <div style={{ height: '5vh' }}></div>

      <SpaceParagraph
        paragraph="Programowanie to Twoja pasja? Interesujesz się tematyką AI lub
robotyką? Jeśli na któreś z tych pytań odpowiedziałeś tak, to 
koniecznie weź swoich znajomych i zapiszcie się na BITEhacka, 
dzięki któremu spędzicie wspólnie weekend i rozwiniecie swoje 
pasje."
      />

      <div style={{ height: '7.5vh' }}></div>
      <SpaceHeader header="CZAS" />
      <SpaceParagraph
        paragraph="Twój team będzie miał 24 godziny na opracowanie
innowacyjnego rozwiązania i przygotowanie prototypu aplikacji 
czy też oprogramowania lub stworzenie zwycięskiej wersji 
robota. Jesteście gotowi na niezapomnianą przygodę? Zapisz 
się już teraz."
      />

      <div style={{ height: '7.5vh' }}></div>
      <SpaceHeader header="ATRAKCJE" />
      <SpaceParagraph
        paragraph="W przerwie od kreatywnego myślenia będziecie mieli okazję
porozmawiać z potencjalnymi pracodawcami. Partner Główny- 
IBM przeprowadzi specjalnie dla Was Speed recruitment."
      />

      <div id="kategorie" style={{ height: '7.5vh' }}></div>

      <Categories />

      <div id="oprojekcie" style={{ height: '7.5vh' }}></div>
      <SpaceHeader header="O PROJEKCIE" />
      <SpaceHeader header="Co to tak naprawdę jest BITEhack?" />
      <SpaceParagraph
        paragraph="BITEhack (BEST IT Extended Hackathon) jest konkursem
programistyczno- robotycznym skierowanym dla wszystkich 
studentów organizowanym w Klubie Studio zaraz przy Akademii 
Górniczo-Hutniczej w Krakowie. Zeszłoroczna edycja została 
rozszerzona o kategorie AI, która ciesząc się dużym 
zainteresowaniem została z nami również w tym roku. 
Wydarzenie zakłada wykonanie innowacyjnych projektów w 
czasie nie przekraczającym doby. Zespół może się składać 
maksymalnie z 4 osób."
      />

      <div style={{ height: '7.5vh' }}></div>
      <SpaceHeader header="PRZEBIEG WYDARZENIA" />
      <SpaceParagraph
        paragraph="Uczestnicy hackatonu mają 24 godziny na zaproponowanie i
przedstawienie własnego pomysłu na zadany w temacie 
problem.
Wyniki końcowe zespołów oceniać będzie jury składające się z 
przedstawicieli sponsorów BITEhacka oraz pracowników 
naukowych Akademii Górniczo-Hutniczej. "
      />

      <div id="cozyskasz" style={{ height: '7.5vh' }}></div>
      <SpaceHeader header="CZY WARTO?" />
      <SpaceParagraph
        paragraph="Dzięki zapisom na wydarzenie możecie spędzić wspólnie czas ze
znajomymi, poznać innych kreatywnych studentów, nabyć 
potrzebnego doświadczenia i nauczyć się rozwiązywania 
problemów pracując w zespole. Hackaton jest również świetną 
okazją do nawiązania kontaktów z przedstawicielami 
największych firm na krakowskim rynku IT. Będziecie mieli 
również okazję na wzięcie udziału w speed recruitment 
poprowadzonym przez naszego Partnera Głównego. Kolejna 
taka okazja dopiero za rok!"
      />

      <div id="sponsorzy" style={{ height: '5vh' }}></div>

      <Sponsors />

      <Footer />
    </main>
  )
}
