import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <ul>
   
    <Link to='Donations'>
      <button className='btn'>Donations</button>
    </Link>
   
    
    <Link to='Requests'>
    <button className='btn'>Requests</button>
  </Link>
 
  </ul>
  );
}
