import * as React from 'react'
import * as styles from '../../styles/navbar.module.css'
import BITEhack_text from '../../images/BITEhack_text.svg'
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

  const linkClick = () => {
    props.click()
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
      {/* <img
        src={BITEhack_text}
        alt="BITEhack logo text"
        className={`${styles['nav_content_logo']} ${
          props.menuOpened
            ? styles['nav_content_logo_opened']
            : styles['nav_content_logo_closed']
        }`}
      /> */}

      <div
        onClick={() => linkClick()}
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
        onClick={() => linkClick()}
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
        onClick={() => linkClick()}
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

      {/* <div
        onClick={() => linkClick()}
        style={{ transitionDelay: `${0.08 * 3}s` }}
        className={`${styles2['nav_option']} ${
          props.menuOpened ? '' : styles2['tak']
        }`}
      >
        <Link
          to={'/#cozyskasz'}
          style={linkStyle}
          state={{
            turnedOn: props.turnedOn,
            lastWindowY: props.lastWindowY.current,
            newWindowY: props.newWindowY,
            blurOn: props.blurOn,
            electronicOn: props.electronicOn,
            contentScrolled: props.contentScrolled,
            menuOpened: props.menuOpened
          }}
        >
          Co zyskasz
        </Link>
      </div>

      <div
        onClick={() => linkClick()}
        style={{ transitionDelay: `${0.08 * 4}s` }}
        className={`${styles2['nav_option']} ${
          props.menuOpened ? '' : styles2['tak']
        } ${styles2['number_5']}`}
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
            menuOpened: props.menuOpened
          }}
        >
          Organizator
        </Link>
      </div>

      <div
        onClick={() => linkClick()}
        style={{ transitionDelay: `${0.08 * 5}s` }}
        className={`${styles2['nav_option']} ${
          props.menuOpened ? '' : styles2['tak']
        }`}
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
            menuOpened: props.menuOpened
          }}
        >
          Regulamin
        </Link>
      </div> */}
    </div>
  )
}
