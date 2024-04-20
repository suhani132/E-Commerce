// import React from 'react'
import logo from "@/assets/logo.png"
import cart_icon from '@/assets/cart_icon.png'
import { Link } from "react-router-dom";

const Navbar = () => {
   
  return (
    <div className='container mx-15 '>
      <div className=" flex justify-between items-center gap-2 ">
        <div className='flex items-center gap-4'>
        <img src={logo} alt="logo" />
            <p className='font-semibold text-4xl text-gray-900'>STYLEIN</p>
        </div>
        <ul className='flex text-base items-center gap-8 font-medium text-gray-700 list-none cursor-pointer'>
            <li className=' hover:border-b-2  hover:border-red-500 '> <Link to='/'> Shop </Link>  </li>
            <li className=' hover:border-b-2  hover:border-red-500'> <Link to='/Mens'> Mens </Link>  </li>
            <li className=' hover:border-b-2  hover:border-red-500'> <Link to='/Womens'>  Womens </Link> </li>
            <li className=' hover:border-b-2  hover:border-red-500'> <Link to='/Kids'> Kids </Link>   </li>
        </ul>
      <div className='flex  items-center justify-center'>
        <button className='text-sm border-2 font-base bg-slate-50 border-gray-500 rounded-xl mr-10 mt-1 px-4 hover:border-red-500 hover:text-red-500 '><Link to="/Login">Login</Link></button>
        <div> <Link to='/Cart'> <img  className='w-10 h-10 mt-1 cursor-pointer' src={cart_icon} alt="Cart icon" /> </Link> </div>
        
        <div className="inline-flex justify-center items-center text-white font-bold text-xs border-b rounded-full bg-red-500 px-2 py-1 mt-[-30px] ml-[-5px] "> 0</div>
      </div>
      </div>
    </div>
  )
}

export default Navbar