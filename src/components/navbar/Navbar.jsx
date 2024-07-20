/* eslint-disable no-unused-vars */
import React , { useState } from 'react'


import './Navbar.css'

import cart_logo from '../assets/cart_1.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

const [menu, setMenu] = useState("shop")

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src="" alt="" />
        <p>SHOPPER</p>
        </div>

        <ul className='nav-menu'>
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu === "shop" ? <hr/> :<></>}</li>
          <li onClick={()=>{setMenu("Men")}}><Link Link style={{textDecoration:'none'}} to = '/Men'>Men</Link> {menu === "Men" ? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Women")}}><Link Link style={{textDecoration:'none'}} to = '/Women'>Women</Link>  {menu === "Women" ? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Kids")}}><Link Link style={{textDecoration:'none'}} to = '/Kids'>Kids</Link> {menu === "Kids" ? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <button><Link Link style={{textDecoration:'none'}} to='/login'>Login</Link></button>
          <Link Link style={{textDecoration:'none'}} to='/cart'><img src={cart_logo} alt="" /></Link>
          <div className="nav-cat-count">0</div>
        </div>
    </div>
  )
}

export default Navbar 