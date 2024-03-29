import * as React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import * as styles from '../../styles/nav_content_big_screen.module.css'

export default function NavContentBigScreen(props) {
  const [visible, setVisible] = useState(true)
  const { newWindowY, lastWindowY } = props

  useEffect(() => {
    if (newWindowY > lastWindowY.current) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }, [newWindowY, lastWindowY.current])

  useEffect(() => {
    setTimeout(() => setVisible(true), 0)
  }, [])

  return (
    <nav className={`${styles['nav']} ${visible ? '' : styles['hidden']}`}>
      <div className={styles['big_nav_lines']}></div>
      <div className={styles['nav_button_background_container']}>
        <div className={styles['nav_button_background']}>
          <Link
            to={'/'}
            state={{
              turnedOn: props.turnedOn,
              lastWindowY: props.lastWindowY.current,
              newWindowY: props.newWindowY,
              blurOn: props.blurOn,
              electronicOn: props.electronicOn,
              contentScrolled: props.contentScrolled,
              notRefreshed: true,
            }}
          >
            O projekcie
          </Link>
        </div>
      </div>
      <div className={styles['big_nav_lines']}></div>
      <div className={styles['nav_button_background_container']}>
        <div className={styles['nav_button_background']}>
          <Link
            to="/organizator"
            state={{
              turnedOn: props.turnedOn,
              lastWindowY: props.lastWindowY.current,
              newWindowY: props.newWindowY,
              blurOn: props.blurOn,
              electronicOn: props.electronicOn,
              contentScrolled: props.contentScrolled,
              notRefreshed: true,
            }}
            style={{ zIndex: 50, position: 'fixed' }}
          >
            Organizatorzy
          </Link>
        </div>
      </div>
      <div className={styles['big_nav_lines']}></div>
      <div className={styles['nav_button_background_container']}>
        <div className={styles['nav_button_background']}>
          <Link
            to={'/regulamin'}
            state={{
              turnedOn: props.turnedOn,
              lastWindowY: props.lastWindowY.current,
              newWindowY: props.newWindowY,
              blurOn: props.blurOn,
              electronicOn: props.electronicOn,
              contentScrolled: props.contentScrolled,
              notRefreshed: true,
            }}
          >
            Regulamin
          </Link>
        </div>
      </div>
      <div className={styles['big_nav_lines']}></div>
    </nav>
  )
}
