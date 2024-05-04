import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "./Button";
import Swal from "sweetalert2";

function UpdateImage() {
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState("");
  const { id } = useParams();

  async function handleUpload(e) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
      const formData = new FormData();
      formData.append("imgUrl", imgUrl);

      let response = await axios.patch(
        "http://localhost:3000/products/" + id,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      Swal.fire({
        title: "Good job!",
        text: "Image has been Updated",
        icon: "success",
      });
      navigate("/home");
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
            <p className="text-2xl font-bold text-gray-500">Upload Image</p>
          </div>
          {/*Body*/}
          <div
            className="container"
            style={{ marginTop: "5vh", marginBottom: "5vh" }}
          >
            <form onSubmit={handleUpload}>
              <div style={{ flexDirection: "column", margin: 12 }}>
                <div className="mb-3 bg-slate-200 p-4 rounded-md">
                  <div>
                    <label htmlFor="imgUrl" className="form-label">
                      Image File :{" "}
                    </label>
                  </div>
                  <div className="mt-4">
                    <input
                      onChange={(e) => {
                        setImgUrl(e.target.files[0]);
                      }}
                      type="file"
                      className="form-control"
                      id="imgUrl"
                      name="imgUrl"
                    />
                  </div>
                </div>
                <div className="bg-yellow-100 p-2 flex gap-2 rounded-md">
                  <div className="animate-pulse">
                    <ion-icon size ="large" name="alert-circle-outline"></ion-icon>
                  </div>
                  <div className="pt-1">Please wait a few seconds after uploading image</div>
                </div>

                <Button />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateImage;
