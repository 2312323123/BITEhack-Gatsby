import * as React from 'react'
import * as styles from '../../styles/navbar.module.css'
import { Link } from 'gatsby'
import * as styles2 from '../../styles/navoption.module.css'

export default function NavContent(props) {
  const linkStyle = {
    fontSize: '2rem',
    color: '#b63c37',
    fontFamily: "'Montserrat', Verdana",
    fontWeight: '800',
    textDecoration: 'none',
  }

  const linkClick = (currentPage) => {
    if (currentPage === props.currentPage) {
      props.click()
    }
  }

  return (
    <div
      className={`${styles['nav_content_container']} ${
        props.menuOpened
          ? styles['nav_content_container_opened']
          : styles['nav_content_container_closed']
      } ${
        props.menuOpened
          ? styles['nav_content_container_fast_transition']
          : styles['nav_content_container_slow_transition']
      }`}
    >
      <div
        onClick={() => linkClick('regulamin')}
        style={{ transitionDelay: `${0.08 * 2}s` }}
        className={`${styles2['nav_option']} ${
          props.menuOpened ? '' : styles2['tak']
        } ${styles2['number_1']}`}
      >
        <Link
          to={'/regulamin'}
          style={linkStyle}
          state={{
            turnedOn: props.turnedOn,
            lastWindowY: props.lastWindowY.current,
            newWindowY: props.newWindowY,
            blurOn: props.blurOn,
            electronicOn: props.electronicOn,
            contentScrolled: props.contentScrolled,
            menuOpened: props.menuOpened,
            notRefreshed: true,
          }}
        >
          Regulamin
        </Link>
      </div>

      <div
        onClick={() => linkClick('index')}
        style={{ transitionDelay: `${0.08 * 3}s` }}
        className={`${styles2['nav_option']} ${
          props.menuOpened ? '' : styles2['tak']
        }`}
      >
        <Link
          to={'/'}
          style={linkStyle}
          state={{
            turnedOn: props.turnedOn,
            lastWindowY: props.lastWindowY.current,
            newWindowY: props.newWindowY,
            blurOn: props.blurOn,
            electronicOn: props.electronicOn,
            contentScrolled: props.contentScrolled,
            menuOpened: props.menuOpened,
            notRefreshed: true,
          }}
        >
          O projekcie
        </Link>
      </div>

      <div
        onClick={() => linkClick('organizator')}
        style={{ transitionDelay: `${0.08 * 4}s` }}
        className={`${styles2['nav_option']} ${
          props.menuOpened ? '' : styles2['tak']
        }`}
      >
        <Link
          to={'/organizator'}
          style={linkStyle}
          state={{
            turnedOn: props.turnedOn,
            lastWindowY: props.lastWindowY.current,
            newWindowY: props.newWindowY,
            blurOn: props.blurOn,
            electronicOn: props.electronicOn,
            contentScrolled: props.contentScrolled,
            menuOpened: props.menuOpened,
            notRefreshed: true,
          }}
        >
          Organizatorzy
        </Link>
      </div>
    </div>
  )
}
