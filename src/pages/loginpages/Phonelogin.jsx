// import React, { useEffect, useState } from 'react'
// import OtpInput from "react-otp-input";
// import bg4 from '../../assets/bg4.png';
// import Navbar from '../../components/common/Navbar';
// import Footer from '../../components/common/Footer';
// import { Link } from 'react-router-dom';

// const Phonelogin = () => {
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [otp, setOtp] = useState(new Array(4).fill(""));
//     const [timer, setTimer] = useState(51);
//     const [receiveUpdates, setReceiveUpdates] = useState(false);
  
//     // Handle OTP input change
//     const handleOtpChange = (element, index) => {
//       if (isNaN(element.value)) return;
//       const newOtp = [...otp];
//       newOtp[index] = element.value;
//       setOtp(newOtp);
  
//       // Focus next input
//       if (element.nextSibling) element.nextSibling.focus();
//     };
  
//     // Resend Timer
//     useEffect(() => {
//       const interval = setInterval(() => {
//         if (timer > 0) {
//           setTimer((prev) => prev - 1);
//         }
//       }, 1000);
  
//       return () => clearInterval(interval);
//     }, [timer]);
  
//     const handleProceed = () => {
//       // alert(`Phone: ${phoneNumber}, OTP: ${otp.join("")}`);
//     };
  
//   return (



// <div>
//   <Navbar/>
//   <div
//     style={{ backgroundImage: `url(${bg4})` }}
//     className="px-3 flex items-center justify-center  min-h-[40rem] bg-black bg-cover text-white"
//   >
//     <div className="w-full bg-[#262626] px-12 mt-[8rem] mb-[4rem] py-16 rounded-2xl shadow-lg max-w-2xl">
//       <div className="mb-6">
//         <div className="text-2xl font-bold mb-4">
//           <button className="text-2xl text-white">
//             ← Enter Mobile Number and OTP
//           </button>
//           {/* <span className="block sm:text-xl md:text-2xl">
//             Enter Mobile Number and OTP
//           </span> */}
//         </div>
//       </div>

//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm mb-2 sm:text-xs md:text-sm">
//             Phone Number
//           </label>
//           <div className="flex items-center gap-2">
//             <select className="bg-black border border-gray-600 rounded px-3 py-2 text-white text-sm sm:px-2 md:px-3">
//               <option value="+91">IN +91</option>
//             </select>
//             <input
//               type="number"
//               placeholder="Please enter your Number"
//               className="flex-grow bg-black border border-gray-600 rounded px-3 py-2 text-white text-sm sm:px-2 md:px-3"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//           </div>
//         </div>

//         <div>
//           <p className="text-sm sm:text-xl md:text-sm text-white">
//             An OTP has been sent to{" "}
//             <span className="text-white">
//               {phoneNumber || "+91-0000000000"}
//             </span>
//           </p>
//           <label className="block text-sm mb-2 mt-4 sm:text-xs md:text-sm">
//             Enter the OTP
//           </label>
//           <div className="flex justify-between gap-2">
//           <OtpInput
//   value={otp}
//   onChange={setOtp}
//   numInputs={6}
//   renderInput={(props, index) => (
//     <input
      
//       maxLength={1} // Ensure only one character is allowed per box
//       onChange={(e) => {
//         const { value } = e.target;
//         const newOtp = [...otp];
        
//         // Only accept numeric values
//         if (/^[0-9]$/.test(value)) {
//           newOtp[index] = value; // Update the specific index
//           setOtp(newOtp);

//           // Automatically move focus to the next box if exists
//           if (e.target.nextSibling) {
//             e.target.nextSibling.focus();
//           }
//         } else if (value === '') {
//           // Allow clearing the input and focusing the current box
//           newOtp[index] = '';
//           setOtp(newOtp);
//         }
//       }}
//       style={{
//         boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//       }}
//       className="bg-[#262626] w-[50px] h-[40px] sm:w-[90px] sm:h-[40px] border-b-2 bg-richblack-800 text-white text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
//     />
//   )}
//   containerStyle={{
//     justifyContent: "space-between",
//     gap: "0 6px",
//   }}
// />

//           </div>
//           <div className='flex justify-between'>
//           <p className="mt-2 text-sm sm:text-xs md:text-sm text-white">
//             Resend in{" "}
//             <span className="text-white">
//               00:{timer < 10 ? `0${timer}` : timer}
//             </span>
//           </p>
//            <div className="flex items-center gap-3 ">
//           <div
//             className="relative inline-block w-11 h-6 cursor-pointer"
//             onClick={() => setReceiveUpdates(!receiveUpdates)}
//           >
//             <input
//               id="switch"
//               type="checkbox"
//               checked={receiveUpdates}
//               onChange={() => {}}
//               className="sr-only"
//             />
//             <div
//               className={`w-full h-full rounded-full transition duration-200 ${
//                 receiveUpdates ? "bg-[#f5167e]" : "bg-gray-700"
//               }`}
//             ></div>
//             <div
//               className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 transform ${
//                 receiveUpdates ? "translate-x-5" : ""
//               }`}
//             ></div>
//           </div>

