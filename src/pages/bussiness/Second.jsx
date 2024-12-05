import React from "react";
import img1 from '../../assets/bussiness3.png'
import img2 from '../../assets/bussiness4.png'
import img3 from '../../assets/bussiness5.png'
import img4 from '../../assets/hello.png'
import bg7 from '../../assets/bg7.png'

const Second = () => {
  const features = [
    {
      number: "01",
      title: "Sell Tickets",
      description:
        "Sell tickets easily with a seamless process that prioritizes your customers.",
      imageSrc: img1,
    },
    {
      number: "02",
      title: "Build a Following",
      description:
        "Connect with your audience and grow your brand using our advanced tools.",
      imageSrc: img2,
    },
    {
      number: "03",
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
    <div className="bg-black text-white">
      <img src={bg7} className='z-10 absolute bottom-[10rem] ' />
      

      <div className="bg-black text-white py-10 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center">
      
      <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={img4}
        // alt={feature.title}
        className="rounded-lg justify-items-center"
      />
    </div>

      
      <div className="mt-8 lg:mt-0  text-start lg:text-left lg:w-1/2">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          A new approach to ticketing that’s all about building your following,
          not ours.
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          We provide the tools to build a loyal customer base that you can
          re-engage whenever you need them. Boosting your revenues, freeing up
          your time, and making your marketing go further.
        </p>
        <button className="bg-[#f5167e] text-white py-2 px-12 rounded-full text-lg hover:bg-[#f5167e]">
          List event
        </button>
      </div>
    </div>





{features.map((feature, index) => (
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
))}


<section className="bg-black text-white py-16">
  <h2 className="text-center mx-[15rem] text-3xl font-bold mb-8">
    We push boundaries, but we build on solid foundations. All the basics are covered too.
  </h2>
  <div className="min-h-screen bg-gradient-to-b from-black to-[#262626] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="text-center md:text-left">
            <div className="relative mb-6">
              <img
                src="https://s3-alpha-sig.figma.com/img/b417/8168/aa4b35acc7e119cace70a325c127c9d7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VcxB~kZbEmYDYaPTvKs~n2CVi2NCyst64a8RMpw60tyUw2LqP8POod6ga0MUWjIk70Hly7H1nHMUiP0AB3B942LV~DL2nUlLAV95-M4GiLjDs2kQn9zpqGOlGDbMJPzEI6~KHut-iFXPuRSleWWi-K-0dsmUOHYbgaQlMrPNj~75QMC-1UdL83a-En0YFHjn168lR0otLOAuLw9G5c90O6oZZf-zH6J2IEALF8bhVdzlIGcqjzpHRuVco2u3~iwcAMoBZRZSaocSFGYRNL8zJQCJ1GE75aLs5Jf9xvYayvCXyVgVtgz30IceXJhuihpgDBt3JIvxmZN8n3a5vu6PZg__"
                alt="Sell Tickets"
                className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px] mx-auto rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">SELL TICKETS</h3>
            <p className="text-gray-300">
              Our ticketing experience is optimised for you and your customers.
              Our web pages are designed for speed and search, so your events
              are found quicker, and customers checkout faster. And it’s even
              better in our apps, where 70% of our ticket sales are made.
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="relative mb-6">
              <img
                src="https://s3-alpha-sig.figma.com/img/fd92/221b/f517fa8ee24c97eb16245b68abaf7b3f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ox9X4MoWUOyz5mzCnecdy1y9ObqwgQsuX27HpYs7pRh-1Wft0ue1roptuVL0ipkAO8rOdb49ivsYG6v6~86wkg-VYTPqXHtyU0FTPXZ79o2XjoETIZgDzL9OxqOQP2IIPnAwvt5Uqchsi~tqdrdIfSfBki4oU5bkeT0Of7f9BMbGmQ0BiMlD3cANnNRGXsf4B~k7iexBDV2IopiK6sDHpSPVgDn1vj187Aku3pAnA82GP2e9W8d4koggbBpHKOlxe4xuVda~vT9qFzMXK7K0uzMRa3~JOqobHo4~Hx30D0lf-Sbs4jhhOI2ZRPy2z7XtHAGGv~MsWpoHpBuyqJ-NzQ__" 
                alt="Market Events"
                className="w-full h-60 max-w-[250px] md:max-w-[300px] lg:max-w-[350px] mx-auto rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">MARKET YOUR EVENTS</h3>
            <p className="text-gray-300">
              Reach more customers with our unique promotional tools and
              world-leading customer apps. And integrate with the most popular
              ad and analytics platforms so you can optimise all your marketing
              channels too.
            </p>
          </div>

          
          <div className="text-center md:text-left">
            <div className="relative mb-6">
              <img
                src="https://s3-alpha-sig.figma.com/img/dd04/7d61/bedf5f94365cf9a1f39706054b481b32?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QuQV6vQ-hmPU4gCOQYW-zT3q9zJmFDRxALp3nNZtgStfg~g4ooYdfLf8PmkyG3V6OgNsR~3oNciH2yxIAjYSbUwndwpsm3nloSBYylDAReTl0rKR2nxbC87~GQyUdlAJS2EIbgCgS5371pi2pwANeIe9IQZf3YGL9BIhQ6LPZvAkYsHl9tBJUqXwJVz5whhxrdA6G~6mlkY5DjYadGNQ8JUTIp6bmaSqKaeWiPFSbNl8g~0lwZCJn9XqT52JenvDiYLoIX75glhLrIhiFRq5izADhlx3C3wqviQ089hZu9TOnYCbkgS2QSXCDKY~foaCYiWZ9X9DJ0YcHwnd1pp6CA__" 
                alt="Manage Operations"
                className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px] mx-auto rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">MANAGE OPERATIONS</h3>
            <p className="text-gray-300">
              Get customers through the door faster with Sort My Scene Scan, our
              robust and reliable ticket scanning app for iPhone and Android.
            </p>
          </div>
        </div>
      </div>
    </div>
</section>

      
    <div className="min-h-screen bg-gradient-to-b from-black to-[#262626] flex justify-center items-center p-8">
      <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto space-y-8 lg:space-y-0 lg:space-x-12  mb-20">
       
        <div className="relative w-full lg:w-1/2 flex justify-center">
          
          <img
            src="https://s3-alpha-sig.figma.com/img/e630/97f7/19bb7114cd240b7f6fee9604221e3772?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIJ2Y5QvpntUve2No1zm-MSLfT9g83aIjeP~6wU7PPuTvnPx0A8diusvLaY-MFEs1YRDpFDjs3YPL-8xgi2reMDGoM6J47Ju7jteHOUcQu06jzOD5kEya4-nHqModK55TuPYuJBNOoYZGgwAaH8BuKTmXTciKaLijeK2-qU1OGUUkk89MzSsugamESQ2axWaxWaZWxPwu3XMqNOd~VNPeftfzhCZyZsH-gyQA7PITC9vLq75kqIfs0pMdzksRCmfgdC4dnt~h~jHMyu8~TM3-KDft0zD9wtCd7rEtqyTCS1YOrFAmGBvQ1tczeJKQeLJXO3sZRIJAGQsK3L0pb6SrQ__" 
            alt="Mobile 1"
            className="w-3/4 max-w-xs absolute top-0 left-1 transform rotate-[-10deg] shadow-lg"
          />
         
          <img
            src="https://s3-alpha-sig.figma.com/img/bbbc/e0eb/d3f001e10ceb3569e69db8ac466d237a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D~vyI7XZEwao9Y~S1KDjEIrpkN-12dOsnb3vfr~JU-536S3NhQ2VTj3neoCMpdqwpKT-biv~7Tc2ANQPJ3Iv4UDAe9Sdw47sDa8EzUlr4D~O7k6VsjbrYRPUyHmT5Y7-h7Se2haSBvdPAMo6Cb0LxWkuWnkAUo6zsEY2Qxocv6rQnh~HnYtviE7XTtX~xybTDLyknr~MgdGhSkSjU0Wc2P8jvFZ-Q3SUeQJynd~flrBj8PztZVmuIm8~OPXQJLcH9SkderzGfkFImhEoxVMwE2~mZERWCHbNCgRhRTCGP4wrbs3-4acyYk3Dx9439Z9908jQeBvtI-730xxlgqChVw__"
            alt="Mobile 2"
            className="w-3/4 max-w-xs relative transform rotate-[12deg] shadow-lg"
          />
        </div>

        
        <div className="w-full lg:w-1/2 text-start lg:text-left">
          <h2 className="text-white text-4xl font-bold mb-4">DESIGNED WITH CARE.</h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            We care about your customers’ experience with your brand as much as
            you do. That’s why we craft and continually improve every aspect of
            our customer experience. So you can be confident your events and
            business are represented with the respect they deserve.
          </p>
          <button className="bg-[#f5167e] text-white font-semibold px-12 py-3 rounded-full shadow-lg hover:bg-[#f5167e] transition duration-300">
            List event
          </button>
        </div>
      </div>
    </div>

    </div>
  );
};


export default Second