import React from 'react'
import './RelatedProducts.css'
import product_data from '../assets/data'
import Items from '../items/Items'

const RelatedProducts = () => {
  return (
    <div className='related-products'>
        
        <h1>Related Products</h1>
        <hr />
        <div className="related-products-item">
             { product_data.map( (item, index)=>{
                return <Items  key={ index } id = { item.id }  name = { item.name }  Image = { item.Image } description = { item.description }   new_price = { item.new_price }  old_price = { item.old_price }/>
             } ) }
        </div>
    </div>
  )
}

export default RelatedProducts