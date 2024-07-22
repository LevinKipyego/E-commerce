import React from 'react'
import 'boxicons'
import './Hero.css'

import hero_image from '../assets/hero/9003.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h4>NEW AND CLASSY ONES ONLY</h4>
            <div className='sec2'>
                <div className="hand-hand-icon">
                    <p>new</p>
                    
                </div>
                <p>collection</p>
                <p>for everyone</p>
                <p>Keep checking it  out</p>
            </div>
            
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <i className='bx bx-chevrons-right' ></i>
                <img src="" alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src= { hero_image } alt="" />
        </div>
    </div>
  )
}

export default Hero