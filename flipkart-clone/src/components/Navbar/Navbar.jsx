import React from 'react'
import "./navbar.css"
import icon from "./searchpng.png"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav-body'>

         <span className='logo'>
          <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='logo'/>
          <div className='logo-text'>Explore <span className='yellow'>Plus <span><img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png' alt='logo'/></span></span></div>
         </span>
         
         <div className='input-container'>
         <input 
         placeholder='Search for products,brandss & more'
         type="text" className='nav-input'/>
         <img src={icon} className="search-icon"/>
         
         </div>

         <button className='nav-btn'>Login</button>
        </div>
    </div>
  )
}

export default Navbar