





// import React, { useState, useEffect } from "react";

// const Firstpage = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleInputChange = (event) => {
  //   setSearchTerm(event.target.value);
  //   // onSearch(event.target.value);
  // };

//   const images = [
//     {
//       src: "https://s3-alpha-sig.figma.com/img/4854/aba5/21f0e0551e9ed13d12221bc4e1339ad1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BVpjhlbuhqGdfOa7FDHub3AwYZq5bPQF4-XdBNXfugN6e4oc1QVKnPa8k84m0DRUjbj9jGl24w0sa5k6GeTHRrWnjcW6ODMh7a6hD0jYTMQZqR4knL~sJ4jxchqiACFaGOqqS-n38O5WGu3NQZJPMjBZat7NDBOafCck-NcezoesrSs2NhoFYfqHVrfBT7IMapuKyj9QvRAORKqk9yTZh0Xt59V-7H1CKLd1iJbzX6tsvJOxfPcvGcxiswIK5HeVT8mpxyKDHej8DK4-xVktMLU7KpGMqVNu8gNT6kY71efN6WSKUZRd8FPAN5pvebFL0n-TJD-XH1UR9kJT0rD3qw__",
//       alt: "First slide"
//     },
//     {
//       src: "https://s3-alpha-sig.figma.com/img/91a3/b605/a2fcc20fdb19c5c65ce94fa1a7df6389?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Katbk5r~dUDoP9xE2fb3utElUg~5CzwoUcQumHHMqwhVqv8rnET6C2x16eBS-RspA84jYHIyxH8SD4dt46umQkklJWhKv43FOljs8rX-zgTipVO0Hx0oU2C9GjjZyHEgYUvPpm4QjPUAiD4Ur2PtdK-PfhB2RJI2iULZhNPJlQWsFc-rYo0pN1ynoJj2IOM4yxJS4HVAKiCx1z6VWTn7OsIB7bmDQ0I45FIxpCYLjphzEpchNXIEgpkSMsMoRZMj7tYbLHIAtu92xrD42xaHGDUPRfUsVyJq6TNGt5SAvnWnsL-idsM~b11hkMxPF6NdRZlCSfSoRnMUX4RQZGCY~Q__",
//       alt: "Second slide"
//     },
//     {
//       src: "https://s3-alpha-sig.figma.com/img/4854/aba5/21f0e0551e9ed13d12221bc4e1339ad1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BVpjhlbuhqGdfOa7FDHub3AwYZq5bPQF4-XdBNXfugN6e4oc1QVKnPa8k84m0DRUjbj9jGl24w0sa5k6GeTHRrWnjcW6ODMh7a6hD0jYTMQZqR4knL~sJ4jxchqiACFaGOqqS-n38O5WGu3NQZJPMjBZat7NDBOafCck-NcezoesrSs2NhoFYfqHVrfBT7IMapuKyj9QvRAORKqk9yTZh0Xt59V-7H1CKLd1iJbzX6tsvJOxfPcvGcxiswIK5HeVT8mpxyKDHej8DK4-xVktMLU7KpGMqVNu8gNT6kY71efN6WSKUZRd8FPAN5pvebFL0n-TJD-XH1UR9kJT0rD3qw__",
//       alt: "Third slide"
//     }
//   ];

//   const goToNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   useEffect(() => {
//     const sliderInterval = setInterval(() => {
//       goToNext();
//     }, 1500);

//     return () => clearInterval(sliderInterval);
//   }, []);

//   return (
//     <div id="carouselExampleIndicators" className="carousel slide bg-gradient-to-r from-[rgba(237,70,144,.9)] to-[rgba(85,34,204,.9)] h-[90vh]" data-bs-ride="carousel">
      
    
//       <ol className="right-0 ml-[47rem] mb-32 bottom-0 left-0 z-2 p-0 justify-center absolute text-white rounded-full  transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <li
//             key={index}
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={index}
//             className={`h-3 w-3 rounded-full ${activeIndex === index ? "bg-gray-800" : "bg-white opacity-50"} cursor-pointer`}
//           ></li>
//         ))}
//       </ol>

