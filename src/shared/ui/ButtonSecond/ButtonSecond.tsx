import React from 'react'
import './style/buttonSecond.css'
import { type } from 'os'

interface buttonSecondType {
    text:string,
    onclick: (id:number) => void,
    idProduct:number;
    modificatorClass?:string
}
function ButtonSecond({text,onclick,idProduct,modificatorClass}:buttonSecondType) {
  return (
    <button  onClick={()=>onclick(idProduct)} className={`button-second ${modificatorClass!== undefined?modificatorClass:''}`}>
        <div className="button-second__text">{text}</div>
    </button>
  )
}

export default ButtonSecond