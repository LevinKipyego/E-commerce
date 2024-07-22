import React from 'react'
import './Popular.css'
import product_data from '../assets/data'
import Items from '../items/Items'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-items">
            { product_data.map( ( item, index ) => {
                return <Items  key={ index } id = { item.id }  name = { item.name }  Image = { item.Image }   new_price = { item.new_price }  old_price = { item.old_price }/>
            } ) }
        </div>
    </div>
  )
}

export default Popular