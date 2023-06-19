import {createSlice} from '@reduxjs/toolkit'
import {menuType} from '../../index'



interface initialStateType{
    menu:menuType[],
}

const initialState:initialStateType ={
    menu:[
        {
            href:'/',
            linkText:'Коляски и автокресла',
            subMenu:[
                {
                    href:'/',
                    linkText:"Коляски"
                },
                {
                    href:'/',
                    linkText:"Автокресла"
                },
            ]
        },
        {
            href:'/',
            linkText:'Детская комната'
        },
        {
            href:'/',
            linkText:'Товары для малышей'
        },
        {
            href:'/',
            linkText:'Игрушки и игры'
        },
        {
            href:'/',
            linkText:'Спорт и отдых'
        },
        {
            href:'/',
            linkText:'Творчество и развитие'
        },
        {
            href:'/',
            linkText:'Товары для школы'
        },
        {
            href:'/',
            linkText:'Одежда и обувь'
        },
        {
            href:'/',
            linkText:'Купи оптом',
            modificatorClass:'menu__item--yellow',
            subMenu:[
                {
                    href:'/',
                    linkText:'Детская одежда  Пеликан'
                },
                {
                    href:'/',
                    linkText:'Детская обувь Котофей'
                }
            ]
        },
    ]
}

export const settingSlice = createSlice({
    initialState,
    name:'setting',
    reducers:{

    },

})