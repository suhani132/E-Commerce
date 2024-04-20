import exclusive_image from "@/assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers flex mt-10 bg-pink-50  container">
      <div className="offers-left flex-1 flex flex-col justify-center">
        <h1 className="  text-gray-900 text-6xl font-semibold">EXCLUSIVE</h1>
        <h1 className=" text-gray-900  text-6xl font-semibold">OFFERS FOR YOU</h1>
        <p className=" text-gray-900 text-3xl mt-10 ">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="flex mt-5 bg-red-600 border-b rounded-2xl items-center justify-center text-white px-2 py-2 w-1/4 cursor-pointer">Check Now</button>
      </div>
      <div className="right-offers flex flex-1 justify-center items-center ">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
