import React from 'react'
import {ButtonSecond} from '../../../shared/index'
import { useAppDispatch,useAppSelector } from '../../../shared/index'
import { setProductToCart ,setIdCurrentProductAddingToCart} from '../../../shared/model/slices/productSlice'
import { OpenModal, setModalContent } from '../../../shared/model/slices/settingSlice'
import { stat } from 'fs'

interface AddToCardType{
    idProduct:number
    
}



function AddToCart({idProduct}:AddToCardType) {
  const cart:Array<number> = useAppSelector(state => state.product.cart)
  const idCurrentProductAddingToCart = useAppSelector(state => state.product.idCurrentProductAddingToCart)
  const dispatch = useAppDispatch()
  const openModal = (id:number):void => alert('open cart '+ id)

  const isproductInCart =(cart:Array<number>,idProduct:number):boolean =>{
    
    return cart.includes(idProduct)?true:false
   }


  const addProductToCart = (id:number):void =>{
    dispatch(setProductToCart(id))
  }

  const handlerProduct = (idProduct:number,cart:Array<number>):void => {
    if(!isproductInCart(cart,idProduct)){
      addProductToCart(idProduct)
    }else{
      dispatch(setIdCurrentProductAddingToCart(idProduct))
      dispatch(setModalContent('addingProductToCart'))
      dispatch(OpenModal())
    }
  }



  const textButton:string = !isproductInCart(cart,idProduct)?'В корзине':'Купить';
  const classNameModificator = isproductInCart(cart,idProduct) ? 'button-second--active':undefined
    

  return (
    <ButtonSecond modificatorClass={classNameModificator} idProduct={idProduct} text={textButton} onclick= {(id) => handlerProduct(id,cart)}/>
  )
}

export default AddToCart