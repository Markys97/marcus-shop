import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {menuType,articleType,ModalContentType} from '../../index'
import { title } from 'process'



interface initialStateType{
    menu:Array<menuType>,
    listArticle: Array<articleType>;
    modal:{
        isOpenModal:boolean
        modalContent:ModalContentType
    }
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
    ],
    listArticle:[
        {
            id:1,
            title:'LookBook',
            place:'Новый год',
            createAt:'2020',
            preview:'b1.png',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni .'

        },
        {
            id:2,
            title:'marcus le roi',
            place:'Новый год',
            createAt:'1997',
            preview:'b2.png',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni .'

        },
        {
            id:3,
            title:'my new life in russia',
            place:'нижний новгород',
            createAt:'2020',
            preview:'b3.png',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni .'

        },
        {
            id:4,
            title:'don\'t work hard, work with love',
            place:'Москва',
            createAt:'2023',
            preview:'b4.png',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni .'

        },
        {
            id:5,
            title:'don\'t work hard, work with love',
            place:'Москва',
            createAt:'2023',
            preview:'b4.png',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni .'

        },
        {
            id:6,
            title:'don\'t work hard, work with love',
            place:'Москва',
            createAt:'2023',
            preview:'b4.png',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni .'

        },
        {
            id:7,
            title:'don\'t work hard, work with love',
            place:'Москва',
            createAt:'2023',
            preview:'b4.png',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni .'

        },
    ],
    modal:{
        isOpenModal:false,
       modalContent:null
    }
}

export const settingSlice = createSlice({
    initialState,
    name:'setting',
    reducers:{
        OpenModal:(state)=> state={...state, modal:{...state.modal,isOpenModal:true}},
        closeModal:(state)=> state={...state,  modal:{...state.modal,isOpenModal:false}},
        setModalContent :(state,action:PayloadAction<ModalContentType>) =>{
            let Idcontent = action.payload
            state.modal.modalContent=Idcontent
            return state
        }

    },

})

export const {OpenModal,closeModal,setModalContent} = settingSlice.actions