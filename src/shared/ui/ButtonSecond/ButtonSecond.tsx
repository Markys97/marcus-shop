import React from 'react'
import './style/buttonSecond.css'
import { type } from 'os'

interface buttonSecondType {
    text:string,
    onclick: () => void
}
function ButtonSecond({text,onclick}:buttonSecondType) {
  return (
    <button onClick={onclick} className="button-second">
        <div className="button-second__text">{text}</div>
    </button>
  )
}

export default ButtonSecond