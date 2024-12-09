import React, { useEffect, useState } from 'react'

import img from "../../assets/Logo.png";
import logo from "../../assets/Logo.png";
import img1 from "../../assets/navcolor.png";
import img2 from "../../assets/nav.png";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import bg5 from "../../assets/bg5.png";
import footer from "../../assets/footer.png";
import { Link } from 'react-router-dom';


// const Thirdpage = () => {

  

    // const [formData, setFormData] = useState({
    //     fullName: "",
    //     gender: "",
    //     day: "01",
    //     month: "Jan",
    //     year: "2004",
    //   });
    //   const [selectedTickets, setSelectedTickets] = useState(0);
    
    //   const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    //   };
//   return (
//     <div>
//     <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white flex items-center justify-center">
//   <div className="w-full max-w-4xl  rounded-lg  p-6">
   
    

// <div className="  text-white flex  justify-center">
//   <div className="w-full max-w-4xl rounded-lg  p-6">
    
//   <div className="flex items-center space-x-6">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/f535/a3d1/079c0f6e85eb70004347b5d4d0656177?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K1ScHPC7efyR4ohFDbzwd0qqYNlBvinTqXjHQ5YGcXguLRPNO-PuZSU6KvIdo7aaFLpUMZJAHtRD0QGdnz3H1ppZ~JKt1CBiS2rGIjT4Rryrcdf1Esh1j417SJL61vk-Jfx5-AB0ruINP-FthYJHzgh7jxOzvH~bZvwBonHt7RQz7KK66DrA-AJlOTcqrPYgujQ6LaykoColrN7eMOWIH07P9Q~-Ro~NfRE4ksiWO8bbFp7mfqUTjB5ZdKa5oxcCNJR~WFVEZYX6nLvEf-1Kg7nOFjJxX57G7Vki~Wq3RrIW-wRbOFV7hkCQJCwNOFDBPxBwS8pne0yf8GI24WpTsA__" 
//             alt="Webinar"
//             className="w-[15rem] h-[14rem] rounded-lg border border-gray-700"
//           />
//           <div>
//             <p className="text-[#cccccc] text-2xl mb-1">Educational & Business</p>
//             <h3 className="text-3xl font-semibold">
//               The Road to Jobs and Internships: Starting with LinkedIn
//             </h3>
//             <div className="flex flex-col items-start mt-3  space-y-4">
//               <div className="flex items-center space-x-2 text-xl text-[#f5167e]">
//                 <i className="far fa-calendar-alt"></i>
//                 <p>Sat Oct 05, 09:00 PM</p>
//               </div>
//               <div className="flex items-center space-x-2  text-xl text-white">
//                 <i className="fas fa-map-marker-alt"></i>
//                 <p>Inner Circle Garba, Ahmedabad</p>
//               </div>
//             </div>
//           </div>
//         </div>

    
//     <div className="mt-6 flex items-center justify-center ">
//       <div className="flex items-center mt-12  space-x-9">
        
//         <div className="flex flex-col items-center ">
//           <div className="w-10 h-10 flex items-center justify-center bg-white  rounded-r-lg rounded-t-lg text-white font-semibold">
//             <i className="fas fa-check text-[#f5167e] "></i>
//           </div>
//           <p className="text-sm text-white mt-2 ">Tickets</p>
//         </div>
//         <div className="h-1  w-16 bg-[#f5167e]"></div>
       
//         <div className="flex flex-col items-center">
//           <div className="w-10 h-10 flex items-center justify-center bg-white rounded-r-lg rounded-t-lg text-white font-semibold">
//             <i className="fas fa-check text-[#f5167e]"></i>
//           </div>
//           <p className="text-sm text-white mt-2">Summary</p>
//         </div>
//         <div className="h-1 w-16 bg-[#f5167e]"></div>
        
//         <div className="flex flex-col items-center">
//           <div className="w-10 h-10 flex items-center justify-center bg-white rounded-r-lg rounded-t-lg text-white font-semibold">
//             <i className="fas fa-check text-[#f5167e]"></i>
//           </div>
//           <p className="text-sm text-white mt-2">Payment</p>
//         </div>
//       </div>
//     </div>




//   </div>
// </div>





