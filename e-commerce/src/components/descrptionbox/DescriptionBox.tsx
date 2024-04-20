import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='description container my-10'>
        <div className="navigator flex ">
            <div className="nav-box px-2 py-1 font-semibold border-2 border-gray-500 text-gray-900">Description</div>
            <div className='nav-box-fade px-2 py-1 border-2 border-gray-500 text-gray-500'>Reviews(122)</div>
        </div>
        <div className='DescriptionBox-Description flex flex-col border-2 border-gray-500 gap-4 py-10 px-4'>
         <p>An E-Commerce website is a online platform that allows the users buying and selling of products or services over internet. It serves as a virtual marketplace where bussinesses and individual can showcase their products, interact with the customers, and conduct transactions without the need of physical presence. E-Commerce website have gained immense popularity easy accesibility, and the global reach they offer.  </p>
         <p>E-Commerce sites generally displays products or servives along with detailed description, prices, images, andany available varations(e.g. sizes and colour). Each product has its own page with relevant imformataion.</p>
        </div>
    </div>
  )
}

export default DescriptionBox
