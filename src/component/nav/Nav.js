import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
    <Link to="/"><h1 className="shop-name">
   Pizza Shop</h1></Link>
   <Link to="/cart"><button className="cart-button">🛒</button></Link>
  </nav>
  )
}

export default Nav