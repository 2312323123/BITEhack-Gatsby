import * as React from 'react'
import * as styles from '../../styles/regulamin_section_header.module.css'

export default function RegulaminSectionHeader(props) {
  return <h1 className={styles['regulamin_section_header']}>{props.header}</h1>
}
