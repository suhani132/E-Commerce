import React from "react";
import navlogo from "../../assets/nav-logo.svg";
import navprofile from "../../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="Navbar container mx-auto items-center border-b-2 border-gray-400 w-fit md:w-full">
      <div className="flex justify-between">
        <img src={navlogo} alt="" />
        <img src={navprofile} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
