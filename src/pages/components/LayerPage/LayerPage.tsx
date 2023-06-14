import React from 'react'
import './style/layerPage.css'
import Header from '../../../widgets/components/Header/Header'
import Footer from '../../../widgets/components/Footer/Footer'
import { Link } from 'react-router-dom'
import {Outlet} from 'react-router-dom'

 



function LayerPage() {
  return (
    <div id='page'>
       <Header/>
      <div className="page-body">
        <Outlet/>
      </div>
      <Footer/>

    </div>
  )
}

export default  LayerPage
