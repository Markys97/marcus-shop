import { useAppDispatch,useAppSelector } from "./model/hooks";
import { store } from "./model/store";
import Button from "./ui/Button/Button";
import Burger from "./ui/Burger/Burger";
import Menu from "./ui/Menu/Menu";
import SearchInput from "./ui/SearchInput/SearchInput";
import ButtonSecond from "./ui/ButtonSecond/ButtonSecond";

export interface advertisementType {
    img:string
    href:string
    title:string
    id:number

}
 export interface categorieType{
    id:number;
    name:string,
    img:string,
}
export interface menuType{
    href:string;
    linkText:string;
    subMenu?:menuType[]
    modificatorClass?:string
}
export interface advangateItemType {
    id:number,
    title:string,
    img:string
}

export interface productType{
    id:number;
    name:string,
    price:number,
    img:string,
    categorie:string,
    inStock:boolean,
    isNew:boolean,
    isDiscounted:boolean
    subCategorie:string
}
export interface popularCategorie{
    id:number;
    categorie:number;
    subCategorie:Array<string>
}

export interface articleType{
    id:number;
    title:string;
    createAt:string;
    preview:string;
    content:string;
    place:string
}



export {
    store,
    useAppDispatch,
    useAppSelector,
    Button,
    SearchInput,
    Menu,
    Burger,
    ButtonSecond
    

}