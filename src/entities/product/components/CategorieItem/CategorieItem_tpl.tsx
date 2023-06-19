import React from 'react'
import './style/categorieItem.css'
import {categorieType} from'../../../../shared/index'
import { Link } from 'react-router-dom'
interface categorieItem_tplType{
  data:categorieType
}

function CategorieItem_tpl({data}:categorieItem_tplType) {
  const {id,name,img}=data

  return (
    <Link to={`/catalog/categorie/${id}`}>
      <div className="item-categorie">
          <div className="item-categorie__content">
          <div className="item-categorie__img">
              <img src={`/images/products/${img}`} alt="categorie" />
          </div>
          <div className="item-categorie__title">{name}</div>
          </div>
      </div>
    </Link>
    
  )
}

export default CategorieItem_tpl