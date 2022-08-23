import * as React from 'react'

export default function RegulaminHeader(props) {
  const style = {
    fontFamily: '"Bungee Shade", sans-serif',
    fontSize: 'clamp(2.25rem, 5vw, 3.25rem)',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: '2rem',
    paddingBottom: '1rem',
    paddingInline: '1rem',
  }

  return <h1 style={style}>{props.header}</h1>
}
