import React from "react";
import img from "../../assets/Logo.png";
import img1 from "../../assets/navcolor.png";
import img2 from "../../assets/nav.png";


const Navbar = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img1})` }}
      className="flex h-20 z-0 bg-cover  items-center justify-center  border-b-richblack-700 overflow-x-hidden"
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <nav>
          
          <ul className="flex gap-x-6 text-richblack-25">
            <img src={img} width={"65%"} className=" z-10" />
          </ul>
        </nav>

        <div className="flex gap-x-4 items-center">
          <button className="border border-white bg-richblack-800 px-[12px] py-[2px] text-white rounded-full">
            List an Event
          </button>
          <div className="w-16 cursor-pointer">
            
          <img src={img2} className=""/>
          </div>

        </div>
      </div>
      {/* <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbI78v3a7Q5Tcm1DrdpZ7KEH2-ArooT9qzvFe6cLOYxy4wY-hp6dG-NrJKyv9_n5Hcjs&usqp=CAU" className=" rounded-full w-[10%]"/>
        </div> */}
    </div>
  );
};

export default Navbar;
