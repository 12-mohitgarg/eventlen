






// import React from 'react';
// import bg4 from '../../assets/bg4.png';
// import img1 from '../../assets/img1.png';
// import Navbar from '../../components/common/Navbar';
// import Footer from '../../components/common/Footer';
// import { Link } from 'react-router-dom';

// const Loginpage = () => {
//   return (
    // <div>
    //   <Navbar/>
      // <div
      //   style={{ backgroundImage: `url(${bg4})` }}
      //   className="px-3 min-h-[30rem] flex items-center justify-center bg-black bg-cover"
      // >
      //   <div className="bg-[#262626] my-[8rem] text-white rounded-3xl shadow-lg p-8 w-full max-w-2xl relative">
      //     <div className="text-center mb-6">
      //       <h1 className="text-2xl font-bold">
      //         Welcome to Eventlane! <span role="img" aria-label="wave">👋</span>
      //       </h1>
      //       <p className="text-white text-sm">
      //         Please sign-in to your account and start the adventure
      //       </p>
      //     </div>

      //     <div className="flex justify-between gap-1 sm:gap-5 flex-row items-center">
      //       <div className="text-[10px] sm:text-xl space-y-4 w-3/5">
      //       <Link to='/phone-login'  className="block no-underline">
      //         <button className="  w-full h-full  flex items-center justify-center py-3 px-2 bg-white text-[#f5167e] rounded-3xl transition">
      //           <span className="mr-2">📱</span>
      //           Continue with Phone number
      //         </button>
      //         </Link>
      //         <Link to='/email-login'  className="block no-underline">
      //         <button className="w-full text-white flex items-center justify-center py-3 border-2 border-white rounded-3xl  transition">
      //           <span className="mr-2">✉️</span>
      //           Continue with Email
      //         </button>
      //         </Link>
      //       </div>
      //       <div className="w-2/5 h-60 mt-0 ">
      //         <img
      //           src={img1}
      //           alt="Illustration"
      //           className="w-full h-full object-contain"
      //         />
              
      //       </div>
      //     </div>
      //   </div>
      // </div>
    //   <Footer/>
    // </div>
//   );
// };

// export default Loginpage;










import React, { useState } from 'react';
import bg4 from '../../assets/bg4.png';
import img1 from '../../assets/img1.png';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Phonelogin from './Phonelogin';
import EmailloginModal from './Emaillogin';

const Loginpage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const navigate = useNavigate();
  // Modal state is set to true by default to open automatically
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    
    setIsOpen(false);
    navigate("/page-third");
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center bg-cover justify-center bg-[#262626]">
        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 px-3 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              // style={{ backgroundImage: `url(${bg4})` }}
              className="bg-[#262626] bg-cover text-white rounded-3xl shadow-lg p-8 w-full max-w-2xl relative"
            >
           
              {/* <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white text-black p-2 rounded-full "
              >
                ✖
              </button> */}

              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">
                  Welcome to Eventlane! <span role="img" aria-label="wave">👋</span>
                </h1>
                <p className="text-white text-sm">
                  Please sign-in to your account and start the adventure
                </p>
              </div>

              <div className="flex justify-between gap-1 sm:gap-5 flex-row items-center">
                <div className="text-[8px] sm:text-xl space-y-4 w-3/5">
                <button
        onClick={() => setIsPopupOpen(true)}
         className="w-full h-full flex items-center justify-center py-3 px-2 bg-white text-[#f5167e] rounded-3xl transition">
                      <span className="mr-2">📱</span>
                      Continue with Phone number
                    </button>
                    <Phonelogin isOpen={isPopupOpen} setIsOpen={setIsOpen} onClose={() => setIsPopupOpen(false)} />
                  
                    <button
                    onClick={() => setIsEmailPopupOpen(true)}
         className="w-full text-white flex items-center justify-center py-3 border-2 border-white rounded-3xl transition">
                      <span className="mr-2">✉️</span>
                      Continue with Email
                    </button>
                    <EmailloginModal
                    isOpen={isEmailPopupOpen}
                    onClose={() => setIsEmailPopupOpen(false)} // Close email modal
                  />
        
                </div>
                <div className="w-2/5 h-60 mt-0">
                  <img
                    src={img1}
                    alt="Illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Loginpage;
