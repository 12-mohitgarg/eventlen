


import React from 'react';
import logo from '../../assets/Logo.png';
import bg5 from "../../assets/bg5.png";
import footer from "../../assets/footer.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="relative">
      <img src={bg5} className='absolute -top-20 h-64 w-[100vw] z-0'/>
      
      <div className="relative h-[35rem] z-10">
        
        <img
          src={footer}
          className="w-full h-[35rem] object-cover "
          alt="Background"
        />
      </div>
      <div className="absolute top-0 left-0 right-0  z-40  text-white flex flex-col justify-center items-center h-[40rem] w-full">
        <h1 className="text-[2.5rem] md:text-[4rem] text-center">
          Are you an Event <span className="text-[#FFE047]">Organiser?</span>
        </h1>
        <h2 className="text-[1.5rem] md:text-[2rem] text-center">
          Get Your Event Live in Less Than 3 Minutes
        </h2>
        <Link to='/business'  className="block no-underline">
        <button className="z-40 text-[#f5167e] bg-white rounded-3xl mt-12 py-2 px-16 md:py-3 md:px-24">
          List Event
        </button>
        </Link>
      </div>
      <footer className="bg-[#262626] text-white py-8 md:py-16">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
    {/* Footer Content */}
    <div className="flex flex-wrap justify-between md:flex-nowrap">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex   gap-8">
        {/* Logo and About */}
        <div className="w-full sm:w-2/3 mb-8 md:mb-0">
          <div className="text-2xl font-bold mb-4">
            <img src={logo} alt="Eventlane Logo" className="w-3/4 mx-auto md:mx-0" />
          </div>
          <p className="text-sm text-center md:text-left">
            Eventlane is a global self-service ticketing platform for live experiences that allows anyone to create, share, find, and attend events that fuel their passions and enrich their lives.
          </p>
          <div className="flex justify-center md:justify-start mt-4 text-xl md:text-2xl space-x-4">
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
        {/* Plan Events */}
        <div className="w-full sm:w-1/3 text-center md:text-left">
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
      <div className="w-full md:w-1/2 flex   gap-8 justify-between">
        
        <div className="w-full sm:w-1/2 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Eventtick</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Press</li>
            <li>Contact</li>
            <li>Online Events</li>
          </ul>
        </div>

        
        <div className="w-full sm:w-1/2 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Stay In The Loop</h3>
          <p className="text-sm mb-4">
            Join our mailing list to stay in the loop with our newest events and concerts.
          </p>
          <div className="flex items-center relative w-full">
            <div className="flex items-center border-2 border-[#f5167e] bg-white rounded-3xl w-full px-4">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="w-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none py-2"
              />
            </div>
            <button className="absolute right-2 px-4 py-2 bg-[#f5167e] rounded-3xl text-white ">
              Subscribe
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
  );
};

export default Footer;
