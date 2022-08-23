import * as React from 'react'
import { useLayoutEffect, useRef, useState } from 'react'
import * as styles from '../../styles/main_frame.module.css'

export default function MainFrame(props) {
  const { turnedOn, setTurnedOn, newWindowY, lastWindowY } = props

  const [top, setTop] = useState(false)
  const [bottom, setBottom] = useState(false)
  const [turningOn, setTurningOn] = useState(false)
  const timeout = useRef(null)

  useLayoutEffect(() => {
    if (!turnedOn) {
      setTop(true)
      setTimeout(() => {
        setTop(false)
        setBottom(true)
        setTimeout(() => {
          setBottom(false)
        }, 1000)
      }, 1200)

      setTurnedOn(true)

      setTurningOn(true)
      setTimeout(() => setTurningOn(false), 2200)
    } else if (!turningOn) {
      if (newWindowY > lastWindowY.current) {
        setTop(true)
        setBottom(false)
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => setTop(false), 200)
      } else {
        setTop(false)
        setBottom(true)
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => setBottom(false), 200)
      }
    }
  }, [turnedOn, newWindowY, lastWindowY.current])

  return (
    <div className={styles['main_frame_container']}>
      <div
        className={`${styles['main_frame_frame']} ${
          turnedOn ? styles['main_frame_frame_opened'] : ''
        }`}
      >
        <div className={top ? styles['spark_1'] : styles['spark_off']}>
          <div className={styles['flame']}></div>
        </div>
        <div className={top ? styles['spark_2'] : styles['spark_off']}>
          <div className={styles['flame']}></div>
        </div>
        <div className={bottom ? styles['spark_3'] : styles['spark_off']}>
          <div className={styles['flame']}></div>
        </div>
        <div className={bottom ? styles['spark_4'] : styles['spark_off']}>
          <div className={styles['flame']}></div>
        </div>
      </div>
    </div>
  )
}
