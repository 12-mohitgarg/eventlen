// import React, { useState } from 'react';
// import img from '../../assets/firstpagefirst.png';
// import { Link } from 'react-router-dom';
// import bg6 from '../../assets/bg6.png'
// const Firstpage = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div className="relative">
      
//       <div className='relative'>
//         <img src='https://s3-alpha-sig.figma.com/img/4667/ea75/1f158dfa7d155ba4d74e495b1b21db5d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S1ZjqKHfo2qbDegZMVDfjIi3HEV6SV8jCnDlVbbMW358Woa7YAAHXDIz~dtzopmqgz~zOJqbuWasCP4y77ReA7AYvQn2zipBesK6f-qFakw-zU1qzYJVOZJkxl3WSXUP4WIbkk8zRgrzGitKUYdlqqqFSUkpdH5g-PRPJDWTj0oOYUlOHIsPHnFL95Iz87GPprqTrMhvUPpqsE-MO8OWAOGd0bRB1lEsBhQPo7Wqnp1OKIOiQmbOVljVCDlzT5FJd9kR0yw8XGmPr94nynPPzSk7A8YnOzNQh1reLc0PR4rJk3UMmyE~PlJRmnAQwSfW0aU6qkmDrhDatj-kxer33w__' alt="Event Background" className="w-full h-[85vh]" />
//       </div>

//       <div style={{ backgroundImage: `url(${bg6})` }}  className=" w-full h-full absolute top-0 bg-cover flex-col justify-center items-center">

//     <h1>Don’t miss out Explore the vibrant events happening locally and globally.</h1>
//     <span>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. </span>
//     <button>Explore All Events</button>
//       </div>

      
      
//     </div>
//   );
// };

// export default Firstpage;



import React, { useState } from "react";
import bg6 from "../../assets/bg6.png";

const Firstpage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative z-20">
      {/* Background Image Section */}
      <div className="relative">
        <img
          src="https://s3-alpha-sig.figma.com/img/4667/ea75/1f158dfa7d155ba4d74e495b1b21db5d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S1ZjqKHfo2qbDegZMVDfjIi3HEV6SV8jCnDlVbbMW358Woa7YAAHXDIz~dtzopmqgz~zOJqbuWasCP4y77ReA7AYvQn2zipBesK6f-qFakw-zU1qzYJVOZJkxl3WSXUP4WIbkk8zRgrzGitKUYdlqqqFSUkpdH5g-PRPJDWTj0oOYUlOHIsPHnFL95Iz87GPprqTrMhvUPpqsE-MO8OWAOGd0bRB1lEsBhQPo7Wqnp1OKIOiQmbOVljVCDlzT5FJd9kR0yw8XGmPr94nynPPzSk7A8YnOzNQh1reLc0PR4rJk3UMmyE~PlJRmnAQwSfW0aU6qkmDrhDatj-kxer33w__"
          alt="Event Background"
          className="w-full h-[90vh] object-cover"
        />
      </div>

      {/* Overlay Section */}
      <div
        style={{ backgroundImage: `url(${bg6})` }}
        className="absolute inset-0 bg-cover bg-opacity-70 flex gap-3 flex-col justify-center items-center text-center px-4 sm:px-10 text-white"
      >
        <h1 className="text-2xl sm:text-5xl font-bold mb-4 max-w-7xl">
          Don’t miss out! Explore the <span className="text-[#ffe047]">vibrant events</span> happening locally and
          globally.
        </h1>
        <p className="text-[10px] sm:text-base md:text-lg mb-6 max-w-5xl">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content. Lorem ipsum may be used as a placeholder before the final
          copy is available.
        </p>
        <button className="px-10 sm:px-15 md:px-20 py-3 bg-[#f5167e] rounded-[2rem] text-sm sm:text-base md:text-xl font-medium transition">
          Explore  All  Events
        </button>
       

      </div>
      
    </div>
  );
};

export default Firstpage;
