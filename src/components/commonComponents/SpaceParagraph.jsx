import * as React from 'react'
import * as styles from '../../styles/space_paragraph.module.css'

export default function SpaceParagraph(props) {
  return <p className={styles['space_paragraph']}>{props.paragraph}</p>
}
