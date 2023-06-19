import React from 'react'
import {ButtonSecond} from '../../../shared/index'

interface addToCardType{
    idProduct:number
}
function AddToCart({idProduct}:addToCardType) {
  return (
    <ButtonSecond text='купить' onclick= {() => alert('mama')}/>
  )
}

export default AddToCart