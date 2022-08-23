import * as React from 'react'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from './layout.module.css'

const TurnedOnContext = createContext(null)
export const useWindowData = () => useContext(TurnedOnContext)

const Layout = ({ pageTitle, children }) => {
  const [turnedOn, setTurnedOn] = useState(false)
  const [blurOn, setBlurOn] = useState(false)
  const [electronicOn, setElectronicOn] = useState(false)
  const lastWindowY = useRef(window.scrollY)
  const [newWindowY, setNewWindowY] = useState(window.scrollY)
  const [contentScrolled, setContentScrolled] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      lastWindowY.current = newWindowY
      setNewWindowY(window.scrollY)
      console.count('UseEffect entered')
    }
  }, [newWindowY, setNewWindowY, lastWindowY.current])

  return (
    <TurnedOnContext.Provider
      value={{
        turnedOn,
        setTurnedOn,
        lastWindowY,
        newWindowY,
        blurOn,
        setBlurOn,
        electronicOn,
        setElectronicOn,
        contentScrolled,
        setContentScrolled,
      }}
    >
      <div className={container}>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/index1" className={navLinkText}>
                Home {turnedOn.toString()}
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about1" className={navLinkText}>
                About
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </TurnedOnContext.Provider>
  )
}

export default Layout
