import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"
import logo from "../assets/logo2.png"

import { useNavigate } from "react-router-dom";

function NavbarCms() {
  const navigate = useNavigate();

  function handdleLogOut() {
    localStorage.removeItem("access_token");
     Swal.fire({
              icon: "success",
              title: `Success Logout`}),
            
    navigate("/login");
  }

  return (
    <nav className="w-full z-30 top-10 py-1 bg-gradient-to-r from-cyan-500 to-blue-500  shadow-lg border-b border-blue-400">
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
       <Link to={"/"}>
        <div className="ml-20 text-white md:w-40">
          <img src={logo} alt="" />
        </div>
        </Link> 
        <div className="flex gap-24 -ml-96 mr-32">
          <Link to={"/home"}>
          <div >
            <button className="text-white text-lg font-semibold"> Home</button>
          </div>
          </Link>

        <Link to={"/categories"}>
          <div >
            <div> <button className="text-white text-lg font-semibold">Category</button></div>
          </div>
          </Link>
        </div>

        <div className=" p-4 flex justify-between items-center  gap-4">
          <div className="flex gap-2 bg-blue-600 hover:bg-blue-500 hover:cursor-pointer p-2 rounded-sm text-white w-full outline outline-1 outline-white ">
            <Link  className="flex gap-2" to={"/addUser"}>
              <div>
                <ion-icon size="large" name="person-add-outline"></ion-icon>
              </div>
              <div className="pt-1">Add User</div>
            </Link>
          </div>

          <div className="flex items-center w-full md:w-full outline outline-1 outline-white rounded-sm">
            <button
              onClick={handdleLogOut}
              className="bg-red-600 text-white  p-2 rounded  hover:bg-red-500  flex gap-2 "
            >
              <div className="">
                <ion-icon size="large" name="log-out-outline"></ion-icon>{" "}
              </div>
              <div className="p-1">
                <p>Logout</p>
              </div>
            </button>
          </div>
        </div>
        
      </div>
    </nav>
  );
}

export default NavbarCms;
