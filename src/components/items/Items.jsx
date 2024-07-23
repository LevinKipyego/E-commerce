import React from 'react'
import './Items.css'

const Items = (props) => {
  return (
    <div className='items'>
        <img src={ props.Image} alt="popular" />
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