import React from 'react'
import './style/listepopularCategorie.css'

function ListPopularCategorie() {
  return (
    <div className="popular-categorie">
        <div className="popular-categorie__content">
        <div className="popular-categorie__head">
            <ul className="popular-categorie__list">
            <li className="popular-categorie__title active">Коляски</li>
            <li className="popular-categorie__title">Автокресла</li>
            <li className="popular-categorie__title">Детская комната</li>
            <li className="popular-categorie__title">Товары для малышей</li>
            <li className="popular-categorie__title">Игрушки</li>
            <li className="popular-categorie__title">Велосипеды</li>
            <li className="popular-categorie__title">Школьные рюкзаки</li>
            </ul>
        </div>
        <div className="popular-categorie__body">
            <div className="popular-categorie__item">Прогулочные коляски</div>
            <div className="popular-categorie__item">Коляска Baby Care</div>
            <div className="popular-categorie__item">Прогулочная коляска Peg Perego</div>
            <div className="popular-categorie__item">Трехколесные коляски</div>
            <div className="popular-categorie__item">Немецкие коляски</div>
            <div className="popular-categorie__item">Прогулочные коляски</div>
            <div className="popular-categorie__item">Коляска Baby Care</div>
            <div className="popular-categorie__item">Прогулочная коляска Peg Perego</div>
            <div className="popular-categorie__item">Трехколесные коляски</div>
            <div className="popular-categorie__item">Немецкие коляски</div>
        </div>
        </div>
    </div>
  )
}

export default ListPopularCategorie