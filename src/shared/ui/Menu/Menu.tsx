import React from 'react'
import { Link } from 'react-router-dom'
import './style/menu.css'

function Menu() {
  return (
    <nav className="menu">
    <ul className="menu__list">
      <li className="menu__item">
        <Link to="/">
          Коляски и автокресла
        </Link>
      
      </li>
      <li className="menu__item">
        <Link to="/">
          Детская комната
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/">
          Товары для малышей
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/">
          Игрушки и игры
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/">
          Спорт и отдых
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/">
          Творчество и развитие
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/">
          Товары для школы
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/">
          Одежда и обувь
        </Link>
      </li>
      <li className="menu__item menu__item--yellow">
        <Link to="/">
          Купи оптом
        </Link>
        <ul className="submenu">
          <li className="submenu__item">
            <Link to="/">
              Детская одежда  Пеликан
            </Link>
          </li>
          <li className="submenu__item">
            <Link to="/">
              Детская обувь Котофей
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
  )
}

export default Menu