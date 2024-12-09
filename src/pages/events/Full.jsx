import React from 'react'
import Firstpage from './Firstpage'
import Secondpage from './Secondpage'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Navbar1 from '../../components/common/Navbar1'

const Full = () => {
  return (
    <div>
      <Navbar1/>
        <Firstpage/>
        <Secondpage/>
        <Footer/>
    </div>
  )
}

export default Full