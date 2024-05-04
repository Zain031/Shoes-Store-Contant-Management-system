import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "./Button";

function EditProduct() {
  const { id } = useParams();
  const [productById, setProductById] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [editted, setEditted] = useState({});
 

  const navigate = useNavigate();

  async function fetcProductById() {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios({
        method: "get",
        url: "http://localhost:3000/pub/products/" + id,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });  
      console.log(data);
      setProductById(data);
      setEditted(data)
      
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCategory() {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios.get("http://localhost:3000/categories", {
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

  async function editProductInfo(e) {
    const { name, value } = e.target;
    setEditted({ ...editted, [name]: value });
  }

  async function editData(e) {
    e.preventDefault();
    try {
      console.log("masuk");
      const token = localStorage.getItem("access_token");
      const response = await axios({
        method: "put",
        url: "http://localhost:3000/products/" + id,
        data: editted,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire({
        icon: "success",
        title: `Success updated product`,
      }),
      console.log(response);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategory();
    fetcProductById();
  }, []);

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
              <p className="text-2xl font-bold text-gray-500">Edit Product</p>
            </div>
            {/*Body*/}

            <div className="my-5 mr-5 ml-5 flex justify-center">
              <form onSubmit={editData}>
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
                      onChange={editProductInfo}
                      value={editted.name}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="phone" className="text-md text-gray-600">
                      Price
                    </label>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      id="phone"
                      autoComplete="off"
                      name="price"
                      className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                      placeholder="Product price"
                      onChange={editProductInfo}
                      value={editted.price}
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="id_number"
                      className="text-md text-gray-600"
                    >
                      Description
                    </label>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      id="id_number"
                      autoComplete="off"
                      name="description"
                      className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                      placeholder="Description"
                      onChange={editProductInfo}
                      value={editted.description}
                    />
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <div>
                        <label
                          htmlFor="id_number"
                          className="text-md text-gray-600"
                        >
                          Stock
                        </label>
                      </div>
                      <div className="">
                        <input
                          type="text"
                          id="id_number"
                          autoComplete="off"
                          name="stock"
                          className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                          placeholder="Stock"
                          onChange={editProductInfo}
                          value={editted.stock}
                        />
                      </div>
                    </div>

                    <div className="mg-3 text-gray-600">
                      <div>
                        <label htmlFor="categoryId" className="form-label">
                          Category{" "}
                        </label>
                      </div>

                      <div className=" mb-4 ">
                        <select
                          className="form-select p-3 w-56 border-2 border-gray-300 rounded-md  "
                          name="categoryId"
                          onChange={editProductInfo}
                          value={editted.categoryId}
                        >
                          <option value="">Select Category</option>
                          {category.map((item) => {
                            return (
                              <>
                                <option value={item.id}>{item.name}</option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 text-gray-600">
                    <div>
                      <label htmlFor="imgUrl" className="form-label">
                        Image URL{" "}
                      </label>
                    </div>
                    <div>
                      <input
                        onChange={editProductInfo}
                        value={editted.imgUrl}
                        type="text"
                        className="form-control p-3 w-full border-2 border-gray-300 rounded-md "
                        id="imgUrl"
                        placeholder="Image URL"
                        name="imgUrl"
                      />
                    </div>
                    <div
                      id="imgUrl"
                      className="form-text text-sm bg-yellow-100 mt-2 p-1 rounded-sm"
                    >
                      <ion-icon name="alert-circle-outline"></ion-icon> If you
                      don't add an image URL, it will be assigned to random
                      image. Don't worry, you can add the image later.
                    </div>
                  </div>

                  <Button />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
