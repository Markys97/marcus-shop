import React from 'react'

import './style/header.css'
import { Link } from 'react-router-dom'
import {Button,Menu,Burger,SearchInput} from '../../../shared/index'


 

function Header() {
  return (
    <header className='header'>
        <div className="header__container">

        <div className="header-top">
            <div className="header-top__container wrapper">

            <nav className="header-top__menu menu-top">
                <ul className="menu-top__list">
                <li className="menu-top__item">
                    <Link to="javascript:void(0)">Доставка</Link>
                </li>
                <li className="menu-top__item">
                    <Link to="javascript:void(0)">Оплата</Link>
                </li>
                <li className="menu-top__item">
                    <Link to="javascript:void(0)">Оптовые закупки</Link>
                </li>
                <li className="menu-top__item">
                    <Link to="javascript:void(0)">Как сделать заказ</Link>
                </li>
                <li className="menu-top__item">
                    <Link to="javascript:void(0)">Контакты</Link>
                </li>
                <li className="menu-top__item">
                    <Link to="javascript:void(0)">Акции</Link>
                </li>
                </ul>
            </nav>

            <div className="header-top__info">
                <div className='header-top__work-time'>Ежедневно с 10:00 до 18:00</div>
                <Link to="mailto:brexejunior@gmail.com" className="header-top__email">
                <div className="header-top__email-icon">
                    <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.66531V12.1469C0 12.8675 0.675 13.4571 1.5 13.4571H19.5C20.325 13.4571 21 12.8675 21 12.1469V1.66531C21 0.944694 20.325 0.355103 19.5 0.355103H1.5C0.675 0.355103 0 0.944694 0 1.66531ZM19.5 1.66531L10.5 8.21633L1.5 1.66531H19.5ZM1.5 3.63061L7.5 7.56122L1.5 11.4918V3.63061ZM3 12.1469L8.25 8.21633L10.5 10.1816L12.75 8.21633L18 12.1469H3ZM19.5 11.4918L13.5 7.56122L19.5 3.63061V11.4918Z" fill="#6F6F6E"/>
                    </svg>
                </div>
                <div className='header-top__email-text'>brexejunior@gmail.com</div>
                </Link>
            </div>

            <div className="header-top__gestion">
                <div className="header-top__gestion-item gestion">
                <div className="gestion__icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C8.72596 0 7.63822 0.450721 6.73678 1.35216C5.83534 2.25361 5.38462 3.34135 5.38462 4.61538C5.38462 5.88942 5.83534 6.97716 6.73678 7.87861C7.63822 8.78005 8.72596 9.23077 10 9.23077C11.274 9.23077 12.3618 8.78005 13.2632 7.87861C14.1647 6.97716 14.6154 5.88942 14.6154 4.61538C14.6154 3.34135 14.1647 2.25361 13.2632 1.35216C12.3618 0.450721 11.274 0 10 0ZM10 10.7692C10.8974 10.7692 11.8069 10.8574 12.7284 11.0337C13.6498 11.2099 14.5473 11.4884 15.4207 11.869C16.2941 12.2496 17.0693 12.7063 17.7464 13.2392C18.4235 13.772 18.9683 14.4231 19.381 15.1923C19.7937 15.9615 20 16.7949 20 17.6923C20 18.2933 19.7716 18.8281 19.3149 19.2969C18.8582 19.7656 18.3173 20 17.6923 20H2.30769C1.68269 20 1.14183 19.7656 0.685096 19.2969C0.228365 18.8281 0 18.2933 0 17.6923C0 16.7949 0.20633 15.9615 0.61899 15.1923C1.03165 14.4231 1.57652 13.772 2.25361 13.2392C2.93069 12.7063 3.70593 12.2496 4.57933 11.869C5.45272 11.4884 6.35016 11.2099 7.27163 11.0337C8.19311 10.8574 9.10256 10.7692 10 10.7692Z" fill="#1867B4"/>
                    </svg>
                </div>
                </div>
                <div className="header-top__gestion-item gestion">
                <div className="gestion__icon">
                    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6417 1.87055L11.5185 2.7486L12.3953 1.87179C12.9702 1.29185 13.654 0.831169 14.4074 0.516196C15.1608 0.201222 15.969 0.0381609 16.7856 0.0363727C17.6021 0.0345846 18.411 0.194105 19.1658 0.505776C19.9206 0.817447 20.6064 1.27513 21.1838 1.85255C21.7612 2.42997 22.2189 3.11575 22.5306 3.87053C22.8423 4.62531 23.0018 5.43421 23 6.2508C22.9982 7.0674 22.8351 7.87559 22.5202 8.629C22.2052 9.3824 21.7445 10.0662 21.1646 10.6411L12.3965 19.4103C12.2814 19.5256 12.1446 19.6171 11.994 19.6795C11.8435 19.7419 11.6821 19.7741 11.5191 19.7741C11.3561 19.7741 11.1948 19.7419 11.0442 19.6795C10.8936 19.6171 10.7569 19.5256 10.6417 19.4103L1.87242 10.6411C1.28459 10.068 0.816398 9.38397 0.494997 8.62858C0.173596 7.87319 0.00538697 7.0615 0.000127286 6.2406C-0.0051324 5.41969 0.152662 4.60591 0.464357 3.84647C0.776052 3.08702 1.23544 2.39702 1.81588 1.8165C2.39632 1.23598 3.08625 0.776493 3.84565 0.46469C4.60506 0.152888 5.41881 -0.00502186 6.23972 0.000121729C7.06063 0.00526531 7.87234 0.17336 8.62778 0.494654C9.38321 0.815948 10.0673 1.28405 10.6404 1.87179L10.6417 1.87055Z" fill="#1867B4"/>
                    </svg>
                </div>
                <div className="gestion__quantity">38</div>
                </div>
                <div className="header-top__gestion-item gestion">
                <div className="gestion__icon">
                    <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H6.5L9.5 11.5H19.5L22 5.5" stroke="#1867B4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="10" cy="18" r="3" fill="#1867B4"/>
                    <circle cx="19" cy="18" r="3" fill="#1867B4"/>
                    </svg>

                </div>
                <div className="gestion__quantity">3</div>
                </div>
            </div>
            </div>

        </div>

        <div className="header-center">
            <div className="header-center__container wrapper">

            <div className="header-center__top">
                <Link className='_link _link--red' to="/">
                <span>Рыбинск</span>
                </Link>
            </div>

            <div className="header-center__bottom">

                <div className="header-center__left">
                <Burger/>

                <Link to="/">
                    <div className="header__logo">
                    <img src="/images/icons/logo-site.png" alt="logo site" />
                    </div>
                </Link>

                <div className="header-center__gestion">
                    <Link to="/">
                    <div className="header-center__gestion-item gestion">
                        <div className="gestion__icon">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.7219 8.84309C18.7977 9.44877 19.2846 9.94627 19.895 9.94627C20.5054 9.94627 21.0064 9.44975 20.9451 8.84243C20.4654 4.09116 16.9036 0.533494 12.1458 0.0549302C11.5384 -0.00616097 11.0419 0.494843 11.0419 1.10526C11.0419 1.71568 11.5394 2.20261 12.1452 2.27808C15.6966 2.72053 18.278 5.29718 18.7219 8.84309Z" fill="#1867B4"/>
                        <path d="M11.0528 5.5263C11.0528 6.13672 11.5538 6.60981 12.1533 6.72464C13.3669 6.95709 14.043 7.63328 14.2755 8.84688C14.3903 9.44639 14.8634 9.94736 15.4738 9.94736C16.0842 9.94736 16.5896 9.44919 16.5102 8.84397C16.1801 6.32881 14.6713 4.81998 12.1562 4.4899C11.551 4.41047 11.0528 4.91588 11.0528 5.5263ZM14.835 12.6475C14.6226 12.4545 14.3435 12.3515 14.0566 12.3604C13.7698 12.3693 13.4976 12.4893 13.2976 12.695L11.4037 14.6428C10.9349 15.1249 10.2453 15.3591 9.62554 15.0981C8.99172 14.8312 8.21204 14.3717 7.41874 13.5804C6.62431 12.7853 6.16384 12.003 5.89751 11.3686C5.63842 10.7514 5.8722 10.0658 6.3518 9.59887L8.30183 7.70036C8.50786 7.50044 8.62803 7.22821 8.6369 6.94127C8.64577 6.65432 8.54265 6.37519 8.34936 6.16293L4.26546 1.67224C4.07209 1.45932 3.80334 1.33017 3.51628 1.31222C3.22921 1.29426 2.94646 1.38892 2.72806 1.57609L0.329676 3.63298C0.138591 3.82476 0.0245382 4.08001 0.00915361 4.3503C-0.00742511 4.62662 -0.323526 11.172 4.75177 16.2496C9.1794 20.6762 14.7255 21 16.253 21C16.4762 21 16.6133 20.9934 16.6498 20.9912C16.92 20.976 17.1751 20.8615 17.366 20.6695L19.4217 18.27C19.609 18.0517 19.7039 17.7691 19.6861 17.482C19.6684 17.1949 19.5394 16.9261 19.3267 16.7326L14.835 12.6475Z" fill="#1867B4"/>
                        </svg>
                        </div>
                    </div>
                    </Link>

                    <Link to="/">
                    <div className="header-center__gestion-item gestion">
                        <div className="gestion__icon">
                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3H6.5L9.5 11.5H19.5L22 5.5" stroke="#1867B4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="10" cy="18" r="3" fill="#1867B4"/>
                        <circle cx="19" cy="18" r="3" fill="#1867B4"/>
                        </svg>
                        </div>
                        <div className="gestion__quantity">
                        3
                        </div>
                    </div>
                    </Link>
                </div>
                </div>

                <div className="header-center__right">
                <form className="form">
                <SearchInput/>
                </form>

                <div className="header-center__infos">
                    <Link className='header-center__tel' to="tel:+79200664894">
                    <div className="icons">
                        <div className="icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7533 2.17969C11.3504 0.773437 9.48214 0 7.49665 0C3.39844 0 0.0636161 3.33482 0.0636161 7.43304C0.0636161 8.74219 0.405134 10.0212 1.05469 11.1496L0 15L3.94085 13.9654C5.02567 14.558 6.24777 14.8694 7.4933 14.8694H7.49665C11.5915 14.8694 15 11.5346 15 7.43638C15 5.45089 14.1562 3.58594 12.7533 2.17969ZM7.49665 13.6172C6.38504 13.6172 5.29687 13.3192 4.34933 12.7567L4.125 12.6228L1.78795 13.2355L2.41071 10.9554L2.26339 10.721C1.64397 9.73661 1.3192 8.60156 1.3192 7.43304C1.3192 4.0279 4.09152 1.25558 7.5 1.25558C9.15067 1.25558 10.7009 1.89844 11.8661 3.06696C13.0312 4.23549 13.7478 5.78571 13.7444 7.43638C13.7444 10.8449 10.9018 13.6172 7.49665 13.6172ZM10.885 8.98995C10.7009 8.8962 9.78683 8.44754 9.61607 8.38728C9.44531 8.32366 9.32143 8.29353 9.19755 8.48103C9.07366 8.66853 8.71875 9.0837 8.60826 9.21094C8.50112 9.33482 8.39062 9.35156 8.20647 9.25781C7.11496 8.71205 6.39844 8.28348 5.67857 7.04799C5.48772 6.71987 5.86942 6.7433 6.22433 6.03348C6.2846 5.9096 6.25446 5.80245 6.20759 5.7087C6.16071 5.61495 5.78906 4.70089 5.63504 4.32924C5.48438 3.96763 5.33036 4.01786 5.21652 4.01116C5.10938 4.00446 4.98549 4.00446 4.86161 4.00446C4.73772 4.00446 4.53683 4.05134 4.36607 4.23549C4.19531 4.42299 3.71652 4.87165 3.71652 5.78571C3.71652 6.69978 4.38281 7.58371 4.47321 7.70759C4.56696 7.83147 5.78237 9.70647 7.64732 10.5134C8.82589 11.0223 9.28795 11.0658 9.87723 10.9788C10.2355 10.9252 10.9754 10.5301 11.1295 10.0949C11.2835 9.6596 11.2835 9.28795 11.2366 9.21094C11.1931 9.12723 11.0692 9.08036 10.885 8.98995Z" fill="#6F6F6E"/>
                        </svg>
                        </div>
                        <div className="icon">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.05141 0.00138452C6.61467 0.0198012 3.52327 0.243636 1.79396 1.74743C0.510225 2.95869 0.0616652 4.7444 0.00942024 6.95582C-0.0353611 9.15875 -0.087606 13.2954 4.11438 14.4224V16.1366C4.11438 16.1366 4.08602 16.8236 4.56369 16.9653C5.15331 17.1424 5.48917 16.6119 6.04894 16.0452L7.09383 14.926C9.96731 15.1527 12.1691 14.6292 12.4228 14.5513C13.005 14.3742 16.2897 13.9768 16.8271 9.83946C17.3794 5.56749 16.5584 2.87581 15.0806 1.65747L15.0731 1.65606C14.6253 1.26647 12.8341 0.0268846 8.82613 0.0127179C8.82613 0.0127179 8.53057 -0.0049905 8.05141 0.00138452ZM8.10142 1.20343C8.50818 1.20131 8.75821 1.2176 8.75821 1.2176C12.1467 1.22468 13.767 2.1951 14.1476 2.52093C15.3941 3.53315 16.0344 5.96061 15.5657 9.52779C15.1179 12.9845 12.4534 13.2041 11.9608 13.3528C11.7518 13.4166 9.81132 13.8699 7.36924 13.7211C7.36924 13.7211 5.54888 15.8044 4.98165 16.3427C4.89208 16.4348 4.78759 16.4631 4.72042 16.4489C4.6234 16.4277 4.59354 16.3144 4.601 16.1585L4.61593 13.3117C1.05507 12.3767 1.26405 8.84779 1.30136 7.00612C1.34614 5.16444 1.71186 3.65427 2.79408 2.63427C4.25469 1.38051 6.88112 1.21051 8.10142 1.20343ZM8.3701 3.0451C8.34074 3.04501 8.31164 3.05042 8.28448 3.06102C8.25731 3.07162 8.23263 3.08721 8.21182 3.10688C8.19102 3.12656 8.17452 3.14994 8.16326 3.17568C8.15199 3.20142 8.1462 3.22902 8.1462 3.2569C8.1462 3.31325 8.16979 3.3673 8.21178 3.40716C8.25377 3.44701 8.31072 3.4694 8.3701 3.4694C8.92498 3.45935 9.47646 3.5537 9.99271 3.74701C10.509 3.94031 10.9798 4.22874 11.3779 4.59565C12.1914 5.34649 12.5878 6.35232 12.6027 7.66983C12.6027 7.69773 12.6085 7.72536 12.6197 7.75115C12.631 7.77693 12.6475 7.80035 12.6683 7.82009C12.6891 7.83982 12.7137 7.85547 12.7409 7.86615C12.7681 7.87683 12.7972 7.88233 12.8266 7.88233V7.87595C12.886 7.87595 12.9429 7.85356 12.9849 7.81371C13.0269 7.77386 13.0505 7.71981 13.0505 7.66345C13.0782 7.04386 12.9727 6.4254 12.7405 5.84575C12.5082 5.26609 12.1541 4.73737 11.6996 4.29177C10.8114 3.4701 9.69115 3.0451 8.3701 3.0451ZM5.41901 3.53385C5.26029 3.51239 5.09858 3.54233 4.96 3.61885H4.95105C4.64504 3.78886 4.36292 4.00136 4.09423 4.28469C3.89271 4.51136 3.78001 4.73732 3.75016 4.9569C3.7326 5.08568 3.74534 5.21656 3.78748 5.34011L3.8024 5.34719C4.03245 5.98905 4.33263 6.6063 4.69803 7.18887C5.17168 8.00474 5.75361 8.75961 6.42958 9.435L6.45197 9.46333L6.48182 9.48458L6.50421 9.50583L6.5266 9.52708C7.24104 10.1702 8.03854 10.7248 8.90002 11.1775C9.88521 11.6875 10.4838 11.9283 10.842 12.0275V12.0346C10.9465 12.0629 11.0421 12.0771 11.1391 12.0771C11.4449 12.0559 11.7344 11.9382 11.9616 11.7428C12.2526 11.4948 12.484 11.22 12.6557 10.9296V10.9225C12.8273 10.6179 12.7676 10.3268 12.5213 10.1285C12.025 9.71635 11.4875 9.35102 10.9167 9.03762C10.536 8.83929 10.1479 8.95971 9.99119 9.15804L9.65533 9.56108C9.48367 9.75942 9.1702 9.73108 9.1702 9.73108L9.16124 9.73817C6.83261 9.1715 6.21313 6.93386 6.21313 6.93386C6.21313 6.93386 6.18328 6.62928 6.39972 6.47345L6.81768 6.1547C7.0192 5.99886 7.16101 5.63053 6.94456 5.26928C6.61479 4.72721 6.22982 4.21713 5.79518 3.74636C5.70063 3.63507 5.56716 3.55967 5.41901 3.53385ZM8.75746 4.16427C8.69808 4.16446 8.64121 4.18703 8.59936 4.22701C8.5575 4.267 8.5341 4.32112 8.5343 4.37748C8.5345 4.43384 8.55828 4.48782 8.60041 4.52754C8.64254 4.56725 8.69957 4.58946 8.75896 4.58927C9.50587 4.60158 10.2172 4.89453 10.7368 5.40386C10.9712 5.64931 11.1515 5.93686 11.2668 6.24953C11.3822 6.5622 11.4304 6.89365 11.4085 7.22428C11.4087 7.28052 11.4324 7.33439 11.4744 7.37409C11.5163 7.41378 11.5732 7.43608 11.6324 7.43608L11.6399 7.44458C11.6694 7.44458 11.6985 7.43906 11.7257 7.42833C11.753 7.41761 11.7777 7.40189 11.7985 7.38208C11.8193 7.36228 11.8358 7.33877 11.847 7.3129C11.8582 7.28704 11.8639 7.25933 11.8638 7.23137C11.8862 6.38845 11.61 5.68011 11.0652 5.11344C10.5204 4.54677 9.75907 4.22802 8.78881 4.16427C8.77837 4.16358 8.7679 4.16358 8.75746 4.16427ZM9.12318 5.31107C9.09324 5.31023 9.06341 5.315 9.03541 5.3251C9.00741 5.3352 8.98178 5.35044 8.95998 5.36994C8.93819 5.38944 8.92065 5.41283 8.90838 5.43876C8.8961 5.4647 8.88933 5.49267 8.88845 5.52109C8.88757 5.54951 8.89259 5.57781 8.90323 5.60439C8.91388 5.63096 8.92993 5.65529 8.95048 5.67597C8.97103 5.69666 8.99567 5.7133 9.023 5.72495C9.05032 5.7366 9.0798 5.74302 9.10974 5.74386C9.84864 5.77928 10.2069 6.13345 10.2517 6.86303C10.2536 6.91815 10.278 6.9704 10.3198 7.00873C10.3616 7.04707 10.4175 7.06848 10.4756 7.06845H10.483C10.5131 7.06756 10.5427 7.06093 10.57 7.04896C10.5973 7.03698 10.6218 7.01991 10.642 6.99875C10.6622 6.97759 10.6777 6.95279 10.6876 6.92582C10.6975 6.89885 10.7015 6.87027 10.6995 6.84178C10.6472 5.89261 10.1024 5.36065 9.13213 5.31107C9.12915 5.31101 9.12616 5.31101 9.12318 5.31107Z" fill="#6F6F6E"/>
                        </svg>
                        </div>
                    </div>
                    <div className="header-center__tel-number">+7 (4855) 20-45-50</div>
                    </Link>
                <Button text="Обратный звонок" onClick={():void=>{}}/>
                </div>
                </div>

            </div>

            </div>
        </div>

        <div className="header-bottom">
            <div className="header-bottom__container wrapper">
            <Menu/>
            </div>
        </div>

        </div>
    </header>
  )
}

export default Header