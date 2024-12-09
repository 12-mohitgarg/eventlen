// import React from "react";
// import img from "../../assets/Logo.png";
// import img1 from "../../assets/navcolor.png";
// import img2 from "../../assets/nav.png";
// import { Link } from "react-router-dom";


// const Navbar = () => {
//   return (
//     <div
//       style={{ backgroundImage: `url(${img1})` }}
//       className="flex h-10 sm:h-20 z-50 bg-cover   items-center fixed top-0 w-[100vw]  justify-center   overflow-x-hidden"
//     >
//       <div className="flex w-10/12 max-w-maxContent items-center justify-between">
//         <nav>
          
//           <ul className="flex gap-x-6 text-richblack-25">
//             <img src={img} width={"65%"} className=" z-10" />
//           </ul>
//         </nav>

//         <div className="flex gap-x-4 items-center">
//         <Link to='/business'  className="block no-underline">
//           <button className="border border-white bg-richblack-800 px-[12px] py-1 text-[6px] sm:text-xl sm:py-[2px] text-white rounded-full">
//             List an Event
//           </button>
//           </Link>
//           <div className="w-16 cursor-pointer">
            
//           <img src={img2} className=""/>
//           </div>

//         </div>
//       </div>
//       {/* <div>
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbI78v3a7Q5Tcm1DrdpZ7KEH2-ArooT9qzvFe6cLOYxy4wY-hp6dG-NrJKyv9_n5Hcjs&usqp=CAU" className=" rounded-full w-[10%]"/>
//         </div> */}
//     </div>
//   );
// };

// export default Navbar;



// import React, { useEffect, useState } from "react";
// import img from "../../assets/Logo.png";
// import img1 from "../../assets/navcolor.png";
// import img2 from "../../assets/nav.png";
// import { Link } from "react-router-dom";


// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
      
//       if (window.scrollY > 200) {
//         setShowNavbar(true);
//       } else {
//         setShowNavbar(false);
//       }
//     };


//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

  
//   return (
//     <div
//       style={{ backgroundImage: `url(${showNavbar ? img1 : ''})` }}
//       className="flex h-16 md:h-24 sm:h-20 z-50 bg-cover     items-center fixed top-0 w-[100vw]  justify-center   overflow-x-hidden"
//     >
//       <div className="flex w-10/12 max-w-maxContent   items-center  sm:justify-between">
        // <nav className="flex justify-center items-center">
          
        //   <div className="flex   sm:gap-x-6 text-richblack-25">
        //     <img src={img} width={"75%"} className="z-10" />
        //   </div>
        // </nav>

//         <div className="flex gap-x-2 sm:gap-x-10 items-center">
//         <Link to='/business'  className="block no-underline">
//           <button className="border border-white bg-richblack-800 px-[1rem] sm:px-[1.7rem] py-1 text-[6px]  sm:text-md md:text-xl sm:py-[2px] text-white rounded-full">
//             List an Event
//           </button>
//           </Link>
//           <div className="w-16 cursor-pointer">
            
//           <img src={img2} className=""/>
//           </div>

//         </div>
//       </div>
//       {/* <div>
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbI78v3a7Q5Tcm1DrdpZ7KEH2-ArooT9qzvFe6cLOYxy4wY-hp6dG-NrJKyv9_n5Hcjs&usqp=CAU" className=" rounded-full w-[10%]"/>
//         </div> */}
//     </div>
//   );
// };

// export default Navbar;






import React, { useEffect, useState } from "react";
import img from "../../assets/Logo.png";
import img1 from "../../assets/navcolor.png";
import img2 from "../../assets/nav.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${showNavbar ? img1 : ""})` }}
      className="flex h-16 md:h-24 sm:h-20 z-50 bg-cover items-center fixed top-0 w-full justify-center overflow-x-hidden transition-all duration-300"
    >
      <div className="flex w-10/12 max-w-7xl items-center sm:justify-between">
        {/* Logo Section */}
        <nav className="flex justify-center items-center">
          
          <div className="flex   sm:gap-x-6 text-richblack-25">
            <img src={img} width={"75%"} className="z-10" />
          </div>
        </nav>

        {/* Right Section */}
        <div className="flex gap-x-2 sm:gap-x-10 items-center">
          <Link to="/business" className="block no-underline">
            <button className="border border-white bg-richblack-800 px-4 sm:px-6 md:px-8  sm:py-2 md:py-3 text-[6px] sm:text-sm md:text-base text-white rounded-full">
              List an Event
            </button>
          </Link>
          <div className="w-12 sm:w-16 cursor-pointer">
            <img src={img2} alt="Menu Icon" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
