import React from "react";
import img from "../../../src/assets/bussiness1.png";
import bg6 from "../../../src/assets/bg6.png";
import './second.css'
import { Link } from "react-router-dom";

const First = () => {
  return (
    <div style={{ backgroundImage: `url(${bg6})` }} className="relative h-[85vh] sm:h-[95vh] bg-cover ">
      <div className="absolute w-full h-full flex  flex-col  lg:flex-row items-center justify-center px:2 sm:pl-8 ">
        
        <div className="lg:w-1/2 px-1 sm:px-6 flex  mt-5 sm:mt-0 z-40 flex-col  gap-3 md:gap-6 hello lg:text-left">
          <h1 className="text-white text-xl sm:text-3xl md:text-5xl font-bold">
            Grow Your Events Empire
          </h1>
          <span className="text-white text-[15px] sm:text-md md:text-lg  sm:leading-5 md:leading-7">
            More than just a ticket system, our innovative ticketing and
            marketing engine is purpose-built to accelerate your brand's growth
            and take your events business to the next level.
          </span>
          <div className=" w-full">
         
          <button className="text-[#f5167e] w-40 sm:w-64  bg-white rounded-3xl px-3 py-2 sm:px-10 sm:py-3   transition">
            Business Signup
          </button>
          
          </div>
        </div>



        

       
        <div className="lg:w-1/2 flex flex-col justify-end mt-8 lg:mt-0">
          <img src={img} alt="Business Growth" className="w-[30rem] h-[18rem] lg:w-full lg:h-[80vh]" />
        </div>


      </div>
    </div>
  );
};

export default First;
