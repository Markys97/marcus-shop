import React from 'react'
import './style/itemProduct.css'

function ItemProduct_tpl() {
  return (
    <div className="product">
      <div className="product__content">
        <div className="product__head">
          <div className="product__bull-info">%</div>
          <div className="product__like-icon">
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.24806 2.31668L9.25335 2.31145L9.6643 2.71832L10.0158 3.06636L10.3676 2.71857L11.1301 1.96477L11.1316 1.96322C11.5849 1.51113 12.1243 1.15171 12.7191 0.905864C13.3139 0.660014 13.9522 0.532665 14.5972 0.531269C15.2422 0.529872 15.8811 0.654457 16.477 0.897731C17.0728 1.141 17.6139 1.49809 18.0692 1.94822C18.5244 2.39834 18.885 2.93262 19.1304 3.52024C19.3759 4.10785 19.5014 4.7374 19.5 5.37279C19.4986 6.00818 19.3703 6.63718 19.1222 7.22372C18.8742 7.81028 18.5113 8.343 18.054 8.79115L18.0524 8.79272L10.428 16.3318L10.4279 16.3319C10.3744 16.3848 10.3106 16.4271 10.24 16.4561C10.1693 16.485 10.0934 16.5 10.0166 16.5C9.93982 16.5 9.8639 16.485 9.79327 16.4561C9.72263 16.4271 9.65884 16.3849 9.60537 16.3319L9.60518 16.3317L1.97973 8.79269L1.97976 8.79266L1.97517 8.78824C1.51166 8.34152 1.1428 7.80856 0.889708 7.22045C0.636617 6.63235 0.50424 6.00063 0.5001 5.36188C0.495961 4.72313 0.620139 4.0898 0.865579 3.49856C1.11102 2.90731 1.47293 2.36974 1.93059 1.91721C2.38826 1.46466 2.93257 1.10616 3.53211 0.862784C4.13166 0.619405 4.77431 0.496078 5.42275 0.500095C6.07118 0.504112 6.71221 0.635391 7.30861 0.88617C7.90499 1.13695 8.4447 1.50215 8.89658 1.96031L9.24806 2.31668Z" stroke="#CECCCC"/>
            </svg>
          </div>

          <div className="product__img">
            <img src="/images/products/01.png" alt="product picture" />
          </div>
        </div>

        <div className="product__body">

          <div className="product__name">
            Рюкзак RA-973-1 Grizzly, цвет голубой
          </div>

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
          </div>

        </div>

        <div className="product__footer">
          <div className="product__footer-left">
            <div className="product__price">
              <h5 className='product__price-title' >Цена:</h5>
              <div className="product__price-number">3538 руб.</div>
              <div className="product__price-state">В наличии</div>
            </div>
          </div>
          <div className="product__footer-right">
            <button className="button-second">
              <div className="button-second__text">Купить</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemProduct_tpl