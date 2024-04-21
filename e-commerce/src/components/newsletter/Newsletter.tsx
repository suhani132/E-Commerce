

const Newsletter = () => {
  return (
    <div className='flex flex-col mx-auto items-center justify-center gap-5 bg-pink-50 container'>
      <h1 className="text-gray-900 text-5xl font-semibold ">Get Exclusive Offers On Your Email</h1>
      <p className=" text-gray-900 text-3xl  ">Subscribe to our Newsletter and stay Updated</p>
      <div className="flex"> 
        <input type="email" placeholder='Your Email id' className=" border rounded px-2 py-2" /> 
        <button className="flex bg-red-600 border -2 rounded-2xl text-white p-2 cursor-pointer">Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
