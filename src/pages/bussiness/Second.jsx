import React from "react";
import img1 from '../../assets/bussiness3.png'
import img2 from '../../assets/bussiness4.png'
import img3 from '../../assets/bussiness5.png'
import img4 from '../../assets/hello.png'
import bg7 from '../../assets/bg7.png'
import bg1 from '../../assets/bg1.png'
import bg2 from '../../assets/bg2.png'
import mobile from '../../assets/mobile.png'
import one from '../../assets/01.png'
import two from '../../assets/02.png'
import three from '../../assets/03.png'
import './second.css'

const Second = () => {
  const features = [
    {
      number: one,
      title: "Sell Tickets",
      description:
        "Sell tickets easily with a seamless process that prioritizes your customers.",
      imageSrc: img1,
    },
    {
      number: two,
      title: "Build a Following",
      description:
        "Connect with your audience and grow your brand using our advanced tools.",
      imageSrc: img2,
    },
    {
      number: three,
      title: "Promote Directly to Them",
      description:
        "Target your audience with tailored promotions and notifications.",
      imageSrc: img3, 
    },
  ];

  const footerFeatures = [
    {
      title: "Sell Tickets",
      description: "Our ticketing experience is optimised for you and your customers. Our web pages are designed for speed and search, so your events are found quicker, and customers checkout faster. And it’s even better in our apps, where 70% of our ticket sales are made",
      img:'https://s3-alpha-sig.figma.com/img/b417/8168/aa4b35acc7e119cace70a325c127c9d7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VcxB~kZbEmYDYaPTvKs~n2CVi2NCyst64a8RMpw60tyUw2LqP8POod6ga0MUWjIk70Hly7H1nHMUiP0AB3B942LV~DL2nUlLAV95-M4GiLjDs2kQn9zpqGOlGDbMJPzEI6~KHut-iFXPuRSleWWi-K-0dsmUOHYbgaQlMrPNj~75QMC-1UdL83a-En0YFHjn168lR0otLOAuLw9G5c90O6oZZf-zH6J2IEALF8bhVdzlIGcqjzpHRuVco2u3~iwcAMoBZRZSaocSFGYRNL8zJQCJ1GE75aLs5Jf9xvYayvCXyVgVtgz30IceXJhuihpgDBt3JIvxmZN8n3a5vu6PZg__'
    },
    {
      title: "Market Your Events",
      description: "ach more customers with our unique promotional tools and world-leading customer apps. And integrate with the most popular ad and analytics platforms so you can optimise all your marketing channels too.",
        img:'https://s3-alpha-sig.figma.com/img/fd92/221b/f517fa8ee24c97eb16245b68abaf7b3f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ox9X4MoWUOyz5mzCnecdy1y9ObqwgQsuX27HpYs7pRh-1Wft0ue1roptuVL0ipkAO8rOdb49ivsYG6v6~86wkg-VYTPqXHtyU0FTPXZ79o2XjoETIZgDzL9OxqOQP2IIPnAwvt5Uqchsi~tqdrdIfSfBki4oU5bkeT0Of7f9BMbGmQ0BiMlD3cANnNRGXsf4B~k7iexBDV2IopiK6sDHpSPVgDn1vj187Aku3pAnA82GP2e9W8d4koggbBpHKOlxe4xuVda~vT9qFzMXK7K0uzMRa3~JOqobHo4~Hx30D0lf-Sbs4jhhOI2ZRPy2z7XtHAGGv~MsWpoHpBuyqJ-NzQ__'
    },
    {
      title: "Manage Operations",
      description: "Get customers through the door faster with Sort My Scene Scan, our robust and reliable ticket scanning app for iPhone and Android.",
        img:'https://s3-alpha-sig.figma.com/img/dd04/7d61/bedf5f94365cf9a1f39706054b481b32?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QuQV6vQ-hmPU4gCOQYW-zT3q9zJmFDRxALp3nNZtgStfg~g4ooYdfLf8PmkyG3V6OgNsR~3oNciH2yxIAjYSbUwndwpsm3nloSBYylDAReTl0rKR2nxbC87~GQyUdlAJS2EIbgCgS5371pi2pwANeIe9IQZf3YGL9BIhQ6LPZvAkYsHl9tBJUqXwJVz5whhxrdA6G~6mlkY5DjYadGNQ8JUTIp6bmaSqKaeWiPFSbNl8g~0lwZCJn9XqT52JenvDiYLoIX75glhLrIhiFRq5izADhlx3C3wqviQ089hZu9TOnYCbkgS2QSXCDKY~foaCYiWZ9X9DJ0YcHwnd1pp6CA__'
    },
  ];

  return (
    <div style={{ backgroundImage: ` url(${bg2})` }} className="bg-black bg-cover text-white ">
      <img src={bg7} className='z-10 absolute bottom-[6rem] sm:bottom-[2rem] ' />
      

      <div className=" text-white  flex flex-col lg:flex-row items-center w-11/12 mx-auto">
      
      <div className="w-full  md:w-1/2 flex justify-center">
      <img
        src={img4}
        
        className="rounded-lg justify-items-center w-full h-full"
      />
    </div>

      
      <div className="hello lg:w-1/2">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          A new approach to ticketing that’s all about building your following,
          not ours.
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          We provide the tools to build a loyal customer base that you can
          re-engage whenever you need them. Boosting your revenues, freeing up
          your time, and making your marketing go further.
        </p>
        <button className="bg-[#f5167e] text-white py-3 px-16 rounded-full text-2xl ">
          List event
        </button>
      </div>
    </div>


    <div className="flex-col sm:flex-row">
  {/* Section 1 */}
  <div className="text-white py-10 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-20 items-center w-11/12 mx-auto">
    <div className="lg:w-1/2 text-start lg:text-left">
      <img className="h-[8rem]  lg:mx-0 mb-4" src={one} alt="Feature 1" />
      <h3 className="text-2xl font-semibold mb-4">{'Promote Directly to Them'}</h3>
      <p className="text-lg text-gray-300">
        {'Increase conversions and give your customers a premium buying experience. Our optimised, intuitive ticketing and marketing features give you everything you need to maximise ticket sales.'}
      </p>
    </div>
    <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
      <img
        src={img1}
        alt="Feature Image 1"
        className="rounded-lg w-3/4 lg:w-full"
      />
    </div>
  </div>

  {/* Section 2 */}
  <div className="text-white py-10 px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row gap-20 items-center w-11/12 mx-auto">
    <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
      <img
        src={img2}
        alt="Feature Image 2"
        className="rounded-lg w-3/4 lg:w-full"
      />
    </div>
    <div className="lg:w-1/2 text-start lg:text-left">
      <img className="h-[8rem]  lg:mx-0 mb-4" src={two} alt="Feature 2" />
      <h3 className="text-2xl font-semibold mb-4">{'Promote Directly to Them'}</h3>
      <p className="text-lg text-gray-300">
        {'Increase conversions and give your customers a premium buying experience. Our optimised, intuitive ticketing and marketing features give you everything you need to maximise ticket sales.'}
      </p>
    </div>
  </div>

  {/* Section 3 */}
  <div className="text-white py-10 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-20 items-center w-11/12 mx-auto">
    <div className="lg:w-1/2 text-start lg:text-left">
      <img className="h-[8rem]  lg:mx-0 mb-4" src={three} alt="Feature 3" />
      <h3 className="text-2xl font-semibold mb-4">{'Promote Directly to Them'}</h3>
      <p className="text-lg text-gray-300">
        {'Increase conversions and give your customers a premium buying experience. Our optimised, intuitive ticketing and marketing features give you everything you need to maximise ticket sales.'}
      </p>
    </div>
    <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
      <img
        src='https://s3-alpha-sig.figma.com/img/cef3/745e/e62b7da71d5b3c30fe8931d17adc3f7f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m80saiekD6GsSpY4S2vZObsbKEnFcrZQPh-z9T9Bnlf0U7jIRU5BJCCVEcPWpcP2uHFqZRrVyAyH~xqXnbsmiMJr7KI76xBe4X2nbzFFu9hdwA0BGSkYZz3d4nttgJ363SiluHO4OW37OCfqnhHAGGFvSuXWvhKFbL7UgxMN5IixSf4YWa1fH1C~BHuhE7KXKVD8-pqaUof6BTevijxlkSCGhtlmaJnVkeOOzFfiNPQ-YbFjhTNHFYDWghSvKChlZjtY3T9f8Cagxfl14PuV5aPNePfJZgx9Op2fLhjkxtmTr00NbgNDFhWK0YKfBsjETOnFHl58Suq1IKU~73Cnxg__'
        alt="Feature Image 3"
        className="rounded-lg w-3/4 lg:w-full"
      />
    </div>
  </div>
</div>




{/* {features.map((feature, index) => (
  <section
    key={index}
    className={`flex flex-col md:flex-row items-center justify-center px-16 py-16 ${
      index % 2 == 0 ? "md:flex-row-reverse" : "items-center justify-center"
    }`}
  >
    <div className="w-full h-full md:w-1/2 px-4 flex justify-center">
      <img
        src={feature.imageSrc}
        alt={feature.title}
        className="rounded-lg justify-items-center"
      />
    </div>
    <div className="w-full md:w-1/2 px-4 flex flex-col items-center md:items-start  justify-items-end  text-center md:text-left">
      <h2 className="text-5xl font-bold text-[#f5167e] mb-4">{feature.number}</h2>
      <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
      <p className="text-lg text-gray-300">{feature.description}</p>
    </div>
  </section>
))} */}


<section className=" text-white pt-16 w-11/12 mx-auto">
  <h2 className="text-center mx-4  text-4xl font-bold mb-8">
    We push boundaries, but we build on solid foundations. All the basics are covered too.
  </h2>
  <div className="  text-white py-8">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <div className="text-center md:text-left">
            <div className="relative mb-6">
              <img
                src="https://s3-alpha-sig.figma.com/img/b417/8168/aa4b35acc7e119cace70a325c127c9d7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VcxB~kZbEmYDYaPTvKs~n2CVi2NCyst64a8RMpw60tyUw2LqP8POod6ga0MUWjIk70Hly7H1nHMUiP0AB3B942LV~DL2nUlLAV95-M4GiLjDs2kQn9zpqGOlGDbMJPzEI6~KHut-iFXPuRSleWWi-K-0dsmUOHYbgaQlMrPNj~75QMC-1UdL83a-En0YFHjn168lR0otLOAuLw9G5c90O6oZZf-zH6J2IEALF8bhVdzlIGcqjzpHRuVco2u3~iwcAMoBZRZSaocSFGYRNL8zJQCJ1GE75aLs5Jf9xvYayvCXyVgVtgz30IceXJhuihpgDBt3JIvxmZN8n3a5vu6PZg__"
                alt="Sell Tickets"
                className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-[450px] mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col px-3 items-start">
            <h3 className="text-xl font-bold mb-4">SELL TICKETS</h3>
            <p className="text-gray-300 text-start">
              Our ticketing experience is optimised for you and your customers.
              Our web pages are designed for speed and search, so your events
              are found quicker, and customers checkout faster. And it’s even
              better in our apps, where 70% of our ticket sales are made.
            </p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="relative mb-6">
              <img
                src="https://s3-alpha-sig.figma.com/img/b417/8168/aa4b35acc7e119cace70a325c127c9d7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VcxB~kZbEmYDYaPTvKs~n2CVi2NCyst64a8RMpw60tyUw2LqP8POod6ga0MUWjIk70Hly7H1nHMUiP0AB3B942LV~DL2nUlLAV95-M4GiLjDs2kQn9zpqGOlGDbMJPzEI6~KHut-iFXPuRSleWWi-K-0dsmUOHYbgaQlMrPNj~75QMC-1UdL83a-En0YFHjn168lR0otLOAuLw9G5c90O6oZZf-zH6J2IEALF8bhVdzlIGcqjzpHRuVco2u3~iwcAMoBZRZSaocSFGYRNL8zJQCJ1GE75aLs5Jf9xvYayvCXyVgVtgz30IceXJhuihpgDBt3JIvxmZN8n3a5vu6PZg__"
                alt="Sell Tickets"
                className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-[450px] mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col px-3 items-start">
            <h3 className="text-xl font-bold mb-4">SELL TICKETS</h3>
            <p className="text-gray-300 text-start">
              Our ticketing experience is optimised for you and your customers.
              Our web pages are designed for speed and search, so your events
              are found quicker, and customers checkout faster. And it’s even
              better in our apps, where 70% of our ticket sales are made.
            </p>
            </div>
          </div>

          
          <div className="text-center md:text-left">
            <div className="relative mb-6">
              <img
                src="https://s3-alpha-sig.figma.com/img/dd04/7d61/bedf5f94365cf9a1f39706054b481b32?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QuQV6vQ-hmPU4gCOQYW-zT3q9zJmFDRxALp3nNZtgStfg~g4ooYdfLf8PmkyG3V6OgNsR~3oNciH2yxIAjYSbUwndwpsm3nloSBYylDAReTl0rKR2nxbC87~GQyUdlAJS2EIbgCgS5371pi2pwANeIe9IQZf3YGL9BIhQ6LPZvAkYsHl9tBJUqXwJVz5whhxrdA6G~6mlkY5DjYadGNQ8JUTIp6bmaSqKaeWiPFSbNl8g~0lwZCJn9XqT52JenvDiYLoIX75glhLrIhiFRq5izADhlx3C3wqviQ089hZu9TOnYCbkgS2QSXCDKY~foaCYiWZ9X9DJ0YcHwnd1pp6CA__" 
                alt="Manage Operations"
                className="w-full  max-w-[250px] md:max-w-[300px] lg:max-w-[450px] mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col px-3 items-start">
            <h3 className="text-xl font-bold mb-4">SELL TICKETS</h3>
            <p className="text-gray-300 text-start">
              Our ticketing experience is optimised for you and your customers.
              Our web pages are designed for speed and search, so your events
              are found quicker, and customers checkout faster. And it’s even
              better in our apps, where 70% of our ticket sales are made.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>

      
<div className=" min-h-[80vh] flex justify-center items-start p-6 lg:p-8">
  <div className="flex mb-5 flex-col gap-5 lg:flex-row items-center max-w-7xl mx-auto ">
    {/* Image Section */}
    <div className="w-full lg:w-1/2 flex justify-center relative">
      <img
        src={mobile} 
        alt="Mobile 1"
        className="w-fi sm:w-3/4 lg:w-2/3 xl:w-full lg:h-full max-w-xs lg:max-w-xl shadow-lg"
      />
    </div>

    {/* Text Section */}
    <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
      <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
        DESIGNED WITH CARE.
      </h2>
      <p className="text-gray-300 text-base lg:text-start sm:text-lg mb-6 leading-relaxed">
        We care about your customers’ experience with your brand as much as you do. That’s why we craft and continually improve every aspect of our customer experience. So you can be confident your events and business are represented with the respect they deserve.
      </p>
      <button className="bg-[#f5167e] text-white font-semibold px-8 sm:px-12 py-2 sm:py-3 rounded-full shadow-lg  transition duration-300">
        List event
      </button>
    </div>
  </div>
</div>


    </div>
  );
};


export default Second