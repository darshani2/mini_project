import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AdminLogin from './components/pages/AdminLogin';
import DonorLogin from './components/pages/DonorLogin';
import SchoolLogin from './components/pages/SchoolLogin';
import Admin from './components/pages/Admin';
import Donor from './components/pages/Donor';
import AboutUs from './components/pages/AboutUs';
import School from './components/pages/School';
import OurMission from './components/pages/OurMission';
import Gallery from './components/pages/Gallery';
import AdminPage from './components/pages/AdminPage';
import DonorPage from './components/pages/DonorPage';
import SchoolPage from './components/pages/SchoolPage';

//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AdminLogin' element={<AdminLogin/>} />
        <Route path='/DonorLogin' element={<DonorLogin/>} />
        <Route path='/SchoolLogin' element={<SchoolLogin/>} />
        <Route path='/AdminPage' element={<AdminPage/>} />
        <Route path='/DonorPage' element={<DonorPage/>} />
        <Route path='/SchoolPage' element={<SchoolPage/>} />
        <Route path='/Admin' element={<Admin/>} />
        <Route path='/Donor' element={<Donor/>} />
        <Route path='/School' element={<School/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/OurMission' element={<OurMission/>} />
        <Route path='/Gallery' element={<Gallery/>} />
        </Routes>
    </Router>
  );
}

export default App;
