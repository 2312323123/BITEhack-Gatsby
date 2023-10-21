import React from 'react'

function Copyright() {
  const style = {
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Montserrat',
    width: '100%',
    textAlign: 'center',
    lineHeight: '150%',
  }

  return (
    <div style={style}>Copyright © BITEhack | {new Date().getFullYear()}</div>
  )
}

export default Copyright
