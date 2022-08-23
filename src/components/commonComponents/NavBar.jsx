import * as React from 'react'
import { useState } from 'react'
import NavContentBigScreen from './NavContentBigScreen'
import NavButton from './NavButton'
import NavContent from './NavContent'

export default function NavBar(props) {
  const [menuOpened, setMenuOpened] = useState(false)

  const switchMenu = () => {
    setMenuOpened(!menuOpened)
  }

  return (
    <>
      <NavButton click={switchMenu} menuOpened={menuOpened} />
      <NavContent
        click={switchMenu}
        menuOpened={menuOpened}
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
      <NavContentBigScreen
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
