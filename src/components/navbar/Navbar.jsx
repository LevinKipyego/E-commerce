/* eslint-disable no-unused-vars */
import React , { useState } from 'react'

import './Navbar.css'

import cart_logo from '../assets/cart_1.png'

const Navbar = () => {

const [menu, setMenu] = useState("shop")

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src="" alt="" />
        <p>SHOPPER</p>
        </div>

        <ul className='nav-menu'>
          <li onClick={()=>{setMenu("shop")}}>Shop {menu === "shop" ? <hr/> :<></>}</li>
          <li onClick={()=>{setMenu("Men")}}>Men {menu === "Men" ? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Women")}}>Women {menu === "Women" ? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Kids")}}>Kids {menu === "Kids" ? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart_logo} alt="" />
          <div className="nav-cat-count">0</div>
        </div>
    </div>
  )
}

export default Navbar 