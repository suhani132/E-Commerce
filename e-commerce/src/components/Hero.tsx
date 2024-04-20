import hand_icon from "@/assets/hand_icon.png";
import arrow from "@/assets/arrow.png";
import hero_image from "@/assets/hero_image.png";


const Hero = () => {
  return (
    <div className="flex bg-pink-50  mx-auto container my-4">
      <div className="flex flex-1 flex-col justify-center mx-auto container ">
        <h2 className="font-semibold text-black text-2xl mb-10">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="flex items-center gap-10 my-1">
            <p className=" text-6xl text-gray-900 font-semibold">New</p>
            <img className="w-[64px] h-16" src={hand_icon} alt="" />
          </div>
          <p  className="text-gray-900 font-semibold text-6xl my-2">Collections</p>
          <p  className="text-gray-900 font-semibold text-6xl my-2">For Everyone</p>
        </div>
        <div className="hero-latest-btn flex bg-red-600 border-b rounded-2xl text-white px-2 py-2 w-2/5 my-3 h-15 cursor-pointer">
          <div className="ml-3 font-bold" >Latest Collection</div>
          <img className="ml-5 h-4 mt-1 mb-0" src={arrow} alt="" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center object-cover">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
