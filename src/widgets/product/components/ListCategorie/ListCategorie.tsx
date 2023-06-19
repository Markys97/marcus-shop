import React from 'react'
import './style/listeCategorie.css'
import {CategorieItem_tpl} from "../../../../entities/index";
import {useAppSelector} from '../../../../shared/model/hooks'


function ListCategorie() {
    const ListCategorie = useAppSelector(state => state.product.listCategorie)
  return (
    <div className="categories categories--home">
        <div className="categories__container">
            <div className="categories__content">
                <div className="categories__row">
                    {
                        ListCategorie.map( categorieItem => (
                            <CategorieItem_tpl key={categorieItem.id} data={categorieItem}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListCategorie