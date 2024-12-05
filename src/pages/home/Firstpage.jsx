
// import React, { useState } from 'react';
// import img from '../../assets/firstpagefirst.png';
// import image1 from '../../assets/firstpagesecond.png';

// const Firstpage = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//     // onSearch(event.target.value);
//   };

//   return (
//     <div className="relative ">
      
//       <div>
//         <img src={img} alt="Event Background" className="w-full h-auto relative" />
//       </div>
//       <div>
//       <button className="absolute z-10 bottom-20 left-[45%] text-white bg-[#F5167E] py-3 px-10 rounded-full hover:bg-[#f5167e] focus:ring-4 focus:ring-pink-300 transition-all duration-300">
//           Explore All Events
//         </button>
//       </div>

      
     
//     </div>
//   );
// };

// export default Firstpage;







import React, { useState } from 'react';
import img from '../../assets/firstpagefirst.png';

const Firstpage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <div>
        <img src={img} alt="Event Background" className="w-full h-auto" />
      </div>

      {/* Explore Button */}
      <div>
        <button 
          className="absolute z-50 bottom-20 left-1/2 transform -translate-x-1/2 text-white 
                     bg-[#F5167E] py-3 px-10 rounded-full hover:bg-[#f5167e] 
                     focus:ring-4 focus:ring-pink-300 transition-all duration-300 
                     sm:py-2 sm:px-8 sm:text-sm md:py-3 md:px-10 md:text-base lg:py-4 lg:px-12"
        >
          Explore All Events
        </button>
      </div>
    </div>
  );
};

export default Firstpage;
