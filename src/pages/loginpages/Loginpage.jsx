// import React from 'react'
// import bg4 from '../../assets/bg4.png'

// const Loginpage = () => {
//   return (
//     <div>
//         <div  style={{ backgroundImage: `url(${bg4})` }}  className="min-h-[30rem] flex items-center justify-center bg-black bg-cover">
      
//       <div className="bg-[#262626] text-white rounded-3xl shadow-lg p-8 w-full max-w-md relative">
      
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-bold">
//             Welcome to Eventlane! <span role="img" aria-label="wave">👋</span>
//           </h1>
//           <p className="text-gray-400 text-sm">
//             Please sign-in to your account and start the adventure
//           </p>
//         </div>

        
//        <div className='flex'>
//        <div className="space-y-4">
          
//           <button className="w-full flex items-center justify-center py-3 px-2 bg-white text-[#f5167e] rounded-3xl transition">
//             <span className="mr-2">📱</span>
//             Continue with Phone number
//           </button>

          
//           <button className="w-full flex items-center justify-center py-3 border-2 border-white rounded-3xl hover:bg-gray-700 transition">
//             <span className="mr-2">✉️</span>
//             Continue with Email
//           </button>
//         </div>
//         <div className="absolute right-[-1rem] top-[4rem]  w-60 h-60">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/b47e/1798/5fca36537de9301fa3e4772f4a4ff4c6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e3sSiX~Aw4slPSIfgPc6N4k-CoeT6sHOqnJyaewiL1Dz3USoMyjFClcBJBoduYREK~MRIi4~He1TLfai~i-pYmEgcXJyaQm4YBZBtHAdPEVXc2CUbNuihqVdHt86ZrE9KFXsdLMDLOr-2KxsAwj6JD3doW55UuhvnJRJvAydEtZr4147042y0IzJJCMg87hwNZ7fvCcucnEPP34kDMxpg2p6WV0XoBBHuBJRG7ct-zjz5-aUEWEjNIs5EB2ke5bqFQeNVyI-SkzcTeN1uIPUxSmgfap~iieCcWxDgC5PDjkCTWvYD1ay6HEbOh-4CzxJKRe1Iubb5P4gQLqw3tVwIQ__" // Replace with your image path
//             alt="Illustration"
//             className="w-full h-full object-contain"
//           />
//           <img className='absolute top-[3.1rem] rounded-xl h-24 rotate-[-20deg] right-[6rem] ' src='https://s3-alpha-sig.figma.com/img/9388/9a92/5ec7b9d07a736bae362a7de416c4e108?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q8p2cy0nDpX3HnvMdUFDbkS7VJfkwF7s8ZlWVzaRIFuFheZN7Ckwqlt29SxeMD9mExs3ESJqSlJ39xpEi2eavhdF9BxRy~WXvUwmPKISNBOElrs~aeKGr-WuLXJXE~eZcOkR-SB13s5QA0wF8w7UedApHI~Oi0kmnQ9LaeP3jc0QaU1W59PFHIxXgpIZxV0gMhKbaXoF1dkDM2gYaQs9JLMRSlES3oXP8uVDeZlS-y9G86h-70oL5jJ8g~U~3zPTUwxFP6VTdXGG5Y38nDJqbJEaZmSnFvH-acnHsnv0~vzHbo8xuCqq6fmEHl0ikODOI0JiLSauZ7rCcsDWx8mHuw__'/>
//         </div>
//        </div>

    
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Loginpage










import React from 'react';
import bg4 from '../../assets/bg4.png';
import img1 from '../../assets/img1.png';

const Loginpage = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg4})` }}
        className="px-3 min-h-[30rem] flex items-center justify-center bg-black bg-cover"
      >
        <div className="bg-[#262626] text-white rounded-3xl shadow-lg p-8 w-full max-w-2xl relative">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">
              Welcome to Eventlane! <span role="img" aria-label="wave">👋</span>
            </h1>
            <p className="text-white text-sm">
              Please sign-in to your account and start the adventure
            </p>
          </div>

          <div className="flex justify-between gap-1 sm:gap-5 flex-row items-center">
            <div className="text-[10px] sm:text-xl space-y-4 w-3/5">
              <button className="  w-full h-full  flex items-center justify-center py-3 px-2 bg-white text-[#f5167e] rounded-3xl transition">
                <span className="mr-2">📱</span>
                Continue with Phone number
              </button>

              <button className="w-full flex items-center justify-center py-3 border-2 border-white rounded-3xl hover:bg-gray-700 transition">
                <span className="mr-2">✉️</span>
                Continue with Email
              </button>
            </div>
            <div className="w-2/5 h-60 mt-0 ">
              <img
                src={img1}
                alt="Illustration"
                className="w-full h-full object-contain"
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
