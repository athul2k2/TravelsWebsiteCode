import React from 'react';
import Navbar from './components/Navbar';

import Footer from './components/Footer'

import { Routes, Route, Fragment } from 'react-router-dom'
import Home from './components/Home';
import Destination from './components/Destination';
import AboutUs from './components/AboutUs';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import McontactUs from './components/McontactUs';
import Trip1 from './components/Trip1';
import Trip2 from './components/Trip2';
import Trip3 from './components/Trip3'


function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route exact path="/aboutus" element={<><AboutUs /><WhyUs /></>} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contactus' element={<McontactUs />} />
        <Route path='/Trip1' element={<Trip1 />} />
        <Route path='/Trip2' element={<Trip2 />} />
        <Route path='/Trip3' element={<Trip3 />} />




      </Routes>
      <Footer />




    </div>

  );
}

export default App;