//       {/* Carousel Items */}
//       <div className="carousel-inner">
//         {images.map((image, index) => (
//           <div key={index} className={`carousel-item ${activeIndex === index ? "active" : ""}`}>
//             <img className="d-block w-100 h-[30rem] bottom-3 border-white" src={image.src} alt={image.alt} />
//           </div>
//         ))}
//       </div>

      

      // {/* Search Bar and Button */}
      // <div className="flex items-center w-[16rem] relative mx-auto mt-20">
      //   <div className="flex items-center border-2 border-[#f5167e] bg-white rounded-xl overflow-hidden px-4 w-full">
      //     <input
      //       type="text"
      //       placeholder="Search by Events"
      //       value={searchTerm}
      //       onChange={handleInputChange}
      //       className="bg-transparent text-gray-700  placeholder-gray-500 focus:outline-none py-2 w-full"
      //     />
      //   </div>
      //   <button className="absolute right-0 px-4 py-[.75rem] bg-[#f5167e] rounded-lg text-white hover:bg-[#f5167e]">
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       fill="none"
      //       viewBox="0 0 24 24"
      //       strokeWidth={2}
      //       stroke="currentColor"
      //       className="w-5 h-5"
      //     >
      //       <path
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         d="M21 21l-4.35-4.35M17.5 10.5a7 7 0 11-14 0 7 7 0 0114 0z"
      //       />
      //     </svg>
      //   </button>
      // </div>
//     </div>
//   );
// };

// export default Firstpage;



// import React, { useState, useEffect } from "react";
// import bg6 from '../../assets/bg6.png'
// import { Link } from 'react-router-dom';

// const Firstpage = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Handles input change in search bar
//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   // Array of images for carousel
  // const images = [
  //   {
  //     src: "https://s3-alpha-sig.figma.com/img/4854/aba5/21f0e0551e9ed13d12221bc4e1339ad1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BVpjhlbuhqGdfOa7FDHub3AwYZq5bPQF4-XdBNXfugN6e4oc1QVKnPa8k84m0DRUjbj9jGl24w0sa5k6GeTHRrWnjcW6ODMh7a6hD0jYTMQZqR4knL~sJ4jxchqiACFaGOqqS-n38O5WGu3NQZJPMjBZat7NDBOafCck-NcezoesrSs2NhoFYfqHVrfBT7IMapuKyj9QvRAORKqk9yTZh0Xt59V-7H1CKLd1iJbzX6tsvJOxfPcvGcxiswIK5HeVT8mpxyKDHej8DK4-xVktMLU7KpGMqVNu8gNT6kY71efN6WSKUZRd8FPAN5pvebFL0n-TJD-XH1UR9kJT0rD3qw__",
  //     alt: "First slide"
  //   },
  //   {
  //     src: "https://s3-alpha-sig.figma.com/img/7598/8bff/6cadefaf19edc68b5d4d6504bf622cc8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UwnJgPmEa~jgKY6XHZWxGFrdAfMmoV8tYXq~OGvqxlmy~dmP9rOWw6uTZfOfvnTlo09X6nv2ksMFI8dUrUD8BqDjSHfVKZvDRTNu1wN9wRiVSgIxjv9o8qyk0vcWfuKiW05fd6Jl3dB-Wysf3QBa9BFBDZIw127w7rrqN5jv5kPs3mdtONH3KA8K2CDj1atQbHVgkfuPloqPgFKRMYNlyKQs7s7pPx7GxdZPPi~GML-K5lcwhaZgIFk4pbUf58KpKVxAScKUbXIdug1Yf3pVVr7S3tcFAwAAQ6BIYjIFwlaJnhu0CjNC-GONRcbt7hldDWAyFyBma28kfzK0nAcPFw__",
  //     alt: "Second slide"
  //   },
  //   {
  //     src: "https://s3-alpha-sig.figma.com/img/4854/aba5/21f0e0551e9ed13d12221bc4e1339ad1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BVpjhlbuhqGdfOa7FDHub3AwYZq5bPQF4-XdBNXfugN6e4oc1QVKnPa8k84m0DRUjbj9jGl24w0sa5k6GeTHRrWnjcW6ODMh7a6hD0jYTMQZqR4knL~sJ4jxchqiACFaGOqqS-n38O5WGu3NQZJPMjBZat7NDBOafCck-NcezoesrSs2NhoFYfqHVrfBT7IMapuKyj9QvRAORKqk9yTZh0Xt59V-7H1CKLd1iJbzX6tsvJOxfPcvGcxiswIK5HeVT8mpxyKDHej8DK4-xVktMLU7KpGMqVNu8gNT6kY71efN6WSKUZRd8FPAN5pvebFL0n-TJD-XH1UR9kJT0rD3qw__",
  //     alt: "Third slide"
  //   }
  // ];

  
