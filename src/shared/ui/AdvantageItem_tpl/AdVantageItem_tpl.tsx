import React from 'react'
import './style/advantageItem.css'
import {advangateItemType} from '../../index'

interface advantageItem_tplType {
    data: advangateItemType
}

function AdVantageItem_tpl({data}:advantageItem_tplType) {
    const {title,img} =data
  return (
    <div className="item-advantages">
        <div className="item-advantages__content">
            <div className="item-advantages__icon">
            <img src={`/images/icons/${img}`} alt={title} />
            </div>
            <div className="item-advantages__title">
                {title}
            </div>
        </div>
    </div>
  )
}

export default AdVantageItem_tpl