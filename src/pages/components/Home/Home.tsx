import {useEffect} from 'react'
import './style/home.css'
import { Link } from 'react-router-dom'
import { Modal } from '../../../shared'
import { useAppSelector } from '../../../shared'
import ProductAddingToCart from '../../../entities/cart/ProductAddingToCart/ProductAddingToCart'
import {
  ListCategorie,
  ListPopularCategorie,
  ListArticle,
  ListAdvantage,
  ListAdvertisement,
  ListProduct
 } from '../../../widgets'




function Home() {
  const isOpenModal = useAppSelector(state => state.setting.isOpenModal)

  return (
    <div className='home-page' id='home-page'>
      <div className="home-page__container">
        <div className="home-page__content">
          {/* Advertisement component */}
          <ListAdvertisement/>
      
          <div className="home-page__link-wrapper wrapper">
            <Link to="" className='_link _link--red'>Рыбинск</Link>
          </div>

          <section className="home-page__section section-home-page">
            <div className="section-home-page__container wrapper">
              <h2 className="home-page__title-categories">Интернет-магазин детских товаров</h2>
              <ListCategorie/>
             <ListAdvantage/>
            </div>

          </section>

          <section className="home-page-product">
            <div className="home-page-product__container wrapper">
              <div className="home-page-product__content">
                <div className="home-page-product__title">Популярные товары</div>
                {/* listProduct */}
                <ListProduct/>
              </div>
            </div>
          </section>

          <section className="home-popular-categorie">
            <div className="home-popular-categorie__container wrapper">
              <div className="home-popular-categorie__content">
                <h2 className="home-popular-categorie__title">Популярные категории</h2>
                {/* listPopularCategorie */}
               <ListPopularCategorie/>
              </div>
            </div>
          </section>

          <section className="home-page-blog">
            <div className="home-page-blog__container wrapper">
              <div className="home-page-blog__content">
                <h2 className="home-page-blog__title">Новости</h2>
                {/* listArctile */}
               <ListArticle/>
              </div>
            </div>
          </section>


        </div>
      </div>
      { isOpenModal && (
        <Modal>
          <ProductAddingToCart/>
        </Modal>
      )}
    </div>
  )
}







export default Home