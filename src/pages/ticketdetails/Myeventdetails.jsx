// import React from 'react'
// import img from '../../assets/qr.png'
// import bg2 from "../../assets/bg2.png";
// import bg1 from "../../assets/bg1.png";

// const Myeventdetails = () => {
//   return (
//     <div>
//          <div style={{ backgroundImage: `url(${bg1}), url(${bg2})` }}  className="bg-black bg-cover min-h-screen p-8 text-white">
//       {/* Event Card */}
//       <div className="bg-[#262626] p-6 rounded-lg max-w-4xl mx-auto shadow-lg">
//         {/* Header Section */}
//         <div className="bg-[#262626] px-6 py-3 rounded-lg max-w-[50rem] mx-auto flex items-center space-x-6 ">
//         {/* Event Thumbnail */}
//         <div className="w-1/4">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/f535/a3d1/079c0f6e85eb70004347b5d4d0656177?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K1ScHPC7efyR4ohFDbzwd0qqYNlBvinTqXjHQ5YGcXguLRPNO-PuZSU6KvIdo7aaFLpUMZJAHtRD0QGdnz3H1ppZ~JKt1CBiS2rGIjT4Rryrcdf1Esh1j417SJL61vk-Jfx5-AB0ruINP-FthYJHzgh7jxOzvH~bZvwBonHt7RQz7KK66DrA-AJlOTcqrPYgujQ6LaykoColrN7eMOWIH07P9Q~-Ro~NfRE4ksiWO8bbFp7mfqUTjB5ZdKa5oxcCNJR~WFVEZYX6nLvEf-1Kg7nOFjJxX57G7Vki~Wq3RrIW-wRbOFV7hkCQJCwNOFDBPxBwS8pne0yf8GI24WpTsA__"
//             alt="Event Thumbnail"
//             className="rounded-md border border-gray-700 h-[12rem]"
//           />
//         </div>

//         {/* Event Details */}
//         <div className="w-3/4">
//           <h2 className="text-xl font-bold">Mehendi Ceremony</h2>
//           <div className="text-sm text-gray-300 mt-2">
//             <p className='text-white'>
//               <i className="fas fa-calendar-alt mr-2 text-[#cccccc]"></i>24 Oct 2023 | 5:30 PM - 28 Oct 2023 | 9:30 PM
//             </p>
//             <p className='text-white'>
//               <i className="fas fa-map-marker-alt mr-2  text-[#cccccc]"></i>Peacock Garden, Entertainment Paradise, Tonk Road, Jaipur
//             </p>
//             <p className='text-white'>
//               <strong className=' text-[#cccccc]'>Booking Date:</strong> Thu, 20 May 2022
//             </p>
//           </div>
//           <div className="mt-4 flex justify-between items-center">
//             <div className='flex gap-4'>
//               <p className="text-lg font-semibold text-white">
//                 <strong className=' font-thin text-[#cccccc]'>Total Amount:</strong> Rs. 499
//               </p>
//               <p className="text-lg font-semibold text-white">
//                 <strong className='font-thin text-[#cccccc]'>Tickets:</strong> 6
//               </p>
//             </div>
//             <button className="bg-[#f5167e] hover:bg-[#f5167e] text-white font-semibold px-6 py-2 rounded-3xl">
//               View Details
//             </button>
//           </div>
//         </div>
//       </div>

//         {/* Divider */}
//         <div className="border-t border-dotted border-white my-6"></div>

//         {/* Ticket Details */}
//         <div className="text-sm text-white">
//         <div className="flex justify-between mb-4">
//     <div className="flex flex-col">
//       <span>Silver Level 3</span>
//       <span className="text-gray-400 text-xs">Quantity: 1</span>
//     </div>
//     <span>₹1500</span>
//   </div>
//   <div className="flex justify-between mb-4">
//     <div className="flex flex-col">
//       <span>Silver Level 3–5 PAX</span>
//       <span className="text-gray-400 text-xs">Quantity: 3</span>
//     </div>
//     <span>₹6000</span>
//   </div>
//   <div className="flex justify-between mb-4">
//     <div className="flex flex-col">
//       <span>Silver Level 3–10 PAX</span>
//       <span className="text-gray-400 text-xs">Quantity: 1</span>
//     </div>
//     <span>₹3000</span>
//   </div>
//   <div className="flex justify-between mb-4">
//     <div className="flex flex-col">
//       <span>Silver Level 3</span>
//       <span className="text-gray-400 text-xs">Quantity: 1</span>
//     </div>
//     <span>₹1500</span>
//   </div>

//           {/* Total Price */}
//           <div className="border-t border-dotted border-white mt-4 pt-2 flex justify-between text-lg font-semibold">
//             <span className='text-[#cccccc] font-thin'>Total Price:</span>
//             <span>₹12000</span>
//           </div>
//         </div>

//         {/* QR Code and Transaction ID */}
//         <div className="flex flex-col items-center mt-6">
//           <img
//             src={img} // Replace with your QR code image URL
//             alt="QR Code"
//             className="w-32 h-32"
//           />
//           <p className="mt-2 text-gray-400">Transaction ID: <strong>#Eventlane</strong></p>
//         </div>

