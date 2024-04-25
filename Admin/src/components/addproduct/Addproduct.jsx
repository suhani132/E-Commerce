import React, { useState } from 'react'
import upload_area from '../../assets/upload_area.svg';

const Addproduct = () => {

    const [image, setImage] = useState(false);
   const [productDetails, setproductDetails] =  useState({
      name: "",
      image: "",
      category: "women",
      new_price: "",
      old_price: "" ,
   })

    const imageHandler = (e)  => {
         setImage(e.target.files[0]);
    }
    const changeHandler =(e) =>{
        setproductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const Add_Product = async() =>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;
        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data});

        if(responseData.success)
        {
            product.image= responseData.image_url;
            console.log(product);
            await fetch ('http://localhost:4000/addproduct',{
              method: 'POST',
              headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
              },
              body:JSON.stringify(product),
            }).then((resp) => resp.json()).then((data)=>{
              data.success ? alert('Product Added Successfully') : alert('Product Not Added');
             
            })
        }
    }

  return (
    <div className='add-product container flex flex-col gap-5 mx-auto '>
      <div className='addproduct-itemfield  space-y-2'>
      <p>Product Title</p>
      <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder=' Type Here' className='border-2 border-gray-500 w-full' />
      </div>
      <div className='addproduct-price flex flex-row '>
        <div className='addproduct-itemfield space-y-2 w-1/2'>
            <p>Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder=' Type Here'className='border-2 border-gray-500 '  />
        </div>
        <div className='addproduct-itemfield  space-y-2 w-1/2'>
            <p>Offer Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder=' Type Here'className='border-2 border-gray-500'  />
        </div>
      </div>
      <div className='addproduct-itemfield  space-y-2'>
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className="addproduct-selector border-2 border-gray-500">
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
        </select>
      </div>
      <div className='addproduct-itemfield space-y-4'>
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area} alt="" className='thumbnail'/>
        </label>
        <input onChange ={imageHandler} type="file" name='image' id='file-input' hidden />
        <button onClick={()=>{Add_Product()}} className=' p-2 rounded-xl bg-blue-400'> ADD </button>
      </div>
    </div>

  )

}

export default Addproduct
