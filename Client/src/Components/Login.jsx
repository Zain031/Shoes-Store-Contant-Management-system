import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Icon } from "react-icons-kit";
import { eyeBlocked } from "react-icons-kit/icomoon/eyeBlocked";
import { eye } from "react-icons-kit/icomoon/eye";

function Login() {
  const navigate = useNavigate();
  const [email, setImail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeBlocked);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      console.log("masukkk");
      const resquestBody = { email, password };
      const response = await axios.post(
        "http://localhost:3000/login",
        resquestBody
      );
      localStorage.setItem("access_token", response.data.access_token);
      Swal.fire({
        icon: "success",
        title: `Success Login`,
      }),
        navigate("/home");
    } catch (error) {
      console.log(error.response.data.message);
      const data = error.response.data.message;
      if (data === "Data not found") {
        Swal.fire({
          icon: "warning",
          title: `You are not registered `,
          text : `Only Admin and Staff` 
        });
      }
    }
  }

  async function handlePassword() {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeBlocked);
      setType("password");
    }
  }

  return (
    <div className="w-full min-h-screen bg-gray-800 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 ">
      <div className="w-full sm:max-w-md p-5 mx-auto shadow-lg rounded-md bg-slate-700">
        <h2 className="mb-12 text-center text-5xl text-white font-extrabold">
          Welcome <br />
          King <span className="text-yellow-400">Shoes</span>
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4 text-white">
            <label className="block mb-1" htmlFor="email">
              Email-Address
            </label>
            <div className="text-black">
              <input
                id="email"
                type="text"
                name="email"
                value={email}
                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                onChange={(e) => {
                  setImail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mb-4 text-white">
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <div className="flex gap-2 text-black">
              <input
                id="password"
                type={type}
                name="password"
                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <span
                onClick={handlePassword}
                className="text-white pt-2 cursor-pointer"
              >
                <Icon size={30} icon={icon} />
              </span>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center"></div>
          </div>
          <div className="mt-6">
            <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-cyan-500  hover:bg-cyan-700 rounded-md font-semibold capitalize text-white">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
