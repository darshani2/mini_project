import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DonNavbar.css';

function DonNavbar() {
  const [click, setClick] = useState(false);
  
  const closeMobileMenu = () => setClick(false);

  const location = useLocation();
  const isSchoolPage = location.pathname === '/DonorPage'; 

  return (
    <>
      {isSchoolPage && (
        <nav className='donNavbar'>
          <Link to='/DonorPage' className='navbar_logo' onClick={closeMobileMenu}>
           Donor Page
            <i className='fab fa-firstdraft' />
          </Link>
          

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/DonorPage' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
            <Link to='/makedon' className='nav-links' onClick={closeMobileMenu}>
              Make Donation
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/donHis' className='nav-links' onClick={closeMobileMenu}>
              Donation History
            </Link>
          </li>
       
       <li className='nav-item'>
              <Link to='/logout' className='nav-links' onClick={closeMobileMenu}>
                Logout
              </Link>
            </li>
            </ul>
        </nav>
      )}
    </>
  );
}

export default DonNavbar;