// <div className="bg-[#262626] text-white p-6 rounded-lg flex justify-between mx-auto max-w-7xl">
 
//   <div className="text-right flex flex-col items-start">
//     <p className="text-lg">Total</p>
//     <p className="text-2xl font-semibold">
//       Rs. {selectedTickets * 1000 || 1500}
//     </p>
//   </div>

 
//   <div>
//     <button
//       className='bg-[#f5167e] hover:bg-[#f5167e] transition-colors mt-6 py-3 px-6 rounded-3xl font-medium' 
      
//     >
//       Pay Now
//     </button>
//   </div>
// </div>




{/* <div className="bg-[#262626] text-white p-6 rounded-lg max-w-[35rem] mx-auto">
     
      <div className="flex justify-between items-center mb-6">
        <p className="text-lg font-medium">Already have an account?</p>
        <button className="text-white bg-[#f5167e] rounded-3xl py-2  px-4 font-medium">Login</button>
      </div>

      
      <form className="space-y-4">
        
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter Your Full Name"
            className="w-full bg-black text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        
        <div>
          <label htmlFor="gender" className="block text-sm font-medium mb-2">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full bg-black text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="" disabled>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Date of Birth</label>
          <div className="flex justify-around">
            <select
              name="day"
              value={formData.day}
              onChange={handleInputChange}
              className="bg-black text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                  {String(i + 1).padStart(2, "0")}
                </option>
              ))}
            </select>

            <select
              name="month"
              value={formData.month}
              onChange={handleInputChange}
              className="bg-black text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <select
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              className="bg-black text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              {Array.from({ length: 100 }, (_, i) => (
                <option key={2004 - i} value={2004 - i}>
                  {2004 - i}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>

      
      <button
        className="bg-white text-[#f5167e] transition-colors mt-6 w-full p-3 rounded-3xl font-large"
        disabled={!formData.fullName || !formData.gender}
      >
        Proceed
      </button>
    // </div>





//   </div>
// </div>
// </div>
//   )
// }

// export default Thirdpage   */}







