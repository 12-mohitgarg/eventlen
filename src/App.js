import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Fullpage from './pages/home/Full';
import Fullbusiness from './pages/bussiness/Fullbusiness';
import Full from './pages/events/Full';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/common/Footer';
import Fulleventdetails from './pages/eventdetails/Fulleventdetails';
import Loginpage from './pages/loginpages/Loginpage';
import Phonelogin from './pages/loginpages/Phonelogin';
import Emaillogin from './pages/loginpages/Emaillogin';
import Register from './pages/loginpages/Register';
import Pagefirst from './pages/ticketdetails/Pagefirst';
import Secondpage from './pages/ticketdetails/Secondpage';
import Thirdpage from './pages/ticketdetails/Thirdpage';
import Fourthpage from './pages/ticketdetails/Fourthpage';
import Myevents from './pages/ticketdetails/Myevents';
import Myeventdetails from './pages/ticketdetails/Myeventdetails';

const App = () => {
  return (
    <Router>
      <div className=" overflow-x-hidden min-h-screen  flex flex-col font-inter">
       
        <Routes>
          <Route path="/" element={<Fullpage />} />
          <Route path="/event" element={<Full />} />
          <Route path="/business" element={<Fullbusiness />} />
          <Route path="/event-details" element={<Fulleventdetails />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/phone-login" element={<Phonelogin />} />
          <Route path="/email-login" element={<Emaillogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/page-first" element={<Pagefirst />} />
          <Route path="/page-second" element={<Secondpage />} />
          <Route path="/page-third" element={<Thirdpage />} />
          <Route path="/page-fourth" element={<Fourthpage />} />
          <Route path="/my-events" element={<Myevents />} />
          <Route path="/my-event-details" element={<Myeventdetails />} />
        </Routes>
       
      </div>
    </Router>
  );
};

export default App;





// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Navbar from './components/common/Navbar'
// import Fullpage from './pages/home/Full'
// import Fullbusiness from './pages/bussiness/Fullbusiness'
// import Full from './pages/events/Full'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './components/common/Footer'
// import Fulleventdetails from './pages/eventdetails/Fulleventdetails'
// import Loginpage from './pages/loginpages/Loginpage'
// import Phonelogin from './pages/loginpages/Phonelogin'
// import Emaillogin from './pages/loginpages/Emaillogin'
// import Register from './pages/loginpages/Register'
// import Pagefirst from './pages/ticketdetails/Pagefirst'
// import Secondpage from './pages/ticketdetails/Secondpage'
// import Thirdpage from './pages/ticketdetails/Thirdpage'
// import Fourthpage from './pages/ticketdetails/Fourthpage'
// import Myevents from './pages/ticketdetails/Myevents'
// import Myeventdetails from './pages/ticketdetails/Myeventdetails'


// const App = () => {
//   return (
//     <div className=" overflow-x-hidden min-h-screen  flex flex-col font-inter">
// {/* <Navbar className='overflow-x-hidden' /> */}
// <Fullpage/>
// {/* <Full/> */}
// {/* <Fullbusiness/> */}

// {/* <Fulleventdetails/> */}
// {/* <Loginpage/> */}
// {/* <Phonelogin/> */}
// {/* <Emaillogin/> */}
// {/* <Register/> */}
// {/* <Pagefirst/> */}
// {/* <Secondpage/> */}
// {/* <Thirdpage/> */}
// {/* <Fourthpage/> */}
// {/* <Myevents/> */}
// {/* <Myeventdetails/> */}

// {/* <Footer className='overflow-x-hidden'/> */}
//     </div>
//   )
// }

// export default App