import React from 'react'
import Firstpage from './Firstpage'
import Secondpage from './Secondpage'
import Footer from '../../components/common/Footer'
import Thirdpage from './Thirdpage'
import Searchbar from './Searchbar'

const Full = () => {
  return (
    <div className='overflow-hidden '>
        <Firstpage/>
        {/* <Searchbar className=''/> */}
        <Secondpage/>
        <Thirdpage/>
       
    </div>
  )
}

export default Full