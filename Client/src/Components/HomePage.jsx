import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

function HomePage() {
  const [shoes, setShoes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(10);

  async function getData() {
    try {
      const { data } = await axios({
        method: "get",
        url: "http://localhost:3000/pub/products",
      });
      console.log(data);
      setShoes(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getDataCategories() {
    try {
      const { data } = await axios({
        method: "get",
        url: "http://localhost:3000/pub/categories",
      });
      console.log(data);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {
    getData();
    getDataCategories();
  }, []);

  return (
    <>

      <div className="flex my-4 mx-8 gap-10 shadow-md p-2 bg-red-600 rounded-md justify-center ">
        <div>
          <img
            className="w-80 h-40 rounded-md "
            data-aos="fade-left"
            src="https://as2.ftcdn.net/v2/jpg/02/10/60/47/1000_F_210604798_L1oeENismr3DpyhYGd9mMT8WhNcuqoi1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-80 h-40 rounded-md"
            data-aos="fade-left"
            src="https://as2.ftcdn.net/v2/jpg/01/28/82/09/1000_F_128820959_ekmvYCTaZlB1VcO0wW2fgIYttOIdKcTo.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-80 h-40 rounded-md"
            data-aos="fade-left"
            src="https://as1.ftcdn.net/v2/jpg/04/32/81/16/1000_F_432811637_QaJr8eL1pffIynXMupRLjwWUvlSfeJQu.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-80 h-40 rounded-md"
            data-aos="fade-left"
            src="https://as1.ftcdn.net/v2/jpg/01/94/44/64/1000_F_194446478_vOgopnRrn4V5sTmJ0h0QUC3pwk912G1o.jpg"
            alt=""
          />
        </div>
      </div> 

      <div className="mt-2 mb-10 bg-gradient-to-r p-10 rounded-md ">
        <div className="flex flex-wrap justify-center gap-10">
          {shoes?.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>    
      </div>      
      
    </>
  );
}

export default HomePage;
