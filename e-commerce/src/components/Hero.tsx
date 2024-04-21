import hand_icon from "@/assets/hand_icon.png";
import arrow from "@/assets/arrow.png";
import hero_image from "@/assets/hero_image.png";

const Hero = () => {
  return (
    <div className=" mx-auto container flex  bg-pink-50 flex-col md:flex-row items-center justify-center ">
      <div className="flex-1 w-full space-y-6 ">
        <h2 className="flex justify-center text-4xl font-semibold">
          NEW ARRIVALS ONLY
        </h2>
        <div className="flex justify-center flex-col items-center">
          <p className=" text-6xl gap-x-4 flex font-bold items-center justify-center">
            New <img className="h-14 " src={hand_icon} alt="" />
          </p>
          <p className=" text-6xl font-bold">
            Collections <br></br>For Everyone
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center text-2xl bg-red-500 text-white  border-4 border-black  rounded-2xl w-fit p-2 flex-row cursor-pointer">
            Latest Collection
            <img className="" src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-1">
      <img  src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
