import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from 'axios';
import Navbar from './Navbar';
import '../../App.css'


function Signup() {
  const [values, setValues] = useState({ 
    name: '',
    email : '',
    password: ''
})
const navigate = useNavigate();
const [errors,setErrors] = useState({})
const handleInput = (event) =>{
    setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
}

const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.name === "" && errors.email === "" && errors.password === ""){
      axios.post('http://localhost:8081/gift4kids/signup', values)
      .then(res =>{
        navigate('/');
      } )
       .catch(err => console.log(err));

    }
}
  return (
<>
<Navbar/>
    <div className='signupPage'>
        <div className='border'>
        <h2>Sign-Up</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label htmlFor='name'><strong>Name</strong></label>
            <input type='text' placeholder='Enter Name' name="name" 
            onChange = {handleInput} className='form-control rounded-0'/>
            {errors.name && <span className='text-danger'>{errors.name}</span>}
        </div>
        <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' placeholder='Enter Email' name="email" 
            onChange = {handleInput} className='form-control rounded-0'/>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
        </div>
        <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' placeholder='Enter Password' name="password" 
            onChange = {handleInput} className='form-control rounded-0'/>
            {errors.password && <span className='text-danger'>{errors.password}</span>}
        </div>
        
        <button type="submit" className='btn'>Sign Up</button>
        
        <div className='phg'>
        <p>Already have an account ? </p>
        </div>
        <Link to="/donNavbar" className='btn btn--block'>Login</Link>
        

      </form>
    </div>
    </div>

    </>
  )
}

export default Signup

