import React, { useState } from 'react'
import data from '../assets/Products.json';
import Product from './Product';
import "./Home.css"
const Home = ({cart,setcart}) => {
    const [products]=useState(data);
  return (
    <div className='product-container'>
      {products.map((product)=>(
        <Product 
        key={product.id}
        product={product}
        cart={cart}
        setcart={setcart}/>
       
      ))}
    </div>
  )
}

export default Home
