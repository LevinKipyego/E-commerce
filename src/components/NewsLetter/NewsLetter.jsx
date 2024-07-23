import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
            <h1>Get Exclusive Offers On your Email</h1>
            <p>Subscribe To Our NewsLetter and Stay Updated</p>
            <div>
                <input type="email"  placeholder='example@gmail.com'/>
                <button>Subscribe</button>
            </div>
    </div>
    
  )
}

export default NewsLetter