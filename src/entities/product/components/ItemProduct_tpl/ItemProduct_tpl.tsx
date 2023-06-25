import React, { Children } from 'react'
import './style/itemProduct.css'
import { productType } from '../../../../shared';

interface ItemProduct_tplType {
  children: JSX.Element;
  data:productType;
  likeButton:React.ReactNode
}

function ItemProduct_tpl({children,data,likeButton}:ItemProduct_tplType) {

  const {id,img,name,price,isDiscounted,inStock} = data
  return (
    <div className="product">
      <div className="product__content">
        <div className="product__head">
          
          {isDiscounted && <div className="product__bull-info">%</div> }
          {likeButton}

          <div className="product__img">
            <img src={`/images/products/${img}`} alt={name} />
          </div>
        </div>

        <div className="product__body">

          <div className="product__name">
            {name}
          </div>
{/* 
          <div className="product__sizes">
            <div className="product__size">
              22
            </div>
            <div className="product__size">
              23
            </div>
            <div className="product__size">
              24
            </div>
            <div className="product__size">
              25
            </div>
            <div className="product__size">
              26
            </div>
          </div>

          <div className="product__colors">
            <div className="product__color"></div>
            <div className="product__color"></div>
            <div className="product__color"></div>
            <div className="product__color"></div>
            <div className="product__color"></div>
          </div> */}

        </div>

        <div className="product__footer">
          <div className="product__footer-left">
            <div className="product__price">
              <h5 className='product__price-title' >Цена:</h5>
              <div className="product__price-number">{price} руб.</div>
              <div className="product__price-state">{inStock===true?'В наличии':'нет наличии'}</div>
            </div>
          </div>
          <div className="product__footer-right">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemProduct_tpl