//         {/* Action Buttons */}
        // <div className="mt-6 flex flex-col gap-3 space-x-4 justify-center">
        //   <button className="bg-white  w-[20rem] mx-auto px-6 py-2 rounded-3xl text-[#f5167e] font-semibold">
        //     Download Ticket
        //   </button>
        //   <button className="bg-white  px-6 py-2 w-[20rem] mx-auto rounded-3xl text-[#f5167e] font-semibold">
        //     Share Ticket
        //   </button>
        // </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Myeventdetails










import React from 'react';
import img from '../../assets/qr.png';
import bg2 from "../../assets/bg2.png";
import bg1 from "../../assets/bg1.png";

const Myeventdetails = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg1}), url(${bg2})` }}
        className="bg-black bg-cover min-h-screen p-8 text-white"
      >
        {/* Event Card */}
        <div className="bg-[#262626] p-6 rounded-lg max-w-4xl mx-auto shadow-lg">
          {/* Header Section */}
          <div className="bg-[#262626] px-6 py-3 rounded-lg max-w-[50rem] mx-auto flex flex-row items-center space-y-6 md:space-y-0 space-x-6">
            {/* Event Thumbnail */}
            <div className="w-1/4">
              <img
                src="https://s3-alpha-sig.figma.com/img/3969/1462/48009e641f454298f62e13de84ac0a09?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=negzr8C4y-mkflW1BVZbTeN2tOfAaiY8I-13SNi2xXTr7i-Bm6ttAhHRlXrJ3zShOYGSTNdlwwSj2Fkm~5IgkIK1gT6boWVSfJoCtwsiiJQVA9EavCWd9QxczvP~gHQSIl8G~byeLQr3Mfk1HZ7-FJ5EpAYLaAV1eeOnFIdD~vTpDc51HM~IRiaR8wJ0NALUXv6RWpkng3SHSPzO9ciW8rjq02GXH2pMTgQfSXgemHUZjTNpq2MZhS3iPSaXkKz-wHcugDe9vIKNfPx-k12vQ7qfgJqoac7qskgrcmLdmvJMoUi0UFQl62azDBDT2PpTIABeSJzhIJt2OtinEg9Q9Q__"
                alt="Event Thumbnail"
                className="rounded-md border border-gray-700 h-[8rem] sm:h-[15rem] w-[112px] sm:w-full "
              />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-3/4">
              <h2 className="text-[8px] sm:text-2xl font-bold  text-start md:text-left">Mehendi Ceremony</h2>
              <h2 className="text-[10px] sm:text-3xl font-bold  text-start md:text-left">The Road to Jobs and Internships: Starting with LinkedIn Webinar</h2>
              <div className="text-[6px] sm:text-lg text-gray-300 mt-2 text-start md:text-left">
                
                <p className="text-[#f5167e]">
                  <i className="fas fa-calendar-alt mr-2 text-[#cccccc]"></i>24 Oct 2023 | 5:30 PM - 28 Oct 2023 | 9:30 PM
                </p>
                <p className="text-white">
                  <i className="fas fa-map-marker-alt mr-2 text-[#cccccc]"></i>Peacock Garden, Entertainment Paradise, Tonk Road, Jaipur
                </p>
                
              </div>
              <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex  flex-row gap-4">
                  <p className="text-[10px] sm:text-xl font-semibold text-white">
                    <strong className="font-thin text-[#cccccc]">Total Amount:</strong> Rs. 499
                  </p>
                  <p className="text-[10px] sm:text-xl font-semibold text-white">
                    <strong className="font-thin text-[#cccccc]">Tickets:</strong> 6
                  </p>
                </div>
                {/* <button className="bg-[#f5167e] hover:bg-[#f5167e] text-white font-semibold px-6 py-2 rounded-3xl">
                  View Details
                </button> */}
              </div>
            </div>
          </div>

         <div className='px-10'>
           {/* Divider */}
           <div className="border-t border-dotted border-white my-6"></div>

{/* Ticket Details */}
<div className="text-sm text-white ">
  {/** Ticket Rows */}
  {[...Array(4)].map((_, i) => (
    <div key={i} className="flex justify-between mb-4">
      <div className="flex flex-col">
        <span>Silver Level 3</span>
        <span className="text-gray-400 text-xs">Quantity: 1</span>
      </div>
      <span>₹1500</span>
    </div>
  ))}

  {/* Total Price */}
  <div className="border-t border-dotted border-white mt-4 pt-2 flex justify-between text-lg font-semibold">
    <span className="text-[#cccccc] font-thin">Total Price:</span>
    <span>₹12000</span>
  </div>
</div>

         </div>
          {/* QR Code and Transaction ID */}
          <div className="flex flex-col items-center mt-6">
            <img src={img} alt="QR Code" className="w-32 h-32" />
            <p className="mt-2 text-gray-400">
              Transaction ID: <strong>#Eventlane</strong>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3 space-x-4 justify-center">
          <button className="bg-white  w-[20rem] mx-auto px-6 py-2 rounded-3xl text-[#f5167e] font-semibold">
            Download Ticket
          </button>
          <button className="bg-white  px-6 py-2 w-[20rem] mx-auto rounded-3xl text-[#f5167e] font-semibold">
            Share Ticket
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Myeventdetails;
