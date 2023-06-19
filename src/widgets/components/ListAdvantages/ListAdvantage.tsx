import React from 'react'
import './style/listAdvantages.css'
import AdVantageItem_tpl from '../../../shared/ui/AdvantageItem_tpl/AdVantageItem_tpl'
import { useAppSelector } from '../../../shared' 

function ListAdvantage() {
    const listAdvantage = useAppSelector( state => state.product.listAdvantage)
  return (
    <div className="advantages">
        <div className="advantages__content">
        <div className="advantages__row">
           
            {
                listAdvantage.map( advantageItem => (
                    <AdVantageItem_tpl key={advantageItem.id}  data={advantageItem}/>
                ))
            }
           
        </div>
        </div>
    </div>
  )
}

export default ListAdvantage