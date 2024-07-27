import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/shopContext'
import  Items from '../components/items/Items'

const ShopCategory = ( props ) => {

  const { all_products } = useContext(ShopContext);

  return (
    <div className = 'shop-category'>
      <img className='shopcategory-banner' src={ props.banner }  alt=""/>

      <div className="shopcategory-indexSort">
        <p>
          <span>showing 1-9</span> out of 9 products
        </p>
        <div className="shopcategory-sort">
        sort by <img src="" alt="" />
       </div>
      </div>
        
        <div className="shopcategory-products"> 
          { all_products.map( (item ,index) => {
              if ( props.category === item.category ){
                return <Items  key={ index } id = { item.id }  name = { item.name }  Image = { item.Image } description = { item.description }   new_price = { item.new_price }  old_price = { item.old_price } />
              }
              else{
                  return null;
              }
              
          }) }
        </div>
        <div className="shopcategory-loadmore">
          Explore more
        </div>
    </div>
  )
}

export default ShopCategory