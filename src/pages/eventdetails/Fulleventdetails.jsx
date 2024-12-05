import React, { useEffect, useState } from 'react'
import bg1 from '../../assets/bg1.png'
import bg2 from '../../assets/bg2.png'
import Lightbox from './Lightbox';
import Lightbox1 from './Lightbox';

const Fulleventdetails = () => {

    
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

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
    <div>
        <div className="flex justify-center items-center gap-5  bg-[#262626] text-white h-[70vh] overflow-hidden shadow-lg py-16 px-24">
      {/* Left Section: Image */}
      <div className="w-2/5">
        <img
          src="https://s3-alpha-sig.figma.com/img/7598/8bff/6cadefaf19edc68b5d4d6504bf622cc8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UwnJgPmEa~jgKY6XHZWxGFrdAfMmoV8tYXq~OGvqxlmy~dmP9rOWw6uTZfOfvnTlo09X6nv2ksMFI8dUrUD8BqDjSHfVKZvDRTNu1wN9wRiVSgIxjv9o8qyk0vcWfuKiW05fd6Jl3dB-Wysf3QBa9BFBDZIw127w7rrqN5jv5kPs3mdtONH3KA8K2CDj1atQbHVgkfuPloqPgFKRMYNlyKQs7s7pPx7GxdZPPi~GML-K5lcwhaZgIFk4pbUf58KpKVxAScKUbXIdug1Yf3pVVr7S3tcFAwAAQ6BIYjIFwlaJnhu0CjNC-GONRcbt7hldDWAyFyBma28kfzK0nAcPFw__" // Replace with the actual image path
          alt="LinkedIn Webinar"
          className="w-[20rem] h-[20rem] border-1  border-white"
        />
      </div>

      {/* Right Section: Content */}
      <div className="w-3/5 p-4 flex flex-col justify-between">
        {/* Header */}
        <div>
          <h5 className="text-2xl text-[#cccccc]">Educational & Business</h5>
          <h2 className="text-4xl font-bold mt-1">
            The Road to Jobs and Internships: Starting with LinkedIn Webinar
          </h2>
        </div>

        {/* Event Details */}
        <div className="mt-3 text-2xl text-gray-300">
          <div className="flex items-center gap-2">
            <span>📅</span>
            <p>Saturday, 2 December 2023</p>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span>⏰</span>
            <p>6:30 PM – 9:30 PM</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-2 flex-col justify-center gap-3 items-center">
          <div className="flex justify-between text-gray-400">
            <div className="text-[#cccccc] text-2xl">Starting From</div>
            <div className="text-white text-2xl font-bold ml-2">Rs. 1500</div>
          </div>

          <div className='mt-4'>
        <button className="bg-white w-[80%] mx-auto  text-[#f5167e] py-2 px-4 rounded-full text-md">
            Get Ticket
          </button>
        </div>
         
        </div>
        
      </div>
    </div>
    <div style={{backgroundImage: ` url(${bg2})`  }} className=" text-white bg-black bg-cover min-h-screen p-6 font-sans">
      <div className="max-full  mx-auto space-y-8">
       


<div className=" text-white font-sans mt-5 mx-[8rem]">
      <div className="   grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="col-span-2 bg-[#262626] rounded-lg  shadow-lg  space-y-5">
          <h2 className="text-xl font-bold p-6">Location</h2>
          <p className="text-gray-300 px-6">
            Gate No.1, No 30-31, Basement, Plot, near Durgapura Railway Station,
            Jadon Nagar-B, Durgapura, Jaipur, Rajasthan 302018
          </p>
          <iframe
            title="Gate No.1, No 30-31, Basement, Plot, near Durgapura Railway Station,
            Jadon Nagar-B, Durgapura, Jaipur, Rajasthan 302018"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0922172395865!2d144.9537363153188!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2s5th%20Ave!5e0!3m2!1sen!2sin!4v1649347658030!5m2!1sen!2sin"
            className="w-full h-[22rem] rounded-lg border-0"
            loading="lazy"
          ></iframe>
        </div>

       
        <div className="space-y-5">
          
          <div className="bg-[#262626] rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/a511/6394/d8c24efab59533add110ee8338355c42?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kIXv-MDo9lbQDJPhQJL9zfGeurK4YE-W5UexPg7XHJQeqN-KtkMMXxBG3lTM8Wcac9fz~ksf3whNw6RfZ6n6ZVL4rsyPhlBgwk77aJ~0EdCqs6XVN4Q31bLC6AqSzovquhgIf3YtivaQyZb~xZQpuxdu1yCtS~m6e91i5hbU37tnEeDppvmVBpZoz7MyOZYl2jd7jse0FzvA8k2AMmVTAn3968SEylovcOouLva89trRN9BfHkAAMsssBFoFIxkwpWkm4K51OjxFEHBTAmGxTinot6wt2Jp0iBBb3nTwKz3F3wzXhxD5GFX9L3yytd8M8d61kgY7EsQFmdsNA-n6fA__"
                  alt="Attendee 1"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/a511/6394/d8c24efab59533add110ee8338355c42?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kIXv-MDo9lbQDJPhQJL9zfGeurK4YE-W5UexPg7XHJQeqN-KtkMMXxBG3lTM8Wcac9fz~ksf3whNw6RfZ6n6ZVL4rsyPhlBgwk77aJ~0EdCqs6XVN4Q31bLC6AqSzovquhgIf3YtivaQyZb~xZQpuxdu1yCtS~m6e91i5hbU37tnEeDppvmVBpZoz7MyOZYl2jd7jse0FzvA8k2AMmVTAn3968SEylovcOouLva89trRN9BfHkAAMsssBFoFIxkwpWkm4K51OjxFEHBTAmGxTinot6wt2Jp0iBBb3nTwKz3F3wzXhxD5GFX9L3yytd8M8d61kgY7EsQFmdsNA-n6fA__"
                  alt="Attendee 2"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/a511/6394/d8c24efab59533add110ee8338355c42?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kIXv-MDo9lbQDJPhQJL9zfGeurK4YE-W5UexPg7XHJQeqN-KtkMMXxBG3lTM8Wcac9fz~ksf3whNw6RfZ6n6ZVL4rsyPhlBgwk77aJ~0EdCqs6XVN4Q31bLC6AqSzovquhgIf3YtivaQyZb~xZQpuxdu1yCtS~m6e91i5hbU37tnEeDppvmVBpZoz7MyOZYl2jd7jse0FzvA8k2AMmVTAn3968SEylovcOouLva89trRN9BfHkAAMsssBFoFIxkwpWkm4K51OjxFEHBTAmGxTinot6wt2Jp0iBBb3nTwKz3F3wzXhxD5GFX9L3yytd8M8d61kgY7EsQFmdsNA-n6fA__"
                  alt="Attendee 3"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <p className="text-[#f5167e] font-bold">20+ Going</p>
              </div>
              <button className="bg-[#f5167e] hover:bg-[#f5167e] text-white py-2 px-4 rounded-full">
                Interested
              </button>
            </div>
          </div>

         
          <div className="bg-[#262626] rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-bold">Hosted by</h2>
            <div className="flex items-center mt-4 gap-4">
              <img
                src="https://s3-alpha-sig.figma.com/img/a511/6394/d8c24efab59533add110ee8338355c42?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kIXv-MDo9lbQDJPhQJL9zfGeurK4YE-W5UexPg7XHJQeqN-KtkMMXxBG3lTM8Wcac9fz~ksf3whNw6RfZ6n6ZVL4rsyPhlBgwk77aJ~0EdCqs6XVN4Q31bLC6AqSzovquhgIf3YtivaQyZb~xZQpuxdu1yCtS~m6e91i5hbU37tnEeDppvmVBpZoz7MyOZYl2jd7jse0FzvA8k2AMmVTAn3968SEylovcOouLva89trRN9BfHkAAMsssBFoFIxkwpWkm4K51OjxFEHBTAmGxTinot6wt2Jp0iBBb3nTwKz3F3wzXhxD5GFX9L3yytd8M8d61kgY7EsQFmdsNA-n6fA__"
                alt="Host"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold">City Youth Movement</p>
                <div className="flex space-x-2 mt-2">
                  <button className="bg-[#f5167e] hover:bg-[#f5167e] text-white py-1 px-3 rounded-full">
                    Contact
                  </button>
                  <button className="bg-white  text-[#f5167e] py-1 px-3 rounded-full">
                    + Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 bg-[#262626] rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-bold">Artists</h2>
          <div className="flex items-center space-x-4 mt-4 overflow-x-auto">
            {[1, 2, 3, 4, 5].map((artist, index) => (
              <div key={index} className="text-center">
                <img
                  src={`https://s3-alpha-sig.figma.com/img/a511/6394/d8c24efab59533add110ee8338355c42?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kIXv-MDo9lbQDJPhQJL9zfGeurK4YE-W5UexPg7XHJQeqN-KtkMMXxBG3lTM8Wcac9fz~ksf3whNw6RfZ6n6ZVL4rsyPhlBgwk77aJ~0EdCqs6XVN4Q31bLC6AqSzovquhgIf3YtivaQyZb~xZQpuxdu1yCtS~m6e91i5hbU37tnEeDppvmVBpZoz7MyOZYl2jd7jse0FzvA8k2AMmVTAn3968SEylovcOouLva89trRN9BfHkAAMsssBFoFIxkwpWkm4K51OjxFEHBTAmGxTinot6wt2Jp0iBBb3nTwKz3F3wzXhxD5GFX9L3yytd8M8d61kgY7EsQFmdsNA-n6fA__`}
                  alt={`Artist ${artist}`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <p className="text-white text-sm mt-2">Clover</p>
              </div>
            ))}
          </div>
        </div>
        </div>

      
      </div>
    </div>



<section>
  <Lightbox1/>
</section>


    
       
{/* <section className='mx-[8rem]'>
          <h2 className="text-lg font-bold">Highlights</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[1, 2, 3, 4].map((highlight, index) => (
              <img
                key={index}
                src={`https://s3-alpha-sig.figma.com/img/60a7/8fe4/ce390c6696651d2ecd163e996033c49b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ltWl5g7-0LFmKJyO4L7k5Yr0vi1~9ss2m8RfawmHq~afmabRvEchJlN402LDi2QRTSoivX20ga6x-jx97PGH1b3KF8AxMllPaFQul-f5Io~dek9AcP2e28pvdWg-MoB36B5MB8oMD-hZcdRFGBwlB18L5tWcUXABhYZqteL4aj~-0s~fqUUbV~EKWjy6N26-K31sYRwTb4WjNECm~F7KffTMsnXDmpmWujaz49v-lTrGaCiFjgXXfMnFSg9l3mJ0xN6ZEkeXWiLSPstOM5OjKjCQWABg2vr~YalnGRxe~4V-9tYJYE2sImo3x14Ir0ttoj1a~U0IyaDoDY7nnqxtCQ__`} // Replace with highlight images
                alt={`Highlight ${highlight}`}
                className="w-full h-32 rounded-lg object-cover"
              />
            ))}
          </div>
        </section> */}
{/* <div>



  
<section className="mx-[8rem] ">
  <div className="grid grid-cols-4  gap-x-4 gap-y-8 p-4 ">
  
    <div className="col-span-2">
      <img
        src="https://s3-alpha-sig.figma.com/img/60a7/8fe4/ce390c6696651d2ecd163e996033c49b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ltWl5g7-0LFmKJyO4L7k5Yr0vi1~9ss2m8RfawmHq~afmabRvEchJlN402LDi2QRTSoivX20ga6x-jx97PGH1b3KF8AxMllPaFQul-f5Io~dek9AcP2e28pvdWg-MoB36B5MB8oMD-hZcdRFGBwlB18L5tWcUXABhYZqteL4aj~-0s~fqUUbV~EKWjy6N26-K31sYRwTb4WjNECm~F7KffTMsnXDmpmWujaz49v-lTrGaCiFjgXXfMnFSg9l3mJ0xN6ZEkeXWiLSPstOM5OjKjCQWABg2vr~YalnGRxe~4V-9tYJYE2sImo3x14Ir0ttoj1a~U0IyaDoDY7nnqxtCQ__"
        alt="First Image"
        className="w-full h-full  rounded-lg"
      />
    </div>
    <div className=''>
      <img
        src="https://s3-alpha-sig.figma.com/img/8178/6c2e/e11ee7e59391e1babbca0a2fb1ceb26c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dU0xQNmZEOJazMg3OuVquCicg2lnhH8V5UTdtt8SGr801ScYBVH29p54ndKTiMtuCMaHF87zjeZrL5phIkJ3pesYkgm~tGys4WY31YY0WF2P0qBMjFY4PCLF5p2IDP2c3y7WnL1SFar69me1ul4XkVg3udkLt0zkJ96onRqgMKoRaENbd9OWe3rV7tDp0D75E0IsMkVDsSiCbgd~mTGv~oMb5GrrJSGXhI9TcumqWZkwCAs1L~A3-RGz55eiOtYUzvIVSvTTYg4untMBix6UDHgPsfY1RNFsN0wwghzlpUxV4YUwBTvlckSFSiCDfyBlQfYxBUj-sAEDXuJzBQRuzg__"
        alt="Second Image"
        className="w-full h-full  rounded-lg"
      />
    </div>

    <div className=''>
      <img
        src="https://s3-alpha-sig.figma.com/img/15b9/f126/cbd8968b2c8d0e21d748a3a8b5ad29d9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CzxsT01JdxhXn-tclgVYaMo29jifSDDDZDvICOtXxGm8sk4vrGrY5kgf5tgl8-5xzDgEq6DmRJMrLPczfOJAZKT1zh73Vzrl53wtLis1oUT40dixxWe7PdTeG~N4o5fnWrAab~u48Bjt5O0ZlefGrpZ-ySiEqQNKClQgKH6ElABxqu~AqV1Q5SKNPr6doB4G27eEQ-q4UNNp-B2~XrIogb4PJZcMEc7dJIgyXcN-1F4UZPAuQIHNT~a5vtYOlEzAg9fzokBiJRfCDBa6B61z-zCeIJCS9WRnBWD5zEYjueZAZvCbuRvs-Z5BOy2DSRx5RIWRSub-EsTqQDy6Ke2NLg__"
        alt="Third Image"
        className="w-full h-full  rounded-lg"
      />
    </div>
    <div className="">
      <img
        src="https://s3-alpha-sig.figma.com/img/72e3/7157/df9f455d89e7485051d5220961e4d9a4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h-pgfxwgx~JVV54qzzO-pUJCX4ZpmUfCNtqSkU1zb0w~HrALPnvUzxclpR-FC3orujixAav3ARoLGKCtVrhsVvZnpZn3jQ0Im~t13ZTbbo9wa-AjC~JvixXeWNOnUAgGKqvcnF1WyeS7Y5bMo4KYqL8EED372OPeJ9ZRH1-RLLLxSDqb~vYkrGoK3nK-1~NTn1AYR~OjmvL4iDu3pyzH3J-lxeraNp4q16MrphEOuGK6xTKcTP30cmPCGdOS2H-ZrtpUpCa2iJFp7AVxXyM--00XVFMYW2uQaowex-xGGRey~bNNDkegqKXLoSnDeup0F7PCr-fzgSxuIw1EWgkxxw__"
        alt="Fourth Image"
        className="w-full h-full  rounded-lg"
      />
    </div>
    <div className=''>
      <img
        src="https://s3-alpha-sig.figma.com/img/1d11/4730/18806e4d2287700f2e54c975d903f84a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DY2WTdMvxt2GGyPcC5jHGfT3t5S07LAAaVl2vTj9itIlcGABI-FQPqTE9N14lWaJ7N2Z335QM620vzyPfEksGfH-qtX6HsZHXVN5Q1wc7lgomPGKB87M-9C7e2sJVXAXYhknQMxWfUT~4qoRcD5R1wJkl9PTSx8dlFmytHwXcBRiOmTdBjKOaC9z7E9dPQcOlGqcnd8AO5aJ2AgxwRStt9Ukpq1KjZUq9kyPdh0-zQoU90HLFwmE1E19sbvg8gKo1EeZHNwWOJXCJfiQYENomurlgkNB3KDrnLK~QhqKzBdxEblaNBA6esE0oHrC4hbwIWgzwWsgs3a-xMaXMPe8HA__"
        alt="Fifth Image"
        className="w-full h-full  rounded-lg"
      />
    </div>
    <div className="col-span-2 ">
      <img
        src="https://s3-alpha-sig.figma.com/img/6afe/5bb6/371e81c94225b1fd92b47440cb9d81b1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UC5blKa-y9Pb9sVT~VqYq0d-b4GiP0aQgS9MuLTwo0cakeE~Zbd5x5PxDN2tggcCN4pub1YtQLJrTvCkgDXFxONWj5HnP3Z2MdjGm-8nMhNHvtpZvWlQ23CD2mxFKqoCQzejNinEbvgRGr9lSZuMKBqGjuYX~NNnkPvxcoTObiSUop2FDkhuOwNY~ZEaZusgVMERFENtngQ9kuWmrdZWZdYYuj47UaL94oeukRqqPHN~JvO0EbYGGmQSDnHhw27pbk3qWM5JFB0B-eINuxzDdY4EO8P8fdLskm3e5npZxXBItHqP7LiFtwbUaipjyiya-B3Y40eCjOdCgZED3dbgZw__"
        alt="Sixth Image"
        className="w-full   rounded-lg"
      />
    </div>
  </div>
</section>
</div> */}

           
        <section className='mx-[8rem]'>
          <h2 className="text-lg font-bold">Event Description</h2>
          <p className="text-[#cccccc] mt-4">
          Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!
<br/>
<br/>
City Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!
<br/>
<br/>
Bring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now!
<br/>
<br/>
3 Reasons to attend the event:
<br/>
<br/>
1. The FIRST Christmas concert of Mumbai!
<br/>
2. A special Christmas Choir!
<br/>
3. Special Dance performances and many more surprises!
          </p>
        </section>

        
        <section className='mx-[8rem]'>
          <h2 className="text-lg font-bold">Terms and Conditions</h2>
          <p className="text-gray-300 mt-4">
          Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!
<br/>
<br/>
City Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your 
          </p>
        </section>

       
        <section className='mx-[8rem]'>
          <h2 className="text-lg font-bold">Tags</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Business", "Networking", "Webinar", "Online Event"].map(
              (tag, index) => (
                <span
                  key={index}
                  className="bg-[#262626] text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </section>



        <div className='p-24'>
        <h1 >You May Also Like</h1>
        <div  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> 
            
          {events.map((event) => (
           <div className="max-w-sm mx-auto  text-white rounded-lg overflow-hidden  relative">
            
           <div className="relative ">
             <img
               src={event.img}
               alt="ForByStudents Logo"
               className="w-full h-64 object-cover rounded-2xl"
             />
             
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
           <div className="absolute bottom-[16rem] left-4">
             <span className="inline-block px-3 py-1 text-sm text-white bg-[#f5167e] rounded-2xl">
               {event.line1}
             </span>
           </div>
         
           {/* Event Details */}
           <div className="py-4 px-4 flex gap-4">
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

        </div>

      </div>
    </div>
    </div>
  )
}

export default Fulleventdetails