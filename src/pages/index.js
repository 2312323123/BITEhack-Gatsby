import * as React from 'react'
import { useState, useRef, useEffect } from 'react'
import NavBar from '../components/commonComponents/NavBar'
import RuchomeTlo from '../components/commonComponents/RuchomeTlo'
import MainFrame from '../components/commonComponents/MainFrame'
import BlurScreen from '../components/mainPageComponents/BlurScreen'
import ElectronicScreen from '../components/mainPageComponents/ElectronicScreen'
import MainContent from '../components/mainPageComponents/MainContent'

export default ({ location }) => {
  const [turnedOn, setTurnedOn] = useState(
    location.state ? location.state.turnedOn : false
  )
  const [blurOn, setBlurOn] = useState(
    location.state ? location.state.blurOn : false
  )
  const [electronicOn, setElectronicOn] = useState(
    location.state ? location.state.electronicOn : false
  )
  const lastWindowY = useRef(
    location.state ? location.state.lastWindowY : window.scrollY
  )
  const [newWindowY, setNewWindowY] = useState(
    location.state ? location.state.newWindowY : window.scrollY
  )
  const [contentScrolled, setContentScrolled] = useState(
    location.state ? location.state.contentScrolled : false
  )

  useEffect(() => {
    window.onscroll = () => {
      lastWindowY.current = newWindowY
      setNewWindowY(window.scrollY)
      console.count('UseEffect entered')
    }
  }, [newWindowY, setNewWindowY, lastWindowY.current])

  useEffect(() => {
    // scrolluje tylko jak jest menu na duze ekrany, w mniejszym sa kotwice
    if (window.matchMedia('(min-width: 50rem)').matches) {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <>
      <NavBar
        turnedOn={turnedOn}
        setTurnedOn={setTurnedOn}
        lastWindowY={lastWindowY}
        newWindowY={newWindowY}
        blurOn={blurOn}
        setBlurOn={setBlurOn}
        electronicOn={electronicOn}
        setElectronicOn={setElectronicOn}
        contentScrolled={contentScrolled}
        setContentScrolled={setContentScrolled}
      />

      <RuchomeTlo newWindowY={newWindowY} lastWindowY={lastWindowY} />
      <MainFrame
        turnedOn={turnedOn}
        setTurnedOn={setTurnedOn}
        lastWindowY={lastWindowY}
        newWindowY={newWindowY}
      />
      <BlurScreen blurOn={blurOn} setBlurOn={setBlurOn} />
      <MainContent
        contentScrolled={contentScrolled}
        setContentScrolled={setContentScrolled}
      />
      <ElectronicScreen
        electronicOn={electronicOn}
        setElectronicOn={setElectronicOn}
      />
    </>
  )
}

export const Head = () => (
  <>
    <meta charset="UTF-8" />
    <title>BITEhack 2023</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="../images/favicon.ico" />
    <meta
      name="description"
      content="BITEhack jest konkursem programistyczno- robotycznym dla studentów organizowanym w Klubie Studio zaraz przy Akademii Górniczo-Hutniczej w Krakowie."
    />
    <meta name="author" content="Maciej Piotrowski" />
  </>
)
