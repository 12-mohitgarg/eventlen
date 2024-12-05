// import React, { useState } from 'react'

// import image1 from '../../assets/firstpagesecond.png'

// const Searchbar = () => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleInputChange = (event) => {
//       setSearchTerm(event.target.value);
//       // onSearch(event.target.value);
//     };
  
//   return (
//     <div className='bg-cover relative' style={{ backgroundImage: `url(${image1})` }}>
//          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center mt-8">
//         {/* Explore Button */}
//         <button className="text-white absolute bottom-32 bg-[#F5167E] py-3 px-10 rounded-full hover:bg-[#f5167e] focus:ring-4 focus:ring-pink-300 transition-all duration-300">
//           Explore All Events
//         </button>

//         <div className="absolute flex items-center border-2 border-[#f5167e] bg-white rounded-xl w-full max-w-md md:max-w-sm px-4">
//           <input
//             type="text"
//             placeholder="Search by Events"
//             value={searchTerm}
//             onChange={handleInputChange}
//             className="w-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none py-2"
//             aria-label="Search Events"
//           />
//           {/* Search Button */}
//           <button className="absolute right-2 px-5 py-3 bg-[#f5167e] rounded-lg text-white hover:bg-[#f5167e] focus:ring-4 focus:ring-pink-300 transition-all duration-300">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-5 h-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M21 21l-4.35-4.35M17.5 10.5a7 7 0 11-14 0 7 7 0 0114 0z"
//               />
//             </svg>
//           </button>
//         </div>
       
      
//       </div>
//     </div>
//   )
// }

// export default Searchbar







// import React, { useState } from 'react';
// import image1 from '../../assets/firstpagesecond.png';

// const Searchbar = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//     // onSearch(event.target.value);
//   };

//   return (
//     <div
//       className="relative bg-cover bg-center h-[100px] md:h-[180px] shadow-2xl shadow-black"
//       style={{ backgroundImage: `url(${image1})` }}
//     >
//       {/* Overlay for better text visibility */}
//       <div className="absolute inset-0 bg-black bg-opacity-30"></div>

//       {/* Search Bar and Button Container */}
//       <div className="relative flex flex-col items-center space-y-6 ">
//         {/* Explore Button */}
//         <button className="text-white bg-[#F5167E] py-3 px-10 rounded-full hover:bg-[#f5167e] focus:ring-4 focus:ring-pink-300 transition-all duration-300">
//           Explore All Events
//         </button>

//         {/* Search Bar */}
//         <div className="flex items-center w-11/12 max-w-lg border-2 border-[#f5167e] bg-white rounded-xl px-4 py-2 shadow-lg">
//           <input
//             type="text"
//             placeholder="Search by Events"
//             value={searchTerm}
//             onChange={handleInputChange}
//             className="w-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none py-2"
//             aria-label="Search Events"
//           />
//           {/* Search Button */}
//           <button className="px-5 py-3 bg-[#f5167e] rounded-lg text-white hover:bg-[#f5167e] focus:ring-4 focus:ring-pink-300 transition-all duration-300">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-5 h-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M21 21l-4.35-4.35M17.5 10.5a7 7 0 11-14 0 7 7 0 0114 0z"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Searchbar;
