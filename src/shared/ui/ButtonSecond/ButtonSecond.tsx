import React from 'react'
import './style/buttonSecond.css'
import { type } from 'os'

interface buttonSecondType {
    text:string,
    onclick: (id:number) => void,
    idProduct:number
}
function ButtonSecond({text,onclick,idProduct}:buttonSecondType) {
  return (
    <button onClick={()=>onclick(idProduct)} className="button-second">
        <div className="button-second__text">{text}</div>
    </button>
  )
}

export default ButtonSecond