const Thirdpage = () => {

  
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



    const [earlyBirdTickets, setEarlyBirdTickets] = useState(0);
    const [selectedTickets, setSelectedTickets] = useState(0);
    const [formData, setFormData] = useState({
      fullName: "",
      gender: "",
      day: "01",
      month: "Jan",
      year: "2004",
    });
    const ticketPrice = 1000;
    const generalPrice = 1500;
  
    const total = earlyBirdTickets * ticketPrice || generalPrice;
  
    const handleTicketChange = (e) => {
      setEarlyBirdTickets(parseInt(e.target.value, 10));
    };

    
   
    
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  return (
    <div>
      <div
      style={{ backgroundImage: `url(${showNavbar ? img1 : ''})` }}
      className="flex h-10 sm:h-20 z-50 bg-cover   items-center fixed top-0 w-[100vw]  justify-center   overflow-x-hidden"
    >
      <div className="flex w-10/12  max-w-maxContent items-center justify-between">
        <nav>
          
          <ul className="flex gap-x-6 text-richblack-25">
            <img src={img} width={"65%"} className=" z-10" />
          </ul>
        </nav>

        <div className="flex gap-x-4 items-center">
        <Link to='/business'  className="block no-underline">
          <button className="border border-white bg-richblack-800 px-[12px] py-1 text-[6px] sm:text-xl sm:py-[2px] text-white rounded-full">
            List an Event
          </button>
          </Link>
          <div className="w-16 cursor-pointer">
            
          <img src={img2} className=""/>
          </div>

        </div>
      </div>
      {/* <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbI78v3a7Q5Tcm1DrdpZ7KEH2-ArooT9qzvFe6cLOYxy4wY-hp6dG-NrJKyv9_n5Hcjs&usqp=CAU" className=" rounded-full w-[10%]"/>
        </div> */}
    </div>







        <div style={{ backgroundImage: `url(${bg1}), url(${bg2})` }} className=" bg-black bg-cover  text-white flex items-center justify-center">
      <div className="w-full flex flex-col max-w-4xl mt-[5rem]  rounded-lg  p-6">
 
 <div className="  text-white flex  justify-center">
      <div className="w-full max-w-6xl h-[22rem] rounded-lg sm:p-6">
        
      <div className="flex items-center  space-x-6">
          <img
            src="https://s3-alpha-sig.figma.com/img/f535/a3d1/079c0f6e85eb70004347b5d4d0656177?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K1ScHPC7efyR4ohFDbzwd0qqYNlBvinTqXjHQ5YGcXguLRPNO-PuZSU6KvIdo7aaFLpUMZJAHtRD0QGdnz3H1ppZ~JKt1CBiS2rGIjT4Rryrcdf1Esh1j417SJL61vk-Jfx5-AB0ruINP-FthYJHzgh7jxOzvH~bZvwBonHt7RQz7KK66DrA-AJlOTcqrPYgujQ6LaykoColrN7eMOWIH07P9Q~-Ro~NfRE4ksiWO8bbFp7mfqUTjB5ZdKa5oxcCNJR~WFVEZYX6nLvEf-1Kg7nOFjJxX57G7Vki~Wq3RrIW-wRbOFV7hkCQJCwNOFDBPxBwS8pne0yf8GI24WpTsA__" 
            alt="Webinar"
            className="w-[15rem] h-[15rem] rounded-lg border border-gray-700"
          />
          <div>
            <p className="text-[#cccccc] text-sm sm:text-2xl mb-1">Educational & Business</p>
            <h3 className=" text-sm sm:text-3xl font-semibold">
              The Road to Jobs and Internships: Starting with LinkedIn
            </h3>
            <div className="flex flex-col items-start mt-3  space-y-4">
            <div className="flex gap-2 items-center space-x-2 text-sm sm:text-xl text-[#f5167e]">
                <i className="far fa-calendar-alt"></i>
                Sat Oct 05, 09:00 PM
              </div>
              <div className="flex gap-2 items-center space-x-2  text-sm sm:text-xl text-white">
                <i className="fas fa-map-marker-alt"></i>
                Inner Circle Garba, Ahmedabad
              </div>
            </div>
          </div>
        </div>

        
        



      </div>
    </div> 






<div className=" flex items-center justify-center ">
          <div className="flex items-center mt-12 sm:space-x-9 space-x-6">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-r-lg rounded-t-lg text-white font-semibold">
                <i className="fas fa-check text-[#f5167e] "></i>
              </div>
              <p className="text-sm text-white mt-2">Tickets</p>
            </div>
            <div className="h-1 sm:w-16 w-8 bg-[#f5167e]"></div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-r-lg rounded-t-lg text-white font-semibold">
                <i className="fas fa-check text-[#f5167e]"></i>
              </div>
              <p className="text-sm text-white mt-2">Summary</p>
            </div>
            <div className="h-1 sm:w-16 w-8 bg-[#f5167e]"></div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-r-lg rounded-t-lg text-white font-semibold">
                <i className="fas fa-check text-[#f5167e]"></i>
              </div>
              <p className="text-sm text-white mt-2">Payment</p>
            </div>
          </div>
        </div>


    




<div className="bg-[#262626] text-white p-6 mt-20 rounded-3xl">

<div className="bg-[#262626] text-white p-6 rounded-lg  ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-lg font-medium">Already have an account?</p>
        <Link to='/login'  className="block no-underline">
        <button className="text-white bg-[#f5167e] rounded-3xl py-2  px-4 font-medium">Login</button>
        </Link>
      </div>

      {/* Form */}
      <form className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter Your Full Name"
            className="w-full bg-black text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="gender" className="block text-sm font-medium mb-2">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full bg-black text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="" disabled>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium mb-2">Date of Birth</label>
          <div className="flex justify-around">
            <select
              name="day"
              value={formData.day}
              onChange={handleInputChange}
              className="bg-black w-[30%] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                  {String(i + 1).padStart(2, "0")}
                </option>
              ))}
            </select>

            <select
              name="month"
              value={formData.month}
              onChange={handleInputChange}
              className="bg-black w-[30%] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <select
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              className="bg-black w-[30%] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              {Array.from({ length: 100 }, (_, i) => (
                <option key={2004 - i} value={2004 - i}>
                  {2004 - i}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>

      {/* Proceed Button */}
      
      <button
        className="bg-white text-[#f5167e] transition-colors mt-6 w-full p-3 rounded-3xl font-large"
        disabled={!formData.fullName || !formData.gender}
      >
        Proceed
      </button>
      
    </div>

      
    </div>
      </div>
    </div>
  





