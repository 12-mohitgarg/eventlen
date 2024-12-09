import React from 'react'
import Firstpage from './Firstpage'
import Secondpage from './Secondpage'
import Footer from '../../components/common/Footer'
import Thirdpage from './Thirdpage'
import Navbar from '../../components/common/Navbar'



const Full = () => {
  return (
    <div className='overflow-hidden '>
      <Navbar/>
        <Firstpage/>
       
        <Secondpage/>
        <Thirdpage/>
      <Footer/>
       
    </div>
  )
}

export default Full