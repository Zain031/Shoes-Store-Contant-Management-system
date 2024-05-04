import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ReactTyped } from "react-typed";

function HomePageCMS() {
  const [product, setProduct] = useState([]);


  async function getProduct() {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios({
        method: "get",
        url: "http://localhost:3000/products",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      setProduct(data);
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
        url: "http://localhost:3000/products/" + id,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      Swal.fire({
        icon: "success",
        title: `${data.message}`,
      });
      getProduct();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
    



    
      <div className="ml-32 mt-6 bg-green-200 w-52 p-1 flex gap-2 rounded-md ">
        <div className="mt-1 animate-pulse ">
          <ion-icon  name="alert-circle-outline"></ion-icon>
        </div>
        <ReactTyped strings={["Click logo to go public"]} typeSpeed={60} /> 
      </div>
      <div className="mt-10 ">
        <div className=" p-4 flex justify-end mr-24  ">
          <div className=" w-44 h-10 bg-blue-400 hover:bg-blue-600 hover:cursor-pointer p-2 rounded-md flex gap-2 hover:text-white shadow-lg ">
            <Link to={"/product/add"}>
              <ion-icon name="add"></ion-icon> Add Products
            </Link>
          </div>
        </div>

        <div className="flex flex-col m-28 shadow-2xl p-10 mt-2 bg-blue-100 rounded-xl">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Stock
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Edit
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Upload Image
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  {product.map((item, index) => {
                    return (
                      <tbody>
                        <tr className="border-b border-blue-500 ">
                          <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                            {++index}
                          </td>
                          <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap ">
                            {item.name}
                          </td>
                          <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                            {item.price}
                          </td>
                          <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                            {item.stock}
                          </td>
                          <td className="  text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                            <p className="bg-yellow-200 py-1 rounded-md">{item.Category.name}</p>
                          </td>
                          
                          
                          <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                           <div className="hover:scale-100">
                            <img
                              className="w-44 h-24 hover:scale-150 rounded-lg"
                              src={item.imgUrl}
                              alt=""
                            />
                            </div>
                          </td>

                          <td className="text-sm  font-light px-6 py-4 whitespace-nowrap text-white ">
                          <button className="bg-blue-500 rounded-lg p-2 hover:bg-blue-700">
                            <Link to={`/editProduct/${item.id}`}>
                              <ion-icon
                                size="large"
                                name="create-outline"
                              ></ion-icon>
                            </Link>
                            </button>
                          </td>

                          <td className="text-smfont-light px-6 py-4 whitespace-nowrap text-white">
                           <button className="bg-green-500 rounded-lg p-2  hover:bg-green-700">
                            <Link to={`/updateImage/${item.id}`}>
                              <ion-icon
                                size="large"
                                name="images-outline"
                              ></ion-icon>
                            </Link>
                            </button>
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
      </div>
    </>
  );
}

export default HomePageCMS;
