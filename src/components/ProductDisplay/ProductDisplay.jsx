import React from 'react'
import './ProductDisplay.css'

const ProductDisplay = ( props ) => {
    const { product } = props
  return (
    <div className='product-display'>
        <div className="product-display-left">
             <div className="product-display-img-list">
                <img src={ product.Image } alt="" />
                <img src={ product.Image } alt="" />
                <img src={ product.Image } alt="" />
                <img src={ product.Image } alt="" />

             </div>
             <div className="product-display-image">
                <img className='product-display-main-img' src={ product.Image } alt="" />
             </div>
        </div>
         <div className="product-display-right">
            <h1>{ product.name }</h1>
            <div className="product-display-stars">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <p>(1223)</p>
                </div>
                <div className="display-right-prices">
                    <div className="display-right-prices-old">
                    $ { product.old_price }
                </div>
                <div className="display-right-prices-new">
                    $ { product.new_price }
                </div>
                </div>
                <div className="product-display-right-description">
                    { product.description }
                    lightweight silver coated unisex neck piece created by Ali and fonnah foundation limited,non-corrossive
                </div>
                <div className="product-display-right-size">
                    <h1>select size</h1>
                    <div className="product-display-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>Add to cart</button>
                <p className='product-display-right-category'><span>Category :  </span> Women, t-shirt</p>
                <p className='product-display-right-category'><span>Tag :  </span> Women, crop top</p>
            
         </div>
    </div>
  )
}

export default ProductDisplay