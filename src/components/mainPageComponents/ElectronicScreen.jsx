import * as React from 'react'
import { useEffect } from 'react'
import * as styles from '../../styles/electronic_screen.module.css'

export default function ElectronicScreen(props) {
  const { electronicOn, setElectronicOn } = props

  useEffect(() => {
    if (!electronicOn) {
      setElectronicOn(true)
    }
  }, [])

  return (
    <div
      className={`${styles['electronic_screen']} ${
        electronicOn ? styles['electronic_screen_on'] : ''
      }`}
    ></div>
  )
}
