import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png"

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-gradient-to-r from-cyan-500 to-blue-500 flex gap-2 md:gap-6 items-center justify-between fixed shadow-lg z-50">
      <div className="ml-20 text-white md:w-40">
        <img src={logo} alt="" />
      </div>

      <div className="flex gap-2 mr-20 bg-white hover:text-white hover:bg-blue-700 px-2 pt-1 rounded-md">
        <Link to={"/login"} className="flex gap-2">
          <div>
            <ion-icon size="large" name="person-circle"></ion-icon>
          </div>
          <div className="pt-1 ">Login</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
