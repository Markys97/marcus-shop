import React from 'react'
import { Link } from 'react-router-dom'
import './style/menu.css'
import {useAppSelector} from '../../model/hooks'

function Menu() {
  const menuLinks = useAppSelector(state => state.setting.menu)

  return (
    <nav className="menu">
    <ul className="menu__list">
      {
        menuLinks.map((menuLink,index) => (
          <li key={index} className={`menu__item ${menuLink.modificatorClass}`}>
            <Link to={menuLink.href}>
              {menuLink.linkText}
            </Link>
            {menuLink.subMenu && (
              <ul className="submenu">

                {
                  menuLink?.subMenu.map((subMenuItem,indexSubmenu) => (
                    <li className="submenu__item">
                      <Link to={subMenuItem.href}>
                        {subMenuItem.linkText}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            )}
            
          </li>
        ))
      }
     
    </ul>
  </nav>
  )
}

export default Menu