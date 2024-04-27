import React from 'react'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg';
import list_product_icon from '../../assets/Product_list_icon.svg';

const Sidebar = () => {
  return (
    <div className='sidebar container p-2  flex flex-row md:flex-col gap-y-5 w-1/4  bg-slate-100 '>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className='sidebar-item border-2 border-white bg-white w-fit'>
          <img src={add_product_icon} alt="" />   
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className='sidebar-item border-2 border-white bg-white w-fit'>
          <img src={list_product_icon} alt="" />   
          <p>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