//   const goToNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   useEffect(() => {
//     const sliderInterval = setInterval(() => {
//       goToNext();
//     }, 1500);

//     return () => clearInterval(sliderInterval);
//   }, []);

//   return (
//     <div
//       id="carouselExampleIndicators"
//       style={{ backgroundImage: `url(${bg6})` }}
//       className="relative carousel slide border-1 border-white  bg-black bg-cover sm:mt-20 h-[90vh] "
//       data-bs-ride="carousel"
//     >
//       {/* Carousel Indicators */}
//       <ol className="absolute top-[32rem] z-20 left-1/2 transform -translate-x-1/2  flex  space-x-2 p-0 justify-center">
//         {images.map((_, index) => (
//           <li
//             key={index}
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={index}
//             className={`h-3 w-3 rounded-full ${activeIndex === index ? "bg-gray-800" : "bg-white opacity-50"} cursor-pointer`}
//           ></li>
//         ))}
//       </ol>

//       {/* Carousel Items */}
//       <div className="carousel-inner ">
//         {images.map((image, index) => (
//           <div key={index} className={`carousel-item ${activeIndex === index ? "active" : ""}`}>
//             <img className="d-block w-100 h-[30rem]" src={image.src} alt={image.alt} />
//           </div>
//         ))}
//       </div>

//       {/* Search Bar and Button */}
//       <div className="flex items-center w-[16rem] relative mx-auto mt-20">
        
//         <div className="flex items-center border-2 border-[#f5167e] bg-white rounded-xl overflow-hidden px-4 w-full z-20">
//           <input
//             type="text"
//             placeholder="Search by Events"
//             value={searchTerm}
//             onChange={handleInputChange}
//             className="bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none py-2 w-full"
//           />
//         </div>
//         <button
//           className="absolute right-0 z-20 px-4 py-[.75rem] bg-[#f5167e] rounded-lg text-white "
//           onClick={() => console.log("Search Term:", searchTerm)} 
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-5 h-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M21 21l-4.35-4.35M17.5 10.5a7 7 0 11-14 0 7 7 0 0114 0z"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Firstpage;




// import React, { useEffect, useState } from 'react'

// const Firstpage = () => {

  
//   const [current, setCurrent] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [current]);

//   const handleNext = () => {
//     setCurrent((prev) => (prev + 1) % imgDAta.length);
//   };

//   const handlePrev = () => {
//     setCurrent((prev) => (prev - 1 < 0 ? imgDAta.length - 1 : prev - 1));
//   };


  
//   const getTransformStyle = (position) => {
//     switch (position) {
//       case 0: // Leftmost
//         return { scale: 1, zIndex: 1 };
//       case 1: // Second from left
//         return { scale: 1, zIndex: 3 };
//       case 2: // Center (biggest)
//         return { scale: 1, zIndex: 5 };
    
//       default:
//         return { scale: 1, zIndex: 0 };
//     }
//   };

