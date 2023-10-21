import * as React from 'react'
import { useState, useRef, useEffect } from 'react'
import NavBar from '../components/commonComponents/NavBar'
import RuchomeTlo from '../components/commonComponents/RuchomeTlo'
import OrganizatorContent from '../components/organizatorPageComponents/OrganizatorContent'
import PlanetaTlo from '../components/commonComponents/PlanetaTlo'

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
    typeof window !== 'undefined' && window !== null
      ? location.state
        ? location.state.lastWindowY
        : window.scrollY
      : null
  )
  const [newWindowY, setNewWindowY] = useState(
    typeof window !== 'undefined' && window !== null
      ? location.state
        ? location.state.newWindowY
        : window.scrollY
      : null
  )
  const [contentScrolled, setContentScrolled] = useState(
    location.state ? location.state.contentScrolled : false
  )
  const [menuOpened, setMenuOpened] = useState(
    location.state ? location.state.menuOpened : false
  )
  const [currentPage, setCurrentPage] = useState('organizator')

  useEffect(() => {
    if (
      typeof location.state !== 'undefined' &&
      location.state !== null &&
      typeof location.state.notRefreshed !== 'undefined'
    ) {
      window.history.replaceState({}, document.title)
    }
  }, [])

  useEffect(() => {
    window.onscroll = () => {
      lastWindowY.current = newWindowY
      setNewWindowY(window.scrollY)
      // console.count('UseEffect entered')
    }
  }, [newWindowY, setNewWindowY, lastWindowY.current])

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
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
        currentPage={currentPage}
      />

      <RuchomeTlo newWindowY={newWindowY} lastWindowY={lastWindowY} />
      <PlanetaTlo newWindowY={newWindowY} />
      <OrganizatorContent
        contentScrolled={contentScrolled}
        setContentScrolled={setContentScrolled}
      />
    </>
  )
}

export { Head } from './index'
