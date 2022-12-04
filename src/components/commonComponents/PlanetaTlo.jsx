import React, { useLayoutEffect, useRef, useState } from 'react'
import planeta_tlo from '../../images/HACKATHON.png'
import * as styles from '../../styles/planeta_tlo.module.css'

function PlanetaTlo(props) {
  const { newWindowY } = props

  const [maxScroll, setMaxScroll] = useState()
  // console.log(newWindowY)

  useLayoutEffect(() => {
    const body = document.body,
      html = document.documentElement

    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )

    const windowHeight = window.innerHeight

    setMaxScroll(docHeight - windowHeight)
  }, [newWindowY])

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: '45vh',
          backgroundPosition:
            'left ' + ((newWindowY / maxScroll) * 100).toFixed(2) + '%',
        }}
        className={styles['mala_planeta_tlo']}
      ></div>
      <div
        style={{
          position: 'fixed',
          top: '0',
          backgroundPosition:
            'center ' + ((newWindowY / maxScroll) * 100).toFixed(2) + '%',
        }}
        className={styles['planeta_tlo']}
      ></div>
      {/* <div className={styles['hehe']}></div> */}
    </>
  )
}

export default PlanetaTlo
