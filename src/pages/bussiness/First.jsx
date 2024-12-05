import React from "react";
import img from "../../../src/assets/bussiness1.png";
import bg6 from "../../../src/assets/bg6.png";

const First = () => {
  return (
    <div style={{ backgroundImage: `url(${bg6})` }} className="relative h-[30rem] bg-cover ">
      <div className="absolute w-full h-full flex   flex-col lg:flex-row items-center justify-center pl-8 ">
        
        <div className="lg:w-1/2 px-6 flex z-50 flex-col gap-6 text-start lg:text-left">
          <h1 className="text-white text-4xl font-bold">
            Grow Your Events Empire
          </h1>
          <span className="text-white text-lg leading-7">
            More than just a ticket system, our innovative ticketing and
            marketing engine is purpose-built to accelerate your brand's growth
            and take your events business to the next level.
          </span>
          <div className="justify-items-center">
          <button className="text-[#f5167e] w-64  bg-white rounded-3xl px-10 py-3 hover:bg-[#f5167e] hover:text-white transition">
            Business Signup
          </button>
          </div>
        </div>



        

       
        <div className="lg:w-1/2 flex flex-col justify-end mt-8 lg:mt-0">
          <img src={img} alt="Business Growth" className=" lg:w-[55rem] h-[33rem]" />
        </div>


      </div>
    </div>
  );
};

export default First;
