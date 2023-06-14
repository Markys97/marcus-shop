import React from 'react'
import {createBrowserRouter,createRoutesFromChildren, Route, RouterProvider} from 'react-router-dom'
import Home from '../../pages/components/Home/Home'
import LayerPage from '../../pages/components/LayerPage/LayerPage'
import  './style/app.css'

const router = createBrowserRouter(createRoutesFromChildren(
  <Route path='/' element= {<LayerPage/>}>
    <Route index element={<Home/>}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App