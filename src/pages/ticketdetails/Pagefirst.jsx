// import React, { useState } from 'react'

// const Pagefirst = () => {

//     const [earlyBirdTickets, setEarlyBirdTickets] = useState(0);
//     const [selectedTickets, setSelectedTickets] = useState(0);
//     const ticketPrice = 1000;
//     const generalPrice = 1500;
  
//     const total = earlyBirdTickets * ticketPrice || generalPrice;
  
//     const handleTicketChange = (e) => {
//       setEarlyBirdTickets(parseInt(e.target.value, 10));
//     };
//   return (
//     <div>
//         <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white flex items-center justify-center">
//       <div className="w-full max-w-4xl  rounded-lg  p-6">
       
        

// <div className="  text-white flex  justify-center">
//       <div className="w-full max-w-4xl rounded-lg  p-6">
        
//       <div className="flex items-center space-x-6">
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

        
//         <div className="mt-6 flex items-center justify-center ">
//           <div className="flex items-center mt-12  space-x-9">
            
//             <div className="flex flex-col items-center ">
//               <div className="w-10 h-10 flex items-center justify-center bg-white  rounded-r-lg rounded-t-lg text-white font-semibold">
//                 <i className="fas fa-check text-[#f5167e] "></i>
//               </div>
//               <p className="text-sm text-white mt-2 ">Tickets</p>
//             </div>
//             <div className="h-1  w-16 bg-gray-600"></div>
           
//             <div className="flex flex-col items-center">
//               <div className="w-10 h-10 flex items-center justify-center bg-[#f5167e] rounded-r-lg rounded-t-lg text-white font-semibold">
//                 <i className="far"></i>
//               </div>
//               <p className="text-sm text-gray-400 mt-2">Summary</p>
//             </div>
//             <div className="h-1 w-16 bg-gray-600"></div>
            
//             <div className="flex flex-col items-center">
//               <div className="w-10 h-10 flex items-center justify-center bg-[#f5167e] rounded-r-lg rounded-t-lg text-white font-semibold">
//                 <i className=""></i>
//               </div>
//               <p className="text-sm text-gray-400 mt-2">Payment</p>
//             </div>
//           </div>
//         </div>




//       </div>
//     </div>

    


// {/* <div className='bg-[#262626] text-white p-6 rounded-lg flex justify-between  mx-auto'>
// <div className="text-right flex flex-col items-start mb-4">
//         <p className="text-lg">Total</p>
//         <p className="text-2xl font-semibold">Rs. {selectedTickets * 1000 || 1500}</p>
//       </div>
//       <div>
//       <button
//         className="bg-[#f5167e] hover:bg-[#f5167e] transition-colors mt-6 w-full p-3 rounded-lg font-medium"
//         disabled={!selectedTickets}
//       >
//         Pay Now
//       </button>
//       </div>
// </div> */}



// <div className="bg-[#262626] text-white p-6  rounded-b-3xl">
  
//       <div className="bg-[#262626] p-4 rounded-lg">
        
//         <div className="flex justify-between items-center mb-4">
//           <div>
//             <p className="font-medium">Early Bird Day Ticket</p>
//             <p className="text-sm text-gray-400">No Cover</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <select
//               value={selectedTickets}
//               onChange={(e) => setSelectedTickets(Number(e.target.value))}
//               className="bg-gray-700 text-white p-2 rounded-md"
//             >
//               <option value={0}>0</option>
//               <option value={1}>1</option>
//               <option value={2}>2</option>
//               <option value={3}>3</option>
//               <option value={4}>4</option>
//             </select>
//             <p>Rs. 1000</p>
//           </div>
//         </div>

//         {/* General Day Ticket */}
//         <div className="flex justify-between items-center">
//           <div>
//             <p className="font-medium">General Day Ticket</p>
//             <p className="text-sm text-gray-400">No Cover</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <p className="bg-black text-gray-400 p-2 rounded-md">Coming Soon</p>
//             <p>Rs. 1500</p>
//           </div>
//         </div>
//       </div>

      
//     </div>
//       </div>
//     </div>
//     <div className="bg-[#262626] text-white p-6 flex justify-between mx-auto max-w-full sticky  bottom-0 z-10">
//   {/* Total Price Section */}
//   <div className="text-right flex flex-col items-start">
//     <p className="text-lg">Total</p>
//     <p className="text-2xl font-semibold">
//       Rs. {selectedTickets * 1000 || 1500}
//     </p>
//   </div>

