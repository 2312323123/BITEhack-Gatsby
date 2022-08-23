import * as React from 'react'
import * as styles from '../../styles/space_header.module.css'

export default function SpaceHeader(props) {
  return <h1 className={styles['space_header']}>{props.header}</h1>
}
