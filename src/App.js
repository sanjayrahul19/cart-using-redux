import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './component/home/Home'
import Cart from './component/cart/Cart'
import Nav from './component/nav/Nav'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App