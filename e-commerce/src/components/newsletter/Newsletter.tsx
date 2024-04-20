

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center mt-20 bg-pink-50 container'>
      <h1 className="text-gray-900 text-5xl font-semibold mt-5">Get Exclusive Offers On Your Email</h1>
      <p className=" text-gray-900 text-3xl mt-10 ">Subscribe to our Newsletter and stay Updated</p>
      <div className="flex justify-center mt-5 mb-5"> 
        <input type="email" placeholder='Your Email id' className=" border rounded px-2 py-2" /> 
        <button className="flex bg-red-600 border-b rounded-2xl items-center justify-center text-white px-2 py-2 cursor-pointer">Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
