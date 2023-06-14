import React from 'react'
import './style/button.css'

type buttonProps ={
    text:string,
    onClick : () => void
}

function Button({text,onClick}:buttonProps) {
  return (
    <button onClick={onClick} className="button">
        <div className="button__text">{text}</div>
    </button>
  )
}

export default Button