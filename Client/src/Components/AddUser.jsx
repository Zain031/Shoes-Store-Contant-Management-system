import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2"
import Button from "./Button";

function AddUser() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");


  const navigate = useNavigate()
  async function handdleRegister(e) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
      const requestBody = { userName, email, password,phone,password };
      const response = await axios.post(
        "http://localhost:3000/register", requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire({
        icon: "success",
        title: `User :${response.data.userName} has been created`})

      console.log(response.data);
      navigate("/home")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style={{ background: "rgba(0,0,0,.7)" }}
    >
      <div className="border border-blue-500  modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          {/*Title*/}
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-gray-500">Add Staff</p>
          </div>
          {/*Body*/}

          <div className="my-5 mr-5 ml-5 flex justify-center">
            <form onSubmit={handdleRegister}>
              <div className="">
                <div className="">
                  <label htmlFor="names" className="text-md text-gray-600">
                    Name
                  </label>
                </div>
                <div className="">
                  <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    name="name"
                    className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                    placeholder="Product name"
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    value={userName}
                  />
                </div>
                <div className="">
                  <label htmlFor="phone" className="text-md text-gray-600">
                    Email
                  </label>
                </div>
                <div className="">
                  <input
                    type="text"
                    id="phone"
                    autoComplete="off"
                    name="email"
                    className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                    placeholder="email address"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                </div>
                <div className="">
                  <label htmlFor="id_number" className="text-md text-gray-600">
                    Password
                  </label>
                </div>
                <div className="">
                  <input
                    type="text"
                    id="id_number"
                    autoComplete="off"
                    name="password"
                    className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                    placeholder="password"
                    onChange={(e) => {
                      setPasword(e.target.value);
                    }}
                    value={password}
                  />
                </div>
                <div className="">
                  <label htmlFor="id_number" className="text-md text-gray-600">
                    Phone Number
                  </label>
                </div>
                <div className="">
                  <input
                    type="text"
                    id="id_number"
                    autoComplete="off"
                    name="phone"
                    className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                    placeholder="Phone Number"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    value={phone}
                  />
                </div>
                <div className="">
                  <label htmlFor="id_number" className="text-md text-gray-600">
                    Address
                  </label>
                </div>
                <div className="">
                  <input
                    type="text"
                    id="id_number"
                    autoComplete="off"
                    name="address"
                    className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                    placeholder="address"
                    onChange={(e) => {
                      setAdress(e.target.value);
                    }}
                    value={address}
                  />
                </div>
               <Button/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
