import React from 'react'
import {createBrowserRouter,createRoutesFromChildren, Route, RouterProvider} from 'react-router-dom'
import Home from '../../pages/components/Home/Home'
import  './style/app.css'

const router = createBrowserRouter(createRoutesFromChildren(
  <Route path='/' element= {<Home/>}>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App