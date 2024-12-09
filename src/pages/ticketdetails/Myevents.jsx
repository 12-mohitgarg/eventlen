import React from 'react'
import bg2 from "../../assets/bg2.png";
import bg1 from "../../assets/bg1.png";
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { Link } from 'react-router-dom';


const Myevents = () => {
  return (
    <div>
      <Navbar/>
         <div style={{ backgroundImage: `url(${bg1}), url(${bg2})` }} className="bg-black bg-cover text-white min-h-screen ">

      <div className="relative">
        <img
          src="https://s3-alpha-sig.figma.com/img/feec/15ec/5fd2c3c836c27474214870920ec016ee?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZDEMzAluYfmAg6rUoWunSNmklpOjzT8si-gxuEh6m7s6xkgSgeNDfrenbgIhtqy5m~82kBh~W35d09r9cIJ4CDXOiXdZeNhVfeSF18vCMbQRy80v9XOo8LwTb6S0iQXkYBK8fpQ6b4w-zMB0cyeO0HxGDEtr0NZnH87xXr0~ojDduiqnsEJ0W0-0ls8lFIXgDI5C~L1z1~7WbiV5hUCmFcSn5f0sHg~s-WpozHXkLtpdIob0QFXn8z1mOJ8XLlX78itw2SRZ4nc2iAW0whqYw4MXznrsa1PlplSHAzfCBAn6etFl1DghSMeWJToXc4Y3Pry9~QaIqCpj-reS-odJnQ__" // Replace with your header image URL
          alt="Event"
          className="w-[100vw] h-[40rem] hidden lg:block"
        />
        
      </div>

     
      <div style={{ backgroundImage: `url(${bg1}), url(${bg2})` }} className="bg-black bg-cover py-5 min-h-screen  text-white p-8">
      
      <div className="flex justify-center space-x-8  mb-8">
        <button className="bg-black text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500">
          Upcoming events
        </button>
        <button className="text-gray-400  px-4 py-2">
          Past events
        </button>
      </div>

      {/* Event Card */}
      <div className="bg-[#262626] px-3 sm:px-6 py-3 rounded-lg max-w-[50rem] mx-auto flex items-center space-x-3 sm:space-x-6 shadow-lg">
        {/* Event Thumbnail */}
        <div className="w-1/4">
          <img
            src="https://s3-alpha-sig.figma.com/img/f535/a3d1/079c0f6e85eb70004347b5d4d0656177?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K1ScHPC7efyR4ohFDbzwd0qqYNlBvinTqXjHQ5YGcXguLRPNO-PuZSU6KvIdo7aaFLpUMZJAHtRD0QGdnz3H1ppZ~JKt1CBiS2rGIjT4Rryrcdf1Esh1j417SJL61vk-Jfx5-AB0ruINP-FthYJHzgh7jxOzvH~bZvwBonHt7RQz7KK66DrA-AJlOTcqrPYgujQ6LaykoColrN7eMOWIH07P9Q~-Ro~NfRE4ksiWO8bbFp7mfqUTjB5ZdKa5oxcCNJR~WFVEZYX6nLvEf-1Kg7nOFjJxX57G7Vki~Wq3RrIW-wRbOFV7hkCQJCwNOFDBPxBwS8pne0yf8GI24WpTsA__"
            alt="Event Thumbnail"
            className="rounded-md border border-gray-700 h-[8rem] sm:h-[12rem]"
          />
        </div>

        {/* Event Details */}
        <div className="w-3/4">
          <h2 className=" text-[8px] sm:text-xl font-bold">Mehendi Ceremony</h2>
          <div className=" text-[6px] sm:text-sm text-gray-300 mt-2">
            <p className='text-white'>
              <i className="fas fa-calendar-alt mr-2 text-[#cccccc]"></i>24 Oct 2023 | 5:30 PM - 28 Oct 2023 | 9:30 PM
            </p>
            <p className='text-white'>
              <i className="fas fa-map-marker-alt mr-2  text-[#cccccc]"></i>Peacock Garden, Entertainment Paradise, Tonk Road, Jaipur
            </p>
            <p className='text-white'>
              <strong className=' text-[#cccccc]'>Booking Date:</strong> Thu, 20 May 2022
            </p>
          </div>
          <div className="  sm:mt-4 text-[5px] sm:text-[18px] flex justify-between items-center">
            <div className='flex  gap-2 sm:gap-4'>
              <p className="text-lg font-semibold text-white">
                <strong className='text-[6px] sm:text-[18px] font-thin text-[#cccccc]'>Total Amount: Rs. 499</strong> 
              </p>
              <p className="text-lg font-semibold text-white">
                <strong className='text-[6px] sm:text-[18px] font-thin text-[#cccccc]'>Tickets: 6</strong> 
              </p>
            </div>
           <div>
           <Link to='/my-event-details'  className="block no-underline">
            <button  className="bg-[#f5167e]  text-white font-semibold px-2 py-1 md:px-6 sm:py-2 rounded-3xl">
              View Details
            </button>
            </Link>
           </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>a
    </div>
  )
}

export default Myevents