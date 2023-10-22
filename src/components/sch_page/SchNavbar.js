import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SchNavbar.css';

function SchNavbar() {
  const [click, setClick] = useState(false);
  
  const closeMobileMenu = () => setClick(false);

  const location = useLocation();
  const isSchoolPage = location.pathname === '/SchoolPage'; // Update with the correct path

  return (
    <>
      {isSchoolPage && (
        <nav className='schNavbar'>
          <Link to='/SchoolPage' className='navbar_logo' onClick={closeMobileMenu}>
            School Page
            <i className='fab fa-firstdraft' />
          </Link>
          

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/SchoolPage' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
            <Link to='/makeRequest' className='nav-links' onClick={closeMobileMenu}>
              Make Request
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/receivedDonations' className='nav-links' onClick={closeMobileMenu}>
              Received Donations
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

export default SchNavbar;
