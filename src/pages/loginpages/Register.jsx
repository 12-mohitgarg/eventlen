import React, { useState } from "react";

const RegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    email: "",
    dob: {
      day: "01",
      month: "Jan",
      year: "2004",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      dob: { ...formData.dob, [name]: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  if (!isOpen) return null;
  

  return (
    <div style={{ marginTop: "-1px" }}   className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-50">

      <div className="w-[45rem]  max-w-7xl rounded-2xl shadow-lg">
      <div  className=" px-3 flex items-center justify-center  ">
      
      <form
        onSubmit={handleSubmit}
        className="bg-[#262626] text-white  h-[29rem] sm:h-[32rem] rounded-2xl shadow-lg px-8 pt-8 sm:pt-6 w-full max-w-2xl"
      >
       <div className="text-2xl font-bold mb-4">
          <button className="text-3xl text-white" onClick={onClose}>
            ←
          </button>
          Fill Details</div>
        
        <div className="mb-4">
          <input
            type="text"
            name="fullName"
            placeholder="Enter Your Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full p-3 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        <div className="mb-4">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full p-3 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        <div className="mb-6 flex space-x-2">
          <select
            name="day"
            value={formData.dob.day}
            onChange={handleDateChange}
            className="flex-1 p-3 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          >
            {[...Array(31).keys()].map((d) => (
              <option key={d + 1} value={String(d + 1).padStart(2, "0")}>
                {String(d + 1).padStart(2, "0")}
              </option>
            ))}
          </select>
          <select
            name="month"
            value={formData.dob.month}
            onChange={handleDateChange}
            className="flex-1 p-3 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          >
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <select
            name="year"
            value={formData.dob.year}
            onChange={handleDateChange}
            className="flex-1 p-3 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          >
            {[...Array(100).keys()].map((y) => (
              <option key={2004 - y} value={2004 - y}>
                {2004 - y}
              </option>
            ))}
          </select>
        </div>
        
       <div className="w-[80%] mx-auto">
       <button
          type="submit"
          className="w-full p-2 mt-4 font-semibold text-xl  bg-white text-[#f5167e]  rounded-3xl  transition duration-200"
        >
          Proceed
        </button>
       </div>
      </form>
    </div>
      </div>
   
    </div>
  );
};

export default RegisterModal;




