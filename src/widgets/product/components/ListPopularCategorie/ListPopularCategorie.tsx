import React, {useState} from 'react'
import './style/listepopularCategorie.css'
import { categorieType, popularCategorieType } from '../../../../shared'
import { useAppSelector } from '../../../../shared'


interface ItemPopularCategorieType{
  id:number,
  categorieName:string,
  subCategorie:Array<string>
}



function ListPopularCategorie() {
  const listPopularCategorie = useAppSelector(state => state.product.listPopularCategorie)
  const listCategorie =  useAppSelector(state => state.product.listCategorie)
  const [idPopularCategorieActive, setIdPopularCategorieActive] = useState<number>(1)
  const listIdPopularCategorie = listPopularCategorie.map(item => item.categorie)
  const listItemPopularCategorie: Array<ItemPopularCategorieType> = [];

  const createItemPopularCategorie = (listPopularCategorie: Array<popularCategorieType>,
     listCategorie: Array<categorieType>) : Array<ItemPopularCategorieType> =>{
      listPopularCategorie.forEach(popularCategorie => {
        listCategorie.forEach(categorie => {
          if(popularCategorie.categorie === categorie.id){
            let item:ItemPopularCategorieType = {
              id:popularCategorie.id,
              categorieName:categorie.name,
              subCategorie:popularCategorie.subCategorie
            }

            listItemPopularCategorie.push( item)
          }
        })
      })


      return listItemPopularCategorie
     }

     const popularCategorieItems = createItemPopularCategorie(listPopularCategorie,listCategorie)
     const popularCategorieItemActive = popularCategorieItems.filter(item => item.id ===idPopularCategorieActive)[0]

     console.log(popularCategorieItemActive)



  

  const changeActiveCategorie = (id:number):void =>{
    setIdPopularCategorieActive(id)
  }
 
 



   

  return (
    <div className="popular-categorie">
        <div className="popular-categorie__content">
        <div className="popular-categorie__head">
            <ul className="popular-categorie__list">
              {
                popularCategorieItems.map((popularCategorie)=> (
                  <li onClick={()=> changeActiveCategorie(popularCategorie.id)} key={popularCategorie.id} className={`popular-categorie__title ${popularCategorie.id ===idPopularCategorieActive?' active':''}`}>{popularCategorie.categorieName}</li>
                ))
              }
            </ul>
        </div>
        <div className="popular-categorie__body">
           {
            
            popularCategorieItemActive.subCategorie.map((subCategorie,index) =>(
              <div key={index} className="popular-categorie__item">{subCategorie}</div>
             ))
           }
        </div>
        </div>
    </div>
  )
}

export default ListPopularCategorie