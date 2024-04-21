import exclusive_image from "@/assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className=" mx-auto container flex flex-col md:flex-row gap-10 bg-pink-50 justify-center items-center ">
      <div className="offers-left flex-1 flex flex-col  gap-4">
        <h1 className="  text-gray-900 text-6xl font-semibold">EXCLUSIVE<br></br>OFFERS FOR YOU</h1>
        <p className=" text-gray-900 text-3xl ">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="flex bg-red-600 border-4 border-gray-900 rounded-2xl w-fit p-2 text-white cursor-pointer">Check Now</button>
      </div>
      <div className="right-offers flex flex-1 justify-center items-center ">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
