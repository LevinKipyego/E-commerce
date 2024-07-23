/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'

import footer_logo from '../assets/navbar/shopper.png'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={ footer_logo } alt="" />
        <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        
      <div className="footer-social-icons">
          <div className="footer-icon-container">
              <i className="ri-instagram-line"></i>
            
          </div>
          <div className="footer-icon-container">
              <i className="ri-pinterest-line"></i>
          </div>
          <div className="footer-icon-container">
              <i className="ri-whatsapp-line"></i>
          </div>
        </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer