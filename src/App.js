import React from 'react'
import Navbar from './components/common/Navbar'
import Fullpage from './pages/home/Full'
import Fullbusiness from './pages/bussiness/Fullbusiness'
import Full from './pages/events/Full'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/common/Footer'
import Fulleventdetails from './pages/eventdetails/Fulleventdetails'
import Loginpage from './pages/loginpages/Loginpage'
import Phonelogin from './pages/loginpages/Phonelogin'
import Emaillogin from './pages/loginpages/Emaillogin'
import Register from './pages/loginpages/Register'
import Pagefirst from './pages/ticketdetails/Pagefirst'
import Secondpage from './pages/ticketdetails/Secondpage'
import Thirdpage from './pages/ticketdetails/Thirdpage'
import Fourthpage from './pages/ticketdetails/Fourthpage'
import Myevents from './pages/ticketdetails/Myevents'
import Myeventdetails from './pages/ticketdetails/Myeventdetails'


const App = () => {
  return (
    <div className=" overflow-x-hidden min-h-screen  flex flex-col font-inter">
<Navbar className='overflow-x-hidden' />
{/* <Fullpage/> */}
{/* <Full/> */}
{/* <Fullbusiness/> */}

<Fulleventdetails/>
{/* <Loginpage/> */}
{/* <Phonelogin/> */}
{/* <Emaillogin/> */}
{/* <Register/> */}
{/* <Pagefirst/> */}
{/* <Secondpage/> */}
{/* <Thirdpage/> */}
{/* <Fourthpage/> */}
{/* <Myevents/> */}
{/* <Myeventdetails/> */}

<Footer className='overflow-x-hidden'/>
    </div>
  )
}

export default App