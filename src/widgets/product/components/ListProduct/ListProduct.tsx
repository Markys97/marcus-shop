import React from 'react'
import './style/listProduct.css'
import { ItemProduct_tpl } from '../../../../entities'
import { AddToCart,LikeProduct } from '../../../../features'
import { useAppSelector } from '../../../../shared'



function ListProduct() {
    const listProduct = useAppSelector(state => state.product.listProduct)
   
  return (
    <div className="list-product">
        <div className="list-product__row">
            {
                listProduct.map(product=> (
                    <ItemProduct_tpl likeButton={ <LikeProduct idProduct={product.id}/>} key={product.id} data={product}>
                            <AddToCart idProduct={product.id} />
                    </ItemProduct_tpl>
                ))
            }
          
        </div>
    </div>
  )
}

export default ListProduct