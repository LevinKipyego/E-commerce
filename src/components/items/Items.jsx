import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className='items'>
        <Link to={ `/product/${props.id}` }> <img onClick={window.scrollTo(0,0)} src={ props.Image} alt="popular" /> </Link>
        <p>{props.name}</p>
        <p>{ props.description }  </p>
        <div className="item-prices">
            <div className="new-price">
                $ {props.new_price}
            </div>
            <div className="old-price">
                $  {props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Items