import * as React from 'react'
import * as styles from '../../styles/navbutton.module.css'

export default function MenuButton(props) {
  const tick = () => {
    props.click()
  }

  return (
    <div
      style={{
        position: 'fixed',
        right: 0,
        top: 0,
        userSelect: 'none',
      }}
      onMouseUp={() => tick()}
      className={styles['bars']}
    >
      <div
        className={`${styles['bar']} ${
          props.menuOpened
            ? ` ${styles['bar_orange']}`
            : ` ${styles['bar_white']}`
        } ${styles['bar_1']} ${
          props.menuOpened ? ` ${styles['bar_1_open']}` : ''
        }`}
      ></div>
      <div
        className={`${styles['bar']} ${
          props.menuOpened
            ? ` ${styles['bar_orange']}`
            : ` ${styles['bar_white']}`
        } ${styles['bar_2']} ${
          props.menuOpened ? ` ${styles['bar_2_open']}` : ''
        }`}
      ></div>
      <div
        className={`${styles['bar']} ${
          props.menuOpened
            ? ` ${styles['bar_orange']}`
            : ` ${styles['bar_white']}`
        } ${styles['bar_3']} ${
          props.menuOpened ? ` ${styles['bar_3_open']}` : ''
        }`}
      ></div>
    </div>
  )
}
