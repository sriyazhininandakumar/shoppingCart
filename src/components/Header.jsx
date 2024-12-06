import React from 'react';
import {Link} from "react-router-dom"
import "./Header.css";
const Header = ({cart}) => {
  return (
    <div className='navbar'>
      <div className='logo'>Pazhamuthir Cholai</div>
      <ul>
        <li>
          <div className='logo'>
            <Link to={"/"}> Home</Link>
            </div>
        </li>
        <li>
        <div className='logo'>
            <Link to={"/Cart"}> Cart</Link>
            </div> 
        </li>
      </ul>
    </div>
  )
}

export default Header
