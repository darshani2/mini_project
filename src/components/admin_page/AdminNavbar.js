import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AdminNavbar.css';

function AdminNavbar() {
  const [click, setClick] = useState(false);
  
  const closeMobileMenu = () => setClick(false);

  const location = useLocation();
  const isSchoolPage = location.pathname === '/AdminPage'; // Update with the correct path

  return (
    <>
      {isSchoolPage && (
        <nav className='schNavbar'>
          <Link to='/AdminPage' className='navbar_logo' onClick={closeMobileMenu}>
            School Page
            <i className='fab fa-firstdraft' />
          </Link>
          

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/AdminPage' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
            <Link to='/donorDetails' className='nav-links' onClick={closeMobileMenu}>
              Donor Details
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/schoolDetails' className='nav-links' onClick={closeMobileMenu}>
              School Details
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/requests' className='nav-links' onClick={closeMobileMenu}>
              Requests
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/donations' className='nav-links' onClick={closeMobileMenu}>
              Donations
            </Link>
          </li>


          </ul>
        </nav>
      )}
    </>
  );
}

export default AdminNavbar;