//           <label
//             htmlFor="switch"
//             className="text-[11px] sm:text-md  text-gray-400"
//           >
//             Receive Updates via WhatsApp
//           </label>
//         </div>
//           </div>
//         </div>

       
//       </div>

//       {/* Proceed Button */}
//       <div className='w-[80%] mx-auto'>
//       <Link to='/register'  className="block no-underline">
//       <button
//         className="w-full bg-white text-[#f5167e] rounded-[2rem] text-lg font-semibold py-3 mt-6  transition duration-200 sm:text-sm md:text-base lg:text-lg"
//         onClick={handleProceed}
//       >
//         Proceed
//       </button>
//       </Link>
//       </div>
//     </div>
//   </div>
//   <Footer/>
// </div>
//   )
// }

// export default Phonelogin





import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import bg4 from "../../assets/bg4.png";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { Link, useNavigate } from "react-router-dom";
import RegisterModal from "./Register";

const Phonelogin = ({ isOpen, onClose, setIsOpen }) => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [timer, setTimer] = useState(51);
  const [receiveUpdates, setReceiveUpdates] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  // Handle OTP input change
  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.nextSibling) element.nextSibling.focus();
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true); 
   
  };
  // Resend Timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleProceed = () => {
    // alert(`Phone: ${phoneNumber}, OTP: ${otp.join("")}`);
  };

  if (!isOpen) return null;

  const onback  = () => {
    navigate('/login');
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false); 
    
  };

  return (
    <div style={{ marginTop: "-1px" }} className="fixed inset-0 px-3 z-50  bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-full bg-[#262626] px-8 py-8 sm:py-12 rounded-2xl shadow-lg max-w-2xl relative">
        {/* Close Button */}
        {/* <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl"
        >
          &times;
        </button> */}

        <div>
          <div className="text-2xl  font-bold mb-4">
            <button className="text-base  sm:text-2xl text-white" onClick={onClose}>
              ←  Enter Mobile Number and OTP
            </button>
            
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Phone Number</label>
              <div className="flex items-center gap-2">
                <select className="bg-black border border-gray-600 rounded px-3 py-2 text-white text-sm">
                  <option value="+91">IN +91</option>
                </select>
                <input
                  type="number"
                  placeholder="Please enter your Number"
                  className="flex-grow bg-black border border-white rounded px-1 sm:px-3 py-2 text-white text-sm"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div>
              <p className="text-sm text-white">
                An OTP has been sent to{" "}
                <span className="text-white">
                  {phoneNumber || "+91-0000000000"}
                </span>
              </p>
              <label className="block text-sm mb-2 mt-4">Enter the OTP</label>
              <div className="flex justify-between gap-2">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderInput={(props, index) => (
                    <input
                      maxLength={1}
                      onChange={(e) => {
                        const { value } = e.target;
                        const newOtp = [...otp];

                        if (/^[0-9]$/.test(value)) {
                          newOtp[index] = value;
                          setOtp(newOtp);

                          if (e.target.nextSibling) {
                            e.target.nextSibling.focus();
                          }
                        } else if (value === "") {
                          newOtp[index] = "";
                          setOtp(newOtp);
                        }
                      }}
                      style={{
                        boxShadow:
                          "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="bg-[#262626] w-[40px] h-[40px] sm:w-[90px] sm:h-[40px] border-b-2 bg-richblack-800 text-white text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                    />
                  )}
                  containerStyle={{
                    justifyContent: "space-between",
                    gap: "0 6px",
                  }}
                />
              </div>
              <div className="flex justify-between">
                <p className="mt-2 text-sm text-white">
                  Resend in{" "}
                  <span className="text-white">
                    00:{timer < 10 ? `0${timer}` : timer}
                  </span>
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="relative inline-block w-11 h-6 cursor-pointer"
                    onClick={() => setReceiveUpdates(!receiveUpdates)}
                  >
                    <input
                      id="switch"
                      type="checkbox"
                      checked={receiveUpdates}
                      onChange={() => {}}
                      className="sr-only"
                    />
                    <div
                      className={`w-full h-full rounded-full transition duration-200 ${
                        receiveUpdates ? "bg-[#f5167e]" : "bg-gray-700"
                      }`}
                    ></div>
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 transform ${
                        receiveUpdates ? "translate-x-5" : ""
                      }`}
                    ></div>
                  </div>
                  <label
                    htmlFor="switch"
                    className="text-[11px] sm:text-md text-gray-400"
                  >
                    Receive Updates via WhatsApp
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Proceed Button */}
          <div className="w-[80%] mx-auto">
          
          <button
              onClick={openRegisterModal}
              
                className="w-full bg-white text-[#f5167e] rounded-[2rem] text-lg font-semibold py-3 mt-6  transition duration-200"
                
              >
                Proceed
              </button>
              <RegisterModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phonelogin;
