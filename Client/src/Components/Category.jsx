import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import{Link} from "react-router-dom"
import Swal from "sweetalert2"
function Category() {
  const [category, setCategory] = useState([]);

  async function fectCategories() {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios.get(`http://localhost:3000/pub/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      setCategory(data);
    } catch (error) {
      console.log(error);
    }
  }


  async function handleDelete(id) {
    try {
      console.log(id);
      const token = localStorage.getItem("access_token");
      const { data } = await axios({
        method: "delete",
        url: "http://localhost:3000/categories/" + id,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      Swal.fire({
        icon: "success",
        title: `${data.message}`
      });
      fectCategories();
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {
    fectCategories();
  }, []);

  return (
    <>
      <div className=" p-4 flex justify-end mr-28">
        <div className=" w-44 h-10 bg-blue-400 hover:bg-blue-600 hover:cursor-pointer p-2 rounded-md flex gap-2 hover:text-white ">
          <Link to={"/addCategory"}>
            <ion-icon name="add"></ion-icon> Add Category
          </Link>
        </div>
      </div>

      <div class="flex flex-col px-2 shadow-xl mx-32 bg-blue-100 rounded-md ">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8  ">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div >
              <table class="min-w-full text-center">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-mediu0m text-gray-900 px-6 py-4"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>

                {category.map((item,index) => {
                  return (
                    <tbody>
                      <tr class="border-b border-blue-300 ">
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {++index}
                        </td>
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {item.name}
                        </td>
                        <td className="text-sm  font-light px-6 py-4 whitespace-nowrap text-white">
                            <button className="bg-red-500 rounded-lg p-2  hover:bg-red-700"
                              onClick={() => {
                                handleDelete(item.id);
                              }}
                            >
                              <ion-icon
                                size="large"
                                name="trash-outline"
                              ></ion-icon>
                            </button>
                          </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
