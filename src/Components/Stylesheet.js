import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
    let classColor = props.primary ? 'primary' : ''
  return (
    <div><h1 className={`${classColor} font-xl`}>Stylesheet</h1></div>
  )
}

export default Stylesheet