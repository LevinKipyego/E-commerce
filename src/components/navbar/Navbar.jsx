/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'

import cart_logo from '../assets/cart_2.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src="" alt="" />
        <p>SHOPPER</p>
        </div>

        <ul className='nav-menu'>
          <li>Shop</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart_logo} alt="" />
        </div>
    </div>
  )
}

export default Navbar 