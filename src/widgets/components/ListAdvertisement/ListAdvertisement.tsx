import {useEffect} from 'react'
import './style/listAdvertisement.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {useAppSelector} from '../../../shared/model/hooks'
import { Link } from 'react-router-dom';


function ListAdvertisement() {
  const listAdvertisement = useAppSelector(state =>state.product.listAdvertisement)

  return (
    <div className="advertisement">
        <div className="advertisement__content wrapper">
            <Swiper
              slidesPerView={1}
              modules={[Navigation,Pagination]}
              navigation
              pagination={{ clickable: true }}
             
             >
              {
                listAdvertisement.map((advertisementItem,index)=> (
                  <SwiperSlide key={index}>
                    <Link to={advertisementItem.href}>
                      <div className="advertisement__item item-advertisement">
                        <img src={`/images/utils/${advertisementItem.img}`} alt={advertisementItem.title} />
                      </div>
                    </Link>
                  
                  </SwiperSlide>
                ))
              }

            </Swiper>
        </div>
    </div>
  )
}

export default ListAdvertisement