{/* footer */}

<div className="relative">
<img src={bg5} className='absolute -top-20 h-64 w-[100vw] z-0'/>
      <div className=''>
      <div className="relative h-[40rem] z-0">
        
        <img
          src={footer}
          className="w-full h-[40rem] object-cover"
          alt="Background"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 z-40 text-white flex flex-col justify-center items-center h-[40rem] w-full">
        <h1 className="text-[2.5rem] md:text-[4rem] text-center">
          Are you an Event <span className="text-[#FFE047]">Organiser?</span>
        </h1>
        <h2 className="text-[1.5rem] md:text-[2rem] text-center">
          Get Your Event Live in Less Than 3 Minutes
        </h2>
        <button className="text-[#f5167e] bg-white rounded-3xl mt-12 py-2 px-16 md:py-3 md:px-24">
          List Event
        </button>
      </div>
      </div>
      <footer className="bg-[#262626] text-white py-8 md:py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          {/* Footer Content */}
          <div className="flex flex-wrap md:flex-nowrap">
            {/* Left Section */}
            <div className="w-full md:w-1/2 flex justify-around">
              {/* About Section */}
              <div className="w-2/3 mb-8 md:mb-0">
                <div className="text-2xl font-bold mb-4">
                  <img src={logo} alt="Eventlane Logo" className="w-[80%]" />
                </div>
                <p className="text-sm">
                  Eventlane is a global self-service ticketing platform for live experiences that allows anyone to create, share, find, and attend events that fuel their passions and enrich their lives.
                </p>
                <div className="flex mt-4 text-xl md:text-3xl space-x-4">
                  <a href="#" className="text-white ">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-white ">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-white ">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>

              {/* Plan Events Section */}
              <div className="w-1/3">
                <h3 className="text-lg font-semibold mb-4">Plan Events</h3>
                <ul className="space-y-2 text-sm">
                  <li>Create and Set Up</li>
                  <li>Sell Tickets</li>
                  <li>Online RSVP</li>
                  <li>Online Events</li>
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 flex flex-wrap md:flex-nowrap justify-between mt-8 md:mt-0">
              {/* Eventtick Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Eventtick</h3>
                <ul className="space-y-2 text-sm">
                  <li>About Us</li>
                  <li>Press</li>
                  <li>Contact</li>
                  <li>Online Events</li>
                </ul>
              </div>

              {/* Newsletter Section */}
              <div className="mt-6 md:mt-0">
                <h3 className="text-lg font-semibold mb-4">Stay In The Loop</h3>
                <p className="text-sm mb-4">
                  Join our mailing list to stay in the loop with our newest events and concerts.
                </p>
                <div className="flex items-center relative w-full">
                  <div className="flex items-center border-2 border-[#f5167e] bg-white rounded-3xl w-full px-4 overflow-hidden">
                    <input
                      type="text"
                      placeholder="Enter Your Email Address"
                      className="w-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none py-2 md:py-3"
                    />
                  </div>
                  <button className="absolute right-2 px-4 md:px-5 py-2 bg-[#f5167e] rounded-3xl text-white ">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-10 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
            Copyright © 2024 Softtura. All rights reserved.
          </div>
        </div>
      </footer>
    </div>


    <div className="bg-[#262626] text-white p-2  flex justify-between mx-auto max-w-screen-2xl fixed bottom-0 z-40 w-full">
  <div className='flex justify-around w-full'>
  <div className="text-right flex flex-col items-start">
    <p className="text-lg">Total</p>
    <p className="text-2xl font-semibold">
      Rs. {selectedTickets * 1000 || 1500}
    </p>
  </div>

  <div>
  <Link to='/page-fourth'  className="block no-underline">
    <button
      className={`bg-[#f5167e] text-white transition-colors mt-6 py-3 px-6 rounded-3xl font-medium `}
      
    >
      Pay Now
    </button>
    </Link>
  </div>
  </div>
</div>




    </div>
  )
}

export default Thirdpage






