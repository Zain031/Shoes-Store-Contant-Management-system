
import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import { useNavigate, useParams } from "react-router-dom";
import { TextInput, TextAreaInput } from "../components/textInput";
import { LoadingAnimation } from "../components/loading";

export const EditJobById = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [company, setCompany] = useState({});
  const [companies, setCompanies] = useState([]);
  const [editted, setEditted] = useState({});
  const [loading, setLoading] = useState(true);
  const navigation = useNavigate();

  const fetchJobById = async () => {
    const { data } = await axios({
      method: "get",
      url: `/jobs/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    setEditted(data);
    setJob(data);
    setCompany(data.Company);
    setLoading(false);
  };




  const fetchCompanies = async () => {
    const { data } = await axios({
      url: "/companies",
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    setCompanies(data);
  };

  useEffect(() => {
    fetchJobById();
    fetchCompanies();
  }, []);

  const editJobInfo = (event) => {
    const { name, value } = event.target;
    setEditted({ ...editted, [name]: value });
  };

  const editJobInfoById = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        url: `/jobs/${id}`,
        method: "PUT",
        data: editted,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      navigation("/jobs");
    } catch (error) {
      console.log(error);
    }
  };






  return (
    <>
      <div className="flex flex-wrap justify-center align-middle">
        {loading && <LoadingAnimation />}
      </div>
      {!loading && (
        <form
          method="dialog"
          onSubmit={editJobInfoById}
          className="card container mx:auto flex flex-wrap grid-cols-1 justify-center gap-0 bg-primary max-w-fit px-5 pb-5 absolute top-52"
        >
          <TextInput
            input={editted.title}
            label={"Job title"}
            name={"title"}
            onChangeFunction={editJobInfo}
          />
          <TextInput
            input={editted.jobType}
            label={"Job Type"}
            name={"jobType"}
            onChangeFunction={editJobInfo}
          />

          <TextAreaInput
            input={editted.description}
            label={"Job Description"}
            name={"description"}
            onChangeFunction={editJobInfo}
          />

          <div className="label">
            <span className="label-text text-lg font-bold text-primary-content">
              Employer
            </span>
          </div>

          {/* Render the select option */}
          <select
            name={"companyId"}
            value={editted.companyId}
            onChange={editJobInfo}
            className="select select-bordered text-white w-96 max-w-l"
          >


            
            {companies.map((company) => {
              return (
                <option
                  key={company.id}
                  value={company.id}
                  selected={editted.Company.id === company.id ? true : false}
                >
                  {company.name}
                </option>
              );
            })}
          </select>

          <button
            className="btn btn-secondary text-secondary-content mt-5"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};
