import React from 'react'
import cross_icon from '../../assets/cross_icon.png';
import { useEffect, useState } from 'react';

const Listproduct = () => {

  const [allproducts, setallproducts] = useState([]);

  const fetchInfo = async()=>{
    await fetch('http://localhost:4000/allproducts').then((res)=>res.json()).then((data)=>{setallproducts(data)});
  }

  useEffect(() => {
    fetchInfo();
  }, [])

 const remove_product = async (id)=>{
  await fetch('http://localhost:4000/removeproduct',{
    method:'POST',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json',
    },
    body:JSON.stringify({ id:id}),
  })
   await fetchInfo();
 }

  return (
    <div className='List-product container mx-auto flex flex-col items-center justify-center'>
      <h1 className="font-semibold text-2xl p-5">All Products List</h1>
      <div className='listproduct-format-main items-center justify-center flex flex-row gap-8 font-medium text-lg border-b-2 border-gray-300 w-full'>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
      {allproducts.map((product,index)=>{
        return <div key={index} className="listproduct-formatmain">
        <img src={product.image} alt="" />
        <p>{product.name}</p>
        <p>${product.old_price}</p>
        <p>${product.new_price}</p>
        <img onClick={()=>{remove_product(product.id)}} className="remove-icon cursor-pointer " src={cross_icon} alt="" />
        </div>
      })}

      </div>
    </div>
  )
}

export default Listproduct
