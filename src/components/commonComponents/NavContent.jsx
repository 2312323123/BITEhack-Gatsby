import * as React from 'react'
import * as styles from '../../styles/navbar.module.css'
import BITEhack_text from '../../images/BITEhack_text.svg'
import { Link } from 'gatsby'
import * as styles2 from '../../styles/navoption.module.css'

export default function NavContent(props) {
  const linkStyle = {
    fontSize: '1.25rem',
    color: 'white',
    fontFamily: "'Open Sans', Verdana",
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
      }`}
    >
      <img
        src={BITEhack_text}
        alt="BITEhack logo text"
        className={`${styles['nav_content_logo']} ${
          props.menuOpened
            ? styles['nav_content_logo_opened']
            : styles['nav_content_logo_closed']
        }`}
      />

      <div
        onClick={() => linkClick()}
        style={{ transitionDelay: `${0.08 * 0}s` }}
        className={`${styles2['nav_option']} ${
          props.menuOpened ? '' : styles2['tak']
        }`}
      >
        <Link
          to={'/#opis'}
          style={linkStyle}
          state={{
            turnedOn: props.turnedOn,
            lastWindowY: props.lastWindowY.current,
            newWindowY: props.newWindowY,
            blurOn: props.blurOn,
            electronicOn: props.electronicOn,
            contentScrolled: props.contentScrolled,
          }}
        >
          Opis
        </Link>
      </div>

      <div
        onClick={() => linkClick()}
        style={{ transitionDelay: `${0.08 * 1}s` }}
        className={`${styles2['nav_option']} ${
          props.menuOpened ? '' : styles2['tak']
        }`}
      >
        <Link
          to={'/#kategorie'}
          style={linkStyle}
          state={{
            turnedOn: props.turnedOn,
            lastWindowY: props.lastWindowY.current,
            newWindowY: props.newWindowY,
            blurOn: props.blurOn,
            electronicOn: props.electronicOn,
            contentScrolled: props.contentScrolled,
          }}
        >
          Kategorie
        </Link>
      </div>

      <div
        onClick={() => linkClick()}
        style={{ transitionDelay: `${0.08 * 2}s` }}
        className={`${styles2['nav_option']} ${
          props.menuOpened ? '' : styles2['tak']
        }`}
      >
        <Link
          to={'/#oprojekcie'}
          style={linkStyle}
          state={{
            turnedOn: props.turnedOn,
            lastWindowY: props.lastWindowY.current,
            newWindowY: props.newWindowY,
            blurOn: props.blurOn,
            electronicOn: props.electronicOn,
            contentScrolled: props.contentScrolled,
          }}
        >
          O projekcie, przebieg
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
          to={'/#cozyskasz'}
          style={linkStyle}
          state={{
            turnedOn: props.turnedOn,
            lastWindowY: props.lastWindowY.current,
            newWindowY: props.newWindowY,
            blurOn: props.blurOn,
            electronicOn: props.electronicOn,
            contentScrolled: props.contentScrolled,
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
          }}
        >
          Regulamin
        </Link>
      </div>
    </div>
  )
}
