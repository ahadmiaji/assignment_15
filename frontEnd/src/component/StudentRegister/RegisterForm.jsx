import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  CreateStudentRequest,
  ReadStudentByIDRequest,
  UpdateStudentRequest,
} from "../../ApiRequest/ApiRequest";

function RegisterForm() {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    nationality: "",
    address: "",
    email: "",
    phone: "",
    admissionDate: "",
    courses: "",
  });

  let [UpdateID, SetUpdateID] = useState(null);

  useEffect(() => {
    (async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id");
      SetUpdateID(id);
      if (id !== null) {
        await FillForm(id);
      }
    })();
  }, []);

  const FillForm = async (id) => {
    let res = await ReadStudentByIDRequest(id);

    setFormValue({
      firstName: res.data["firstName"],
      lastName: res.data["lastName"],
      gender: res.data["gender"],
      dateOfBirth: res.data["dateOfBirth"],
      nationality: res.data["nationality"],
      address: res.data["address"],
      email: res.data["email"],
      phone: res.data["phone"],
      admissionDate: res.data["admissionDate"],
      courses: res.data["courses"],
    });
  };

  const navigate = useNavigate();
  const handleChange = (key, value) => {
    setFormValue((prevState) => ({ ...prevState, [key]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValue["firstName"].length === 0) {
      toast.error(`Please enter first name`);
    } else if (formValue["lastName"].length === 0) {
      toast.error(`Please enter last name`);
    } else if (formValue["gender"].length === 0) {
      toast.error(`Please enter gender`);
    } else if (formValue["dateOfBirth"].length === 0) {
      toast.error(`Please enter dateOfBirth`);
    } else if (formValue["nationality"].length === 0) {
      toast.error(`Please enter nationality`);
    } else if (formValue["address"].length === 0) {
      toast.error(`Please enter address`);
    } else if (formValue["email"].length === 0) {
      toast.error(`Please enter email`);
    } else if (formValue["phone"].length === 0) {
      toast.error(`Please enter phone`);
    } else if (formValue["admissionDate"].length === 0) {
      toast.error(`Please enter admissionDate`);
    } else if (formValue["courses"].length === 0) {
      toast.error(`Please enter courses`);
    } else {
      if (UpdateID === null) {
        let res = await CreateStudentRequest(formValue);

        if (res) {
          toast.success(`Data save successfully.`);
          navigate("/");
        } else {
          toast.error(`Something went wrong.`);
        }
      } else {
        let res = await UpdateStudentRequest(formValue, UpdateID);

        if (res) {
          toast.success(`Data save successfully.`);
          navigate("/");
        } else {
          toast.error(`Something went wrong.`);
        }
      }
    }
  };
  return (
    <>
      <div className="registerForm  mt-10  ">
        <form className=" w-screen  px-28 form-inside">
          <div className=" flex flex-wrap  mb-6  ">
            <div className="w-full md:w-1/3 px-3 mt-5">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="firstName"
                type="text"
                value={formValue.firstName}
                placeholder="Enter firstName"
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mt-5">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastName"
                type="text"
                value={formValue.lastName}
                placeholder="Enter lastName"
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mt-5 ">
              <select
                className="mb-2 p-3 bg-slate-100"
                value={formValue.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="w-full md:w-1/3 px-3 mt-5">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="dateOfBirth"
              >
                Date Of Birth
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="dateOfBirth"
                type="date"
                value={formValue.dateOfBirth}
                placeholder="Enter dateOfBirth"
                onChange={(e) => handleChange("dateOfBirth", e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mt-5">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="nationality"
              >
                Nationality
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="nationality"
                type="text"
                value={formValue.nationality}
                placeholder="Your nationality"
                onChange={(e) => handleChange("nationality", e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mt-5">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="address"
                type="text"
                placeholder="Enter address"
                value={formValue.address}
                onChange={(e) => handleChange("address", e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mt-5">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="text"
                placeholder="Enter email"
                value={formValue.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mt-5">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                phone
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                type="text"
                placeholder="Enter phone"
                value={formValue.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mt-5">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="admissionDate"
              >
                Admission Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="admissionDate"
                type="date"
                value={formValue["admissionDate"]}
                placeholder="Enter admissionDate"
                onChange={(e) => handleChange("admissionDate", e.target.value)}
              />
            </div>
          </div>

          <div className="w-full md:w-1/3 px-3 mt-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="courses"
            >
              Courses
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="courses"
              type="text"
              placeholder="Enter courses"
              value={formValue.courses}
              onChange={(e) => handleChange("courses", e.target.value)}
            />
          </div>
          <div className="w-full md:w-[200px]  mt-5 cursor-pointer px-3">
            <input
              className=" block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
              type="submit"
              value="Submit"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default RegisterForm;
