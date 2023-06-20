import {createSlice} from '@reduxjs/toolkit'
import {
    advertisementType,
    categorieType,
    advangateItemType,
    productType,
    popularCategorie
} from '../../index'




interface initialStateType {
    listAdvertisement: Array<advertisementType>;
    listCategorie: Array<categorieType>;
    listAdvantage :Array<advangateItemType>;
    listProduct: Array<productType>;
    listPopularCategorie:Array<popularCategorie>

}

const initialState:initialStateType = {
    listAdvertisement:[
        {
            id:1,
            img:'pub1.png',
            href:'/',
            title: 'lorem ipsum'
        },
        {
            id:2,
            img:'pub2.png',
            href:'/',
            title: 'lorem ipsum'
        },
    ],
    listCategorie :[
        {
            id:1,
            name:'Коляски',
            img:'Rectangle.png'
        },
        {
            id:2,
            name:'Автокресла',
            img:'Rectangle-1.png'
        },
        {
            id:3,
            name:'Детская комната',
            img:'Rectangle-2.png'
        },
        {
            id:4,
            name:'Товары для малышей',
            img:'Rectangle-3.png'
        },
        {
            id:5,
            name:'Игрушки и игры',
            img:'Rectangle-4.png'
        },
        {
            id:6,
            name:'Спорт и отдых',
            img:'Rectangle-5.png'
        },
        {
            id:7,
            name:'Творчество и развитие',
            img:'Rectangle-6.png'
        },
        {
            id:8,
            name:'Товары к школе',
            img:'Rectangle-7.png'
        },
        {
            id:9,
            name:'Одежда и обувь',
            img:'Rectangle-8.png'
        },
        {
            id:10,
            name:'Детский праздник',
            img:'Rectangle-9.png'
        },
    ],
    listAdvantage:[
        {
            id:1,
            title:'Срок доставки от 5 рабочих дней',
            img:'pin.png'
        },
        {
            id:2,
            title:'Пункты выдачи во всех регионах РФ',
            img:'pin-1.png'
        },
        {
            id:3,
            title:'Возможность примерки перед покупкой',
            img:'pin-2.png'
        },
        {
            id:4,
            title:'Гарантия возврата товара',
            img:'pin-3.png'
        },
        {
            id:5,
            title:'Совместные закупки по оптовым ценам',
            img:'pin-4.png'
        },
    ],
    listProduct:[
        {
            id:1,
            name:'Рюкзак RA-973-1 Grizzly, цвет голубой',
            img:'01.png',
            categorie:'Коляски',
            price:3538,
            isNew:true,
            isDiscounted:false,
            inStock:true,
            subCategorie:'Прогулочные коляски'
        },
        {
            id:2,
            name:'Рюкзак RA-973-1 Grizzly, цвет голубой',
            img:'02.png',
            categorie:'Автокресла',
            price:3538,
            isNew:true,
            isDiscounted:false,
            inStock:true,
            subCategorie:'Прогулочные коляски'
        },
        {
            id:3,
            name:'Рюкзак RA-973-1 Grizzly, цвет голубой',
            img:'03.png',
            categorie:'Детская комната',
            price:3538,
            isNew:false,
            isDiscounted:false,
            inStock:false,
            subCategorie:'Прогулочные коляски'
        },
        {
            id:4,
            name:'Рюкзак RA-973-1 Grizzly, цвет голубой',
            img:'04.png',
            categorie:'Товары для малышей',
            price:3538,
            isNew:false,
            isDiscounted:true,
            inStock:true,
            subCategorie:'Прогулочные коляски'
        },
    ],
    listPopularCategorie:[
        {
            id:1,
            categorie:1,
            subCategorie:['Прогулочные коляски','Коляска Baby Care','Прогулочная коляска Peg Perego','Трехколесные коляски']
        },
        {
            id:2,
            categorie:3,
            subCategorie:['Прогулочные коляски','Коляска Baby Care','Прогулочная коляска Peg Perego','Трехколесные коляски']
        },
    ]
}
export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{

    }
})

