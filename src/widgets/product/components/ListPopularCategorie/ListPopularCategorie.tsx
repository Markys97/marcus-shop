import React, {useState} from 'react'
import './style/listepopularCategorie.css'
import { categorieType } from '../../../../shared'
import { useAppSelector } from '../../../../shared'

interface itemPopularCategorie{
  id:number,
  categorieName:string,
  subCategorie:Array<string>
}

function ListPopularCategorie() {
  const listPopularCategorie = useAppSelector(state => state.product.listPopularCategorie)
  const listCategorie =  useAppSelector(state => state.product.listCategorie)
  const [idPopularCategorieActive, setIdPopularCategorieActive] = useState<number>(1)
  const listIdPopularCategorie = listPopularCategorie.map(item => item.categorie)

  console.log(listPopularCategorie)



  

  const changeActiveCategorie = (id:number):void =>{
    console.log(id)
  }
 
 



   

  return (
    <div className="popular-categorie">
        <div className="popular-categorie__content">
        <div className="popular-categorie__head">
            <ul className="popular-categorie__list">
              {/* {
                listNamesPopularCategorie.map((popularCategorie)=> (
                  <li onClick={()=> changeActiveCategorie(popularCategorie.id)} key={popularCategorie.id} className={`popular-categorie__title ${popularCategorie.id ===idPopularCategorieActive?' active':''}`}>{popularCategorie.name}</li>
                ))
              } */}
            </ul>
        </div>
        {/* <div className="popular-categorie__body">
           {
            
             listSubCategorieActive.map((subCategorie,index) =>(
              <div key={index} className="popular-categorie__item">{subCategorie}</div>
             ))
           }
        </div> */}
        </div>
    </div>
  )
}

export default ListPopularCategorie