import * as React from 'react'
import { useEffect } from 'react'
import NavContentBigScreen from './NavContentBigScreen'
import NavButton from './NavButton'
import NavContent from './NavContent'

export default function NavBar(props) {
  const switchMenu = () => {
    props.setMenuOpened(!props.menuOpened)
  }

  useEffect(() => {
    if (props.menuOpened) {
      props.setMenuOpened(false)
    }
  }, [])

  return (
    <>
      <NavButton click={switchMenu} menuOpened={props.menuOpened} />
      <NavContent
        click={switchMenu}
        menuOpened={props.menuOpened}
        turnedOn={props.turnedOn}
        setTurnedOn={props.setTurnedOn}
        lastWindowY={props.lastWindowY}
        newWindowY={props.newWindowY}
        blurOn={props.blurOn}
        setBlurOn={props.setBlurOn}
        electronicOn={props.electronicOn}
        setElectronicOn={props.setElectronicOn}
        contentScrolled={props.contentScrolled}
        setContentScrolled={props.setContentScrolled}
        currentPage={props.currentPage}
      />
      <NavContentBigScreen
        menuOpened={props.menuOpened}
        turnedOn={props.turnedOn}
        setTurnedOn={props.setTurnedOn}
        lastWindowY={props.lastWindowY}
        newWindowY={props.newWindowY}
        blurOn={props.blurOn}
        setBlurOn={props.setBlurOn}
        electronicOn={props.electronicOn}
        setElectronicOn={props.setElectronicOn}
        contentScrolled={props.contentScrolled}
        setContentScrolled={props.setContentScrolled}
      />
    </>
  )
}
