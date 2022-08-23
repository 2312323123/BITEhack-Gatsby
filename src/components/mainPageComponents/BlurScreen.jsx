import * as React from 'react'
import { useEffect } from 'react'
import * as styles from '../../styles/blur_screen.module.css'

export default function BlurScreen(props) {
  const { blurOn, setBlurOn } = props

  useEffect(() => {
    if (!blurOn) {
      setBlurOn(true)
    }
  }, [])

  return (
    <div
      className={`${styles['blur_screen']} ${
        blurOn ? styles['blur_screen_on'] : ''
      }`}
    ></div>
  )
}
