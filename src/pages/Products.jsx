import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';
import Breadcrum from '../components/Breacrums/Breadcrum';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Products = () => {
  const { all_products } = useContext(ShopContext)
  const { productId } = useParams();
  const product  = all_products.find( (e) => e.id === Number(productId) );
  return (
    <div >
        <Breadcrum product = { product }/>
        <ProductDisplay product = { product }/>
        <DescriptionBox/>
        <RelatedProducts/>
    </div>
  )
}

export default Products