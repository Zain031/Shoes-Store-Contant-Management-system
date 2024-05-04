import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Aos from "aos";
import { Link } from "react-router-dom";

export default function ProductDetailComponent() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  async function fetchData() {
    try {
      const { data } = await axios({
        method: "get",
        url: "http://localhost:3000/pub/products/" + id,
      });
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
    Aos.init();
  }, []);

  return (
    <div className=" h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-20">
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  shadow-2xl p-6 bg-slate-100 rounded-md"
        data-aos="zoom-in"
      >
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
              <img
                className="w-full h-full object-cover hover:scale-125 cursor-zoom-in"
                src={data.imgUrl}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4"></div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {data.name}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{data.description}</p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700">Price:</span>
                <span className="text-gray-600 "> $ {data.price}</span>
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-sm mt-2">Stock : {data.stock}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to={"/"}>
            <ion-icon name="arrow-back-circle" size="large"></ion-icon>
          </Link>
        </div>
      </div>
    </div>
  );
}
