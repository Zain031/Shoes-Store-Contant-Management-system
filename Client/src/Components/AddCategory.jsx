import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"

function AddCategory() {
  const [name, setName] = useState("");

  const navigate = useNavigate();




  async function handleAddCategory(e) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
      const requestBody = {name};
      const { data } = await axios.post(
        `http://localhost:3000/categories`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      Swal.fire({
        icon: "success",
        title: `success add "${data.data.name}"`,
      });
      navigate("/categories");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div
        className="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
        style={{ background: "rgba(0,0,0,.7)" }}
      >
        <div className="border border-blue-500  modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            {/*Title*/}
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold text-gray-500">Add Category</p>
            </div>
            {/*Body*/}

            <div className="my-5 mr-5 ml-5 flex justify-center">
              <form onSubmit={handleAddCategory}>
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
                      placeholder="Category name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                    />
                  </div>
                  <div className="flex justify-end pt-2 space-x-14">
                    <button className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold">
                      <Link to={"/categories"}>Cancel</Link>
                    </button>

                    <button
                      type="submit"
                      className="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
