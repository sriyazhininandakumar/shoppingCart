import React, { useEffect, useState } from 'react'
import './Cart.css';
const Cart = ({cart}) => {
  const[total,setTotal]=useState(0);
  useEffect(()=>{setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0))},[cart])
  return (
  <>
  <h1 className='cart-heading'>Cart Products</h1>
    <div className='cart-container'>
      {
        cart.map((product)=>(
          <div className="cart-products">
        <div className="img">
          <img src={product.pic} alt="img" />
          </div>
        <div className="cart-product-details">
          <h3>{product.name}</h3>
          <p>Price:{product.amt}</p>
        </div>
      </div>



        ))}
             
    </div>        
    
    <h3 className='cart-heading'>Total Amount Rs: {total}</h3>
    </>
  )
}

export default Cart
