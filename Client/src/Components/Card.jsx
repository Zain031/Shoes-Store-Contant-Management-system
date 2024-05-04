import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";






function Card({ item }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="card  card-compact w-96 bg-base-100 shadow-2xl gap-10  rounded-md p-2 bg-white "
      data-aos="zoom-out-right"
    >
      <figure className="object-fill">
        <img  className="w-96 h-60" src={item.imgUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold text-2xl mt-4 mb-4">
          {item.name}
        </h2>
        <div className="bg-slate-200 p-2 rounded-md pl-5">
          <p className="font-bold">stock : {item.stock}</p>
          <p className="font-bold text-2xl"> $ {item.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-cyan-600 p-2 text-white rounded-sm mt-3 hover:bg-cyan-800 ">
              {" "}
              <Link to={`/product/${item.id}`}> Details </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
