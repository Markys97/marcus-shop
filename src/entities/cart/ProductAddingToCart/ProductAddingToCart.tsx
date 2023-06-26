import React from 'react'
import './style/productAddingToCart.css'
import { useAppSelector,productType,useAppDispatch } from '../../../shared'
import { closeModal } from '../../../shared/model/slices/settingSlice'

function ProductAddingToCart() {
    const dispatch = useAppDispatch()
    const listProduct = useAppSelector(state => state.product.listProduct)
    const idCurrentProductAdding = useAppSelector(state => state.product.idCurrentProductAddingToCart)
    
    const getCurrentproductAdding =( idProduct:number|null,listProduct:Array<productType>):productType|undefined =>{
        
        return listProduct.find(product => product.id === idProduct)
    }

    const currentProduct = getCurrentproductAdding(idCurrentProductAdding,listProduct)
  return (
    <div className="product-adding-cart">
        <div className="product-adding-cart__content">
            <h3 className="product-adding-cart__title">Добавлен в корзину</h3>
            <div className="product-adding-cart-item">
                <div className="product-adding-cart-item__content">
                    <div className="product-adding-cart-item__row">
                        <div className="product-adding-cart-item__img">
                            <img src={`/images/products/${currentProduct?.img}`} alt="product" />
                        </div>
                        <div className="product-adding-cart-item__body">
                            <div className="product-adding-cart-item__name">
                              {currentProduct?.name} 
                            </div>
                            <div className="product-adding-cart-item__price">
                                <div className="product-adding-cart-item__price-title">Цена:</div>
                                <div className="product-adding-cart-item__price-number"> {currentProduct?.price} руб.</div>
                            </div>
                            {
                                 currentProduct?.isDiscounted && (
                                    <div className="product-adding-cart-item__solde">
                                        <div className="product-adding-cart-item__solde-old">Старая цена: <span>5 550 руб.</span> </div>
                                        <div className="product-adding-cart-item__solde-new">Скидка 3 385 руб.</div>
                                    </div>
                                 ) 
                            }
                           
                           {currentProduct?.inStock && ( <div className="product-adding-cart-item__stoke">В наличии</div>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-adding-cart__buttons">
                <button onClick={()=> dispatch(closeModal())} className="btn btn--outline">
                    <div className="btn__text">Продолжить покупки</div>
                </button>
                <button className="btn btn--main">
                    <div className="btn__text">Перейти в корзину</div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductAddingToCart