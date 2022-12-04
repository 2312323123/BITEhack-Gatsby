import * as React from 'react'
import * as styles from '../../styles/moving_background.module.css'
import { useEffect, useLayoutEffect, useState } from 'react'

export default function RuchomeTlo(props) {
  const [paralaxUp, setParalaxUp] = useState(true)
  const [contents, setContents] = useState({})

  const { newWindowY, lastWindowY } = props

  useLayoutEffect(() => {
    const setupFunc = () => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const multiplied = windowWidth * windowHeight

      const little_count = Math.floor(multiplied / 10000)
      const medium_count = Math.floor(little_count / 2)
      const big_count = Math.floor(little_count / 3.5)

      let shadows_1 = ''
      let shadows_2 = ''
      let shadows_3 = ''

      for (let i = 0; i < little_count; i++) {
        shadows_1 += `${Math.round(Math.random() * windowWidth)}px ${Math.round(
          Math.random() * windowHeight
        )}px #eed2bc,`
      }
      shadows_1 = shadows_1.slice(0, -1)

      for (let i = 0; i < medium_count; i++) {
        shadows_2 += `${Math.round(Math.random() * windowWidth)}px ${Math.round(
          Math.random() * windowHeight
        )}px #eed2bc,`
      }
      shadows_2 = shadows_2.slice(0, -1)

      for (let i = 0; i < big_count; i++) {
        shadows_3 += `${Math.round(Math.random() * windowWidth)}px ${Math.round(
          Math.random() * windowHeight
        )}px #eed2bc,`
      }
      shadows_3 = shadows_3.slice(0, -1)

      setContents({
        content_1: (
          <div
            style={{
              width: '2px',
              height: '2px',
              borderRadius: '50%',
              boxShadow: shadows_1,
            }}
          ></div>
        ),
        content_2: (
          <div
            style={{
              width: '3px',
              height: '3px',
              borderRadius: '50%',
              boxShadow: shadows_2,
            }}
          ></div>
        ),
        content_3: (
          <div
            style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              boxShadow: shadows_3,
            }}
          ></div>
        ),
      })
    }

    setupFunc()

    window.addEventListener('resize', setupFunc)
  }, [])

  useEffect(() => {
    if (newWindowY > lastWindowY.current) {
      setParalaxUp(true)
    } else {
      setParalaxUp(false)
    }
  }, [newWindowY, lastWindowY.current])

  useEffect(() => {
    setTimeout(() => setParalaxUp(true), 0)
  }, [])

  return (
    <div className={styles['main_background']}>
      <div
        style={paralaxUp ? {} : { animationPlayState: 'paused' }}
        className={styles['speed_1_container']}
      >
        <div className={styles['speed_1_child']}>{contents.content_1}</div>
        <div className={styles['speed_1_child']}>{contents.content_1}</div>
        <div className={styles['speed_1_child']}>{contents.content_1}</div>
      </div>
      <div
        style={paralaxUp ? {} : { animationPlayState: 'paused' }}
        className={styles['speed_2_container']}
      >
        <div className={styles['speed_2_child']}>{contents.content_2}</div>
        <div className={styles['speed_2_child']}>{contents.content_2}</div>
        <div className={styles['speed_2_child']}>{contents.content_2}</div>
      </div>
      <div
        style={paralaxUp ? {} : { animationPlayState: 'paused' }}
        className={styles['speed_3_container']}
      >
        <div className={styles['speed_3_child']}>{contents.content_3}</div>
        <div className={styles['speed_3_child']}>{contents.content_3}</div>
        <div className={styles['speed_3_child']}>{contents.content_3}</div>
      </div>
    </div>
  )
}
