import logo from "@/assets/logo.png";
import cart_icon from "@/assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "@/context/Shopcontext";

const Navbar = () => {
  const { getTotalItem } = useContext(ShopContext);
  return (
    <div className="container mx-auto flex justify-between  py-6 items-center ">
      <div className="flex-col md:flex md:flex-row md:items-center ">
        {" "}
        <p className="font-semibold text-4xl text-gray-900 flex items-center gap-4">
          <img src={logo} alt="logo" />
          STYLEIN
        </p>
        <ul className="flex flex-row gap-4 md:gap-16 md:mx-16 md:pl-4">
          <li className=" hover:border-b-2  hover:border-red-500 ">
            {" "}
            <Link to="/"> Shop </Link>{" "}
          </li>
          <li className=" hover:border-b-2  hover:border-red-500">
            {" "}
            <Link to="/Mens"> Mens </Link>{" "}
          </li>
          <li className=" hover:border-b-2  hover:border-red-500">
            {" "}
            <Link to="/Womens"> Womens </Link>{" "}
          </li>
          <li className=" hover:border-b-2  hover:border-red-500">
            {" "}
            <Link to="/Kids"> Kids </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="flex flex-row  justify-between gap-x-10">
        {localStorage.getItem("auth-token") ? (
          <button className=" flex  items-center  border-4 border-slate-400 rounded-2xl p-2  font-semibold hover:border-red-500 hover:text-red-500"
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <button className=" flex  items-center  border-4 border-slate-400 rounded-2xl p-2  font-semibold hover:border-red-500 hover:text-red-500">
            <Link to="/Login">Login</Link>
          </button>
        )}

        <div className="flex flex-row shrink-0">
          <Link to="/Cart">
            {" "}
            <img
              className="w-10 h-10 mt-1 cursor-pointer"
              src={cart_icon}
              alt="Cart icon"
            />{" "}
          </Link>{" "}
          <div className=" justify-center items-center text-white font-bold text-sm  rounded-full bg-red-500 mb-6 py-0.5 px-2">
            {" "}
            {getTotalItem()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