//   const getVisibleImages = () => {
//     const visible = [];
//     for (let i = -2; i <= 0; i++) {
//       visible.push((current + i + imgDAta.length) % imgDAta.length);
//     }
//     return visible;
//   };

  // const imgDAta = [
  //   {
  //     url: "https://s3-alpha-sig.figma.com/img/4854/aba5/21f0e0551e9ed13d12221bc4e1339ad1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BVpjhlbuhqGdfOa7FDHub3AwYZq5bPQF4-XdBNXfugN6e4oc1QVKnPa8k84m0DRUjbj9jGl24w0sa5k6GeTHRrWnjcW6ODMh7a6hD0jYTMQZqR4knL~sJ4jxchqiACFaGOqqS-n38O5WGu3NQZJPMjBZat7NDBOafCck-NcezoesrSs2NhoFYfqHVrfBT7IMapuKyj9QvRAORKqk9yTZh0Xt59V-7H1CKLd1iJbzX6tsvJOxfPcvGcxiswIK5HeVT8mpxyKDHej8DK4-xVktMLU7KpGMqVNu8gNT6kY71efN6WSKUZRd8FPAN5pvebFL0n-TJD-XH1UR9kJT0rD3qw__",
  //     alt: "First slide"
  //   },
  //   {
  //     url: "https://s3-alpha-sig.figma.com/img/7598/8bff/6cadefaf19edc68b5d4d6504bf622cc8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UwnJgPmEa~jgKY6XHZWxGFrdAfMmoV8tYXq~OGvqxlmy~dmP9rOWw6uTZfOfvnTlo09X6nv2ksMFI8dUrUD8BqDjSHfVKZvDRTNu1wN9wRiVSgIxjv9o8qyk0vcWfuKiW05fd6Jl3dB-Wysf3QBa9BFBDZIw127w7rrqN5jv5kPs3mdtONH3KA8K2CDj1atQbHVgkfuPloqPgFKRMYNlyKQs7s7pPx7GxdZPPi~GML-K5lcwhaZgIFk4pbUf58KpKVxAScKUbXIdug1Yf3pVVr7S3tcFAwAAQ6BIYjIFwlaJnhu0CjNC-GONRcbt7hldDWAyFyBma28kfzK0nAcPFw__",
  //     alt: "Second slide"
  //   },
  //   {
  //     url: "https://s3-alpha-sig.figma.com/img/4854/aba5/21f0e0551e9ed13d12221bc4e1339ad1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BVpjhlbuhqGdfOa7FDHub3AwYZq5bPQF4-XdBNXfugN6e4oc1QVKnPa8k84m0DRUjbj9jGl24w0sa5k6GeTHRrWnjcW6ODMh7a6hD0jYTMQZqR4knL~sJ4jxchqiACFaGOqqS-n38O5WGu3NQZJPMjBZat7NDBOafCck-NcezoesrSs2NhoFYfqHVrfBT7IMapuKyj9QvRAORKqk9yTZh0Xt59V-7H1CKLd1iJbzX6tsvJOxfPcvGcxiswIK5HeVT8mpxyKDHej8DK4-xVktMLU7KpGMqVNu8gNT6kY71efN6WSKUZRd8FPAN5pvebFL0n-TJD-XH1UR9kJT0rD3qw__",
  //     alt: "Third slide"
  //   }
  // ];
//   return (
//     <div>
//       <div className="w-full flex justify-center items-center py-8 relative">
//             <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[80%] pt-32 h-[600px] overflow-hidden flex justify-center items-center">
//               {getVisibleImages().map((index, position) => {
//                 const { scale, opacity, zIndex } = getTransformStyle(position);

//                 return (
//                   <div
//                     key={index}
//                     className="absolute h-full transition-transform duration-1000 ease-in-out"
//                     style={{
//                       transform: `translateX(${
//                         (position - 2) * 120
//                       }%) scale(${scale})`,
//                       zIndex,
//                       opacity,
//                     }}
//                   >
//                     <img
//                       src={imgDAta[index].url}
//                       alt={`Slide ${index + 1}`}
//                       className="w-60 h-fit object-cover"
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//     </div>
//   )
// }

// export default Firstpage




