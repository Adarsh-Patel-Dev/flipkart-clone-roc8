import React from 'react'
import Asidebar from '../Asidebar/Asidebar'
import Navbar from '../Navbar/Navbar'
import Products from '../Products/Products'
import "./product-page.css"

function ProductPage() {

  
  return (
    <div >
    <Navbar/>
    <div className='main-section'>
     <Asidebar/>
     <Products/>
    </div>
    </div>
  )
}

export default ProductPage