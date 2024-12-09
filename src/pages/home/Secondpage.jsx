import React, { useEffect, useState } from "react";
import img1 from "../../../src/assets/img.png";
import img2 from "../../../src/assets/pagefirstthird.png";
import img3 from "../../../src/assets/firstpagesecond.png";
import bg2 from "../../../src/assets/bg2.png";
import '../bussiness/second.css'
import { Link } from "react-router-dom";

const Secondpage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    // onSearch(event.target.value);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Mock data for demonstration
        const response = [
          {
            id: 1,
            img: "https://s3-alpha-sig.figma.com/img/7598/8bff/6cadefaf19edc68b5d4d6504bf622cc8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UwnJgPmEa~jgKY6XHZWxGFrdAfMmoV8tYXq~OGvqxlmy~dmP9rOWw6uTZfOfvnTlo09X6nv2ksMFI8dUrUD8BqDjSHfVKZvDRTNu1wN9wRiVSgIxjv9o8qyk0vcWfuKiW05fd6Jl3dB-Wysf3QBa9BFBDZIw127w7rrqN5jv5kPs3mdtONH3KA8K2CDj1atQbHVgkfuPloqPgFKRMYNlyKQs7s7pPx7GxdZPPi~GML-K5lcwhaZgIFk4pbUf58KpKVxAScKUbXIdug1Yf3pVVr7S3tcFAwAAQ6BIYjIFwlaJnhu0CjNC-GONRcbt7hldDWAyFyBma28kfzK0nAcPFw__",
            line1: "Education & Business",
            line2: "The Road to Jobs and Internships",
            location: "Hotel Jaipur",
            time: "6 PM - 7:30 PM",
            money: "₹1000",
            interested: "10",
            date: "12-JAN-2003",
          },
          {
            id: 1,
            img: "https://s3-alpha-sig.figma.com/img/f535/a3d1/079c0f6e85eb70004347b5d4d0656177?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K1ScHPC7efyR4ohFDbzwd0qqYNlBvinTqXjHQ5YGcXguLRPNO-PuZSU6KvIdo7aaFLpUMZJAHtRD0QGdnz3H1ppZ~JKt1CBiS2rGIjT4Rryrcdf1Esh1j417SJL61vk-Jfx5-AB0ruINP-FthYJHzgh7jxOzvH~bZvwBonHt7RQz7KK66DrA-AJlOTcqrPYgujQ6LaykoColrN7eMOWIH07P9Q~-Ro~NfRE4ksiWO8bbFp7mfqUTjB5ZdKa5oxcCNJR~WFVEZYX6nLvEf-1Kg7nOFjJxX57G7Vki~Wq3RrIW-wRbOFV7hkCQJCwNOFDBPxBwS8pne0yf8GI24WpTsA__",
            line1: "Education & Business",
            line2: "The Road to Jobs and Internships",
            location: "Hotel Jaipur",
            time: "6 PM - 7:30 PM",
            money: "₹1000",
            interested: "10",
            date: "12-JAN-2003",
          },
          {
            id: 1,
            img: "https://s3-alpha-sig.figma.com/img/af00/0279/4aa3615214433c16ab9c7a4c80034966?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nC8nwGnGiuPjKPsjre2CPjcRw~zmhK~LjJt5NMuU5B6GxUUAug5LXN5akWAHaGXL5dJc5fllZn-sPDWeSitIScpWufYvIV1jQ2npFb~Bjs5RUhlzCtUXXvtpWeoBUcE0O-Lbh7-aqgHwaTadZm6Eb-CA3-b~k77ULooEQ6omochJO8f~iRkyGy1vjmuuVxoIrj5SyZ8-e25ulC130dBFQ~Hb~bUNSpmG1lzvfmU4WRhHdB54FyrAqNIVLfuzEE9e2qR0WdMwO2i2GNaYwdd7vRAwToLlghe~MNkD18GJ8v4q7OO39ahogy0BXwXT4DEQXJM7CheKq67QPPW~melBBw__",
            line1: "Education & Business",
            line2: "The Road to Jobs and Internships",
            location: "Hotel Jaipur",
            time: "6 PM - 7:30 PM",
            money: "₹1000",
            interested: "10",
            date: "12-JAN-2003",
          },
          {
            id: 1,
            img: "https://s3-alpha-sig.figma.com/img/4362/0ae2/2c5c1be75c76cc6cc3581c309f99ed9e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBs9EIf1S7vZCB1nItxOSz2LZwwFwOh~ZmrTYZQMqXKPmh2ZGO2K8IW4TREfmE6v6cV5G7sCiNMipwVULjCYnocMc-0GCaU8R64IGCnqGJ6QYhvJ81uGZ4OSbXgLl9inhFZu7lxyQmhC1CL-FB-HHGqDtONzMUyRVtWBRxFh3wz6RvTf-tqtM7apfivZrbVZ205zJkdm9onpToV9JC-0ZN6lyCwg5zIPxSD0Z8U1LKQXeR8hc5XPj5TZJCnCa8uIF3Nfn-32cQ9mlxCeRufKIb6QYzfO0DpXGs5Khch8WqRqjHCnjHTKW9jU4RfY9~dssZ5NZLlzvELIOArylEIUpg__",
            line1: "Education & Business",
            line2: "The Road to Jobs and Internships",
            location: "Hotel Jaipur",
            time: "6 PM - 7:30 PM",
            money: "₹1000",
            interested: "10",
            date: "12-JAN-2003",
          },
          {
            id: 1,
            img: "https://s3-alpha-sig.figma.com/img/819d/3f9b/a49f618db55f1325ad99143974759cc3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fF~AbcAmbjbhwDqwbNKZXu6uBGd-qhvKlNwkUjFj1nyvh3RaBt8RGxBFy-OXImKs64sV0oYh656UdX2htiLlmFdIP1LF6AylXZRBhg52SkVaps4Vwdlw-w7dug9ztLzMI~QGAHyDxc984KJStX3VC4mdrpmyYush-6JUI-LKXZ6~HZAq6a5sWRLQfnvEyhQ68G0A3WOB3pUYAqRfXf-1moUix0bi0WP1Ecv8xNDm19vzFrtBiBEa8f0l6WXQfNbSbhfTT4iMN6LtxaIWa0FB2E4IKoxuxcSCNvuWS7xPkyKORhHFgtHYVsUgmkd4M6esMRFTnBjTspEEkb9JIYsQNw__",
            line1: "Education & Business",
            line2: "The Road to Jobs and Internships",
            location: "Hotel Jaipur",
            time: "6 PM - 7:30 PM",
            money: "₹1000",
            interested: "10",
            date: "12-JAN-2003",
          },
          {
            id: 1,
            img: "https://s3-alpha-sig.figma.com/img/7b3b/8b35/434cbe86f4083f682bfa79173c93ed70?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WQkKR8GQEIKi~CL1yqbP-vObiy29IC1gIn3jeojxOCUYoyPyZGdBv5~lCbAu14DQfMKLzmHpyZyv8N3g23tjdYhiI7Kk35oMT8nB2dRwcgyihgaWnhEUJNZc-Gn585uHJiNRpydOrJ1HyShwrldTy37QEylBOUZSNJr6JxrOCqPRbwu25NgZ~7KaTBPg8QfS71vHtst7q18Vw4oZJY15UD8UxFIx4TEKiXJNsx1b3BINRSpqtDm6mvo9JrHzAgm0O4PzGZZLC4wPNH9DPJzgc4Y~qSSkK59obMX5zZSx18uZbT18lsiZ9UeDRZJm-wkbALFzhwJ4-9LbahDg5cZ1YQ__",
            line1: "Education & Business",
            line2: "The Road to Jobs and Internships",
            location: "Hotel Jaipur",
            time: "6 PM - 7:30 PM",
            money: "₹1000",
            interested: "10",
            date: "12-JAN-2003",
          },
          
          // Add more event objects here...
        ];

        setEvents(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-black  bg-cover w-full   text-white" style={{ backgroundImage: `url(${img2})` }}>
     
      <div className="">
        
      <div
  className="absolute w-full h-[40%]  top-[25rem] z-20 bg-cover   "
  style={{
    backgroundImage: `url(${img3})`,
  }}
>
<div className="flex items-center  z-50 w-[18rem] sm:w-[20rem] lg:w-[40%] absolute top-[8rem] left-[17%] sm:left-[25%] md:left-[30%] mx-auto mt-3  sm:mt-10 md:mt-10">
  {/* Input Field */}
  <div className="flex items-center border-2 border-[#f5167e] bg-white rounded-xl overflow-hidden px-4 w-full">
    <input
      type="text"
      placeholder="Search by Events"
      value={searchTerm}
      onChange={handleInputChange}
      className="bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none py-3 w-full"
    />
  </div>
  
  {/* Search Button */}
  <button className="absolute right-0 px-4 py-[1.2rem] bg-[#f5167e] rounded-lg text-white hover:bg-[#e41472] transition">
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


      </div>

      
      <section className="py-8 z-40 max-w-7xl  px-2 mx-auto">
        <h2 className="text-3xl font-bold text-start   sm:mt-6 md:mt-12 mb-8">
          Discover the Best of Online Events
        </h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {events.map((event) => (
            <div className="max-w-sm mx-auto  text-white rounded-lg overflow-hidden  relative">
            
            <div className="relative ">
              <Link to='/event-details'  className="block no-underline">
              <img
                src={event.img}
                alt="ForByStudents Logo"
                className="w-80  h-80 object-cover rounded-2xl"
              />
              </Link>
              
              <div className="absolute top-2 right-2 bg-[#262626] text-[#f5167e] rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
                </svg>
              </div>
            </div>
          
            {/* Badge (Line1) */}
            <div className="absolute  top-[17rem] left-4">
              <span className="inline-block px-3 py-1 text-sm text-white bg-[#f5167e] rounded-md">
                {event.line1}
              </span>
            </div>
          
            {/* Event Details */}
            <div className="py-4 flex gap-4">
              {/* Date Section */}
              <div className="flex flex-col items-center">
                <span className="text-[#f5167e] text-lg font-bold">JAN</span>
                <span className="text-white text-2xl font-bold">13</span>
              </div>
          
              {/* Event Description */}
              <div>
                <p className="text-lg font-semibold">The Road to Jobs and Internships: Starting with LinkedIn</p>
                <p className="text-sm text-white mt-2">
                  <span className="font-bold">📍 Marriott Hotel, Jaipur</span>
                </p>
                <p className="text-sm text-[#f5167e] mt-1">
                  <span>🕒 6 PM – 7:30 PM</span>
                </p>
                <p className="text-md text-white mt-4">
                  From <span className="font-bold">₹1,000</span>{' '}
                  <span className="ml-2">
                    <span className="text-[#f5167e]">★</span> 21 interested
                  </span>
                </p>
              </div>
            </div>
          </div>
          ))}
        </div>
        
        <Link to='/event'  className="block no-underline">
        <button className="block text-xl mx-auto mt-8  w-[20rem] sm:w-[24rem] px-6 py-3 bg-white rounded-full text-[#f5167e] font-bold ">
          See More
        </button>
        </Link>
      </section>

      {/* Trending Events */}
      <section className="py-8 max-w-7xl px-2 mx-auto">
        <h2 className="text-3xl font-bold text-start mb-8">
          Trending Events Around the World
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <div className="max-w-sm mx-auto  text-white rounded-lg overflow-hidden  relative">
            {/* Image Section */}
            <div className="relative ">
            <Link to='/event-details'  className="block no-underline">
              <img
                src={event.img}
                alt="ForByStudents Logo"
                className="w-full h-64 object-cover rounded-2xl"
              />
              </Link>
              {/* Star Icon */}
              <div className="absolute top-2 right-2 bg-[#262626] text-[#f5167e] rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
                </svg>
              </div>
            </div>
          
            {/* Badge (Line1) */}
            <div className="absolute   top-[13.5rem] left-4">
              <span className="inline-block px-3 py-1 text-sm text-white bg-[#f5167e] rounded-md">
                {event.line1}
              </span>
            </div>
          
            {/* Event Details */}
            <div className="py-4  flex gap-4">
              {/* Date Section */}
              <div className="flex flex-col items-center">
                <span className="text-[#f5167e] text-lg font-bold">JAN</span>
                <span className="text-white text-2xl font-bold">13</span>
              </div>
          
              {/* Event Description */}
              <div>
                <p className="text-lg font-semibold">The Road to Jobs and Internships: Starting with LinkedIn</p>
                <p className="text-sm text-white mt-2">
                  <span className="font-bold">📍 Marriott Hotel, Jaipur</span>
                </p>
                <p className="text-sm text-[#f5167e] mt-1">
                  <span>🕒 6 PM – 7:30 PM</span>
                </p>
                <p className="text-md text-white mt-4">
                  From <span className="font-bold">₹1,000</span>{' '}
                  <span className="ml-2">
                    <span className="text-[#f5167e]">★</span> 21 interested
                  </span>
                </p>
              </div>
            </div>
          </div>
          
          ))}
         
        </div>
        <Link to='/event'  className="block no-underline">
        <button className="block text-xl mx-auto mt-8  w-[20rem] sm:w-[24rem] px-6 py-3 bg-white rounded-full text-[#f5167e] font-bold ">
          See More
        </button>
        </Link>
      </section>

      
      <section className=" mt-[8rem] h-[13vh] sm:h-[28vh] md:h-[32vh] lg:h-[43vh] bg-[#262626]  py-5">
        <div className="flex flex-row items-center justify-between max-w-7xl mx-auto">
         
          <div className="relative w-1/2 object-cover ">
          <div className="w-full h-[35vh] z-40 absolute -bottom-[13rem] sm:-bottom-[10rem] lg:-bottom-[4rem]">
            <img src={img1} alt="Create Event" className="w-full" />
          </div>
          </div>
          
          <div className="py-1 md:py-4 lg:py-8 w-1/2  md:text-left mt-2 sm:mt-8 md:mt-0 md:pl-12">
            <h2 className="text-[8px] sm:text-xl md:text-xl lg:text-3xl font-extrabold">Make Your Own Event</h2>
            <p className="text-[5px] sm:text-sm md:text-md lg:text-xl mt-2 sm:mt-4 text-white">
              Create and share your own events with the world. Let your ideas
              shine and connect with others.
            </p>
            <Link to='/business'  className="block no-underline">
            <button className="mt-2 sm:mt-6 px-16 py-3 bg-white rounded-full text-[#f5167e]  text-[10px] sm:text-xl  ">
              Create Events
            </button>
            </Link>
          </div>

      
        </div>
      </section>
      <br/>
          <br/>
          <br/>
          
    </div>
  );
};

export default Secondpage;
