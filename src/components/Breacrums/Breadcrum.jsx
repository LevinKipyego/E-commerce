import React from 'react'
import './Breadcrum.css'

function Breadcrum(props) {
    const { product } = props
  return (
    <div className='breadcrum'>
        HOME <i className="ri-arrow-right-double-line"></i> sHOP <i className ="ri-arrow-right-double-line"></i> { product.category} <i className="ri-arrow-right-double-line"></i>{ product.name }
    </div>
  )
}

export default Breadcrum