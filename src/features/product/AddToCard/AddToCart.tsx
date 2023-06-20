import React from 'react'
import {ButtonSecond} from '../../../shared/index'

interface addToCardType{
    idProduct:number
}
function AddToCart({idProduct}:addToCardType) {
  return (
    <ButtonSecond idProduct={idProduct} text='купить' onclick= {(id) => alert('product '+id)}/>
  )
}

export default AddToCart