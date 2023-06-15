import React from 'react'
import './style/layerPage.css'
import {Outlet} from 'react-router-dom'
import {Header,Footer} from '../../../widgets/index'

 



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