//   {/* Pay Now Button */}
//   <div>
//     <button
//       className={`bg-[#f5167e] hover:bg-[#f5167e] transition-colors mt-6 py-3 px-6 rounded-3xl font-medium ${
//         !selectedTickets ? "opacity-50 cursor-not-allowed" : ""
//       }`}
//       disabled={!selectedTickets}
//     >
//       Pay Now
//     </button>
//   </div>
// </div>


//     </div>
//   )
// }

// export default Pagefirst






import React, { useState } from 'react'
import img from "../../assets/Logo.png";
import logo from "../../assets/Logo.png";
import img1 from "../../assets/navcolor.png";
import img2 from "../../assets/nav.png";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import footer from "../../assets/footer.png";


const Pagefirst = () => {

    const [earlyBirdTickets, setEarlyBirdTickets] = useState(0);
    const [selectedTickets, setSelectedTickets] = useState(0);
    const ticketPrice = 1000;
    const generalPrice = 1500;
  
    const total = earlyBirdTickets * ticketPrice || generalPrice;
  
    const handleTicketChange = (e) => {
      setEarlyBirdTickets(parseInt(e.target.value, 10));
    };
  return (
    <div >
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
          <button className="border border-white bg-richblack-800 px-[12px] py-[8px] text-white rounded-full">
            List an Event
          </button>
          <div className="w-16 cursor-pointer">
          <img src={img2} className=""/>
          </div>

        </div>
      </div>
     
    </div>







        <div className=" bg-black text-white flex items-center bg-cover justify-center" style={{ backgroundImage: `url(${bg1}), url(${bg2})` }}>
      <div className="w-full flex flex-col max-w-4xl  rounded-lg  p-6">
 
 <div className="  text-white flex  justify-center">
      <div className="w-full max-w-6xl h-[22rem] rounded-lg sm:p-6">
        
      <div className="flex items-center  space-x-6">
          <img
            src="https://s3-alpha-sig.figma.com/img/f535/a3d1/079c0f6e85eb70004347b5d4d0656177?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K1ScHPC7efyR4ohFDbzwd0qqYNlBvinTqXjHQ5YGcXguLRPNO-PuZSU6KvIdo7aaFLpUMZJAHtRD0QGdnz3H1ppZ~JKt1CBiS2rGIjT4Rryrcdf1Esh1j417SJL61vk-Jfx5-AB0ruINP-FthYJHzgh7jxOzvH~bZvwBonHt7RQz7KK66DrA-AJlOTcqrPYgujQ6LaykoColrN7eMOWIH07P9Q~-Ro~NfRE4ksiWO8bbFp7mfqUTjB5ZdKa5oxcCNJR~WFVEZYX6nLvEf-1Kg7nOFjJxX57G7Vki~Wq3RrIW-wRbOFV7hkCQJCwNOFDBPxBwS8pne0yf8GI24WpTsA__" 
            alt="Webinar"
            className="w-[15rem] h-[15rem] rounded-lg border border-gray-700"
          />
          <div>
            <p className="text-[#cccccc] text-[10px] sm:text-2xl mb-1">Educational & Business</p>
            <h3 className=" text-sm sm:text-3xl font-semibold">
              The Road to Jobs and Internships: Starting with LinkedIn
            </h3>
            <div className="flex flex-col items-start mt-3  space-y-4">
              <div className="flex items-center space-x-2 text-md sm:text-xl text-[#f5167e]">
                <i className="far fa-calendar-alt"></i>
                <p>Sat Oct 05, 09:00 PM</p>
              </div>
              <div className="flex items-center space-x-2  text-md sm:text-xl text-white">
                <i className="fas fa-map-marker-alt"></i>
                <p>Inner Circle Garba, Ahmedabad</p>
              </div>
            </div>
          </div>
        </div>

        
        



      </div>
    </div> 




    {/* <div className="  flex items-center justify-center w-[40rem] h-[6rem]">
          <div className="flex items-center mt-12  space-x-9">
            
            <div className="flex flex-col items-center ">
              <div className="w-10 h-10 flex items-center justify-center bg-white  rounded-r-lg rounded-t-lg text-white font-semibold">
                <i className="fas fa-check text-[#f5167e] "></i>
              </div>
              <p className="text-sm text-white mt-2 ">Tickets</p>
            </div>
            <div className="h-1  w-16 bg-gray-600"></div>
           
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-[#f5167e] rounded-r-lg rounded-t-lg text-white font-semibold">
                <i className="far"></i>
              </div>
              <p className="text-sm text-gray-400 mt-2">Summary</p>
            </div>
            <div className="h-1 w-16 bg-gray-600"></div>
            
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-[#f5167e] rounded-r-lg rounded-t-lg text-white font-semibold">
                <i className=""></i>
              </div>
              <p className="text-sm text-gray-400 mt-2">Payment</p>
            </div>
          </div>
        </div> */}


<div className=" flex items-center justify-center ">
          <div className="flex items-center mt-12 space-x-9">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-r-lg rounded-t-lg text-white font-semibold">
                <i className="fas fa-check text-[#f5167e] "></i>
              </div>
              <p className="text-sm text-white mt-2">Tickets</p>
            </div>
            <div className="h-1 w-16 bg-gray-600"></div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-[#f5167e] rounded-r-lg rounded-t-lg text-white font-semibold">
                <i className="far"></i>
              </div>
              <p className="text-sm text-gray-400 mt-2">Summary</p>
            </div>
            <div className="h-1 w-16 bg-gray-600"></div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-[#f5167e] rounded-r-lg rounded-t-lg text-white font-semibold">
                <i className=""></i>
              </div>
              <p className="text-sm text-gray-400 mt-2">Payment</p>
            </div>
          </div>
        </div>


    




<div className="bg-[#262626] text-white p-6 mt-20 rounded-3xl">
<div className='flex justify-center w-full mx-auto'>Select Ticktes</div> 
      <div className="bg-[#262626] p-4 rounded-lg">
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-medium">Early Bird Day Ticket</p>
            <p className="text-sm text-gray-400">No Cover</p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={selectedTickets}
              onChange={(e) => setSelectedTickets(Number(e.target.value))}
              className="bg-[#262626] border-1 border-white text-white p-2 rounded-md"
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
            <p>Rs. 1000</p>
          </div>
        </div>

        {/* General Day Ticket */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">General Day Ticket</p>
            <p className="text-sm text-gray-400">No Cover</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="bg-black text-gray-400 p-2 rounded-md">Coming Soon</p>
            <p>Rs. 1500</p>
          </div>
        </div>
      </div>

      
    </div>
      </div>
    </div>
  





{/* footer */}

<div className="relative">
      <div className=''>
      <div className="relative h-[40rem] z-0">
        
        <img
          src={footer}
          className="w-full h-[40rem] object-cover"
          alt="Background"
        />
      </div>
      <div className="absolute z-50 top-0 left-0 right-0  text-white flex flex-col justify-center items-center h-[40rem] w-full">
        <h1 className="z-50 text-[2.5rem] md:text-[4rem] text-center">
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
                  <a href="#" className="text-white hover:text-[#f5167e]">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-white hover:text-[#f5167e]">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-white hover:text-[#f5167e]">
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
                  <button className="absolute right-2 px-4 md:px-5 py-2 bg-[#f5167e] rounded-3xl text-white hover:bg-[#f5167e]">
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


    <div className="bg-[#262626] text-white p-6 flex justify-between mx-auto max-w-screen-2xl fixed bottom-0 z-50 w-full">
  <div className='flex justify-around w-full'>
  <div className="text-right flex flex-col items-start">
    <p className="text-lg">Total</p>
    <p className="text-2xl font-semibold">
      Rs. {selectedTickets * 1000 || 1500}
    </p>
  </div>

  <div>
    <button
      className={`bg-[#f5167e] hover:bg-[#f5167e] transition-colors mt-6 py-3 px-6 rounded-3xl font-medium ${!selectedTickets ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={!selectedTickets}
    >
      Pay Now
    </button>
  </div>
  </div>
</div>




    </div>
  )
}

export default Pagefirst