import React, { useEffect, useState } from 'react';
import bg6 from '../../assets/bg6.png'
const Firstpage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    // onSearch(event.target.value);
  };

  const [current, setCurrent] = useState(0);

  const imgDAta = [
    {
      url: "https://s3-alpha-sig.figma.com/img/4854/aba5/21f0e0551e9ed13d12221bc4e1339ad1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BVpjhlbuhqGdfOa7FDHub3AwYZq5bPQF4-XdBNXfugN6e4oc1QVKnPa8k84m0DRUjbj9jGl24w0sa5k6GeTHRrWnjcW6ODMh7a6hD0jYTMQZqR4knL~sJ4jxchqiACFaGOqqS-n38O5WGu3NQZJPMjBZat7NDBOafCck-NcezoesrSs2NhoFYfqHVrfBT7IMapuKyj9QvRAORKqk9yTZh0Xt59V-7H1CKLd1iJbzX6tsvJOxfPcvGcxiswIK5HeVT8mpxyKDHej8DK4-xVktMLU7KpGMqVNu8gNT6kY71efN6WSKUZRd8FPAN5pvebFL0n-TJD-XH1UR9kJT0rD3qw__",
      alt: "First slide"
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/7598/8bff/6cadefaf19edc68b5d4d6504bf622cc8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UwnJgPmEa~jgKY6XHZWxGFrdAfMmoV8tYXq~OGvqxlmy~dmP9rOWw6uTZfOfvnTlo09X6nv2ksMFI8dUrUD8BqDjSHfVKZvDRTNu1wN9wRiVSgIxjv9o8qyk0vcWfuKiW05fd6Jl3dB-Wysf3QBa9BFBDZIw127w7rrqN5jv5kPs3mdtONH3KA8K2CDj1atQbHVgkfuPloqPgFKRMYNlyKQs7s7pPx7GxdZPPi~GML-K5lcwhaZgIFk4pbUf58KpKVxAScKUbXIdug1Yf3pVVr7S3tcFAwAAQ6BIYjIFwlaJnhu0CjNC-GONRcbt7hldDWAyFyBma28kfzK0nAcPFw__",
      alt: "Second slide"
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/4854/aba5/21f0e0551e9ed13d12221bc4e1339ad1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BVpjhlbuhqGdfOa7FDHub3AwYZq5bPQF4-XdBNXfugN6e4oc1QVKnPa8k84m0DRUjbj9jGl24w0sa5k6GeTHRrWnjcW6ODMh7a6hD0jYTMQZqR4knL~sJ4jxchqiACFaGOqqS-n38O5WGu3NQZJPMjBZat7NDBOafCck-NcezoesrSs2NhoFYfqHVrfBT7IMapuKyj9QvRAORKqk9yTZh0Xt59V-7H1CKLd1iJbzX6tsvJOxfPcvGcxiswIK5HeVT8mpxyKDHej8DK4-xVktMLU7KpGMqVNu8gNT6kY71efN6WSKUZRd8FPAN5pvebFL0n-TJD-XH1UR9kJT0rD3qw__",
      alt: "Third slide"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % imgDAta.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + imgDAta.length) % imgDAta.length);
  };

  const getVisibleImages = () => {
    const prevIndex = (current - 1 + imgDAta.length) % imgDAta.length;
    const nextIndex = (current + 1) % imgDAta.length;
    return [prevIndex, current, nextIndex];
  };

  return (
    <div style={{ backgroundImage: `url(${bg6})` }} className="relative p-2 lg:p-0 w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh]  mt-[2.5rem] sm:mt-[4.5rem] bg-cover overflow-hidden">

      <div className="w-full h-[80%] flex relative overflow-hidden">
        {getVisibleImages().map((index, position) => {
          const isCenter = index === current;
          const isHalf = position === 0 || position === 2;

          return (
            <div
              key={index}
              className={`absolute h-full  transition-transform duration-700 ease-in-out`}
              style={{
                transform: `translateX(${
                  (position - 1) * (100 + 10)
                }%) scale(${isCenter ? 1 : 1})`,
                zIndex: isCenter ? 10 : 5,
                opacity: isHalf ? 0.5 : 1,
              }}
            >
              <img
                src={imgDAta[index].url}
                alt={imgDAta[index].alt}
                className={`w-[70vw] h-full   object-cover border-1 border-white ${
                  isCenter ? "" : "opacity-70"
                }`}
              />
            </div>
          );
        })}
      </div>

      
      {/* Search Bar and Button */}
      <div className="flex items-center z-40 w-[16rem] relative mx-auto mt-3 sm:mt-10">
        <div className="flex items-center border-2 border-[#f5167e] bg-white rounded-xl overflow-hidden px-4 w-full">
          <input
            type="text"
            placeholder="Search by Events"
            value={searchTerm}
            onChange={handleInputChange}
            className="bg-transparent text-gray-700  placeholder-gray-500 focus:outline-none py-2 w-full"
          />
        </div>
        <button className="absolute right-0 px-4 py-[.75rem] bg-[#f5167e] rounded-lg text-white hover:bg-[#f5167e]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17.5 10.5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Firstpage;
